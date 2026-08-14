import {
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  Spinner,
  Typography,
} from "@material-tailwind/react";

import {
  getPublishedMap,
} from "../services/map.service.js";

/*
 * Keep lazy component definitions outside
 * MapContainer so they are created only once.
 *
 * The key includes both the canonical Map ID
 * and slug to prevent mismatched routes.
 */
const MAP_COMPONENTS = {
  "1:isle-of-dawn": lazy(
    () => import("./PageIsle")
  ),

  "2:daylight-prairie": lazy(
    () => import("./PagePrairie")
  ),

  "3:hidden-forest": lazy(
    () => import("./PageForest")
  ),

  "4:valley-of-triumph": lazy(
    () => import("./PageValley")
  ),

  "5:golden-wasteland": lazy(
    () => import("./PageWasteland")
  ),

  "6:vault-of-knowledge": lazy(
    () => import("./PageVault")
  ),

  "7:eye-of-eden": lazy(
    () => import("./PageEden")
  ),

  "8:aviary-village": lazy(
    () => import("./PageAviary")
  ),
};

function MapLoadingState() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <Spinner
        className="h-12 w-12"
        color="amber"
      />

      <Typography className="animate-pulse font-mono text-xs uppercase tracking-widest text-gray-400">
        Teleporting to Map area...
      </Typography>
    </div>
  );
}

function MapNotFound({
  mapId,
  mapName,
  message = "",
}) {
  const requestedRoute =
    `/maps/${mapId || "unknown"}/${mapName || "unknown"}`;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <Typography
        variant="h3"
        className="mb-3 uppercase text-[#fe7f2d]"
      >
        You reached an Out-of-Bounds area!
      </Typography>

      <Typography className="mb-3 max-w-md text-gray-400">
        The Map route{" "}
        <span className="font-semibold text-gray-200">
          {requestedRoute}
        </span>{" "}
        does not exist or no longer matches
        the current SkyKidHero Map directory.
      </Typography>

      {message && (
        <Typography className="mb-6 max-w-md text-sm text-gray-500">
          {message}
        </Typography>
      )}

      <Link
        to="/"
        className="theme-button inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold uppercase"
      >
        Return Home
      </Link>
    </div>
  );
}

export default function MapContainer() {
  const {
    mapId = "",
    mapName = "",
  } = useParams();

  const routeKey =
    `${mapId}:${mapName}`;

  const TargetMap =
    MAP_COMPONENTS[routeKey];

  const [
    requestState,
    setRequestState,
  ] = useState({
    routeKey: null,
    map: null,
    error: "",
  });

  useEffect(() => {
    window.scrollTo(
      0,
      0
    );
  }, [routeKey]);

  /*
   * Load the Map metadata from the backend.
   *
   * We do not synchronously call setState
   * at the beginning of this effect.
   * routeKey is used to determine the
   * loading state instead.
   */
  useEffect(() => {
    if (!TargetMap) {
      return undefined;
    }

    let cancelled = false;

    getPublishedMap(
      mapId,
      mapName
    )
      .then((map) => {
        if (cancelled) {
          return;
        }

        if (!map) {
          setRequestState({
            routeKey,
            map: null,
            error:
              "The requested Map could not be found.",
          });

          return;
        }

        setRequestState({
          routeKey,
          map,
          error: "",
        });
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }

        const status =
          error.response?.status;

        let message =
          "Unable to load this Map right now.";

        if (status === 404) {
          message =
            "This Map is unavailable or is not currently published.";
        } else if (
          error.response?.data?.message
        ) {
          message =
            error.response.data.message;
        }

        setRequestState({
          routeKey,
          map: null,
          error: message,
        });
      });

    return () => {
      cancelled = true;
    };
  }, [
    mapId,
    mapName,
    routeKey,
    TargetMap,
  ]);

  /*
   * Reject invalid frontend routes before
   * making any backend request.
   */
  if (!TargetMap) {
    return (
      <MapNotFound
        mapId={mapId}
        mapName={mapName}
      />
    );
  }

  /*
   * When the route changes, the previous
   * Map data may still be in requestState.
   *
   * Comparing routeKey prevents stale Map
   * information from briefly rendering.
   */
  const isLoading =
    requestState.routeKey !==
    routeKey;

  if (isLoading) {
    return (
      <MapLoadingState />
    );
  }

  if (
    requestState.error ||
    !requestState.map
  ) {
    return (
      <MapNotFound
        mapId={mapId}
        mapName={mapName}
        message={
          requestState.error
        }
      />
    );
  }

  return (
    <Suspense
      fallback={
        <MapLoadingState />
      }
    >
      <TargetMap
        mapData={
          requestState.map
        }
      />
    </Suspense>
  );
}