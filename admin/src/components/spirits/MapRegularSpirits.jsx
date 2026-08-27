import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  ArrowPathIcon,
  PhotoIcon,
  PencilSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import {
  getAdminRegularSpiritsByMap,
} from "../../services/adminSpirit.service.js";

function getErrorMessage(error) {
  return (
    error.response?.data?.message ||
    error.message ||
    "Unable to load Regular Spirits."
  );
}

function formatEnum(value) {
  if (!value) {
    return "—";
  }

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

function SpiritRow({
  spirit,
}) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
          {spirit.iconImage ? (
            <img
              src={
                spirit.iconImage
              }
              alt={spirit.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <PhotoIcon className="h-7 w-7 text-gray-400" />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-bold text-gray-900">
            {spirit.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-500">
            {spirit.code}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
              {formatEnum(
                spirit.category
              )}
            </span>

            <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
              {formatEnum(
                spirit.reliveType
              )}
            </span>

            <span
              className={
                spirit.published
                  ? "rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700"
                  : "rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600"
              }
            >
              {spirit.published
                ? "Published"
                : "Hidden"}
            </span>
          </div>
        </div>
      </div>

      <Link
        to={`/spirits/${spirit.id}/edit`}
        className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
      >
        <PencilSquareIcon className="h-4 w-4" />
        Edit
      </Link>
    </article>
  );
}

export default function MapRegularSpirits({
  mapId,
}) {
  const [spirits, setSpirits] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  function loadSpirits() {
    if (!mapId) {
      return;
    }

    setLoading(true);
    setError("");

    getAdminRegularSpiritsByMap(
      mapId
    )
      .then((response) => {
        setSpirits(
          Array.isArray(
            response?.data
          )
            ? response.data
            : []
        );
      })
      .catch(
        (requestError) => {
          setSpirits([]);

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

    setLoading(true);
    setError("");

    getAdminRegularSpiritsByMap(
      mapId
    )
      .then((response) => {
        if (cancelled) {
          return;
        }

        setSpirits(
          Array.isArray(
            response?.data
          )
            ? response.data
            : []
        );
      })
      .catch(
        (requestError) => {
          if (cancelled) {
            return;
          }

          setSpirits([]);

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

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <UserGroupIcon className="h-6 w-6 text-sky-600" />

            <h2 className="text-xl font-bold text-gray-900">
              Regular Spirits
            </h2>
          </div>

          <p className="mt-1 text-sm text-gray-600">
            Manage the Regular Spirits
            that belong to this Map.
          </p>
        </div>

        {!loading && (
          <span className="w-fit rounded-full bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-700">
            {spirits.length}{" "}
            {spirits.length === 1
              ? "Spirit"
              : "Spirits"}
          </span>
        )}
      </div>

      {loading ? (
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-sm text-gray-500 shadow-sm">
          Loading Regular Spirits...
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-sm font-semibold text-red-700">
            {error}
          </p>

          <button
            type="button"
            onClick={
              loadSpirits
            }
            className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-800"
          >
            <ArrowPathIcon className="h-4 w-4" />
            Try again
          </button>
        </div>
      ) : spirits.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {spirits.map(
            (spirit) => (
              <SpiritRow
                key={spirit.id}
                spirit={spirit}
              />
            )
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">
          This Map currently has no
          Regular Spirits.
        </div>
      )}
    </section>
  );
}