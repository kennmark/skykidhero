import { allSeasons } from '../data/seasons'

const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
}

function parseVisitDate(value) {
  if (typeof value !== 'string') {
    return null
  }

  const match = value
    .trim()
    .match(
      /^([A-Za-z]{3,9})\s+(\d{1,2}),\s+(\d{4})$/
    )

  if (!match) {
    return null
  }

  const month =
    MONTHS[
      match[1]
        .slice(0, 3)
        .toLowerCase()
    ]

  if (month === undefined) {
    return null
  }

  const day = Number(match[2])
  const year = Number(match[3])

  const date = new Date(
    year,
    month,
    day,
    12,
    0,
    0
  )

  return Number.isNaN(date.getTime())
    ? null
    : date
}

/**
 * Converts:
 *
 * Season
 *   -> Spirit
 *      -> number_of_visits[]
 *
 * into one flat Traveling Spirit visit history.
 */
export function getTravellingSpiritHistory() {
  const visits = []

  allSeasons.forEach((season) => {
    season.season_spirits?.forEach(
      (spirit) => {
        spirit.number_of_visits?.forEach(
          (visit, visitIndex) => {
            const parsedDate =
              parseVisitDate(
                visit.visit_date
              )

            // Ignore invalid/non-date values.
            //
            // This also protects us if a regular
            // spirit-style location string somehow
            // enters the seasonal data.
            if (!parsedDate) {
              return
            }

            visits.push({
              id: [
                spirit.spirit_id,
                visit.visitNo,
                visit.visit_date,
                visitIndex,
              ].join('-'),

              visit_date:
                visit.visit_date,

              visitNo:
                visit.visitNo,

              visitTimestamp:
                parsedDate.getTime(),

              spirit_id:
                spirit.spirit_id,

              spirit_name:
                spirit.spirit_name,

              spirit_img_url:
                spirit.spirit_img_url,

              spirit_image:
                spirit.spirit_image,

              spirit_category:
                spirit.spirit_category,

              spirit_relive_type:
                spirit.spirit_relive_type,

              spirit_collectibles:
                spirit.spirit_collectibles,

              spirit_tree_cost:
                spirit.spirit_tree_cost,

              spirit_guide_video_url:
                spirit.spirit_guide_video_url,

              spirit_direction:
                spirit.spirit_direction,

              number_of_visits:
                spirit.number_of_visits,

              season_id: season.id,

              season_name:
                season.name,

              season_year:
                season.year,

              season_icon:
                season.icon_route,

              season_route:
                season.page_route,
            })
          }
        )
      }
    )
  })

  return visits.sort(
    (a, b) => {
      // Primary:
      // newest visit first.
      const dateDifference =
        b.visitTimestamp -
        a.visitTimestamp

      if (dateDifference !== 0) {
        return dateDifference
      }

      // Same date, e.g. Group TS:
      // keep ordering predictable.
      return a.spirit_name.localeCompare(
        b.spirit_name
      )
    }
  )
}

export const travellingSpiritHistory =
  getTravellingSpiritHistory()