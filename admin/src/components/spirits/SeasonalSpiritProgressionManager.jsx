import { useRef, useState } from "react";
import {
  removeAdminSeasonalSpiritCollectibleImage,
  updateAdminSeasonalSpiritCollectibles,
  updateAdminSeasonalSpiritTreeCosts,
  uploadAdminSeasonalSpiritCollectibleImage,
} from "../../services/adminSeasonalSpirit.service.js";

const CURRENCY_OPTIONS = [
  { value: "CANDLES", label: "Candles" },
  { value: "HEARTS", label: "Hearts" },
  { value: "SEASON_CANDLES", label: "Season Candles" },
  { value: "FREE", label: "Free" },
];

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

function getErrorMessage(error) {
  return (
    error?.response?.data?.message ||
    error?.message ||
    "Unable to complete this action."
  );
}

function withLocalKeys(items, prefix) {
  return (items ?? []).map((item, index) => ({
    ...item,
    _rowKey: item.id ? `${prefix}-${item.id}` : `${prefix}-loaded-${index}`,
  }));
}

function validateDisplayOrders(items, label) {
  const orders = items.map((item) => Number(item.displayOrder));

  if (orders.some((order) => !Number.isInteger(order) || order < 1)) {
    throw new Error(`${label} display order must contain positive whole numbers.`);
  }

  if (new Set(orders).size !== orders.length) {
    throw new Error(`${label} display order values must be unique.`);
  }
}

function SectionHeader({ title, description, dirty }) {
  return (
    <div className="border-b border-gray-100 pb-4">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{description}</p>
      {dirty && (
        <p className="mt-2 text-xs font-medium text-amber-700">
          You have unsaved changes.
        </p>
      )}
    </div>
  );
}

function MoveButtons({ index, total, onMove }) {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => onMove(index, -1)}
        disabled={index === 0}
        aria-label="Move up"
        title="Move up"
        className="rounded border border-gray-200 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 disabled:opacity-30"
      >
        ↑
      </button>
      <button
        type="button"
        onClick={() => onMove(index, 1)}
        disabled={index === total - 1}
        aria-label="Move down"
        title="Move down"
        className="rounded border border-gray-200 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 disabled:opacity-30"
      >
        ↓
      </button>
    </div>
  );
}

export default function SeasonalSpiritProgressionManager({ spirit }) {
  const spiritId = spirit?.id;
  const nextKey = useRef(0);

  const [collectibles, setCollectibles] = useState(() =>
    withLocalKeys(spirit?.collectibles, "collectible")
  );
  const [treeCosts, setTreeCosts] = useState(() =>
    withLocalKeys(spirit?.treeCosts, "tree-cost")
  );

  const [collectiblesDirty, setCollectiblesDirty] = useState(false);
  const [treeCostsDirty, setTreeCostsDirty] = useState(false);
  const [savingCollectibles, setSavingCollectibles] = useState(false);
  const [savingTreeCosts, setSavingTreeCosts] = useState(false);
  const [busyImageId, setBusyImageId] = useState(null);
  const [collectiblesError, setCollectiblesError] = useState("");
  const [treeCostsError, setTreeCostsError] = useState("");
  const [collectiblesNotice, setCollectiblesNotice] = useState("");
  const [treeCostsNotice, setTreeCostsNotice] = useState("");

  function newRowKey(prefix) {
    nextKey.current += 1;
    return `${prefix}-new-${nextKey.current}`;
  }

  function addCollectible() {
    const rowKey = newRowKey("collectible");
    setCollectibles((current) => [
      ...current,
      {
        _rowKey: rowKey,
        label: "",
        image: null,
        currency: "SEASON_CANDLES",
        price: 0,
        displayOrder: current.length + 1,
      },
    ]);
    setCollectiblesDirty(true);
    setCollectiblesError("");
    setCollectiblesNotice("");
  }

  function updateCollectible(rowKey, field, value) {
    setCollectibles((current) =>
      current.map((item) =>
        item._rowKey === rowKey ? { ...item, [field]: value } : item
      )
    );
    setCollectiblesDirty(true);
    setCollectiblesError("");
    setCollectiblesNotice("");
  }

  function removeCollectible(rowKey) {
    const target = collectibles.find((item) => item._rowKey === rowKey);
    const confirmed = window.confirm(
      target?.label
        ? `Remove "${target.label}" from this Seasonal Spirit? This takes effect when you save the collectibles list.`
        : "Remove this collectible? This takes effect when you save the collectibles list."
    );
    if (!confirmed) return;

    setCollectibles((current) =>
      current
        .filter((item) => item._rowKey !== rowKey)
        .map((item, index) => ({ ...item, displayOrder: index + 1 }))
    );
    setCollectiblesDirty(true);
    setCollectiblesError("");
    setCollectiblesNotice("");
  }

  function moveCollectible(index, direction) {
    setCollectibles((current) => {
      const next = [...current];
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= next.length) return current;
      [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
      return next.map((item, itemIndex) => ({
        ...item,
        displayOrder: itemIndex + 1,
      }));
    });
    setCollectiblesDirty(true);
    setCollectiblesNotice("");
  }

  async function saveCollectibles() {
    if (!spiritId) return;

    try {
      setSavingCollectibles(true);
      setCollectiblesError("");
      setCollectiblesNotice("");

      const payload = collectibles.map((item) => {
        const label = String(item.label ?? "").trim();
        if (!label) {
          throw new Error("Every collectible must have a label.");
        }
        if (label.length > 200) {
          throw new Error("Collectible labels cannot exceed 200 characters.");
        }

        const price = Number(item.price);
        if (!Number.isInteger(price) || price < 0) {
          throw new Error(`Enter a valid non-negative whole-number price for "${label}".`);
        }

        if (!CURRENCY_OPTIONS.some((option) => option.value === item.currency)) {
          throw new Error(`Select a valid currency for "${label}".`);
        }

        return {
          ...(item.id ? { id: item.id } : {}),
          label,
          currency: item.currency,
          price,
          displayOrder: Number(item.displayOrder),
        };
      });

      validateDisplayOrders(payload, "Collectible");

      const response = await updateAdminSeasonalSpiritCollectibles(
        spiritId,
        payload
      );
      const updated = response?.data;
      if (!Array.isArray(updated?.collectibles)) {
        throw new Error("The collectibles were saved, but the updated list was not returned.");
      }

      setCollectibles(withLocalKeys(updated.collectibles, "collectible"));
      setCollectiblesDirty(false);
      setCollectiblesNotice("Collectibles saved successfully.");
    } catch (error) {
      setCollectiblesError(getErrorMessage(error));
    } finally {
      setSavingCollectibles(false);
    }
  }

  async function uploadCollectibleImage(collectible, file) {
    if (!file) return;
    if (!collectible.id) {
      setCollectiblesError("Save the collectibles list before uploading an image for a new entry.");
      return;
    }
    if (collectiblesDirty) {
      setCollectiblesError("Save your collectible changes before uploading or removing an image.");
      return;
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setCollectiblesError("Choose a JPEG, PNG, WebP, or GIF image.");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setCollectiblesError("The image must be 5 MB or smaller.");
      return;
    }

    try {
      setBusyImageId(collectible.id);
      setCollectiblesError("");
      setCollectiblesNotice("");

      const response = await uploadAdminSeasonalSpiritCollectibleImage(
        spiritId,
        collectible.id,
        file
      );
      const updated = response?.data;
      if (!Array.isArray(updated?.collectibles)) {
        throw new Error("The image was uploaded, but the updated collectible list was not returned.");
      }

      setCollectibles(withLocalKeys(updated.collectibles, "collectible"));
      setCollectiblesNotice(`Image uploaded for "${collectible.label}".`);
    } catch (error) {
      setCollectiblesError(getErrorMessage(error));
    } finally {
      setBusyImageId(null);
    }
  }

  async function removeCollectibleImage(collectible) {
    const confirmed = window.confirm(
      `Remove the image for "${collectible.label}"?`
    );
    if (!confirmed) return;

    try {
      setBusyImageId(collectible.id);
      setCollectiblesError("");
      setCollectiblesNotice("");

      const response = await removeAdminSeasonalSpiritCollectibleImage(
        spiritId,
        collectible.id
      );
      const updated = response?.data;
      if (!Array.isArray(updated?.collectibles)) {
        throw new Error("The image was removed, but the updated collectible list was not returned.");
      }

      setCollectibles(withLocalKeys(updated.collectibles, "collectible"));
      setCollectiblesNotice(`Image removed for "${collectible.label}".`);
    } catch (error) {
      setCollectiblesError(getErrorMessage(error));
    } finally {
      setBusyImageId(null);
    }
  }

  function addTreeCost() {
    const rowKey = newRowKey("tree-cost");
    setTreeCosts((current) => [
      ...current,
      {
        _rowKey: rowKey,
        candles: 0,
        hearts: 0,
        ascendedCandles: 0,
        displayOrder: current.length + 1,
      },
    ]);
    setTreeCostsDirty(true);
    setTreeCostsError("");
    setTreeCostsNotice("");
  }

  function updateTreeCost(rowKey, field, value) {
    setTreeCosts((current) =>
      current.map((item) =>
        item._rowKey === rowKey ? { ...item, [field]: value } : item
      )
    );
    setTreeCostsDirty(true);
    setTreeCostsError("");
    setTreeCostsNotice("");
  }

  function removeTreeCost(rowKey) {
    const confirmed = window.confirm(
      "Remove this Spirit Tree reward? This takes effect when you save the tree costs."
    );
    if (!confirmed) return;

    setTreeCosts((current) =>
      current
        .filter((item) => item._rowKey !== rowKey)
        .map((item, index) => ({ ...item, displayOrder: index + 1 }))
    );
    setTreeCostsDirty(true);
    setTreeCostsError("");
    setTreeCostsNotice("");
  }

  function moveTreeCost(index, direction) {
    setTreeCosts((current) => {
      const next = [...current];
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= next.length) return current;
      [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
      return next.map((item, itemIndex) => ({
        ...item,
        displayOrder: itemIndex + 1,
      }));
    });
    setTreeCostsDirty(true);
    setTreeCostsNotice("");
  }

  async function saveTreeCosts() {
    if (!spiritId) return;

    try {
      setSavingTreeCosts(true);
      setTreeCostsError("");
      setTreeCostsNotice("");

      const payload = treeCosts.map((item) => {
        const candles = Number(item.candles);
        const hearts = Number(item.hearts);
        const ascendedCandles = Number(item.ascendedCandles);

        for (const [field, value] of Object.entries({
          candles,
          hearts,
          ascendedCandles,
        })) {
          if (!Number.isInteger(value) || value < 0) {
            throw new Error(`${field} must be a non-negative whole number.`);
          }
        }

        return {
          ...(item.id ? { id: item.id } : {}),
          candles,
          hearts,
          ascendedCandles,
          displayOrder: Number(item.displayOrder),
        };
      });

      validateDisplayOrders(payload, "Spirit Tree reward");

      const response = await updateAdminSeasonalSpiritTreeCosts(
        spiritId,
        payload
      );
      const updated = response?.data;
      if (!Array.isArray(updated?.treeCosts)) {
        throw new Error("The Spirit Tree costs were saved, but the updated list was not returned.");
      }

      setTreeCosts(withLocalKeys(updated.treeCosts, "tree-cost"));
      setTreeCostsDirty(false);
      setTreeCostsNotice("Spirit Tree costs saved successfully.");
    } catch (error) {
      setTreeCostsError(getErrorMessage(error));
    } finally {
      setSavingTreeCosts(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="space-y-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <SectionHeader
          title="Collectibles"
          description="Manage the cosmetics and rewards offered by this Seasonal Spirit. Save the complete list; entries omitted from the saved list are deleted."
          dirty={collectiblesDirty}
        />

        {collectiblesError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {collectiblesError}
          </div>
        )}
        {collectiblesNotice && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
            {collectiblesNotice}
          </div>
        )}

        {collectibles.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
            <p className="text-sm font-medium text-gray-700">No collectibles added yet</p>
            <p className="mt-1 text-xs text-gray-500">Add the first reward to this Seasonal Spirit.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {collectibles.map((item, index) => (
              <article
                key={item._rowKey}
                className="rounded-lg border border-gray-200 p-4"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {item.label?.trim() || `Collectible ${index + 1}`}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {item.id ? `Record #${item.id}` : "Not saved yet"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MoveButtons
                      index={index}
                      total={collectibles.length}
                      onMove={moveCollectible}
                    />
                    <button
                      type="button"
                      onClick={() => removeCollectible(item._rowKey)}
                      className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <label className="block xl:col-span-2">
                    <span className="mb-1.5 block text-xs font-semibold text-gray-600">Collectible Name</span>
                    <input
                      value={item.label ?? ""}
                      maxLength={200}
                      onChange={(event) => updateCollectible(item._rowKey, "label", event.target.value)}
                      placeholder="e.g. Journeying Warrior's Cape"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-gray-600">Currency</span>
                    <select
                      value={item.currency ?? "SEASON_CANDLES"}
                      onChange={(event) => updateCollectible(item._rowKey, "currency", event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    >
                      {CURRENCY_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-gray-600">Price</span>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={item.price ?? 0}
                      onChange={(event) => updateCollectible(item._rowKey, "price", event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-gray-600">Display Order</span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={item.displayOrder ?? index + 1}
                      onChange={(event) => updateCollectible(item._rowKey, "displayOrder", event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </label>
                </div>

                <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.label || "Collectible"} preview`}
                      className="h-20 w-20 rounded-lg border border-gray-200 bg-gray-50 object-contain p-1"
                    />
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 text-center text-[10px] text-gray-400">
                      No image
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-800">Collectible Image</p>
                    <p className="mt-1 text-xs text-gray-500">
                      JPEG, PNG, WebP, or GIF · Maximum 5 MB
                    </p>
                    {!item.id && (
                      <p className="mt-1 text-xs text-amber-700">Save this collectible before uploading its image.</p>
                    )}
                    {collectiblesDirty && item.id && (
                      <p className="mt-1 text-xs text-amber-700">Save list changes before managing images.</p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <label className={`cursor-pointer rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 ${(!item.id || collectiblesDirty || busyImageId === item.id) ? "pointer-events-none opacity-40" : ""}`}>
                      {busyImageId === item.id ? "Uploading..." : item.image ? "Replace Image" : "Upload Image"}
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        disabled={!item.id || collectiblesDirty || busyImageId !== null}
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          event.target.value = "";
                          uploadCollectibleImage(item, file);
                        }}
                        className="sr-only"
                      />
                    </label>
                    {item.image && (
                      <button
                        type="button"
                        onClick={() => removeCollectibleImage(item)}
                        disabled={collectiblesDirty || busyImageId !== null}
                        className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Remove Image
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={addCollectible}
            disabled={collectibles.length >= 100 || savingCollectibles}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40"
          >
            + Add Collectible
          </button>
          <button
            type="button"
            onClick={saveCollectibles}
            disabled={!collectiblesDirty || savingCollectibles}
            className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {savingCollectibles ? "Saving..." : "Save Collectibles"}
          </button>
        </div>
      </section>

      <section className="space-y-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <SectionHeader
          title="Spirit Tree Rewards"
          description="Record each unlock node and the currency cost required to reach it. The list is saved in display order."
          dirty={treeCostsDirty}
        />

        {treeCostsError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {treeCostsError}
          </div>
        )}
        {treeCostsNotice && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
            {treeCostsNotice}
          </div>
        )}

        {treeCosts.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
            <p className="text-sm font-medium text-gray-700">No Spirit Tree rewards added yet</p>
            <p className="mt-1 text-xs text-gray-500">Add the first node to map this spirit's unlock path.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {treeCosts.map((item, index) => (
              <article
                key={item._rowKey}
                className="rounded-lg border border-gray-200 p-4"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">Tree Node {index + 1}</h3>
                      <p className="text-xs text-gray-500">
                        {item.id ? `Record #${item.id}` : "Not saved yet"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MoveButtons
                      index={index}
                      total={treeCosts.length}
                      onMove={moveTreeCost}
                    />
                    <button
                      type="button"
                      onClick={() => removeTreeCost(item._rowKey)}
                      className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-gray-600">Candles</span>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={item.candles ?? 0}
                      onChange={(event) => updateTreeCost(item._rowKey, "candles", event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-gray-600">Hearts</span>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={item.hearts ?? 0}
                      onChange={(event) => updateTreeCost(item._rowKey, "hearts", event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-gray-600">Ascended Candles</span>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={item.ascendedCandles ?? 0}
                      onChange={(event) => updateTreeCost(item._rowKey, "ascendedCandles", event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-gray-600">Display Order</span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={item.displayOrder ?? index + 1}
                      onChange={(event) => updateTreeCost(item._rowKey, "displayOrder", event.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </label>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={addTreeCost}
            disabled={treeCosts.length >= 100 || savingTreeCosts}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40"
          >
            + Add Tree Node
          </button>
          <button
            type="button"
            onClick={saveTreeCosts}
            disabled={!treeCostsDirty || savingTreeCosts}
            className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {savingTreeCosts ? "Saving..." : "Save Spirit Tree"}
          </button>
        </div>
      </section>
    </div>
  );
}
