import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getPublishedRegularSpirits,
} from "../services/spirit.service";

import {
  adaptRegularSpirits,
} from "../utils/regularSpiritAdapter";

export default function useRegularSpirits({
  mapId,
  mapData,
  pageData,
}) {
  const [
    regularSpirits,
    setRegularSpirits,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadRegularSpirits() {
      try {
        setLoading(true);
        setError("");

        const apiSpirits =
          await getPublishedRegularSpirits(
            mapId
          );

        if (cancelled) {
          return;
        }

        const adapted =
          adaptRegularSpirits(
            apiSpirits,
            {
              mapData,
            }
          );

        setRegularSpirits(
          adapted
        );
      } catch (requestError) {
        if (cancelled) {
          return;
        }

        console.error(
          `Unable to load Regular Spirits for Map ${mapId}:`,
          requestError
        );

        setRegularSpirits(
          []
        );

        setError(
          requestError
            .response
            ?.data
            ?.message ||
            "Unable to load Regular Spirits."
        );
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    if (!mapId) {
      setRegularSpirits([]);
      setLoading(false);

      return () => {
        cancelled = true;
      };
    }

    loadRegularSpirits();

    return () => {
      cancelled = true;
    };
  }, [
    mapId,
    mapData,
  ]);

  const resolvedPageData =
    useMemo(
      () =>
        pageData.map(
          (section) => {
            if (
              section.value !==
              "regular_spirits"
            ) {
              return section;
            }

            return {
              ...section,

              spirits:
                regularSpirits,
            };
          }
        ),
      [
        pageData,
        regularSpirits,
      ]
    );

  return {
    regularSpirits,
    loading,
    error,
    pageData:
      resolvedPageData,
  };
}