import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getAdminSeasons,
} from "../../services/adminSeason.service.js";

export default function SeasonsPage() {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadSeasons() {
    try {
      setLoading(true);
      setError("");

      const response =
        await getAdminSeasons();

      setSeasons(response.data ?? []);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to load Seasons.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSeasons();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        Loading Seasons...
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">
            Seasons
          </h1>

          <p className="mt-1 text-sm opacity-70">
            Manage your Sky seasons.
          </p>
        </div>

        <Link
          to="/seasons/new"
          className="rounded-lg px-4 py-2.5 font-medium"
        >
          Add Season
        </Link>
      </div>

      {error && (
        <div className="rounded-lg border p-4">
          {error}
        </div>
      )}

      {seasons.length === 0 ? (
        <div className="rounded-xl border p-8 text-center">
          No Seasons found.
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3">
                    #
                  </th>
                  <th className="px-4 py-3">
                    Season
                  </th>
                  <th className="px-4 py-3">
                    Code
                  </th>
                  <th className="px-4 py-3">
                    Year
                  </th>
                  <th className="px-4 py-3">
                    Status
                  </th>
                  <th className="px-4 py-3 text-right">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {seasons.map((season) => (
                  <tr
                    key={season.id}
                    className="border-b last:border-b-0"
                  >
                    <td className="px-4 py-3">
                      {season.number}
                    </td>

                    <td className="px-4 py-3">
                      {season.name}
                    </td>

                    <td className="px-4 py-3">
                      {season.code}
                    </td>

                    <td className="px-4 py-3">
                      {season.year}
                    </td>

                    <td className="px-4 py-3">
                      {season.published
                        ? "Published"
                        : "Draft"}
                    </td>

                    <td className="px-4 py-3 text-right">
                      <Link
                        to={`/seasons/${season.id}/edit`}
                        className="font-medium underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}