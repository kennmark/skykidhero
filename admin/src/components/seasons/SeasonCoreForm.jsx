import { useEffect, useState } from "react";
import SeasonMediaManager from "./SeasonMediaManager";

const EMPTY_FORM = {
  number: "",
  year: "",
  code: "",
  name: "",
  slug: "",
  intro: "",
  description: "",
  startDate: "",
  endDate: "",
  published: true,
};

function toDateTimeLocal(value) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const offset = date.getTimezoneOffset();
  const localDate = new Date(
    date.getTime() - offset * 60000,
  );

  return localDate.toISOString().slice(0, 16);
}

function toIsoOrNull(value) {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date.toISOString();
}

export default function SeasonCoreForm({
  initialData,
  onSubmit,
  saving = false,
}) {
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    if (!initialData) {
      setForm(EMPTY_FORM);
      return;
    }

    setForm({
      number: initialData.number ?? "",
      year: initialData.year ?? "",
      code: initialData.code ?? "",
      name: initialData.name ?? "",
      slug: initialData.slug ?? "",
      intro: initialData.intro ?? "",
      description: initialData.description ?? "",
      startDate: toDateTimeLocal(
        initialData.startDate,
      ),
      endDate: toDateTimeLocal(
        initialData.endDate,
      ),
      published: initialData.published ?? true,
    });
  }, [initialData]);

  function handleChange(event) {
    const { name, value, type, checked } =
      event.target;

    setForm((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await onSubmit({
      number: Number(form.number),
      year: Number(form.year),
      code: form.code.trim(),
      name: form.name.trim(),
      slug: form.slug.trim(),
      intro: form.intro.trim() || null,
      description:
        form.description.trim() || null,
      startDate: toIsoOrNull(form.startDate),
      endDate: toIsoOrNull(form.endDate),
      published: form.published,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Season Number
          </label>

          <input
            name="number"
            type="number"
            min="1"
            value={form.number}
            onChange={handleChange}
            required
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Year
          </label>

          <input
            name="year"
            type="number"
            min="2000"
            max="2100"
            value={form.year}
            onChange={handleChange}
            required
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Code
          </label>

          <input
            name="code"
            value={form.code}
            onChange={handleChange}
            placeholder="season-29"
            required
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Slug
          </label>

          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            placeholder="season-of-carnival"
            required
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Season Name
        </label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Intro
        </label>

        <textarea
          name="intro"
          rows={3}
          value={form.intro}
          onChange={handleChange}
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Description
        </label>

        <textarea
          name="description"
          rows={7}
          value={form.description}
          onChange={handleChange}
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Start Date
          </label>

          <input
            name="startDate"
            type="datetime-local"
            value={form.startDate}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            End Date
          </label>

          <input
            name="endDate"
            type="datetime-local"
            value={form.endDate}
            onChange={handleChange}
            className="w-full rounded-lg border px-3 py-2"
          />
        </div>
      </div>

      <label className="flex items-center gap-3">
        <input
          name="published"
          type="checkbox"
          checked={form.published}
          onChange={handleChange}
          className="h-4 w-4"
        />

        <span className="text-sm font-medium">
          Published
        </span>
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg px-5 py-2.5 font-medium disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Season"}
        </button>
      </div>
    </form>
  );
}