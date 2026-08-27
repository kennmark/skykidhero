import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

import AdminLayout
  from "../../components/layout/AdminLayout.jsx";

import MapCoreForm
  from "../../components/maps/MapCoreForm.jsx";

import MapSectionEditor
  from "../../components/maps/MapSectionEditor.jsx";

import {
  getAdminMapById,
  removeAdminMapMedia,
  updateAdminMap,
  updateAdminMapSection,
  uploadAdminMapMedia,
} from "../../services/adminMap.service.js";

import MapMediaManager from "../../components/maps/MapMediaManager.jsx";
import MapRegularSpirits from "../../components/spirits/MapRegularSpirits.jsx";

const publicSiteUrl = (
  import.meta.env
    .VITE_PUBLIC_SITE_URL ||
  "http://localhost:5173"
).replace(/\/$/, "");

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to load the Map."
  );
}

function MapEditPageContent({
  mapId,
}) {
  const [map, setMap] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [loadError, setLoadError] =
    useState("");

  function requestMap() {
    return getAdminMapById(
      mapId
    );
  }

  function reloadMap() {
    setLoading(true);
    setLoadError("");

    requestMap()
      .then((response) => {
        setMap(
          response?.data ?? null
        );
      })
      .catch((requestError) => {
        setMap(null);

        setLoadError(
          getErrorMessage(
            requestError
          )
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    let cancelled = false;

    requestMap()
      .then((response) => {
        if (!cancelled) {
          setMap(
            response?.data ?? null
          );
        }
      })
      .catch((requestError) => {
        if (!cancelled) {
          setLoadError(
            getErrorMessage(
              requestError
            )
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [mapId]);

  async function handleMapSave(
    payload
  ) {
    const response =
      await updateAdminMap(
        mapId,
        payload
      );

    const updatedMap =
      response.data;

    setMap(updatedMap);

    return updatedMap;
  }

  async function handleSectionSave(
    type,
    payload
  ) {
    const response =
      await updateAdminMapSection(
        mapId,
        type,
        payload
      );

    const updatedSection =
      response.data;

    setMap((currentMap) => {
      if (!currentMap) {
        return currentMap;
      }

      return {
        ...currentMap,

        sections:
          currentMap.sections.map(
            (section) =>
              section.type === type
                ? updatedSection
                : section
          ),
      };
    });

    return updatedSection;
  }

  async function handleMediaUpload(
  slot,
  file
) {
  if (!mapId) {
    throw new Error(
      "Map ID is missing."
    );
  }

  const response =
    await uploadAdminMapMedia(
      mapId,
      slot,
      file
    );

  const updatedMap =
    response.data;

  setMap(updatedMap);

  return updatedMap;
}

async function handleMediaRemove(
  slot
) {
  if (!mapId) {
    throw new Error(
      "Map ID is missing."
    );
  }

  const response =
    await removeAdminMapMedia(
      mapId,
      slot
    );

  const updatedMap =
    response.data;

  setMap(updatedMap);

  return updatedMap;
}
  if (loading) {
    return (
      <AdminLayout>
        <div className="rounded-xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 shadow-sm">
          Loading Map editor...
        </div>
      </AdminLayout>
    );
  }

  if (loadError || !map) {
    return (
      <AdminLayout>
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h1 className="text-lg font-bold text-red-800">
            Unable to load Map
          </h1>

          <p className="mt-2 text-sm text-red-700">
            {loadError ||
              "Map not found."}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reloadMap}
              className="cursor-pointer rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
            >
              Try again
            </button>

            <Link
              to="/maps"
              className="rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100"
            >
              Back to Maps
            </Link>
          </div>
        </div>
      </AdminLayout>
    );
  }

  const publicMapUrl =
    `${publicSiteUrl}/maps/${map.id}/${map.slug}`;

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <Link
              to="/maps"
              className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Maps
            </Link>

            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-lg font-bold text-sky-700">
                {map.displayOrder}
              </span>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Manage {map.name}
                </h1>

                <p className="mt-1 text-sm text-gray-600">
                  Edit Map information and
                  the six public tab
                  introductions.
                </p>
              </div>
            </div>
          </div>

          <a
            href={publicMapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            View public Map
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Map order
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {map.displayOrder}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Sections
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {map.sections?.length ?? 0}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Published sections
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {map.sections?.filter(
                (section) =>
                  section.published
              ).length ?? 0}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Map status
            </p>

            <p
              className={
                map.published
                  ? "mt-2 text-lg font-bold text-green-700"
                  : "mt-2 text-lg font-bold text-gray-600"
              }
            >
              {map.published
                ? "Published"
                : "Hidden"}
            </p>
          </div>
        </div>

        <MapCoreForm
          map={map}
          onSave={handleMapSave}
        />

        <MapMediaManager
          map={map}
          onUpload={
            handleMediaUpload
          }
          onRemove={
            handleMediaRemove
          }
        />

        <MapRegularSpirits
          mapId={map.id}
        />
        
        <section className="space-y-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Map Tab Sections
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Each section controls the
              introductory content for one
              public Map tab.
            </p>
          </div>

          {map.sections?.length > 0 ? (
            <div className="grid items-stretch gap-4 lg:grid-cols-2">
              {map.sections.map(
                (section) => (
                  <MapSectionEditor
                    key={section.id}
                    section={section}
                    onSave={
                      handleSectionSave
                    }
                  />
                )
              )}
            </div>
          ) : (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">
              This Map has no tab sections.
              Run the Maps seed script to
              restore its six canonical
              sections.
            </div>
          )}
        </section>
      </div>
    </AdminLayout>
  );
}

export default function MapEditPage() {
  const { id } = useParams();

  /*
   * The key remounts the editor when
   * moving directly between Map IDs.
   * This avoids synchronously resetting
   * component state inside an effect.
   */
  return (
    <MapEditPageContent
      key={id}
      mapId={id}
    />
  );
}

