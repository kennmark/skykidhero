import { useState } from "react";

const SECTION_LABELS = {
  INFO: "Info",
  REGULAR_SPIRITS: "Regular Spirits",
  SEASON_SPIRITS: "Season Spirits",
  WINGED_LIGHTS: "Winged Lights",
  MAP_SHRINES: "Map Shrines",
  DYE_RATIO: "Dye Ratio",
};

function createFormValues(section) {
  return {
    heading: section.heading ?? "",
    description: section.description ?? "",
    published: Boolean(section.published),
  };
}

function normalizePayload(values) {
  return {
    heading:
      values.heading.trim() || null,

    description:
      values.description.trim() || null,

    published:
      Boolean(values.published),
  };
}

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to update the Map section."
  );
}

export default function MapSectionEditor({
  section,
  onSave,
}) {
  const initialForm =
    createFormValues(section);

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

  const sectionLabel =
    SECTION_LABELS[section.type] ||
    section.type;

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

  function handleReset() {
    setForm(savedForm);
    setError("");
    setSuccessMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");
      setSuccessMessage("");

      const updatedSection =
        await onSave(
          section.type,
          normalizePayload(form)
        );

      const nextForm =
        createFormValues(
          updatedSection
        );

      setForm(nextForm);
      setSavedForm(nextForm);

      setSuccessMessage(
        `${sectionLabel} saved successfully.`
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
      className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
            {section.displayOrder}
          </span>

          <div className="min-w-0">
            <h3 className="truncate font-bold text-gray-900">
              {sectionLabel}
            </h3>

            <p className="truncate text-xs text-gray-500">
              {section.type}
            </p>
          </div>
        </div>

        <label className="flex shrink-0 cursor-pointer items-center gap-2">
          <input
            name="published"
            type="checkbox"
            checked={form.published}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-sky-600"
          />

          <span
            className={
              form.published
                ? "rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700"
                : "rounded-full bg-gray-200 px-2.5 py-1 text-xs font-semibold text-gray-600"
            }
          >
            {form.published
              ? "Visible"
              : "Hidden"}
          </span>
        </label>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <label
            htmlFor={`heading-${section.id}`}
            className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500"
          >
            Tab heading
          </label>

          <input
            id={`heading-${section.id}`}
            name="heading"
            type="text"
            value={form.heading}
            onChange={handleChange}
            placeholder={sectionLabel}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <label
            htmlFor={`description-${section.id}`}
            className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500"
          >
            Introduction
          </label>

          <textarea
            id={`description-${section.id}`}
            name="description"
            rows={4}
            value={form.description}
            onChange={handleChange}
            placeholder={`Introductory content for ${sectionLabel}.`}
            className="min-h-28 w-full flex-1 resize-y rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {successMessage && (
          <div
            role="status"
            className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700"
          >
            {successMessage}
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-2 border-t border-gray-200 bg-gray-50 px-4 py-3">
        <button
          type="button"
          disabled={!hasChanges || saving}
          onClick={handleReset}
          className="cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reset
        </button>

        <button
          type="submit"
          disabled={!hasChanges || saving}
          className="cursor-pointer rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : "Save Section"}
        </button>
      </div>
    </form>
  );
}