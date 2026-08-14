import {
  useEffect,
  useState,
} from "react";

import AdminLayout
  from "../../components/layout/AdminLayout.jsx";

import MapTable
  from "../../components/maps/MapTable.jsx";

import {
  getAdminMaps,
} from "../../services/adminMap.service.js";

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to load Maps."
  );
}

export default function MapListPage() {
  const [maps, setMaps] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  async function reloadMaps() {
    try {
      setLoading(true);
      setError("");

      const response =
        await getAdminMaps();

      setMaps(
        Array.isArray(response?.data)
          ? response.data
          : []
      );
    } catch (requestError) {
      setMaps([]);

      setError(
        getErrorMessage(
          requestError
        )
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let cancelled = false;

    getAdminMaps()
      .then((response) => {
        if (!cancelled) {
          setMaps(
            Array.isArray(
              response?.data
            )
              ? response.data
              : []
          );
        }
      })
      .catch((requestError) => {
        if (!cancelled) {
          setError(
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
  }, []);

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Maps
        </h1>

        <p className="mt-1 text-sm text-gray-600">
          Manage the eight canonical
          SkyKidHero Maps and their tab
          information.
        </p>
      </div>

      {error && (
        <div
          role="alert"
          className="mb-6 flex flex-col gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>{error}</span>

          <button
            type="button"
            onClick={reloadMaps}
            className="cursor-pointer rounded-md border border-red-300 px-3 py-1.5 font-medium hover:bg-red-100"
          >
            Try again
          </button>
        </div>
      )}

      {loading ? (
        <div className="rounded-xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500 shadow-sm">
          Loading Maps...
        </div>
      ) : (
        <MapTable maps={maps} />
      )}
    </AdminLayout>
  );
}