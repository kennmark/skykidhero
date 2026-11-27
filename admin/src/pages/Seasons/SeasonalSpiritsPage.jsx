import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/layout/AdminLayout.jsx";
import { getAdminSeasons } from "../../services/adminSeason.service.js";
import { getAdminSeasonalSpiritsBySeason } from "../../services/adminSeasonalSpirit.service.js";

function getErrorMessage(error) {
  return (
    error?.response?.data?.message ||
    error?.message ||
    "Unable to load Seasonal Spirits."
  );
}

export default function SeasonalSpiritsPage() {
  const [seasons, setSeasons] = useState([]);
  const [spiritsBySeason, setSpiritsBySeason] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const seasonResponse = await getAdminSeasons();
        const seasonList = seasonResponse?.data ?? [];

        const spiritResults = await Promise.all(
          seasonList.map(async (season) => {
            try {
              const response = await getAdminSeasonalSpiritsBySeason(season.id);

              return [
                season.id,
                {
                  spirits: response?.data ?? [],
                  error: "",
                },
              ];
            } catch (requestError) {
              return [
                season.id,
                {
                  spirits: [],
                  error: getErrorMessage(requestError),
                },
              ];
            }
          }),
        );

        if (cancelled) return;

        setSeasons(seasonList);
        setSpiritsBySeason(Object.fromEntries(spiritResults));
      } catch (requestError) {
        if (!cancelled) {
          setError(getErrorMessage(requestError));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-sm text-gray-500">
          Loading Seasonal Spirits...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-gray-900">Seasonal Spirits</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage the spirits associated with each Sky season.
          </p>
        </header>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {seasons.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-sm text-gray-500">
            No Seasons found. Create a Season before adding Seasonal Spirits.
          </div>
        ) : (
          <div className="space-y-5">
            {seasons.map((season) => {
              const result = spiritsBySeason[season.id] ?? {
                spirits: [],
                error: "",
              };

              return (
                <section
                  key={season.id}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="flex flex-col gap-3 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Season {season.number} · {season.year}
                      </p>
                      <h2 className="mt-1 text-lg font-bold text-gray-900">
                        {season.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-500">
                        {result.spirits.length} Seasonal Spirit
                        {result.spirits.length === 1 ? "" : "s"}
                        {" · "}
                        {season.published ? "Published season" : "Draft season"}
                      </p>
                    </div>

                    <Link
                      to={`/seasons/${season.id}/spirits/new`}
                      className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
                    >
                      Add Seasonal Spirit
                    </Link>
                  </div>

                  <div className="p-5">
                    {result.error ? (
                      <p className="text-sm text-red-600">{result.error}</p>
                    ) : result.spirits.length === 0 ? (
                      <p className="text-sm text-gray-500">
                        No Seasonal Spirits have been added to this Season yet.
                      </p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[640px] text-left text-sm">
                          <thead>
                            <tr className="border-b border-gray-200 text-xs uppercase tracking-wide text-gray-500">
                              <th className="px-3 py-3">Order</th>
                              <th className="px-3 py-3">Spirit</th>
                              <th className="px-3 py-3">Code</th>
                              <th className="px-3 py-3">Category</th>
                              <th className="px-3 py-3">Status</th>
                              <th className="px-3 py-3 text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.spirits.map((spirit) => (
                              <tr
                                key={spirit.id}
                                className="border-b border-gray-100 last:border-0"
                              >
                                <td className="px-3 py-3">
                                  {spirit.displayOrder}
                                </td>
                                <td className="px-3 py-3">
                                  <div className="flex items-center gap-3">
                                    {spirit.iconImage ? (
                                      <img
                                        src={spirit.iconImage}
                                        alt=""
                                        className="h-9 w-9 rounded-lg border border-gray-200 bg-gray-50 object-contain"
                                      />
                                    ) : (
                                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-400">
                                        {spirit.displayOrder}
                                      </div>
                                    )}
                                    <span className="font-semibold text-gray-900">
                                      {spirit.name}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-3 py-3 text-gray-600">
                                  {spirit.code}
                                </td>
                                <td className="px-3 py-3 text-gray-600">
                                  {spirit.category}
                                </td>
                                <td className="px-3 py-3">
                                  <span
                                    className={
                                      spirit.published
                                        ? "rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700"
                                        : "rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600"
                                    }
                                  >
                                    {spirit.published ? "Published" : "Draft"}
                                  </span>
                                </td>
                                <td className="px-3 py-3 text-right">
                                  <Link
                                    to={`/seasonal-spirits/${spirit.id}/edit`}
                                    className="font-semibold text-sky-700 hover:underline"
                                  >
                                    Edit
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
