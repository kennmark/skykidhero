import {
  lazy,
  Suspense,
  useEffect,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  Spinner,
  Typography,
} from "@material-tailwind/react";

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
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3">
      <Spinner
        className="h-16 w-16"
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
}) {
  const requestedRoute =
    `/maps/${mapId || "unknown"}/${mapName || "unknown"}`;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <Typography
        variant="h3"
        className="mb-2 uppercase text-[#fe7f2d]"
      >
        Map Area Not Found
      </Typography>

      <Typography className="mb-6 max-w-md text-gray-400">
        The Map route{" "}
        <span className="font-semibold text-gray-200">
          {requestedRoute}
        </span>{" "}
        does not exist or no longer matches
        the current SkyKidHero Map directory.
      </Typography>

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [routeKey]);

  if (!TargetMap) {
    return (
      <MapNotFound
        mapId={mapId}
        mapName={mapName}
      />
    );
  }

  return (
    <Suspense
      fallback={<MapLoadingState />}
    >
      <TargetMap />
    </Suspense>
  );
}