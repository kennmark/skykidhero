import { Typography, Spinner } from '@material-tailwind/react'
import {
  WASTELAND_NUM_REG_SPIRIT,
  WASTELAND_NUM_SEASON_SPIRIT,
  WASTELAND_NUM_WL,
  WASTELAND_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  FAINTING_WARRIOR,
  FRIGHTENED_REFUGEE,
  COURAGEOUS_SOLDIER,
  SALUTING_CAPTAIN,
  STEALTHY_SURVIVOR,
  LOOKOUT_SCOUT,
  SALUTING_PROTECTOR,
  PLEAFUL_PARENT,
  RESPECTFUL_PIANIST,
  CRAB_WHISPERER,
  SNOOZING_CARPENTER,
  NODDING_MURALIST,
  CRAB_WALKER,
  PLAYFIGHTING_HERBALIST,
  SCARECROW_FARMER,
  INDIFFERENT_ALCHEMIST,
  CEASING_COMMODORE,
  ANXIOUS_ANGLER,
  BUMBLING_BOATSWAIN,
  CACKLING_CANNONEER,
  STERN_SHEPHERD,
  SCARED_SENTRY,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  GW_WL1,
  GW_WL2,
  GW_WL3,
  GW_WL4,
  GW_WL5,
  GW_WL6,
  GW_WL7,
  GW_WL8,
  GW_WL9,
  GW_WL10,
  GW_WL11,
  GW_WL12,
  GW_WL13,
  GW_WL14,
  GW_WL15,
  GW_WL16,
  GW_WL17,
  GW_WL18,
} from '../exports/wastelandWLImgUrl'
import {
  GW_MS1,
  GW_MS2,
  GW_MS3,
  GW_MS4,
  GW_MS5,
  GW_MS6,
  GW_MS7,
  GW_MS8,
  GW_MS9,
} from '../exports/wastelandMSImgUrl'
import {
  MAP5,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON5,
  SEASON12,
  SEASON26,
} from '../exports/seasonIcons'
import {
  WASTELAND_SPIRIT_1,
  WASTELAND_SPIRIT_2,
  WASTELAND_SPIRIT_3,
  WASTELAND_SPIRIT_4,
  WASTELAND_SPIRIT_5,
  WASTELAND_SPIRIT_6,
  WASTELAND_SEASON_SPIRIT_1,
  WASTELAND_SEASON_SPIRIT_2,
  WASTELAND_SEASON_SPIRIT_3,
  WASTELAND_SEASON_SPIRIT_4,
  WASTELAND_SEASON_SPIRIT_5,
  WASTELAND_SEASON_SPIRIT_6,
  WASTELAND_SEASON_SPIRIT_7,
  WASTELAND_SEASON_SPIRIT_8,
  WASTELAND_SEASON_SPIRIT_9,
  WASTELAND_SEASON_SPIRIT_10,
  WASTELAND_SEASON_SPIRIT_11,
  WASTELAND_SEASON_SPIRIT_12,
  WASTELAND_SEASON_SPIRIT_13,
  WASTELAND_SEASON_SPIRIT_14,
  WASTELAND_SEASON_SPIRIT_15,
  WASTELAND_SEASON_SPIRIT_16,
  WASTELAND_SEASON_SPIRIT_17,
  WASTELAND_SEASON_SPIRIT_18,
} from '../exports/spiritWastelandImages'
import {
  WARRIOR_ITEM_1,
  WARRIOR_ITEM_2,
  REFUGEE_ITEM_1,
  REFUGEE_ITEM_2,
  SOLDIER_ITEM_1,
  SOLDIER_ITEM_2,
  SOLDIER_ITEM_3,
  SURVIVOR_ITEM_1,
  SURVIVOR_ITEM_2,
  SURVIVOR_ITEM_3,
  CAPTAIN_ITEM_1,
  CAPTAIN_ITEM_2,
  SCOUT_ITEM_1,
  SCOUT_ITEM_2,
  PROTECTOR_ITEM_1,
  PROTECTOR_ITEM_2,
  PARENT_ITEM_1,
  PARENT_ITEM_2,
  PARENT_ITEM_3,
  PIANIST_ITEM_1,
  PIANIST_ITEM_2,
  PIANIST_ITEM_3,
  WHISPERER_ITEM_1,
  WHISPERER_ITEM_2,
  WHISPERER_ITEM_3,
  WHISPERER_ITEM_4,
  CARPENTER_ITEM_1,
  CARPENTER_ITEM_2,
  MURALIST_ITEM_1,
  MURALIST_ITEM_2,
  WALKER_ITEM_1,
  WALKER_ITEM_2,
  HERBALIST_ITEM_1,
  HERBALIST_ITEM_2,
  HERBALIST_ITEM_3,
  HERBALIST_ITEM_4,
  FARMER_ITEM_1,
  FARMER_ITEM_2,
  ALCHEMIST_ITEM_1,
  ALCHEMIST_ITEM_2,
  ALCHEMIST_ITEM_3,
  CEASING_ITEM_1,
  CEASING_ITEM_2,
  CEASING_ITEM_3,
  ANGLER_ITEM_1,
  ANGLER_ITEM_2,
  ANGLER_ITEM_3,
  ANGLER_ITEM_4,
  BOATSWAIN_ITEM_1,
  BOATSWAIN_ITEM_2,
  BOATSWAIN_ITEM_3,
  CACKLING_ITEM_1,
  CACKLING_ITEM_2,
  CACKLING_ITEM_3,
  TOYMAKER_ITEM_1,
  TOYMAKER_ITEM_2,
  TOYMAKER_ITEM_3,
  TOYMAKER_ITEM_4,
  STERN_ITEM_1,
  STERN_ITEM_2,
  STERN_ITEM_3,
  STERN_ITEM_4,
  RECLUSE_ITEM_1,
  RECLUSE_ITEM_2,
  RECLUSE_ITEM_3,
  RECLUSE_ITEM_4,
  SENTRY_ITEM_1,
  SENTRY_ITEM_2,
  SENTRY_ITEM_3,
  SENTRY_ITEM_4,
  SENTRY_ITEM_5,
  SENTRY_ITEM_6,
  SENTRY_ITEM_7,
} from '../exports/spiritWastelandCollectibles'
import WastelandConstellation from '../assets/images/maps-constellations/Wasteland_Constellation.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import DyeAlertMessage from '../pages/components/DyeAlertMessage'
import WastelandDyes from '../pages/components/MapDyeLocations/WastelandDyes'
import { MapPinIcon, SparklesIcon, SwatchIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/solid'

const youtube_embed = 'https://www.youtube.com/embed/'

export const wasteland = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    icon: UserIcon,
    desc: (
      <>
        <LazyLoadImage
          src={WastelandConstellation}
          alt="Golden Wasteland"
          title="Golden Wasteland"
          placeholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
          effect="blur"
          className="rounded-xl"
        />
        <Typography className="antialiased font-sans pt-4">
          There are{' '}
          <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
            {WASTELAND_NUM_REG_SPIRIT}
          </span>{' '}
          regular spirits that you can find here.
        </Typography>
      </>
    ),
    spirits: [
      // FAINTING_WARRIOR
      {
        id: 1,
        spirit_id: 'wasteland1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Fainting Warrior',
        spirit_img_url: FAINTING_WARRIOR,
        spirit_image: WASTELAND_SPIRIT_1,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: WARRIOR_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Mask',
            img: WARRIOR_ITEM_2,
            currency: 'Hearts',
            price: 15,
          },
          {
            label: 'Emote',
            img: FAINTING_WARRIOR,
            currency: 'Hearts',
            price: 14,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 23,
            hearts: 20,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Golden Wasteland',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + 'cfMQdMkXk_Q',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly to the right. This spirit is behind the large pillar.`,
        ],
      },
      // FRIGHTENED_REFUGEE
      {
        id: 2,
        spirit_id: 'wasteland2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Frightened Refugee',
        spirit_img_url: FRIGHTENED_REFUGEE,
        spirit_image: WASTELAND_SPIRIT_2,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: REFUGEE_ITEM_1,
            currency: 'Hearts',
            price: 3,
          },
          {
            label: 'Instrument',
            img: REFUGEE_ITEM_2,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Emote',
            img: FRIGHTENED_REFUGEE,
            currency: 'Hearts',
            price: 14,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 23,
            hearts: 8,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Golden Wasteland',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + '3Y12fLtiFCk',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly toward the Broken Temple. You will find this spirit there.`,
        ],
      },
      // COURAGEOUS_SOLDIER
      {
        id: 3,
        spirit_id: 'wasteland3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 65,
        difficulty_types: [0, 1, 9],
        spirit_name: 'Courageous Soldier',
        spirit_img_url: COURAGEOUS_SOLDIER,
        spirit_image: WASTELAND_SPIRIT_3,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: SOLDIER_ITEM_1,
            currency: 'Hearts',
            price: 4,
          },
          {
            label: 'Cape Lvl 1',
            img: SOLDIER_ITEM_2,
            currency: 'Hearts',
            price: 15,
          },
          {
            label: 'Cape Lvl 2',
            img: SOLDIER_ITEM_3,
            currency: 'Hearts',
            price: 45,
          },
          {
            label: 'Stance',
            img: COURAGEOUS_SOLDIER,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 64,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Golden Wasteland',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + '_IlgT8cc7Fg',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly into the large temple ahead.`,
          `This spirit is located along the path.`,
        ],
      },
      // STEALTHY_SURVIVOR
      {
        id: 4,
        spirit_id: 'wasteland4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 65,
        difficulty_types: [0, 1, 9],
        spirit_name: 'Stealthy Survivor',
        spirit_img_url: STEALTHY_SURVIVOR,
        spirit_image: WASTELAND_SPIRIT_4,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: SURVIVOR_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Cape Lvl 1',
            img: SURVIVOR_ITEM_2,
            currency: 'Hearts',
            price: 50,
          },
          {
            label: 'Cape Lvl 2',
            img: SURVIVOR_ITEM_3,
            currency: 'Hearts',
            price: 150,
          },
          {
            label: 'Stance',
            img: STEALTHY_SURVIVOR,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 205,
            ascended_candles: 16,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Golden Wasteland',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + 'NhbsBbiaIC4',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly into the large temple ahead.`,
          `Continue toward the Boneyard, where there are three Krills.`,
          `Inside the farthest cave, this spirit is in the lower-left area.`,
        ],
      },
      // SALUTING_CAPTAIN
      {
        id: 5,
        spirit_id: 'wasteland5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 85,
        difficulty_types: [0, 1, 6, 9],
        spirit_name: 'Saluting Captain',
        spirit_img_url: SALUTING_CAPTAIN,
        spirit_image: WASTELAND_SPIRIT_5,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: CAPTAIN_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Prop',
            img: CAPTAIN_ITEM_2,
            currency: 'Hearts',
            price: 20,
          },
          {
            label: 'Emote',
            img: SALUTING_CAPTAIN,
            currency: 'Candles',
            price: 14,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 23,
            hearts: 25,
            ascended_candles: 3,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Golden Wasteland',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + '8tA8ptXXgLM',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly into the large temple ahead.`,
          `Cross the one-Krill area. After passing it, enter the tunnel on the right.`,
          `At the front of the Shipwreck, you will find this spirit in the lower area.`,
        ],
      },
      // LOOKOUT_SCOUT
      {
        id: 6,
        spirit_id: 'wasteland6',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Lookout Scout',
        spirit_img_url: LOOKOUT_SCOUT,
        spirit_image: WASTELAND_SPIRIT_6,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: SCOUT_ITEM_1,
            currency: 'Hearts',
            price: 10,
          },
          {
            label: 'Instrument',
            img: SCOUT_ITEM_2,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Emote',
            img: LOOKOUT_SCOUT,
            currency: 'Candles',
            price: 15,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 24,
            hearts: 15,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Golden Wasteland',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP5,
        spirit_guide_video_url: youtube_embed + 'FTbNx4P0ygw',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly into the large temple ahead.`,
          `Cross the one-Krill area. After passing it, enter the tunnel on the right.`,
          `At the front of the Shipwreck, you will find this spirit in the lower area.`,
        ],
      },
    ],
  },
  {
    label: 'Seasonal Spirits',
    value: 'seasonal_spirits',
    icon: UserGroupIcon,
    desc: (
      <Typography className="antialiased font-sans">
        These are spirits from past Seasonal Events that you can find whenever
        you enter Golden Wasteland. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {WASTELAND_NUM_SEASON_SPIRIT}
        </span>{' '}
        seasonal spirits that you can find and relive here.
      </Typography>
    ),
    spirits: [
      // SALUTING_PROTECTOR
      {
        id: 7,
        spirit_id: 'wasteland7',
        season_id: 1,
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 90,
        difficulty_types: [1, 4, 6, 9],
        spirit_name: 'Saluting Protector',
        spirit_img_url: SALUTING_PROTECTOR,
        spirit_image: WASTELAND_SEASON_SPIRIT_1,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: PROTECTOR_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Cape',
            img: PROTECTOR_ITEM_2,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Emote',
            img: SALUTING_PROTECTOR,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 145,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'May 28, 2020',
            visitNo: 'unknown',
          },
          {
            visit_date: 'Jan 20, 2022',
            visitNo: 53,
          },
          {
            visit_date: 'Nov 21, 2024',
            visitNo: 127,
          },
        ],
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'ln51yEQiNh4',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly into the large temple ahead.`,
          `In the one-Krill area, pass the broken tower on the left. The spirit is sheltered ahead.`,
        ],
      },
      // PLEAFUL_PARENT
      {
        id: 8,
        spirit_id: 'wasteland8',
        season_id: 3,
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 150,
        difficulty_types: [1, 4, 5, 6, 9, 10, 13],
        spirit_name: 'Pleaful Parent',
        spirit_img_url: PLEAFUL_PARENT,
        spirit_image: WASTELAND_SEASON_SPIRIT_2,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: PARENT_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Cape',
            img: PARENT_ITEM_2,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Instrument',
            img: PARENT_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Emote',
            img: PLEAFUL_PARENT,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 195,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Mar 26, 2020',
            visitNo: 5,
          },
          {
            visit_date: 'Dec 10, 2020',
            visitNo: 24,
          },
          {
            visit_date: 'Dec 22, 2022',
            visitNo: 77,
          },
          {
            visit_date: 'Oct 24, 2024',
            visitNo: 125,
          },
        ],
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + '6UUH2_kgesM',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly into the large temple ahead.`,
          `After passing the one-Krill area, skate downward and fly to the right. The spirit is near the bonfire.`,
        ],
      },
      // RESPECTFUL_PIANIST
      {
        id: 9,
        spirit_id: 'wasteland9',
        season_id: 4,
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rythm',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 105,
        difficulty_types: [1, 4, 5, 6, 9],
        spirit_name: 'Respectful Pianist',
        spirit_img_url: RESPECTFUL_PIANIST,
        spirit_image: WASTELAND_SEASON_SPIRIT_3,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: PIANIST_ITEM_1,
            currency: 'Candles',
            price: 26,
          },
          {
            label: 'Mask',
            img: PIANIST_ITEM_2,
            currency: 'Candles',
            price: 48,
          },
          {
            label: 'Instrument',
            img: PIANIST_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Emote',
            img: RESPECTFUL_PIANIST,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 162,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Feb 4, 2021',
            visitNo: 28,
          },
          {
            visit_date: 'Jul 3, 2023',
            visitNo: 'GV#3',
          },
        ],
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'dSfferJMUHM',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly into the large temple ahead.`,
          `Cross the one-Krill area. When you reach the Boneyard, fly to the right.`,
          `Near the stairs, you will find this spirit beside a rock.`,
        ],
      },
      // CRAB_WHISPERER
      {
        id: 10,
        spirit_id: 'wasteland10',
        season_id: 2,
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseekers',
        spirit_category: 'call',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 120,
        difficulty_types: [1, 4, 5, 6, 9, 13],
        spirit_name: 'Crab Whisperer',
        spirit_img_url: CRAB_WHISPERER,
        spirit_image: WASTELAND_SEASON_SPIRIT_4,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: WHISPERER_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Mask',
            img: WHISPERER_ITEM_2,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Cape',
            img: WHISPERER_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Prop',
            img: WHISPERER_ITEM_4,
            currency: 'Candles',
            price: 20,
          },
          {
            label: 'Call',
            img: CRAB_WHISPERER,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 190,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Apr 9, 2020',
            visitNo: 6,
          },
          {
            visit_date: 'Sep 2, 2021',
            visitNo: 43,
          },
          {
            visit_date: 'Aug 7, 2023',
            visitNo: 'GV#4',
          },
        ],
        icon_route: SEASON2,
        spirit_guide_video_url: youtube_embed + 'okCFgF0LnXw',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly into the large temple ahead.`,
          `Cross the one-Krill area. After passing it, enter the tunnel on the right.`,
          `After exiting, enter the lower tunnel. The spirit is inside.`,
        ],
      },
      // SNOOZING_CARPENTER
      {
        id: 11,
        spirit_id: 'wasteland11',
        season_id: 5,
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 40,
        difficulty_types: [1, 4, 6],
        spirit_name: 'Snoozing Carpenter',
        spirit_img_url: SNOOZING_CARPENTER,
        spirit_image: WASTELAND_SEASON_SPIRIT_5,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: CARPENTER_ITEM_1,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Cape',
            img: CARPENTER_ITEM_2,
            currency: 'Candles',
            price: 65,
          },

          {
            label: 'Emote',
            img: SNOOZING_CARPENTER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 112,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'May 27, 2021',
            visitNo: 36,
          },
          {
            visit_date: 'Apr 27, 2023',
            visitNo: 86,
          },
        ],
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + 'zDzJ3kNvpag',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly to the right toward the Docking Area and board the boat.`,
          `When you reach the Forgotten Ark, this spirit is beside the ship.`,
        ],
      },
      // NODDING_MURALIST
      {
        id: 12,
        spirit_id: 'wasteland12',
        season_id: 5,
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 40,
        difficulty_types: [1, 7, 13],
        spirit_name: 'Nodding Muralist',
        spirit_img_url: NODDING_MURALIST,
        spirit_image: WASTELAND_SEASON_SPIRIT_6,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MURALIST_ITEM_1,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Mask',
            img: MURALIST_ITEM_2,
            currency: 'Candles',
            price: 30,
          },

          {
            label: 'Emote',
            img: NODDING_MURALIST,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 77,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jan 7, 2021',
            visitNo: 26,
          },
          {
            visit_date: 'Oct 27, 2022',
            visitNo: 73,
          },
          {
            visit_date: 'Mar 4, 2024',
            visitNo: 'GV#5',
          },
        ],
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + 'ATyUO04_4FY',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly to the right toward the Docking Area and board the boat.`,
          `When you reach the Forgotten Ark, this spirit is on the opposite side of the ship.`,
        ],
      },
      // CRAB_WALKER
      {
        id: 13,
        spirit_id: 'wasteland13',
        season_id: 5,
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'emote',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 40,
        difficulty_types: [1, 4, 6],
        spirit_name: 'Crab Walker',
        spirit_img_url: CRAB_WALKER,
        spirit_image: WASTELAND_SEASON_SPIRIT_7,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: WALKER_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Cape',
            img: WALKER_ITEM_2,
            currency: 'Candles',
            price: 60,
          },

          {
            label: 'Emote',
            img: CRAB_WALKER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 115,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Feb 18, 2021',
            visitNo: 29,
          },
          {
            visit_date: 'Mar 16, 2023',
            visitNo: 84,
          },
          {
            visit_date: 'Jan 16, 2025',
            visitNo: 131,
          },
        ],
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + 'HuUE9oikCRg',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly to the right toward the Docking Area and board the boat.`,
          `When you reach the Forgotten Ark, fly toward the tunnel on the right and enter it.`,
        ],
      },
      // PLAYFIGHTING_HERBALIST
      {
        id: 14,
        spirit_id: 'wasteland14',
        season_id: 5,
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'friendship action',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 45,
        difficulty_types: [1, 6, 13],
        spirit_name: 'Playfighting Herbalist',
        spirit_img_url: PLAYFIGHTING_HERBALIST,
        spirit_image: WASTELAND_SEASON_SPIRIT_8,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: HERBALIST_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Mask',
            img: HERBALIST_ITEM_2,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Cape',
            img: HERBALIST_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Prop',
            img: HERBALIST_ITEM_4,
            currency: 'Candles',
            price: 20,
          },
          {
            label: 'Friendship Action',
            img: PLAYFIGHTING_HERBALIST,
            currency: 'Hearts',
            price: 10,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 195,
            hearts: 10,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Oct 12, 2021',
            visitNo: 47,
          },
          {
            visit_date: 'Oct 1, 2023',
            visitNo: 98,
          },
        ],
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + '7n4j6kDeiX8',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly to the right toward the Docking Area and board the boat.`,
          `When you reach the Forgotten Ark, you will find this spirit near the second ship.`,
        ],
      },
      // SCARECROW_FARMER
      {
        id: 15,
        spirit_id: 'wasteland15',
        season_id: 5,
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Scarecrow Farmer',
        spirit_img_url: SCARECROW_FARMER,
        spirit_image: WASTELAND_SEASON_SPIRIT_9,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: FARMER_ITEM_1,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Mask',
            img: FARMER_ITEM_2,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Emote',
            img: SCARECROW_FARMER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 89,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Mar 31, 2022',
            visitNo: 58,
          },
          {
            visit_date: 'Jul 18, 2024',
            visitNo: 118,
          },
        ],
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + 'kGlva_YxYFI',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly to the right toward the Docking Area and board the boat.`,
          `When you reach the Forgotten Ark, go toward the large open field at the back to find this spirit.`,
        ],
      },
      // INDIFFERENT_ALCHEMIST
      {
        id: 16,
        spirit_id: 'wasteland16',
        season_id: 5,
        spirit_type: 'seasonal',
        season: 'Season 5 - Season of Enchantment',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 35,
        difficulty_types: [1, 4, 13],
        spirit_name: 'Indifferent Alchemist',
        spirit_img_url: INDIFFERENT_ALCHEMIST,
        spirit_image: WASTELAND_SEASON_SPIRIT_10,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: ALCHEMIST_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Mask',
            img: ALCHEMIST_ITEM_2,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Cape',
            img: ALCHEMIST_ITEM_3,
            currency: 'Candles',
            price: 60,
          },
          {
            label: 'Emote',
            img: INDIFFERENT_ALCHEMIST,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 167,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Oct 29, 2020',
            visitNo: 21,
          },
          {
            visit_date: 'Sep 1, 2022',
            visitNo: 69,
          },
          {
            visit_date: 'Mar 4, 2024',
            visitNo: 'GV#5',
          },
        ],
        icon_route: SEASON5,
        spirit_guide_video_url: youtube_embed + 'ZOGLAfZtSeM',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, and fly downward.`,
          `After landing, fly to the right toward the Docking Area and board the boat.`,
          `When you reach the Forgotten Ark, go toward the back and fly to the top of the hill to find this spirit.`,
        ],
      },
      // CEASING_COMMODORE
      {
        id: 17,
        spirit_id: 'wasteland17',
        season_id: 12,
        spirit_type: 'seasonal',
        season: 'Season 12 - Season of Abyss',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Ceasing Commodore',
        spirit_img_url: CEASING_COMMODORE,
        spirit_image: WASTELAND_SEASON_SPIRIT_11,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: CEASING_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Mask',
            img: CEASING_ITEM_2,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Cape',
            img: CEASING_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: CEASING_COMMODORE,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 168,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Mar 4, 2024',
            visitNo: 'GV#5',
          },
        ],
        icon_route: SEASON12,
        spirit_guide_video_url: youtube_embed + 'Qe5W_ZgGQKo',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, fly to the right, and board the boat.`,
          `When you reach the Treasure Reef, fly upward behind the hill ahead to find this spirit.`,
        ],
      },
      // ANXIOUS_ANGLER
      {
        id: 18,
        spirit_id: 'wasteland18',
        season_id: 12,
        spirit_type: 'seasonal',
        season: 'Season 12 - Season of Abyss',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Anxious Angler',
        spirit_img_url: ANXIOUS_ANGLER,
        spirit_image: WASTELAND_SEASON_SPIRIT_12,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: ANGLER_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Mask',
            img: ANGLER_ITEM_2,
            currency: 'Candles',
            price: 35,
          },
          {
            label: 'Outfit',
            img: ANGLER_ITEM_3,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Cape',
            img: ANGLER_ITEM_4,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: ANXIOUS_ANGLER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 228,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jan 18, 2024',
            visitNo: 105,
          },
          {
            visit_date: 'Aug 18, 2025',
            visitNo: 'GV#10',
          },
        ],
        icon_route: SEASON12,
        spirit_guide_video_url: youtube_embed + '1NBUcSWFlu8',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, fly to the right, and board the boat.`,
          `When you reach the Treasure Reef, fly to the left. You will find this spirit among the small islands.`,
        ],
      },
      // BUMBLING_BOATSWAIN
      {
        id: 19,
        spirit_id: 'wasteland19',
        season_id: 12,
        spirit_type: 'seasonal',
        season: 'Season 12 - Season of Abyss',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Bumbling Boatswain',
        spirit_img_url: BUMBLING_BOATSWAIN,
        spirit_image: WASTELAND_SEASON_SPIRIT_13,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: BOATSWAIN_ITEM_1,
            currency: 'Candles',
            price: 35,
          },
          {
            label: 'Mask',
            img: BOATSWAIN_ITEM_2,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Cape',
            img: BOATSWAIN_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: BUMBLING_BOATSWAIN,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 173,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Oct 10, 2024',
            visitNo: 124,
          },
          {
            visit_date: 'Aug 18, 2025',
            visitNo: 'GV#10',
          },
        ],
        icon_route: SEASON12,
        spirit_guide_video_url: youtube_embed + 'xFnYj4msYuo',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, fly to the right, and board the boat.`,
          `When you reach the Treasure Reef, fly upward toward the ship at the dock. The spirit is nearby.`,
        ],
      },
      // CACKLING_CANNONEER
      {
        id: 20,
        spirit_id: 'wasteland20',
        season_id: 12,
        spirit_type: 'seasonal',
        season: 'Season 12 - Season of Abyss',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Cackling Cannoneer',
        spirit_img_url: CACKLING_CANNONEER,
        spirit_image: WASTELAND_SEASON_SPIRIT_14,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: CACKLING_ITEM_1,
            currency: 'Candles',
            price: 50,
          },
          {
            label: 'Mask',
            img: CACKLING_ITEM_2,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Cape',
            img: CACKLING_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: CACKLING_CANNONEER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 188,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Aug 7, 2023',
            visitNo: 'GV#4',
          },
        ],
        icon_route: SEASON12,
        spirit_guide_video_url: youtube_embed + 'https://youtu.be/1yxTCyNbg4o',
        spirit_direction: [
          `Enter the fifth map, Golden Wasteland, fly to the right, and board the boat.`,
          `When you reach the Treasure Reef, fly upward toward the farthest island. The spirit is behind it.`,
        ],
      },
      // TENDER_TOYMAKER
      {
        id: 21,
        spirit_id: 'wasteland21',
        season_id: 26,
        spirit_type: 'seasonal',
        season: 'Season 26 - The Two Embers I',
        spirit_category: 'item',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [0],
        spirit_name: 'Tender Toymaker',
        spirit_img_url: TOYMAKER_ITEM_1,
        spirit_image: WASTELAND_SEASON_SPIRIT_15,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: TOYMAKER_ITEM_3,
            currency: 'Candles',
            price: 28,
          },
          {
            label: 'Suitpant',
            img: TOYMAKER_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: TOYMAKER_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: TOYMAKER_ITEM_2,
            currency: 'Candles',
            price: 14,
          },
        ],
        spirit_tree_cost: [
          // {
          //   candles: 188,
          //   hearts: 13,
          //   ascended_candles: 2,
          // },
        ],
        number_of_visits: [
          // {
          //   visit_date: 'Aug 7, 2023',
          //   visitNo: 'GV#4',
          // },
        ],
        icon_route: SEASON26,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          // `Enter the fifth map, Golden Wasteland, fly to the right, and board the boat.`,
          // `When you reach the Treasure Reef, fly upward toward the farthest island. The spirit is behind it.`,
        ],
      },
      // STERN_SHEPHERD
      {
        id: 22,
        spirit_id: 'wasteland22',
        season_id: 26,
        spirit_type: 'seasonal',
        season: 'Season 26 - The Two Embers I',
        spirit_category: 'call',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [0],
        spirit_name: 'Stern Shepherd',
        spirit_img_url: STERN_SHEPHERD,
        spirit_image: WASTELAND_SEASON_SPIRIT_16,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: STERN_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Mask',
            img: STERN_ITEM_2,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Suitpant',
            img: STERN_ITEM_3,
            currency: 'Candles',
            price: 18,
          },
          {
            label: 'Prop',
            img: STERN_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          // {
          //   candles: 188,
          //   hearts: 13,
          //   ascended_candles: 2,
          // },
        ],
        number_of_visits: [
          // {
          //   visit_date: 'Aug 7, 2023',
          //   visitNo: 'GV#4',
          // },
        ],
        icon_route: SEASON26,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          // `Enter the fifth map, Golden Wasteland, fly to the right, and board the boat.`,
          // `When you reach the Treasure Reef, fly upward toward the farthest island. The spirit is behind it.`,
        ],
      },
      // RESOURCEFUL_RECLUSE
      {
        id: 23,
        spirit_id: 'wasteland23',
        season_id: 26,
        spirit_type: 'seasonal',
        season: 'Season 26 - The Two Embers I',
        spirit_category: 'item',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [0],
        spirit_name: 'Resourceful Recluse',
        spirit_img_url: RECLUSE_ITEM_1,
        spirit_image: WASTELAND_SEASON_SPIRIT_17,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: RECLUSE_ITEM_2,
            currency: 'Candles',
            price: 12,
          },
          {
            label: 'Suitpant',
            img: RECLUSE_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: RECLUSE_ITEM_1,
            currency: 'Candles',
            price: 24,
          },
          {
            label: 'Prop',
            img: RECLUSE_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          // {
          //   candles: 188,
          //   hearts: 13,
          //   ascended_candles: 2,
          // },
        ],
        number_of_visits: [
          // {
          //   visit_date: 'Aug 7, 2023',
          //   visitNo: 'GV#4',
          // },
        ],
        icon_route: SEASON26,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          // `Enter the fifth map, Golden Wasteland, fly to the right, and board the boat.`,
          // `When you reach the Treasure Reef, fly upward toward the farthest island. The spirit is behind it.`,
        ],
      },
      // SCARED_SENTRY
      {
        id: 24,
        spirit_id: 'wasteland24',
        season_id: 26,
        spirit_type: 'seasonal',
        season: 'Season 26 - The Two Embers I',
        spirit_category: 'stance',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [0],
        spirit_name: 'Scared Sentry',
        spirit_img_url: SCARED_SENTRY,
        spirit_image: WASTELAND_SEASON_SPIRIT_18,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: SENTRY_ITEM_1,
            currency: 'Candles',
            price: 10,
          },
          {
            label: 'Hair',
            img: SENTRY_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: SENTRY_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Suitpant',
            img: SENTRY_ITEM_4,
            currency: 'Candles',
            price: 22,
          },
          {
            label: 'Boots',
            img: SENTRY_ITEM_5,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: SENTRY_ITEM_6,
            currency: 'Candles',
            price: 28,
          },
          {
            label: 'Prop',
            img: SENTRY_ITEM_7,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          // {
          //   candles: 188,
          //   hearts: 13,
          //   ascended_candles: 2,
          // },
        ],
        number_of_visits: [
          // {
          //   visit_date: 'Aug 7, 2023',
          //   visitNo: 'GV#4',
          // },
        ],
        icon_route: SEASON26,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          // `Enter the fifth map, Golden Wasteland, fly to the right, and board the boat.`,
          // `When you reach the Treasure Reef, fly upward toward the farthest island. The spirit is behind it.`,
        ],
      },
    ],
  },
  {
    label: 'Winged Lights',
    value: 'winged_lights',
    icon: SparklesIcon,
    desc: (
      <Typography className="antialiased font-sans">
        You can also find Winged Lights on this map. Collecting them increases
        your Wing Level, allowing you to fly higher. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {WASTELAND_NUM_WL}
        </span>{' '}
        Winged Lights that you can collect here.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'WL1-Broken Temple (Pillar)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL1 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, find the tall pillar and fly to its top to reach the Winged Light.`,
        ],
      },
      {
        id: 2,
        wl_label: 'WL2-Broken Temple (Entrance)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, you will immediately see the Winged Light ahead.`,
        ],
      },
      {
        id: 3,
        wl_label: 'WL3-Graveyard Entrance (1 Krill Area)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, the Winged Light is on top of the broken tower on the right.`,
        ],
      },
      {
        id: 4,
        wl_label: 'WL4-Graveyard Entrance (Pillar)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side. The Winged Light is inside the pillar on the right.`,
        ],
      },
      {
        id: 5,
        wl_label: 'WL5-Graveyard (Near Catapult)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side and continue skating downward.`,
          `At the end, fly to the right. The Winged Light is on the large, flat rock.`,
        ],
      },
      {
        id: 6,
        wl_label: 'WL6-Graveyard (Biggest Bone)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side and continue skating downward.`,
          `At the end, fly toward the large rocks. The Winged Light is on the side of one of the rocks.`,
        ],
      },
      {
        id: 7,
        wl_label: 'WL7-Graveyard (Pipe)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side and continue skating downward.`,
          `At the end, fly toward the large rocks. There is a tunnel on their left side.`,
          `The Winged Light is inside the tunnel.`,
        ],
      },
      {
        id: 8,
        wl_label: 'WL8-Graveyard (Exit to Battlefield)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side and continue skating downward.`,
          `At the end, fly to the right toward the stairs.`,
        ],
      },
      {
        id: 9,
        wl_label: 'WL9-Shipwreck (Hidden Wall)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side, then fly right and enter the tunnel.`,
          `After entering the Shipwreck area, fly to the right. The Winged Light is inside a high opening in the wall.`,
        ],
      },
      {
        id: 10,
        wl_label: 'WL10-Shipwreck (Jars)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL10 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side, then fly right and enter the tunnel.`,
          `After entering the Shipwreck area, fly inside the Shipwreck. The Winged Light is among the jars at the far end.`,
        ],
      },
      {
        id: 11,
        wl_label: 'WL11-Shipwreck (Pipes)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL11 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side, then fly right and enter the tunnel.`,
          `After entering the Shipwreck area, fly to the left. You will find the Winged Light ahead near the stair-like tunnels.`,
        ],
      },
      {
        id: 12,
        wl_label: 'WL12-Battlefield (Broken Building)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL12 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side and continue skating downward.`,
          `At the end, fly to the right toward the stairs.`,
          `After exiting, the Winged Light is in the upper-right section of the ruined temple.`,
        ],
      },
      {
        id: 13,
        wl_label: 'WL13-Battlefield (Pillar)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL13 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side and continue skating downward.`,
          `At the end, fly to the right toward the stairs.`,
          `Fly toward the ruined temple. Before the gate at the far end, the Winged Light is behind the pillar on the left.`,
        ],
      },
      {
        id: 14,
        wl_label: 'WL14-Temple',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL14 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly toward the Broken Temple and enter the passage.`,
          `When you reach the one-Krill area, fly toward the passage on the opposite side and continue skating downward.`,
          `At the end, fly to the right toward the stairs.`,
          `Fly toward the ruined temple, light the gate lock at the far end, and enter. The Winged Light is inside.`,
        ],
      },
      {
        id: 15,
        wl_label: 'WL15-Forgotten Ark (Ark Tip)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL15 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly to the right toward the boat and sit down.`,
          `When you reach the Forgotten Ark, fly until you see the Ark. The Winged Light is at its front tip.`,
        ],
      },
      {
        id: 16,
        wl_label: 'WL16-Forgotten Ark (Polluted Pond)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL16 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland and fly downward through the clouds.`,
          `After landing, fly to the right toward the boat and sit down.`,
          `Fly toward the open field at the far end. Enter the small passage on the left; the Winged Light is inside.`,
        ],
      },
      {
        id: 17,
        wl_label: 'WL17-Treasure Reef (Broken Tower)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL17 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland, fly to the right, and sit in the boat.`,
          `When you reach the Treasure Reef, fly upward.`,
          `There is a tall tower on the right. The Winged Light is at its top.`,
        ],
      },
      {
        id: 18,
        wl_label: 'WL18-Treasure Reef (Deep Waters)',
        wl_group: 'wl-wasteland',
        wl_url: GW_WL18 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4 | Golden Wasteland, fly to the right, and sit in the boat.`,
          `When you reach the Treasure Reef, fly upward.`,
          `Across from the tall tower on the right, enter the rock opening in the sea and swim downward until you reach the bottom.`,
          `Open the door on the left. The Winged Light is inside.`,
        ],
      },
    ],
  },
  {
    label: 'Map Shrines',
    value: 'map_shrines',
    icon: MapPinIcon,
    desc: (
      <Typography className="antialiased font-sans">
        Map Shrines serve as guides that show how many Winged Lights you still
        need to collect and where they are located within the map. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {WASTELAND_NUM_MAP_SHRINES}
        </span>{' '}
        Map Shrines that you can unlock within Daylight Prairie.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_label: 'Map Shrine 1',
        shrine_url: GW_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 5 | Golden Wasteland and continue toward the end of the passage.`,
          `Before reaching the end, you will find the Map Shrine on the left.`,
        ],
      },
      {
        id: 2,
        shrine_label: 'Map Shrine 2',
        shrine_url: GW_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 5 | Golden Wasteland, continue to the end of the passage, and jump down.`,
          `After landing, fly straight ahead. You will see the ruined temple in front of you, and the Map Shrine is beside it.`,
        ],
      },
      {
        id: 3,
        shrine_label: 'Map Shrine 3',
        shrine_url: GW_MS3 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 5 | Golden Wasteland, continue to the end of the passage, and jump down.`,
          `After landing, fly straight toward the ruined temple. Once you pass it, enter the passage near the stairs.`,
          `Fly toward the Boneyard, where there are three Krills.`,
          `Fly toward the large Dark Plants. The Map Shrine is inside the tunnel on their right.`,
        ],
      },
      {
        id: 4,
        shrine_label: 'Map Shrine 4',
        shrine_url: GW_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 5 | Golden Wasteland, continue to the end of the passage, and jump down.`,
          `After landing, fly straight toward the ruined temple. Once you pass it, enter the passage near the stairs.`,
          `Cross the one-Krill area. After passing it, enter the tunnel on the right.`,
          `After exiting into the Shipwreck area, fly to the right. The Map Shrine is on a small island.`,
        ],
      },
      {
        id: 5,
        shrine_label: 'Map Shrine 5',
        shrine_url: GW_MS5 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 5 | Golden Wasteland, continue to the end of the passage, and jump down.`,
          `After landing, fly straight toward the ruined temple. Once you pass it, enter the passage near the stairs.`,
          `Cross the one-Krill area and continue toward the Boneyard, where there are three Krills.`,
          `Fly toward the wide staircase at the far-right end.`,
          `After exiting, fly toward the entrance of the ruined temple. The Map Shrine is on the left.`,
        ],
      },
      {
        id: 6,
        shrine_label: 'Map Shrine 6',
        shrine_url: GW_MS6 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 5 | Golden Wasteland, continue to the end of the passage, and jump down.`,
          `After landing, fly straight toward the ruined temple. Once you pass it, enter the passage near the stairs.`,
          `Cross the one-Krill area and continue toward the Boneyard, where there are three Krills.`,
          `Fly toward the wide staircase at the far-right end.`,
          `After exiting, fly toward the temple and enter it. The Map Shrine is behind the shrine.`,
        ],
      },
      {
        id: 7,
        shrine_label: 'Map Shrine 7',
        shrine_url: GW_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 5 | Golden Wasteland, fly to the left, and board the boat.`,
          `When you reach the Treasure Reef, fly toward the tallest tower. The Map Shrine is inside it.`,
        ],
      },
      {
        id: 8,
        shrine_label: 'Map Shrine 8',
        shrine_url: GW_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 5 | Golden Wasteland, continue to the end of the passage, and jump down.`,
          `After landing, fly to the right, find the boat on the shore, and board it.`,
          `When you reach the Forgotten Ark, fly toward the large ship. The Map Shrine is inside, near the center.`,
        ],
      },
      {
        id: 9,
        shrine_label: 'Map Shrine 9',
        shrine_url: GW_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6 | Vault of Knowledge and go to the Season Collaboration Room.`,
          `Find the Memory Cube and use the Meditating Monastic emote near it.`,
          `When you reach the Last City, you will find the Map Shrine on the right.`,
        ],
      },
    ],
  },
  {
    label: 'Dye Ratio',
    value: 'dye_locations',
    icon: SwatchIcon,
    desc: (
      <div className="flex flex-col justify-center items-center">
        <DyeAlertMessage />
        <WastelandDyes />
      </div>
    ),
  },
]
