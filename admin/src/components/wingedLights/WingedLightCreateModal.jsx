import {
  useEffect,
  useState,
} from "react";

import {
  XMarkIcon,
} from "@heroicons/react/24/outline";

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to create the Winged Light."
  );
}

function createInitialForm({
  suggestedDisplayOrder,
  suggestedGroupKey,
}) {
  return {
    code: "",
    label: "",

    groupKey:
      suggestedGroupKey ??
      "",

    seasonGroupKey: "",

    directions: "",

    displayOrder:
      suggestedDisplayOrder ??
      1,

    published: true,
  };
}

export default function WingedLightCreateModal({
  open,
  suggestedDisplayOrder,
  suggestedGroupKey,
  onClose,
  onCreate,
}) {
  const [
    form,
    setForm,
  ] = useState(
    createInitialForm({
      suggestedDisplayOrder,
      suggestedGroupKey,
    })
  );

  const [
    saving,
    setSaving,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(
      createInitialForm({
        suggestedDisplayOrder,
        suggestedGroupKey,
      })
    );

    setError("");
  }, [
    open,
    suggestedDisplayOrder,
    suggestedGroupKey,
  ]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function handleKeyDown(
      event
    ) {
      if (
        event.key ===
        "Escape"
      ) {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    open,
    onClose,
  ]);

  if (!open) {
    return null;
  }

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

      const code =
        form.code.trim();

      const label =
        form.label.trim();

      const displayOrder =
        Number(
          form.displayOrder
        );

      if (!code) {
        throw new Error(
          "Winged Light code is required."
        );
      }

      if (!label) {
        throw new Error(
          "Winged Light label is required."
        );
      }

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

      await onCreate({
        code,

        label,

        groupKey:
          form.groupKey
            .trim() ||
          null,

        seasonGroupKey:
          form
            .seasonGroupKey
            .trim() ||
          null,

        directions:
          parseDirections(),

        displayOrder,

        published:
          Boolean(
            form.published
          ),
      });

      onClose();
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-winged-light-title"
    >
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-xl">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-200 bg-white px-5 py-4">
          <div>
            <h2
              id="create-winged-light-title"
              className="text-xl font-bold text-gray-900"
            >
              Add Winged Light
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Create a new Winged
              Light for this Map.
            </p>
          </div>

          <button
            type="button"
            disabled={saving}
            onClick={onClose}
            className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <div className="space-y-5 p-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">
                  Winged Light Code
                </label>

                <input
                  type="text"
                  name="code"
                  value={
                    form.code
                  }
                  onChange={
                    handleChange
                  }
                  required
                  maxLength={100}
                  placeholder="isle-wl-11"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />

                <p className="mt-1 text-xs text-gray-500">
                  Stable internal
                  identifier. Avoid
                  changing it later.
                </p>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">
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
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
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
                placeholder="Isle-WL11"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">
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
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />

                <p className="mt-1 text-xs text-gray-500">
                  Automatically
                  suggested from the
                  existing Winged
                  Lights on this Map.
                </p>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">
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
                  placeholder="Optional"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
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
                rows={7}
                placeholder={
                  "Enter one direction step per line."
                }
                className="w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />

              <p className="mt-1 text-xs text-gray-500">
                Each line becomes one
                direction step.
              </p>
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <input
                type="checkbox"
                name="published"
                checked={
                  form.published
                }
                onChange={
                  handleChange
                }
                className="mt-1 h-4 w-4 rounded border-gray-300 text-sky-600"
              />

              <span>
                <span className="block text-sm font-semibold text-gray-900">
                  Published
                </span>

                <span className="block text-xs text-gray-500">
                  Make this Winged
                  Light available to
                  the public API.
                </span>
              </span>
            </label>

            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}
          </div>

          <div className="sticky bottom-0 flex items-center justify-end gap-3 border-t border-gray-200 bg-gray-50 px-5 py-4">
            <button
              type="button"
              disabled={saving}
              onClick={onClose}
              className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="cursor-pointer rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving
                ? "Creating..."
                : "Create Winged Light"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}