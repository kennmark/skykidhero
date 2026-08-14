import { useState } from "react";

function createFormValues(map) {
  return {
    subtitle: map.subtitle ?? "",
    introduction:
      map.introduction ?? "",
    caption: map.caption ?? "",
    imageAlt: map.imageAlt ?? "",
    published:
      Boolean(map.published),
  };
}

function normalizePayload(values) {
  return {
    subtitle:
      values.subtitle.trim() ||
      null,

    introduction:
      values.introduction.trim() ||
      null,

    caption:
      values.caption.trim() ||
      null,

    imageAlt:
      values.imageAlt.trim() ||
      null,

    published:
      Boolean(values.published),
  };
}

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to update the Map."
  );
}

export default function MapCoreForm({
  map,
  onSave,
}) {
  const initialForm =
    createFormValues(map);

  const [form, setForm] =
    useState(initialForm);

  const [savedForm, setSavedForm] =
    useState(initialForm);

  const [saving, setSaving] =
    useState(false);

  const [error, setError] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  const hasChanges =
    JSON.stringify(form) !==
    JSON.stringify(savedForm);

  function handleChange(event) {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setForm((current) => ({
      ...current,

      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    setError("");
    setSuccessMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");
      setSuccessMessage("");

      const updatedMap =
        await onSave(
          normalizePayload(form)
        );

      const nextForm =
        createFormValues(
          updatedMap
        );

      setForm(nextForm);
      setSavedForm(nextForm);

      setSuccessMessage(
        "Map information saved successfully."
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
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="border-b border-gray-200 px-6 py-5">
        <h2 className="text-lg font-bold text-gray-900">
          Map Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Update the public introduction and
          display information for this Map.
        </p>
      </div>

      <div className="space-y-6 p-6">
        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Map name
            </label>

            <input
              type="text"
              value={map.name}
              disabled
              className="w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5 text-gray-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Map order
            </label>

            <input
              type="text"
              value={map.displayOrder}
              disabled
              className="w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5 text-gray-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Slug
            </label>

            <input
              type="text"
              value={map.slug}
              disabled
              className="w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5 text-gray-600"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subtitle"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Subtitle
          </label>

          <input
            id="subtitle"
            name="subtitle"
            type="text"
            value={form.subtitle}
            onChange={handleChange}
            placeholder="Example: 1st Map"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        <div>
          <label
            htmlFor="introduction"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Header introduction
          </label>

          <textarea
            id="introduction"
            name="introduction"
            rows={3}
            value={form.introduction}
            onChange={handleChange}
            placeholder="Short introduction displayed near the Map title."
            className="w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        <div>
          <label
            htmlFor="caption"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Map-card caption
          </label>

          <textarea
            id="caption"
            name="caption"
            rows={3}
            value={form.caption}
            onChange={handleChange}
            placeholder="Description displayed on the public Map card."
            className="w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        <div>
          <label
            htmlFor="imageAlt"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Image alternative text
          </label>

          <input
            id="imageAlt"
            name="imageAlt"
            type="text"
            value={form.imageAlt}
            onChange={handleChange}
            placeholder={map.name}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />

          <p className="mt-1 text-xs text-gray-500">
            Used by screen readers when the
            Map image cannot be viewed.
          </p>
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <input
            name="published"
            type="checkbox"
            checked={form.published}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-sky-600"
          />

          <span>
            <span className="block text-sm font-semibold text-gray-800">
              Publish this Map
            </span>

            <span className="block text-sm text-gray-500">
              Hidden Maps are excluded from
              the public Maps API and cannot
              be opened through their public
              API route.
            </span>
          </span>
        </label>

        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {successMessage && (
          <div
            role="status"
            className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700"
          >
            {successMessage}
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4">
        <button
          type="button"
          disabled={!hasChanges || saving}
          onClick={() => {
            setForm(savedForm);
            setError("");
            setSuccessMessage("");
          }}
          className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reset
        </button>

        <button
          type="submit"
          disabled={!hasChanges || saving}
          className="cursor-pointer rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : "Save Map Information"}
        </button>
      </div>
    </form>
  );
}