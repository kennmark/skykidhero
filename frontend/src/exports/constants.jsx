import rc from '../assets/images/icons/candle.webp'
import heart from '../assets/images/icons/heart.webp'
import ac from '../assets/images/icons/AC.webp'
import sc from '../assets/images/season-candles/30-season-of-dear-van-gogh/DearVanGogh-Candle.webp'
import tsHintImage from '../assets/images/ts-hints/TS-hint-071626-071926.jpg'

export const RC = rc
export const HEART = heart
export const AC = ac
export const SC_28_LIGHTMENDING_ICON = sc
export const SC_29_CARNIVAL_ICON = sc

export const ORBIT_WL = 1
export const SHARDS_WL = 6

export const ISLE_NUM_REG_SPIRIT = 3
export const ISLE_NUM_SEASON_SPIRIT = 13
export const ISLE_NUM_WL = 10
export const ISLE_NUM_MAP_SHRINES = 9

export const PRAIRIE_NUM_REG_SPIRIT = 8
export const PRAIRIE_NUM_SEASON_SPIRIT = 14
export const PRAIRIE_NUM_WL = 24
export const PRAIRIE_NUM_MAP_SHRINES = 9

export const FOREST_NUM_REG_SPIRIT = 8
export const FOREST_NUM_SEASON_SPIRIT = 23
export const FOREST_NUM_WL = 21
export const FOREST_NUM_MAP_SHRINES = 11

export const VALLEY_NUM_REG_SPIRIT = 7
export const VALLEY_NUM_SEASON_SPIRIT = 16
export const VALLEY_NUM_WL = 17
export const VALLEY_NUM_MAP_SHRINES = 11

export const WASTELAND_NUM_REG_SPIRIT = 6
export const WASTELAND_NUM_SEASON_SPIRIT = 18
export const WASTELAND_NUM_WL = 18
export const WASTELAND_NUM_MAP_SHRINES = 9

export const VAULT_NUM_REG_SPIRIT = 5
export const VAULT_NUM_SEASON_SPIRIT = 26
export const VAULT_NUM_WL = 16
export const VAULT_NUM_MAP_SHRINES = 12

export const EDEN_NUM_REG_SPIRIT = 0
export const EDEN_NUM_SEASON_SPIRIT = 0
export const EDEN_NUM_WL = 10
export const EDEN_NUM_MAP_SHRINES = 4

export const AVIARY_NUM_REG_SPIRIT = 0
export const AVIARY_NUM_SEASON_SPIRIT = 20
export const AVIARY_NUM_WL = 2
export const AVIARY_NUM_MAP_SHRINES = 2

export const S30_NUM_REG_SPIRIT = 0
export const S30_NUM_SEASON_SPIRIT = 4
export const S30_NUM_WL = 0
export const S30_NUM_MAP_SHRINES = 1

export const WL_COUNT =
  ISLE_NUM_WL +
  PRAIRIE_NUM_WL +
  FOREST_NUM_WL +
  VALLEY_NUM_WL +
  WASTELAND_NUM_WL +
  VAULT_NUM_WL +
  EDEN_NUM_WL +
  AVIARY_NUM_WL

export const WB_REGULAR_SPIRITS = 49
//!!!UPDATE THIS Wing Buff Count every new TS that hasnt arrived yet!!!
export const WB_TRAVELING_SPIRITS = 92 // updated June 19, 2026 Group TS From Season of Revival

export const MS_HOME = 1

export const TOTAL_WL_COUNT =
  WL_COUNT + WB_REGULAR_SPIRITS + WB_TRAVELING_SPIRITS + SHARDS_WL + ORBIT_WL

export const TOTAL_MS_COUNT = // June 19, 2026 Group TS From Season of Revival
  ISLE_NUM_MAP_SHRINES +
  PRAIRIE_NUM_MAP_SHRINES +
  FOREST_NUM_MAP_SHRINES +
  VALLEY_NUM_MAP_SHRINES +
  WASTELAND_NUM_MAP_SHRINES +
  VAULT_NUM_MAP_SHRINES +
  EDEN_NUM_MAP_SHRINES +
  AVIARY_NUM_MAP_SHRINES +
  MS_HOME

export const WL_COUNT_DATE_UPDATED = 'June 19, 2026' // June 19, 2026 TS Group TS From Season of Revival
export const MS_COUNT_DATE_UPDATED = 'July 21, 2025' // April 17, 2026 Season of Carnival

export const PLAYSTATION_MAX_WL = 248
export const STEAM_MAX_WL = 228

export const dtsValue = false //Adjust During Daylight Time Saving Every March and November

export const groupTs = false //Group TS arrived
export const travelingSpirit = false //Ongoing Traveling Spirit
export const travelingSpiritHint = false //Hint Traveling Spirit
export const travelingSpiritHintImage = tsHintImage //Hint Image Traveling Spirit
export const travelingSpiritDate = 'August 13 - 17, 2026' //Ongoing Traveling Spirit
export const travellingSpiritSeasonId = 3
export const travellingSpiritId = 1
export const travelingSpiritStartDate =
  '2026-08-13'

export const travelingSpiritEndDate =
  '2026-08-17'

// export const travelingSpiritDate =
//   'August 6–10, 2026'