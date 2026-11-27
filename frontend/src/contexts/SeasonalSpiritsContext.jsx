import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getPublishedSeasonalSpirits,
} from "../services/seasonalSpirit.service";

import {
  mergeSeasonalSpirits,
} from "../utils/seasonalSpiritAdapter";

const SeasonalSpiritsContext = createContext({
  seasonSpirits: [],
  loading: false,
  error: "",
});

export function SeasonalSpiritsProvider({
  season,
  children,
}) {
  const [publishedSpirits, setPublishedSpirits] = useState([]);
  const [loading, setLoading] = useState(Boolean(season?.id));
  const [error, setError] = useState("");

  const seasonId = season?.id ?? null;

  useEffect(() => {
    if (!seasonId) {
      setPublishedSpirits([]);
      setLoading(false);
      setError("");
      return undefined;
    }

    const controller = new AbortController();

    async function loadSeasonalSpirits() {
      try {
        setPublishedSpirits([]);
        setLoading(true);
        setError("");

        const result = await getPublishedSeasonalSpirits(
          seasonId,
          { signal: controller.signal },
        );

        if (!controller.signal.aborted) {
          setPublishedSpirits(result);
        }
      } catch (requestError) {
        if (controller.signal.aborted) {
          return;
        }

        console.error(
          `Unable to load published Seasonal Spirits for season ${seasonId}:`,
          requestError,
        );

        setPublishedSpirits([]);
        setError(
          requestError.response?.data?.message ||
          "Unable to load published Seasonal Spirits.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadSeasonalSpirits();

    return () => controller.abort();
  }, [seasonId]);

  const seasonSpirits = useMemo(
    () =>
      mergeSeasonalSpirits(
        season?.season_spirits,
        publishedSpirits,
        season,
      ),
    [season, publishedSpirits],
  );

  const value = useMemo(
    () => ({
      seasonSpirits,
      loading,
      error,
    }),
    [seasonSpirits, loading, error],
  );

  return (
    <SeasonalSpiritsContext.Provider value={value}>
      {children}
    </SeasonalSpiritsContext.Provider>
  );
}

export function useSeasonalSpirits() {
  return useContext(SeasonalSpiritsContext);
}
