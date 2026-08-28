import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  ArchiveBoxIcon,
  ArrowPathIcon,
  ArrowUturnLeftIcon,
  PencilSquareIcon,
  PhotoIcon,
  PlusIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import {
  archiveAdminWingedLight,
  createAdminWingedLight,
  getAdminWingedLightsByMap,
  getArchivedAdminWingedLightsByMap,
  restoreAdminWingedLight,
} from "../../services/adminWingedLight.service.js";

import WingedLightCreateModal
  from "../wingedLights/WingedLightCreateModal.jsx";

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to load Winged Lights."
  );
}

function sortWingedLights(
  wingedLights
) {
  return [...wingedLights].sort(
    (a, b) =>
      a.displayOrder -
      b.displayOrder
  );
}

function WingedLightRow({
  wingedLight,
  archiving,
  onArchive,
}) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
          {wingedLight.image ? (
            <img
              src={
                wingedLight.image
              }
              alt={
                wingedLight.label
              }
              className="h-full w-full object-contain"
            />
          ) : (
            <PhotoIcon className="h-7 w-7 text-gray-400" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate font-bold text-gray-900">
                {
                  wingedLight.label
                }
              </h3>

              <p className="mt-1 truncate text-xs font-medium text-gray-500">
                {
                  wingedLight.code
                }
              </p>
            </div>

            <span className="inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 px-2 text-xs font-bold text-sky-700">
              {
                wingedLight.displayOrder
              }
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {wingedLight.groupKey && (
              <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
                {
                  wingedLight.groupKey
                }
              </span>
            )}

            {wingedLight.seasonGroupKey && (
              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                {
                  wingedLight.seasonGroupKey
                }
              </span>
            )}

            <span
              className={
                wingedLight.published
                  ? "rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700"
                  : "rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600"
              }
            >
              {wingedLight.published
                ? "Published"
                : "Hidden"}
            </span>
          </div>
        </div>
      </div>

      {Array.isArray(
        wingedLight.directions
      ) &&
        wingedLight.directions
          .length > 0 && (
          <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Directions
            </p>

            <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-600">
              {
                wingedLight
                  .directions
                  .join(" ")
              }
            </p>
          </div>
        )}

      <div className="mt-auto grid gap-2 sm:grid-cols-2">
        <Link
          to={`/winged-lights/${wingedLight.id}/edit`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          <PencilSquareIcon className="h-4 w-4" />

          Edit
        </Link>

        <button
          type="button"
          disabled={archiving}
          onClick={() =>
            onArchive(
              wingedLight
            )
          }
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArchiveBoxIcon className="h-4 w-4" />

          {archiving
            ? "Archiving..."
            : "Archive"}
        </button>
      </div>
    </article>
  );
}

function ArchivedWingedLightRow({
  wingedLight,
  restoring,
  onRestore,
}) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-amber-200 bg-amber-50/40 p-4 shadow-sm">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-amber-200 bg-white">
          {wingedLight.image ? (
            <img
              src={
                wingedLight.image
              }
              alt={
                wingedLight.label
              }
              className="h-full w-full object-contain opacity-70"
            />
          ) : (
            <PhotoIcon className="h-7 w-7 text-gray-400" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate font-bold text-gray-800">
                {
                  wingedLight.label
                }
              </h3>

              <p className="mt-1 truncate text-xs font-medium text-gray-500">
                {
                  wingedLight.code
                }
              </p>
            </div>

            <span className="inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 px-2 text-xs font-bold text-amber-700">
              {
                wingedLight.displayOrder
              }
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
              Archived
            </span>

            {wingedLight.groupKey && (
              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-violet-700">
                {
                  wingedLight.groupKey
                }
              </span>
            )}
          </div>
        </div>
      </div>

      <p className="text-xs leading-5 text-gray-600">
        This Winged Light is hidden
        from the public website but
        its data and image are still
        preserved.
      </p>

      <button
        type="button"
        disabled={restoring}
        onClick={() =>
          onRestore(
            wingedLight
          )
        }
        className="mt-auto inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ArrowUturnLeftIcon className="h-4 w-4" />

        {restoring
          ? "Restoring..."
          : "Restore"}
      </button>
    </article>
  );
}

export default function MapWingedLights({
  mapId,
}) {
  const [
    wingedLights,
    setWingedLights,
  ] = useState([]);

  const [
    archivedWingedLights,
    setArchivedWingedLights,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  const [
    actionError,
    setActionError,
  ] = useState("");

  const [
    createOpen,
    setCreateOpen,
  ] = useState(false);

  const [
    archivingId,
    setArchivingId,
  ] = useState(null);

  const [
    restoringId,
    setRestoringId,
  ] = useState(null);

  /*
   * Include archived records because
   * their displayOrder remains reserved
   * by the database unique constraint.
   */
  const allWingedLights = [
    ...wingedLights,
    ...archivedWingedLights,
  ];

  const suggestedDisplayOrder =
    allWingedLights.length > 0
      ? Math.max(
          ...allWingedLights.map(
            (wingedLight) =>
              Number(
                wingedLight
                  .displayOrder
              ) || 0
          )
        ) + 1
      : 1;

  const suggestedGroupKey =
    allWingedLights.find(
      (wingedLight) =>
        wingedLight.groupKey
    )?.groupKey || "";

  async function requestWingedLights() {
    const [
      activeResponse,
      archivedResponse,
    ] = await Promise.all([
      getAdminWingedLightsByMap(
        mapId
      ),

      getArchivedAdminWingedLightsByMap(
        mapId
      ),
    ]);

    return {
      active:
        Array.isArray(
          activeResponse?.data
        )
          ? activeResponse.data
          : [],

      archived:
        Array.isArray(
          archivedResponse?.data
        )
          ? archivedResponse.data
          : [],
    };
  }

  function loadWingedLights() {
    if (!mapId) {
      return;
    }

    setLoading(true);
    setError("");
    setActionError("");

    requestWingedLights()
      .then((result) => {
        setWingedLights(
          sortWingedLights(
            result.active
          )
        );

        setArchivedWingedLights(
          sortWingedLights(
            result.archived
          )
        );
      })
      .catch(
        (requestError) => {
          setWingedLights([]);
          setArchivedWingedLights(
            []
          );

          setError(
            getErrorMessage(
              requestError
            )
          );
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    let cancelled = false;

    if (!mapId) {
      setWingedLights([]);
      setArchivedWingedLights(
        []
      );
      setLoading(false);

      return undefined;
    }

    setLoading(true);
    setError("");
    setActionError("");

    requestWingedLights()
      .then((result) => {
        if (cancelled) {
          return;
        }

        setWingedLights(
          sortWingedLights(
            result.active
          )
        );

        setArchivedWingedLights(
          sortWingedLights(
            result.archived
          )
        );
      })
      .catch(
        (requestError) => {
          if (cancelled) {
            return;
          }

          setWingedLights([]);
          setArchivedWingedLights(
            []
          );

          setError(
            getErrorMessage(
              requestError
            )
          );
        }
      )
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [mapId]);

  async function handleCreateWingedLight(
    payload
  ) {
    const response =
      await createAdminWingedLight(
        mapId,
        payload
      );

    const createdWingedLight =
      response?.data;

    if (!createdWingedLight) {
      throw new Error(
        "The server did not return the created Winged Light."
      );
    }

    setWingedLights(
      (current) =>
        sortWingedLights([
          ...current,
          createdWingedLight,
        ])
    );

    return createdWingedLight;
  }

  async function handleArchive(
    wingedLight
  ) {
    const confirmed =
      window.confirm(
        `Archive "${wingedLight.label}"?\n\nThis removes it from the public website but keeps its data and image so it can be restored later.`
      );

    if (!confirmed) {
      return;
    }

    try {
      setArchivingId(
        wingedLight.id
      );

      setActionError("");

      const response =
        await archiveAdminWingedLight(
          wingedLight.id
        );

      const archived =
        response?.data;

      if (!archived) {
        throw new Error(
          "The server did not return the archived Winged Light."
        );
      }

      setWingedLights(
        (current) =>
          current.filter(
            (item) =>
              item.id !==
              wingedLight.id
          )
      );

      setArchivedWingedLights(
        (current) =>
          sortWingedLights([
            ...current,
            archived,
          ])
      );
    } catch (
      requestError
    ) {
      setActionError(
        getErrorMessage(
          requestError
        )
      );
    } finally {
      setArchivingId(null);
    }
  }

  async function handleRestore(
    wingedLight
  ) {
    try {
      setRestoringId(
        wingedLight.id
      );

      setActionError("");

      const response =
        await restoreAdminWingedLight(
          wingedLight.id
        );

      const restored =
        response?.data;

      if (!restored) {
        throw new Error(
          "The server did not return the restored Winged Light."
        );
      }

      setArchivedWingedLights(
        (current) =>
          current.filter(
            (item) =>
              item.id !==
              wingedLight.id
          )
      );

      setWingedLights(
        (current) =>
          sortWingedLights([
            ...current,
            restored,
          ])
      );
    } catch (
      requestError
    ) {
      setActionError(
        getErrorMessage(
          requestError
        )
      );
    } finally {
      setRestoringId(null);
    }
  }

  return (
    <section className="space-y-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <SparklesIcon className="h-6 w-6 text-sky-600" />

            <h2 className="text-xl font-bold text-gray-900">
              Winged Lights
            </h2>
          </div>

          <p className="mt-1 text-sm text-gray-600">
            Manage the Winged Lights
            that belong to this Map.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {!loading && (
            <span className="w-fit rounded-full bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-700">
              {
                wingedLights.length
              }{" "}
              {wingedLights.length ===
              1
                ? "Winged Light"
                : "Winged Lights"}
            </span>
          )}

          <button
            type="button"
            disabled={loading}
            onClick={() =>
              setCreateOpen(true)
            }
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <PlusIcon className="h-4 w-4" />

            Add Winged Light
          </button>
        </div>
      </div>

      {actionError && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {actionError}
        </div>
      )}

      {loading ? (
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-sm text-gray-500 shadow-sm">
          Loading Winged Lights...
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-sm font-semibold text-red-700">
            {error}
          </p>

          <button
            type="button"
            onClick={
              loadWingedLights
            }
            className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-800"
          >
            <ArrowPathIcon className="h-4 w-4" />

            Try again
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900">
                Active Winged Lights
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Published and hidden
                Winged Lights that are
                currently part of this
                Map.
              </p>
            </div>

            {wingedLights.length >
            0 ? (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {wingedLights.map(
                  (
                    wingedLight
                  ) => (
                    <WingedLightRow
                      key={
                        wingedLight.id
                      }
                      wingedLight={
                        wingedLight
                      }
                      archiving={
                        archivingId ===
                        wingedLight.id
                      }
                      onArchive={
                        handleArchive
                      }
                    />
                  )
                )}
              </div>
            ) : (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">
                This Map currently
                has no active Winged
                Lights.
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 pt-7">
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <h3 className="font-bold text-gray-900">
                  Archived Winged Lights
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Archived records
                  remain stored and can
                  be restored later.
                </p>
              </div>

              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                {
                  archivedWingedLights.length
                }{" "}
                Archived
              </span>
            </div>

            {archivedWingedLights.length >
            0 ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {archivedWingedLights.map(
                  (
                    wingedLight
                  ) => (
                    <ArchivedWingedLightRow
                      key={
                        wingedLight.id
                      }
                      wingedLight={
                        wingedLight
                      }
                      restoring={
                        restoringId ===
                        wingedLight.id
                      }
                      onRestore={
                        handleRestore
                      }
                    />
                  )
                )}
              </div>
            ) : (
              <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-500">
                No archived Winged
                Lights.
              </div>
            )}
          </div>
        </>
      )}

      <WingedLightCreateModal
        open={createOpen}
        suggestedDisplayOrder={
          suggestedDisplayOrder
        }
        suggestedGroupKey={
          suggestedGroupKey
        }
        onClose={() =>
          setCreateOpen(false)
        }
        onCreate={
          handleCreateWingedLight
        }
      />
    </section>
  );
}