import { Link } from "react-router-dom";

import MapStatusChip
  from "./MapStatusChip.jsx";

import {
  getPublicMapUrl,
} from "../../config/publicSite.js";

export default function MapTable({
  maps,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Order
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Map
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Route
              </th>

              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </th>

              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {maps.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-5 py-12 text-center text-sm text-gray-500"
                >
                  No Maps were found.
                </td>
              </tr>
            ) : (
              maps.map((map) => {
                const publicMapUrl =
                  getPublicMapUrl(
                    map
                  );

                return (
                  <tr
                    key={map.id}
                    className="transition hover:bg-gray-50"
                  >
                    <td className="whitespace-nowrap px-5 py-4">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                        {
                          map.displayOrder
                        }
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        {map.image ? (
                          <img
                            src={
                              map.image
                            }
                            alt={
                              map.imageAlt ||
                              map.name
                            }
                            className="h-12 w-12 rounded-lg border border-gray-200 object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold text-gray-500">
                            {
                              map.displayOrder
                            }
                          </div>
                        )}

                        <div>
                          <p className="font-semibold text-gray-900">
                            {
                              map.name
                            }
                          </p>

                          <p className="text-sm text-gray-500">
                            {map.subtitle ||
                              "No subtitle"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <a
                        href={
                          publicMapUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-sky-700 hover:underline"
                      >
                        {
                          publicMapUrl
                        }
                      </a>
                    </td>

                    <td className="px-5 py-4">
                      <MapStatusChip
                        published={
                          map.published
                        }
                        deletedAt={
                          map.deletedAt
                        }
                      />
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-right">
                      <Link
                        to={`/maps/${map.id}/edit`}
                        className="inline-flex rounded-lg bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-200"
                      >
                        Manage
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}