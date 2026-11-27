import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../components/layout/AdminLayout.jsx";
import {
  createAdminSeasonalSpirit,
  getAdminSeasonalSpirit,
  updateAdminSeasonalSpirit,
  uploadAdminSeasonalSpiritMedia,
  removeAdminSeasonalSpiritMedia,
} from "../../services/adminSeasonalSpirit.service.js";
import SpiritMediaManager from "../../components/spirits/SpiritMediaManager.jsx";
import SeasonalSpiritProgressionManager from "../../components/spirits/SeasonalSpiritProgressionManager.jsx";
import { getAdminSeason } from "../../services/adminSeason.service.js";

const CATEGORY_OPTIONS = [
  "EMOTE",
  "STANCE",
  "CALL",
  "SOUND_CALL",
  "FRIENDSHIP_ACTION",
  "ITEM",
  "NON_ENTITY",
  "SPIRIT",
];

const RELIVE_TYPE_OPTIONS = [
  "FOLLOW_MEMORY",
  "CARRY_MEMORY",
  "COLLECT_MEMORY",
  "QUEST_MEMORY",
  "TASK",
  "NONE",
];

const EMPTY_FORM = {
  code: "",
  mapId: "",
  name: "",
  category: "EMOTE",
  reliveType: "FOLLOW_MEMORY",
  difficultyLevel: 0,
  difficultyTypes: "",
  guideVideoUrl: "",
  directions: [""],
  displayOrder: 1,
  published: true,
};

function getErrorMessage(error) {
  return (
    error?.response?.data?.message ||
    error?.message ||
    "Unable to save the Seasonal Spirit."
  );
}

function toFormData(spirit) {
  return {
    code: spirit?.code ?? "",
    mapId: spirit?.mapId ?? "",
    name: spirit?.name ?? "",
    category: spirit?.category ?? "EMOTE",
    reliveType: spirit?.reliveType ?? "FOLLOW_MEMORY",
    difficultyLevel: spirit?.difficultyLevel ?? 0,
    difficultyTypes: (spirit?.difficultyTypes ?? []).join(", "),
    guideVideoUrl: spirit?.guideVideoUrl ?? "",
    directions: spirit?.directions?.length ? [...spirit.directions] : [""],
    displayOrder: spirit?.displayOrder ?? 1,
    published: spirit?.published ?? true,
  };
}

function SeasonalSpiritForm({ initialData, isCreate, saving, onSubmit }) {
  const [form, setForm] = useState(() => toFormData(initialData));
  const [formError, setFormError] = useState("");

  useEffect(() => {
    setForm(toFormData(initialData));
  }, [initialData]);

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function updateDirection(index, value) {
    setForm((current) => ({
      ...current,
      directions: current.directions.map((item, itemIndex) =>
        itemIndex === index ? value : item,
      ),
    }));
  }

  function addDirection() {
    setForm((current) => ({
      ...current,
      directions: [...current.directions, ""],
    }));
  }

  function removeDirection(index) {
    setForm((current) => ({
      ...current,
      directions: current.directions.filter(
        (_, itemIndex) => itemIndex !== index,
      ),
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormError("");

    const directions = form.directions
      .map((direction) => direction.trim())
      .filter(Boolean);

    const difficultyTypes = form.difficultyTypes
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean)
      .map(Number);

    if (difficultyTypes.some((value) => !Number.isInteger(value))) {
      setFormError("Difficulty Types must be comma-separated whole numbers.");
      return;
    }

    const payload = {
      ...(isCreate ? { code: form.code.trim() } : {}),
      mapId: form.mapId === "" ? null : Number(form.mapId),
      name: form.name.trim(),
      category: form.category,
      reliveType: form.reliveType,
      difficultyLevel: Number(form.difficultyLevel),
      difficultyTypes,
      guideVideoUrl: form.guideVideoUrl.trim() || null,
      directions,
      displayOrder: Number(form.displayOrder),
      published: form.published,
    };

    try {
      await onSubmit(payload);
    } catch (error) {
      setFormError(getErrorMessage(error));
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-lg font-bold text-gray-900">
          {isCreate ? "Seasonal Spirit Information" : "Edit Spirit Information"}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Configure the spirit details, relive method, difficulty, and guide
          directions.
        </p>
      </div>

      {formError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {formError}
        </div>
      )}

      {isCreate && (
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Spirit Code
          </label>
          <input
            name="code"
            value={form.code}
            onChange={updateField}
            placeholder="season-example-spirit"
            pattern="[a-z0-9-]+"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
          <p className="mt-1 text-xs text-gray-500">
            Use lowercase letters, numbers, and hyphens. This code cannot be
            changed after creation.
          </p>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Spirit Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            required
            maxLength={200}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Optional Map ID
          </label>
          <input
            name="mapId"
            type="number"
            min="1"
            value={form.mapId}
            onChange={updateField}
            placeholder="Leave empty if not linked to a map"
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={updateField}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          >
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Relive Type
          </label>
          <select
            name="reliveType"
            value={form.reliveType}
            onChange={updateField}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          >
            {RELIVE_TYPE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Difficulty Level (0–100)
          </label>
          <input
            name="difficultyLevel"
            type="number"
            min="0"
            max="100"
            value={form.difficultyLevel}
            onChange={updateField}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Display Order
          </label>
          <input
            name="displayOrder"
            type="number"
            min="1"
            value={form.displayOrder}
            onChange={updateField}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Difficulty Types
        </label>
        <input
          name="difficultyTypes"
          value={form.difficultyTypes}
          onChange={updateField}
          placeholder="Example: 1, 2, 3"
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
        <p className="mt-1 text-xs text-gray-500">
          Enter the numeric difficulty type values separated by commas.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Guide Video URL
        </label>
        <input
          name="guideVideoUrl"
          type="url"
          value={form.guideVideoUrl}
          onChange={updateField}
          placeholder="https://..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <section className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Directions</h3>
            <p className="text-xs text-gray-500">
              Add the steps players should follow to relive this spirit.
            </p>
          </div>
          <button
            type="button"
            onClick={addDirection}
            className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
          >
            Add Step
          </button>
        </div>

        {form.directions.map((direction, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="pt-2.5 text-xs font-semibold text-gray-400">
              {index + 1}.
            </span>
            <textarea
              rows={2}
              value={direction}
              onChange={(event) => updateDirection(index, event.target.value)}
              className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
              placeholder={`Direction step ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => removeDirection(index)}
              disabled={form.directions.length === 1}
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-40"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      <label className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <input
          name="published"
          type="checkbox"
          checked={form.published}
          onChange={updateField}
          className="h-4 w-4 rounded border-gray-300"
        />
        <span className="text-sm font-medium text-gray-700">
          Publish this Seasonal Spirit
        </span>
      </label>

      <div className="flex justify-end border-t border-gray-100 pt-4">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : isCreate
              ? "Create Seasonal Spirit"
              : "Save Changes"}
        </button>
      </div>
    </form>
  );
}

export default function SeasonalSpiritEditPage() {
  const { seasonId: routeSeasonId, id } = useParams();
  const navigate = useNavigate();

  const isCreate = Boolean(routeSeasonId);
  const spiritId = isCreate ? null : Number(id);
  const numericSeasonId = isCreate ? Number(routeSeasonId) : null;

  const [season, setSeason] = useState(null);
  const [spirit, setSpirit] = useState(null);
  const [mediaSpirit, setMediaSpirit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const backPath = useMemo(() => {
    const selectedSeasonId =
      numericSeasonId || spirit?.seasonId || spirit?.season?.id;

    return selectedSeasonId
      ? `/seasonal-spirits#season-${selectedSeasonId}`
      : "/seasonal-spirits";
  }, [numericSeasonId, spirit]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");

        if (isCreate) {
          if (!Number.isInteger(numericSeasonId) || numericSeasonId <= 0) {
            throw new Error("Invalid Season ID.");
          }

          const response = await getAdminSeason(numericSeasonId);
          if (!cancelled) setSeason(response?.data ?? null);
        } else {
          if (!Number.isInteger(spiritId) || spiritId <= 0) {
            throw new Error("Invalid Seasonal Spirit ID.");
          }

          const response = await getAdminSeasonalSpirit(spiritId);
          if (!cancelled) {
            const loadedSpirit = response?.data ?? null;
            setSpirit(loadedSpirit);
            setMediaSpirit(loadedSpirit);
            setSeason(loadedSpirit?.season ?? null);
          }
        }
      } catch (requestError) {
        if (!cancelled) setError(getErrorMessage(requestError));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [isCreate, numericSeasonId, spiritId]);

  async function handleMediaUpload(slot, file) {
    if (!spirit?.id) {
      throw new Error("Seasonal Spirit ID is missing.");
    }

    const response = await uploadAdminSeasonalSpiritMedia(
      spirit.id,
      slot,
      file,
    );

    const updatedSpirit = response?.data ?? null;
    if (!updatedSpirit) {
      throw new Error(
        "The image was uploaded, but no updated Seasonal Spirit was returned.",
      );
    }

    // Keep media state separate so an upload does not reset
    // unsaved changes in the core information form.
    setMediaSpirit(updatedSpirit);
    return updatedSpirit;
  }

  async function handleMediaRemove(slot) {
    if (!spirit?.id) {
      throw new Error("Seasonal Spirit ID is missing.");
    }

    const response = await removeAdminSeasonalSpiritMedia(spirit.id, slot);

    const updatedSpirit = response?.data ?? null;
    if (!updatedSpirit) {
      throw new Error(
        "The image was removed, but no updated Seasonal Spirit was returned.",
      );
    }

    setMediaSpirit(updatedSpirit);
    return updatedSpirit;
  }

  async function handleSubmit(payload) {
    try {
      setSaving(true);
      setError("");

      if (isCreate) {
        const response = await createAdminSeasonalSpirit(
          numericSeasonId,
          payload,
        );

        const created = response?.data;
        if (!created?.id) {
          throw new Error(
            "The Seasonal Spirit was created but no ID was returned.",
          );
        }

        navigate(`/seasonal-spirits/${created.id}/edit`, {
          replace: true,
        });
        return;
      }

      const response = await updateAdminSeasonalSpirit(spiritId, payload);
      const updatedSpirit = response?.data ?? null;
      setSpirit(updatedSpirit);
      setMediaSpirit(updatedSpirit);
    } catch (requestError) {
      setError(getErrorMessage(requestError));
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-sm text-gray-500">
          Loading Seasonal Spirit...
        </div>
      </AdminLayout>
    );
  }

  if (error && !season && !spirit) {
    return (
      <AdminLayout>
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h1 className="font-bold text-red-800">
            Unable to open Seasonal Spirit editor
          </h1>
          <p className="mt-2 text-sm text-red-700">{error}</p>
          <Link
            to="/seasonal-spirits"
            className="mt-4 inline-block text-sm font-semibold text-red-800 underline"
          >
            Back to Seasonal Spirits
          </Link>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <Link
            to={backPath}
            className="mb-3 inline-flex text-sm font-semibold text-sky-700 hover:underline"
          >
            ← Back to Seasonal Spirits
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            {isCreate
              ? "Add Seasonal Spirit"
              : `Manage ${spirit?.name ?? "Seasonal Spirit"}`}
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            {season
              ? `Season ${season.number} · ${season.name}`
              : (spirit?.season?.name ?? "")}
          </p>
        </div>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <SeasonalSpiritForm
          key={spirit?.id ?? `new-${numericSeasonId}`}
          initialData={spirit}
          isCreate={isCreate}
          saving={saving}
          onSubmit={handleSubmit}
        />

        {!isCreate && spirit?.id && (
          <>
            <SpiritMediaManager
              spirit={mediaSpirit ?? spirit}
              onUpload={handleMediaUpload}
              onRemove={handleMediaRemove}
            />

            <SeasonalSpiritProgressionManager key={spirit.id} spirit={spirit} />
          </>
        )}
      </div>
    </AdminLayout>
  );
}
