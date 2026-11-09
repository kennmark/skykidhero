import {
  useEffect,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import SeasonCoreForm
  from "../../components/seasons/SeasonCoreForm.jsx";

import SeasonMediaManager
  from "../../components/seasons/SeasonMediaManager.jsx";

import {
  getAdminSeason,
  createAdminSeason,
  updateAdminSeason,
} from "../../services/adminSeason.service.js";

function getErrorMessage(error) {
  return (
    error?.response?.data?.message ||
    error?.message ||
    "Unable to save the Season."
  );
}

function isValidSeasonId(value) {
  if (!value) {
    return false;
  }

  const numericId =
    Number(value);

  return (
    Number.isInteger(numericId) &&
    numericId > 0
  );
}

function SeasonEditPageContent() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  /*
   * Create mode is determined by the
   * actual route, not by converting the
   * route parameter to a number.
   *
   * /seasons/new
   *      -> create mode
   *
   * /seasons/12/edit
   *      -> edit mode
   */
  const isCreate =
    location.pathname.endsWith(
      "/seasons/new"
    ) || id === "new";

  const seasonId =
    isCreate
      ? null
      : Number(id);

  const [season, setSeason] =
    useState(null);

  const [loading, setLoading] =
    useState(!isCreate);

  const [saving, setSaving] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (isCreate) {
      setSeason(null);
      setLoading(false);
      return;
    }

    if (!isValidSeasonId(id)) {
      setSeason(null);
      setLoading(false);
      setError(
        "Invalid Season ID."
      );
      return;
    }

    let cancelled = false;

    async function loadSeason() {
      try {
        setLoading(true);
        setError("");

        const response =
          await getAdminSeason(
            seasonId
          );

        if (cancelled) {
          return;
        }

        setSeason(
          response?.data ?? null
        );
      } catch (requestError) {
        if (cancelled) {
          return;
        }

        setSeason(null);

        setError(
          getErrorMessage(
            requestError
          )
        );
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadSeason();

    return () => {
      cancelled = true;
    };
  }, [
    id,
    seasonId,
    isCreate,
  ]);

  async function handleSubmit(
    data
  ) {
    try {
      setSaving(true);
      setError("");

      /*
       * CREATE
       *
       * Never send the route parameter
       * to the update endpoint.
       */
      if (isCreate) {
        const response =
          await createAdminSeason(
            data
          );

        const createdSeason =
          response?.data;

        if (
          !createdSeason?.id
        ) {
          throw new Error(
            "Season was created, but no Season ID was returned."
          );
        }

        setSeason(
          createdSeason
        );

        navigate(
          `/seasons/${createdSeason.id}/edit`,
          {
            replace: true,
          }
        );

        return;
      }

      /*
       * EDIT
       *
       * Validate before constructing
       * the PUT request.
       */
      if (
        !isValidSeasonId(id)
      ) {
        throw new Error(
          "Invalid Season ID."
        );
      }

      const response =
        await updateAdminSeason(
          seasonId,
          data
        );

      setSeason(
        response?.data ?? null
      );
    } catch (requestError) {
      setError(
        getErrorMessage(
          requestError
        )
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        Loading Season...
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <button
          type="button"
          onClick={() =>
            navigate("/seasons")
          }
          className="mb-3 text-sm underline"
        >
          ← Back to Seasons
        </button>

        <h1 className="text-2xl font-semibold">
          {isCreate
            ? "Create Season"
            : "Edit Season"}
        </h1>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="rounded-xl border p-6">
        <SeasonCoreForm
          initialData={season}
          onSubmit={handleSubmit}
          saving={saving}
        />
      </div>

      {!isCreate && season && (
        <div className="grid gap-6 lg:grid-cols-2">
          <SeasonMediaManager
            season={season}
            mediaType="banner"
            label="Season Banner Image"
            description="The main banner image displayed for this Season."
            onUpdated={setSeason}
          />

          <SeasonMediaManager
            season={season}
            mediaType="icon"
            label="Season Icon Image"
            description="The icon image used to represent this Season."
            onUpdated={setSeason}
          />
        </div>
      )}
    </div>
  );
}

export default function SeasonEditPage() {
  const { id } = useParams();

  /*
   * Remount when switching between
   * Season IDs/routes.
   */
  return (
    <SeasonEditPageContent
      key={id ?? "new"}
    />
  );
}