import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SeasonCoreForm from "../../components/seasons/SeasonCoreForm.jsx";
import SeasonMediaManager
  from "../../components/seasons/SeasonMediaManager.jsx";

import {
  getAdminSeason,
  createAdminSeason,
  updateAdminSeason,
} from "../../services/adminSeason.service.js";

export default function SeasonEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isCreate = id === "new";

  const [season, setSeason] = useState(null);
  const [loading, setLoading] = useState(!isCreate);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isCreate) return;

    async function loadSeason() {
      try {
        setLoading(true);
        setError("");

        const response =
          await getAdminSeason(id);

        setSeason(response.data);
      } catch (err) {
        setError(
          err?.response?.data?.message ||
            "Failed to load Season.",
        );
      } finally {
        setLoading(false);
      }
    }

    loadSeason();
  }, [id, isCreate]);

  async function handleSubmit(data) {
    try {
      setSaving(true);
      setError("");

      if (isCreate) {
        const response =
          await createAdminSeason(data);

        navigate(
          `/seasons/${response.data.id}/edit`,
          { replace: true },
        );

        return;
      }

      const response =
        await updateAdminSeason(
          Number(id),
          data,
        );

      setSeason(response.data);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to save Season.",
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
        <div className="rounded-lg border p-4">
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