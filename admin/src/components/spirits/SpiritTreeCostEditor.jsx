import {
  useEffect,
  useState,
} from "react";

import {
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to save Spirit Tree Costs."
  );
}

function normalizeRows(
  treeCosts
) {
  return (
    Array.isArray(treeCosts)
      ? treeCosts
      : []
  ).map(
    (item, index) => ({
      id:
        item.id ??
        null,

      candles:
        item.candles ??
        0,

      hearts:
        item.hearts ??
        0,

      ascendedCandles:
        item.ascendedCandles ??
        0,

      displayOrder:
        index + 1,
    })
  );
}

export default function SpiritTreeCostEditor({
  treeCosts,
  onSave,
}) {
  const [rows, setRows] =
    useState([]);

  const [saving, setSaving] =
    useState(false);

  const [error, setError] =
    useState("");

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    setRows(
      normalizeRows(
        treeCosts
      )
    );
  }, [treeCosts]);

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
          candles: 0,
          hearts: 0,
          ascendedCandles:
            0,
          displayOrder:
            currentRows.length +
            1,
        },
      ]
    );
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

            candles:
              Number(
                row.candles
              ),

            hearts:
              Number(
                row.hearts
              ),

            ascendedCandles:
              Number(
                row.ascendedCandles
              ),

            displayOrder:
              index + 1,
          })
        );

      const updatedSpirit =
        await onSave(
          payload
        );

      setRows(
        normalizeRows(
          updatedSpirit
            ?.treeCosts
        )
      );

      setMessage(
        "Spirit Tree Costs saved successfully."
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
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Spirit Tree Cost
          </h2>

          <p className="mt-1 text-sm text-gray-600">
            Manage the total currency
            cost for this Spirit.
          </p>
        </div>

        <button
          type="button"
          onClick={addRow}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-100"
        >
          <PlusIcon className="h-4 w-4" />
          Add
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
                    Cost{" "}
                    {index + 1}
                  </span>

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

                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-600">
                      Candles
                    </label>

                    <input
                      type="number"
                      min="0"
                      value={
                        row.candles
                      }
                      onChange={(
                        event
                      ) =>
                        updateRow(
                          index,
                          "candles",
                          event.target
                            .value
                        )
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-600">
                      Hearts
                    </label>

                    <input
                      type="number"
                      min="0"
                      value={
                        row.hearts
                      }
                      onChange={(
                        event
                      ) =>
                        updateRow(
                          index,
                          "hearts",
                          event.target
                            .value
                        )
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-600">
                      Ascended
                      Candles
                    </label>

                    <input
                      type="number"
                      min="0"
                      value={
                        row
                          .ascendedCandles
                      }
                      onChange={(
                        event
                      ) =>
                        updateRow(
                          index,
                          "ascendedCandles",
                          event.target
                            .value
                        )
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500">
          No Spirit Tree Cost added.
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
            : "Save Tree Cost"}
        </button>
      </div>
    </section>
  );
}