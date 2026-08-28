import {
  useEffect,
  useState,
} from "react";

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to save the Winged Light."
  );
}

function directionsToText(
  values
) {
  return Array.isArray(values)
    ? values.join("\n")
    : "";
}

function createFormValues(
  wingedLight
) {
  return {
    label:
      wingedLight?.label ??
      "",

    groupKey:
      wingedLight?.groupKey ??
      "",

    seasonGroupKey:
      wingedLight
        ?.seasonGroupKey ??
      "",

    directions:
      directionsToText(
        wingedLight?.directions
      ),

    displayOrder:
      wingedLight
        ?.displayOrder ??
      1,

    published:
      wingedLight
        ?.published ??
      true,
  };
}

export default function WingedLightCoreForm({
  wingedLight,
  onSave,
}) {
  const [
    form,
    setForm,
  ] = useState(
    createFormValues(
      wingedLight
    )
  );

  const [
    saving,
    setSaving,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  const [
    message,
    setMessage,
  ] = useState("");

  useEffect(() => {
    setForm(
      createFormValues(
        wingedLight
      )
    );
  }, [wingedLight]);

  function handleChange(
    event
  ) {
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

    setError("");
    setMessage("");
  }

  function parseDirections() {
    return form.directions
      .split("\n")
      .map(
        (value) =>
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

      const label =
        form.label.trim();

      if (!label) {
        throw new Error(
          "Winged Light label is required."
        );
      }

      const displayOrder =
        Number(
          form.displayOrder
        );

      if (
        !Number.isInteger(
          displayOrder
        ) ||
        displayOrder < 1
      ) {
        throw new Error(
          "Display Order must be a positive whole number."
        );
      }

      const payload = {
        label,

        groupKey:
          form.groupKey
            .trim() ||
          null,

        seasonGroupKey:
          form.seasonGroupKey
            .trim() ||
          null,

        directions:
          parseDirections(),

        displayOrder,

        published:
          Boolean(
            form.published
          ),
      };

      const updatedWingedLight =
        await onSave(
          payload
        );

      if (
        updatedWingedLight
      ) {
        setForm(
          createFormValues(
            updatedWingedLight
          )
        );
      }

      setMessage(
        "Winged Light information saved successfully."
      );
    } catch (
      requestError
    ) {
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
          Winged Light Information
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Manage the label,
          grouping, directions,
          display order, and
          visibility of this
          Winged Light.
        </p>
      </div>

      <form
        onSubmit={
          handleSubmit
        }
        className="space-y-6 p-5"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Winged Light Code
            </label>

            <input
              type="text"
              value={
                wingedLight
                  ?.code ??
                ""
              }
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm text-gray-600"
            />

            <p className="mt-1 text-xs text-gray-500">
              Stable internal code.
              This should not normally
              be changed.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Map
            </label>

            <input
              type="text"
              value={
                wingedLight
                  ?.map?.name ??
                `Map ${wingedLight?.mapId ?? ""}`
              }
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm text-gray-600"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Label
            </label>

            <input
              type="text"
              name="label"
              value={
                form.label
              }
              onChange={
                handleChange
              }
              required
              maxLength={255}
              placeholder="Example: Isle-WL1"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Group Key
            </label>

            <input
              type="text"
              name="groupKey"
              value={
                form.groupKey
              }
              onChange={
                handleChange
              }
              maxLength={100}
              placeholder="wl-isle"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />

            <p className="mt-1 text-xs text-gray-500">
              Main Map grouping key.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Season Group Key
            </label>

            <input
              type="text"
              name="seasonGroupKey"
              value={
                form.seasonGroupKey
              }
              onChange={
                handleChange
              }
              maxLength={100}
              placeholder="wl-isle-1"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />

            <p className="mt-1 text-xs text-gray-500">
              Optional Season-area
              grouping metadata.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Display Order
            </label>

            <input
              type="number"
              name="displayOrder"
              min="1"
              step="1"
              value={
                form.displayOrder
              }
              onChange={
                handleChange
              }
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-bold text-gray-900">
            Location Guide
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            Enter one direction
            step per line.
          </p>

          <div className="mt-4">
            <textarea
              name="directions"
              value={
                form.directions
              }
              onChange={
                handleChange
              }
              rows={10}
              placeholder={
                "Enter Map 1 | Isle of Dawn\nFly toward the temple.\nThe Winged Light is..."
              }
              className="w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
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
                Show this Winged
                Light on the public
                website.
              </p>
            </div>
          </label>
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {message && (
          <div
            role="status"
            className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
          >
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
              : "Save Winged Light"}
          </button>
        </div>
      </form>
    </section>
  );
}