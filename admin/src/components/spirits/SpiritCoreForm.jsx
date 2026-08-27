import {
  useEffect,
  useState,
} from "react";

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
    "Unable to save the Spirit."
  );
}

function difficultyTypesToText(
  values
) {
  return Array.isArray(values)
    ? values.join(", ")
    : "";
}

function directionsToText(
  values
) {
  return Array.isArray(values)
    ? values.join("\n")
    : "";
}

export default function SpiritCoreForm({
  spirit,
  onSave,
}) {
  const [form, setForm] =
    useState({
      name: "",
      category: "EMOTE",
      reliveType:
        "FOLLOW_MEMORY",
      difficultyLevel: 0,
      difficultyTypes: "",
      guideVideoUrl: "",
      directions: "",
      displayOrder: 1,
      published: true,
    });

  const [saving, setSaving] =
    useState(false);

  const [error, setError] =
    useState("");

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    setForm({
      name:
        spirit?.name ?? "",

      category:
        spirit?.category ??
        "EMOTE",

      reliveType:
        spirit?.reliveType ??
        "FOLLOW_MEMORY",

      difficultyLevel:
        spirit?.difficultyLevel ??
        0,

      difficultyTypes:
        difficultyTypesToText(
          spirit?.difficultyTypes
        ),

      guideVideoUrl:
        spirit?.guideVideoUrl ??
        "",

      directions:
        directionsToText(
          spirit?.directions
        ),

      displayOrder:
        spirit?.displayOrder ??
        1,

      published:
        spirit?.published ??
        true,
    });
  }, [spirit]);

  function handleChange(event) {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setForm(
      (current) => ({
        ...current,

        [name]:
          type === "checkbox"
            ? checked
            : value,
      })
    );
  }

  function parseDifficultyTypes() {
    if (
      !form.difficultyTypes.trim()
    ) {
      return [];
    }

    return form.difficultyTypes
      .split(",")
      .map((value) =>
        Number(
          value.trim()
        )
      )
      .filter(
        (value) =>
          Number.isInteger(
            value
          )
      );
  }

  function parseDirections() {
    return form.directions
      .split("\n")
      .map((value) =>
        value.trim()
      )
      .filter(Boolean);
  }

  async function handleSubmit(
    event
  ) {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");
      setMessage("");

      const payload = {
        name:
          form.name.trim(),

        category:
          form.category,

        reliveType:
          form.reliveType,

        difficultyLevel:
          Number(
            form.difficultyLevel
          ),

        difficultyTypes:
          parseDifficultyTypes(),

        guideVideoUrl:
          form.guideVideoUrl.trim() ||
          null,

        directions:
          parseDirections(),

        displayOrder:
          Number(
            form.displayOrder
          ),

        published:
          form.published,
      };

      await onSave(
        payload
      );

      setMessage(
        "Spirit information saved successfully."
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
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
        <h2 className="text-xl font-bold text-gray-900">
          Spirit Information
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Manage the core information,
          difficulty, and guide details
          for this Regular Spirit.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-5"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Spirit Code
            </label>

            <input
              type="text"
              value={
                spirit?.code ?? ""
              }
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm text-gray-600"
            />

            <p className="mt-1 text-xs text-gray-500">
              The stable Spirit code
              cannot be changed.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Spirit Type
            </label>

            <input
              type="text"
              value="Regular"
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm text-gray-600"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Spirit Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={
                handleChange
              }
              required
              maxLength={150}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Category
            </label>

            <select
              name="category"
              value={
                form.category
              }
              onChange={
                handleChange
              }
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              {CATEGORY_OPTIONS.map(
                (option) => (
                  <option
                    key={option}
                    value={option}
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
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Relive Type
            </label>

            <select
              name="reliveType"
              value={
                form.reliveType
              }
              onChange={
                handleChange
              }
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              {RELIVE_TYPE_OPTIONS.map(
                (option) => (
                  <option
                    key={option}
                    value={option}
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
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Difficulty Level
            </label>

            <input
              type="number"
              name="difficultyLevel"
              min="0"
              max="100"
              value={
                form.difficultyLevel
              }
              onChange={
                handleChange
              }
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Display Order
            </label>

            <input
              type="number"
              name="displayOrder"
              min="1"
              value={
                form.displayOrder
              }
              onChange={
                handleChange
              }
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Difficulty Type IDs
            </label>

            <input
              type="text"
              name="difficultyTypes"
              value={
                form.difficultyTypes
              }
              onChange={
                handleChange
              }
              placeholder="0, 1, 2"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />

            <p className="mt-1 text-xs text-gray-500">
              Separate multiple IDs
              with commas.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-bold text-gray-900">
            Spirit Guide
          </h3>

          <div className="mt-4 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Video Guide URL
              </label>

              <input
                type="url"
                name="guideVideoUrl"
                value={
                  form.guideVideoUrl
                }
                onChange={
                  handleChange
                }
                placeholder="https://www.youtube.com/embed/..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Directions
              </label>

              <textarea
                name="directions"
                value={
                  form.directions
                }
                onChange={
                  handleChange
                }
                rows={8}
                placeholder={
                  "One direction step per line."
                }
                className="w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />

              <p className="mt-1 text-xs text-gray-500">
                Enter one guide step
                per line.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              name="published"
              checked={
                form.published
              }
              onChange={
                handleChange
              }
              className="h-4 w-4 rounded border-gray-300 text-sky-600"
            />

            <div>
              <span className="text-sm font-semibold text-gray-900">
                Published
              </span>

              <p className="text-xs text-gray-500">
                Show this Spirit on
                the public website.
              </p>
            </div>
          </label>
        </div>

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

        <div className="flex justify-end border-t border-gray-200 pt-5">
          <button
            type="submit"
            disabled={saving}
            className="cursor-pointer rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : "Save Spirit"}
          </button>
        </div>
      </form>
    </section>
  );
}