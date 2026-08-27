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

  /*
   * Find the existing static
   * Regular Spirit section.
   *
   * We currently keep this only
   * as a temporary media fallback
   * during the CMS migration.
   */
  const staticRegularSpirits =
    useMemo(() => {
      const section =
        pageData?.find(
          (item) =>
            item.value ===
            "regular_spirits"
        );

      return (
        section?.spirits ??
        []
      );
    }, [pageData]);

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
              legacySpirits:
                staticRegularSpirits,

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

        setError(
          requestError
            .response
            ?.data
            ?.message ||
            "Unable to load Regular Spirits."
        );

        /*
         * Temporary migration
         * fallback.
         *
         * Keep the public Map usable
         * even if the API request
         * fails.
         */
        setRegularSpirits(
          staticRegularSpirits
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
    staticRegularSpirits,
  ]);

  /*
   * Replace only the static
   * Regular Spirit array.
   *
   * Seasonal Spirits,
   * Winged Lights and Map Shrines
   * remain untouched.
   */
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