import {
  useEffect,
  useState,
} from "react";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowUpTrayIcon,
  PhotoIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const CURRENCY_OPTIONS = [
  "CANDLES",
  "HEARTS",
  "SEASON_CANDLES",
  "FREE",
];

function formatEnum(value) {
  return value
    .toLowerCase()
    .split("_")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to save Collectibles."
  );
}

function normalizeRows(
  collectibles
) {
  return (
    Array.isArray(collectibles)
      ? collectibles
      : []
  ).map(
    (item, index) => ({
      id:
        item.id ??
        null,

      label:
        item.label ??
        "",
      image:
        item.image ??
        "",
      currency:
        item.currency ??
        "CANDLES",

      price:
        item.price ??
        0,

      displayOrder:
        index + 1,
    })
  );
}

export default function SpiritCollectiblesEditor({
  collectibles,
  onSave,
  onImageUpload,
  onImageRemove,
}) {
  const [rows, setRows] =
    useState([]);

  const [saving, setSaving] =
    useState(false);

  const [error, setError] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [
    imageBusyId,
    setImageBusyId,
  ] = useState(null);

  useEffect(() => {
    setRows(
      normalizeRows(
        collectibles
      )
    );
  }, [collectibles]);

  function updateRow(
    index,
    field,
    value
  ) {
    setRows(
      (currentRows) =>
        currentRows.map(
          (row, rowIndex) =>
            rowIndex === index
              ? {
                  ...row,
                  [field]:
                    value,
                }
              : row
        )
    );

    setError("");
    setMessage("");
  }

  function addRow() {
    setRows(
      (currentRows) => [
        ...currentRows,

        {
          id: null,
          label: "",
          currency:
            "CANDLES",
          price: 0,
          displayOrder:
            currentRows.length +
            1,
        },
      ]
    );

    setError("");
    setMessage("");
  }

  function removeRow(
    index
  ) {
    setRows(
      (currentRows) =>
        currentRows
          .filter(
            (
              _,
              rowIndex
            ) =>
              rowIndex !==
              index
          )
          .map(
            (row, rowIndex) => ({
              ...row,
              displayOrder:
                rowIndex + 1,
            })
          )
    );

    setError("");
    setMessage("");
  }

  function moveRow(
    index,
    direction
  ) {
    setRows(
      (currentRows) => {
        const targetIndex =
          index + direction;

        if (
          targetIndex < 0 ||
          targetIndex >=
            currentRows.length
        ) {
          return currentRows;
        }

        const nextRows = [
          ...currentRows,
        ];

        [
          nextRows[index],
          nextRows[
            targetIndex
          ],
        ] = [
          nextRows[
            targetIndex
          ],
          nextRows[index],
        ];

        return nextRows.map(
          (row, rowIndex) => ({
            ...row,
            displayOrder:
              rowIndex + 1,
          })
        );
      }
    );
  }

  async function handleImageChange(
  row,
  file
) {
  if (!row.id) {
    setError(
      "Save the Collectible first before uploading its image."
    );

    return;
  }

  if (!file) {
    return;
  }

  if (
    file.size >
    5 * 1024 * 1024
  ) {
    setError(
      "Image must be 5 MB or smaller."
    );

    return;
  }

  try {
    setImageBusyId(
      row.id
    );

    setError("");
    setMessage("");

    await onImageUpload(
      row.id,
      file
    );

    setMessage(
      `${row.label} image saved successfully.`
    );
  } catch (requestError) {
    setError(
      getErrorMessage(
        requestError
      )
    );
  } finally {
    setImageBusyId(
      null
    );
  }
}

async function handleImageRemove(
    row
  ) {
    if (!row.id) {
      return;
    }

    const confirmed =
      window.confirm(
        `Remove the image for ${row.label}?`
      );

    if (!confirmed) {
      return;
    }

    try {
      setImageBusyId(
        row.id
      );

      setError("");
      setMessage("");

      await onImageRemove(
        row.id
      );

      setMessage(
        `${row.label} image removed successfully.`
      );
    } catch (requestError) {
      setError(
        getErrorMessage(
          requestError
        )
      );
    } finally {
      setImageBusyId(
        null
      );
    }
  }

  async function handleSave() {
    try {
      setSaving(true);
      setError("");
      setMessage("");

      const payload =
        rows.map(
          (
            row,
            index
          ) => ({
            ...(row.id
              ? {
                  id:
                    row.id,
                }
              : {}),

            label:
              row.label.trim(),

            currency:
              row.currency,

            price:
              Number(
                row.price
              ),

            displayOrder:
              index + 1,
          })
        );

      if (
        payload.some(
          (item) =>
            !item.label
        )
      ) {
        throw new Error(
          "Each Collectible must have a label."
        );
      }

      const updatedSpirit =
        await onSave(
          payload
        );

      setRows(
        normalizeRows(
          updatedSpirit
            ?.collectibles
        )
      );

      setMessage(
        "Collectibles saved successfully."
      );
    } catch (requestError) {
      setError(
        getErrorMessage(
          requestError
        )
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Collectibles
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            Manage the items available
            from this Spirit.
          </p>
        </div>

        <button
          type="button"
          onClick={addRow}
          className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-100"
        >
          <PlusIcon className="h-4 w-4" />
          Add Collectible
        </button>
      </div>

      {rows.length > 0 ? (
        <div className="grid gap-3 xl:grid-cols-2">
          {rows.map(
            (
              row,
              index
            ) => (
              <article
                key={
                  row.id ??
                  `new-${index}`
                }
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    Item{" "}
                    {index + 1}
                  </span>

                  <div className="flex gap-1">
                    <button
                      type="button"
                      disabled={
                        index ===
                        0
                      }
                      onClick={() =>
                        moveRow(
                          index,
                          -1
                        )
                      }
                      className="cursor-pointer rounded-md border border-gray-200 p-1.5 text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <ArrowUpIcon className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      disabled={
                        index ===
                        rows.length -
                          1
                      }
                      onClick={() =>
                        moveRow(
                          index,
                          1
                        )
                      }
                      className="cursor-pointer rounded-md border border-gray-200 p-1.5 text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <ArrowDownIcon className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        removeRow(
                          index
                        )
                      }
                      className="cursor-pointer rounded-md border border-red-200 bg-red-50 p-1.5 text-red-700 hover:bg-red-100"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="mb-3 flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-2">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white">
                    {row.image ? (
                      <img
                        src={row.image}
                        alt={row.label}
                        className="h-full w-full object-contain p-1"
                      />
                    ) : (
                      <PhotoIcon className="h-7 w-7 text-gray-300" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-gray-700">
                      Collectible Image
                    </p>

                    <p className="mt-0.5 text-xs text-gray-500">
                      JPEG, PNG, WebP or GIF.
                      Maximum 5 MB.
                    </p>

                    {row.id ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <label
                          className={`
                            inline-flex
                            cursor-pointer
                            items-center
                            gap-1.5
                            rounded-md
                            bg-sky-600
                            px-2.5
                            py-1.5
                            text-xs
                            font-semibold
                            text-white
                            hover:bg-sky-700

                            ${
                              imageBusyId ===
                              row.id
                                ? "pointer-events-none opacity-50"
                                : ""
                            }
                          `}
                        >
                          <ArrowUpTrayIcon className="h-4 w-4" />

                          {imageBusyId ===
                          row.id
                            ? "Uploading..."
                            : row.image
                              ? "Replace"
                              : "Upload"}

                          <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp,image/gif"
                            className="hidden"
                            disabled={
                              imageBusyId ===
                              row.id
                            }
                            onChange={(
                              event
                            ) => {
                              const file =
                                event.target
                                  .files?.[0];

                              handleImageChange(
                                row,
                                file
                              );

                              event.target.value =
                                "";
                            }}
                          />
                        </label>

                        {row.image && (
                          <button
                            type="button"
                            disabled={
                              imageBusyId ===
                              row.id
                            }
                            onClick={() =>
                              handleImageRemove(
                                row
                              )
                            }
                            className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <TrashIcon className="h-4 w-4" />

                            Remove
                          </button>
                        )}
                      </div>
                    ) : (
                      <p className="mt-2 text-xs font-medium text-amber-700">
                        Save this Collectible
                        first before uploading
                        an image.
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <label className="mb-1 block text-xs font-semibold text-gray-600">
                      Label
                    </label>

                    <input
                      type="text"
                      value={
                        row.label
                      }
                      onChange={(
                        event
                      ) =>
                        updateRow(
                          index,
                          "label",
                          event.target
                            .value
                        )
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-600">
                      Currency
                    </label>

                    <select
                      value={
                        row.currency
                      }
                      onChange={(
                        event
                      ) =>
                        updateRow(
                          index,
                          "currency",
                          event.target
                            .value
                        )
                      }
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
                    >
                      {CURRENCY_OPTIONS.map(
                        (
                          option
                        ) => (
                          <option
                            key={
                              option
                            }
                            value={
                              option
                            }
                          >
                            {formatEnum(
                              option
                            )}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-600">
                      Price
                    </label>

                    <input
                      type="number"
                      min="0"
                      value={
                        row.price
                      }
                      onChange={(
                        event
                      ) =>
                        updateRow(
                          index,
                          "price",
                          event.target
                            .value
                        )
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-600">
                      Order
                    </label>

                    <input
                      type="text"
                      value={
                        index + 1
                      }
                      readOnly
                      className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-500"
                    />
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500">
          No Collectibles added yet.
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {message && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {message}
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          disabled={saving}
          onClick={
            handleSave
          }
          className="cursor-pointer rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : "Save Collectibles"}
        </button>
      </div>
    </section>
  );
}