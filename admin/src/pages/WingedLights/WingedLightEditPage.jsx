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
} from "@heroicons/react/24/outline";

import AdminLayout
  from "../../components/layout/AdminLayout.jsx";

import WingedLightCoreForm
  from "../../components/wingedLights/WingedLightCoreForm.jsx";

import WingedLightMediaManager
  from "../../components/wingedLights/WingedLightMediaManager.jsx";

import {
  getAdminWingedLight,
  removeAdminWingedLightImage,
  updateAdminWingedLight,
  uploadAdminWingedLightImage,
} from "../../services/adminWingedLight.service.js";

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to load the Winged Light."
  );
}

function WingedLightEditPageContent({
  wingedLightId,
}) {
  const [
    wingedLight,
    setWingedLight,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    loadError,
    setLoadError,
  ] = useState("");

  function requestWingedLight() {
    return getAdminWingedLight(
      wingedLightId
    );
  }

  function reloadWingedLight() {
    setLoading(true);
    setLoadError("");

    requestWingedLight()
      .then((response) => {
        setWingedLight(
          response?.data ?? null
        );
      })
      .catch(
        (requestError) => {
          setWingedLight(null);

          setLoadError(
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

    setLoading(true);
    setLoadError("");

    requestWingedLight()
      .then((response) => {
        if (cancelled) {
          return;
        }

        setWingedLight(
          response?.data ?? null
        );
      })
      .catch(
        (requestError) => {
          if (cancelled) {
            return;
          }

          setWingedLight(null);

          setLoadError(
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
  }, [wingedLightId]);

  async function handleSave(
    payload
  ) {
    const response =
      await updateAdminWingedLight(
        wingedLightId,
        payload
      );

    const updatedWingedLight =
      response.data;

    setWingedLight(
      updatedWingedLight
    );

    return updatedWingedLight;
  }

  async function handleImageUpload(
    file
  ) {
    if (!wingedLightId) {
      throw new Error(
        "Winged Light ID is missing."
      );
    }

    const response =
      await uploadAdminWingedLightImage(
        wingedLightId,
        file
      );

    const updatedWingedLight =
      response.data;

    setWingedLight(
      updatedWingedLight
    );

    return updatedWingedLight;
  }

  async function handleImageRemove() {
    if (!wingedLightId) {
      throw new Error(
        "Winged Light ID is missing."
      );
    }

    const response =
      await removeAdminWingedLightImage(
        wingedLightId
      );

    const updatedWingedLight =
      response.data;

    setWingedLight(
      updatedWingedLight
    );

    return updatedWingedLight;
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="rounded-xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 shadow-sm">
          Loading Winged Light editor...
        </div>
      </AdminLayout>
    );
  }

  if (
    loadError ||
    !wingedLight
  ) {
    return (
      <AdminLayout>
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h1 className="text-lg font-bold text-red-800">
            Unable to load Winged Light
          </h1>

          <p className="mt-2 text-sm text-red-700">
            {loadError ||
              "Winged Light not found."}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={
                reloadWingedLight
              }
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

  const mapId =
    wingedLight.mapId ||
    wingedLight.map?.id;

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          {mapId ? (
            <Link
              to={`/maps/${mapId}/edit`}
              className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline"
            >
              <ArrowLeftIcon className="h-4 w-4" />

              Back to{" "}
              {wingedLight.map?.name ||
                "Map"}
            </Link>
          ) : (
            <Link
              to="/maps"
              className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline"
            >
              <ArrowLeftIcon className="h-4 w-4" />

              Back to Maps
            </Link>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
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
                <span className="text-2xl font-bold text-gray-400">
                  {
                    wingedLight.displayOrder
                  }
                </span>
              )}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Manage{" "}
                {
                  wingedLight.label
                }
              </h1>

              <p className="mt-1 text-sm text-gray-600">
                {
                  wingedLight.code
                }
                {" • "}
                {wingedLight.map?.name ||
                  "Winged Light"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Winged Light code
            </p>

            <p className="mt-2 font-bold text-gray-900">
              {
                wingedLight.code
              }
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Display order
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {
                wingedLight.displayOrder
              }
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Group
            </p>

            <p className="mt-2 font-bold text-gray-900">
              {wingedLight.groupKey ||
                "—"}
            </p>

            {wingedLight
              .seasonGroupKey && (
              <p className="mt-1 text-xs text-gray-500">
                {
                  wingedLight
                    .seasonGroupKey
                }
              </p>
            )}
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Winged Light status
            </p>

            <p
              className={
                wingedLight.published
                  ? "mt-2 text-lg font-bold text-green-700"
                  : "mt-2 text-lg font-bold text-gray-600"
              }
            >
              {wingedLight.published
                ? "Published"
                : "Hidden"}
            </p>
          </div>
        </div>

        <WingedLightCoreForm
          wingedLight={
            wingedLight
          }
          onSave={
            handleSave
          }
        />

        <WingedLightMediaManager
          wingedLight={
            wingedLight
          }
          onUpload={
            handleImageUpload
          }
          onRemove={
            handleImageRemove
          }
        />
      </div>
    </AdminLayout>
  );
}

export default function WingedLightEditPage() {
  const { id } =
    useParams();

  return (
    <WingedLightEditPageContent
      key={id}
      wingedLightId={id}
    />
  );
}