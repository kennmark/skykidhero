import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  getPublishedWingedLightsByMap,
} from "../services/wingedLight.service";

import {
  adaptPublicWingedLights,
} from "../adapters/wingedLight.adapter";

function getErrorMessage(
  error
) {
  return (
    error?.message ||
    "Unable to load Winged Lights."
  );
}

export default function useMapWingedLights(
  mapId
) {
  const [
    wingedLights,
    setWingedLights,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(
    Boolean(mapId)
  );

  const [
    error,
    setError,
  ] = useState("");

  const [
    reloadKey,
    setReloadKey,
  ] = useState(0);

  const retry =
    useCallback(() => {
      setReloadKey(
        (current) =>
          current + 1
      );
    }, []);

  useEffect(() => {
    if (
      mapId === null ||
      mapId === undefined ||
      mapId === ""
    ) {
      setWingedLights([]);
      setLoading(false);
      setError("");

      return undefined;
    }

    const controller =
      new AbortController();

    setLoading(true);
    setError("");

    getPublishedWingedLightsByMap(
      mapId,
      {
        signal:
          controller.signal,
      }
    )
      .then(
        (
          responseWingedLights
        ) => {
          setWingedLights(
            adaptPublicWingedLights(
              responseWingedLights
            )
          );
        }
      )
      .catch(
        (requestError) => {
          if (
            requestError?.name ===
            "AbortError"
          ) {
            return;
          }

          setWingedLights([]);

          setError(
            getErrorMessage(
              requestError
            )
          );
        }
      )
      .finally(() => {
        if (
          !controller.signal
            .aborted
        ) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [
    mapId,
    reloadKey,
  ]);

  return {
    wingedLights,

    count:
      wingedLights.length,

    loading,

    error,

    retry,
  };
}