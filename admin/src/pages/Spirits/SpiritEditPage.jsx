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

import SpiritCoreForm
  from "../../components/spirits/SpiritCoreForm.jsx";

import {
  getAdminRegularSpirit,
  removeAdminSpiritMedia,
  updateAdminRegularSpirit,
  uploadAdminSpiritMedia,
  updateAdminSpiritCollectibles,
  updateAdminSpiritTreeCosts,
  removeAdminSpiritCollectibleImage,
  uploadAdminSpiritCollectibleImage,
} from "../../services/adminSpirit.service.js";

import SpiritMediaManager from "../../components/spirits/SpiritMediaManager.jsx";

import SpiritCollectiblesEditor from "../../components/spirits/SpiritCollectiblesEditor.jsx";

import SpiritTreeCostEditor from "../../components/spirits/SpiritTreeCostEditor.jsx";

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to load the Spirit."
  );
}

function SpiritEditPageContent({
  spiritId,
}) {
  const [spirit, setSpirit] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [loadError, setLoadError] =
    useState("");

  function requestSpirit() {
    return getAdminRegularSpirit(
      spiritId
    );
  }

  function reloadSpirit() {
    setLoading(true);
    setLoadError("");

    requestSpirit()
      .then((response) => {
        setSpirit(
          response?.data ?? null
        );
      })
      .catch(
        (requestError) => {
          setSpirit(null);

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

    requestSpirit()
      .then((response) => {
        if (!cancelled) {
          setSpirit(
            response?.data ?? null
          );
        }
      })
      .catch(
        (requestError) => {
          if (!cancelled) {
            setLoadError(
              getErrorMessage(
                requestError
              )
            );
          }
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
  }, [spiritId]);

  async function handleCollectiblesSave(
    collectibles
  ) {
    const response =
      await updateAdminSpiritCollectibles(
        spiritId,
        collectibles
      );

    const updatedSpirit =
      response.data;

    setSpirit(
      updatedSpirit
    );

    return updatedSpirit;
  }

  async function handleTreeCostsSave(
    treeCosts
  ) {
    const response =
      await updateAdminSpiritTreeCosts(
        spiritId,
        treeCosts
      );

    const updatedSpirit =
      response.data;

    setSpirit(
      updatedSpirit
    );

    return updatedSpirit;
  }

  async function handleSave(
    payload
  ) {
    const response =
      await updateAdminRegularSpirit(
        spiritId,
        payload
      );

    const updatedSpirit =
      response.data;

    setSpirit(
      updatedSpirit
    );

    return updatedSpirit;
  }

  async function handleMediaUpload(
    slot,
    file
  ) {
    if (!spiritId) {
      throw new Error(
        "Spirit ID is missing."
      );
    }

    const response =
      await uploadAdminSpiritMedia(
        spiritId,
        slot,
        file
      );

    const updatedSpirit =
      response.data;

    setSpirit(
      updatedSpirit
    );

    return updatedSpirit;
  }

  async function handleMediaRemove(
    slot
  ) {
    if (!spiritId) {
      throw new Error(
        "Spirit ID is missing."
      );
    }

    const response =
      await removeAdminSpiritMedia(
        spiritId,
        slot
      );

    const updatedSpirit =
      response.data;

    setSpirit(
      updatedSpirit
    );

    return updatedSpirit;
  }

  async function handleCollectibleImageUpload(
    collectibleId,
    file
  ) {
    const response =
      await uploadAdminSpiritCollectibleImage(
        spiritId,
        collectibleId,
        file
      );

    const updatedSpirit =
      response.data;

    setSpirit(
      updatedSpirit
    );

    return updatedSpirit;
  }

  async function handleCollectibleImageRemove(
      collectibleId
    ) {
      const response =
        await removeAdminSpiritCollectibleImage(
          spiritId,
          collectibleId
        );

      const updatedSpirit =
        response.data;

      setSpirit(
        updatedSpirit
      );

      return updatedSpirit;
  }
  if (loading) {
    return (
      <AdminLayout>
        <div className="rounded-xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 shadow-sm">
          Loading Spirit editor...
        </div>
      </AdminLayout>
    );
  }

  if (
    loadError ||
    !spirit
  ) {
    return (
      <AdminLayout>
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h1 className="text-lg font-bold text-red-800">
            Unable to load Spirit
          </h1>

          <p className="mt-2 text-sm text-red-700">
            {loadError ||
              "Regular Spirit not found."}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={
                reloadSpirit
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
    spirit.mapId ||
    spirit.map?.id;

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
              {spirit.map?.name ||
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
              {spirit.iconImage ? (
                <img
                  src={
                    spirit.iconImage
                  }
                  alt={spirit.name}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-2xl font-bold text-gray-400">
                  {spirit.displayOrder}
                </span>
              )}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Manage{" "}
                {spirit.name}
              </h1>

              <p className="mt-1 text-sm text-gray-600">
                {spirit.code}
                {" • "}
                {spirit.map?.name ||
                  "Regular Spirit"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Spirit code
            </p>

            <p className="mt-2 font-bold text-gray-900">
              {spirit.code}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Display order
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {
                spirit.displayOrder
              }
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Difficulty
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {
                spirit.difficultyLevel
              }
              %
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Spirit status
            </p>

            <p
              className={
                spirit.published
                  ? "mt-2 text-lg font-bold text-green-700"
                  : "mt-2 text-lg font-bold text-gray-600"
              }
            >
              {spirit.published
                ? "Published"
                : "Hidden"}
            </p>
          </div>
        </div>

        <SpiritCoreForm
          spirit={spirit}
          onSave={
            handleSave
          }
        />
        
        <SpiritMediaManager
          spirit={spirit}
          onUpload={
            handleMediaUpload
          }
          onRemove={
            handleMediaRemove
          }
        />

        <SpiritCollectiblesEditor
          collectibles={
            spirit.collectibles
          }
          onSave={
            handleCollectiblesSave
          }
          onImageUpload={
            handleCollectibleImageUpload
          }
          onImageRemove={
            handleCollectibleImageRemove
          }
        />

        <SpiritTreeCostEditor
          treeCosts={
            spirit.treeCosts
          }
          onSave={
            handleTreeCostsSave
          }
/>
      </div>
    </AdminLayout>
  );
}

export default function SpiritEditPage() {
  const { id } =
    useParams();

  return (
    <SpiritEditPageContent
      key={id}
      spiritId={id}
    />
  );
}