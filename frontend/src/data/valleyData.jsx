import { Typography, Spinner } from '@material-tailwind/react'
import {
  VALLEY_NUM_REG_SPIRIT,
  VALLEY_NUM_SEASON_SPIRIT,
  VALLEY_NUM_WL,
  VALLEY_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  BACKFLIPPING_CHAMPION,
  BOWING_MEDALIST,
  CHEERFUL_SPECTATOR,
  CONFIDENT_SIGHTSEER,
  HANDSTANDING_THRILLSEEKER,
  MANTA_WHISPERER,
  PROUD_VICTOR,
  LEAPING_DANCER,
  TWIRLING_CHAMPION,
  SPARKLE_PARENT,
  TROUPE_JUGGLER,
  BEARHUG_HERMIT,
  DANCING_PERFORMER,
  PEEKING_POSTMAN,
  SPINNING_MENTOR,
  FORGETFUL_STORYTELLER,
  FRANTIC_STAGEHEAD,
  MELLOW_MUSICIAN,
  MODEST_DANCER,
  MINDFUL_MINER,
  RUNNING_WAYFARER,
  SEED_OF_HOPE,
  WARRIOR_OF_LOVE,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  VT_WL1,
  VT_WL2,
  VT_WL3,
  VT_WL4,
  VT_WL5,
  VT_WL6,
  VT_WL7,
  VT_WL8,
  VT_WL9,
  VT_WL10,
  VT_WL11,
  VT_WL12,
  VT_WL13,
  VT_WL14,
  VT_WL15,
  VT_WL16,
  VT_WL17,
} from '../exports/valleyWLImgUrl'
import {
  VT_MS1,
  VT_MS2,
  VT_MS3,
  VT_MS4,
  VT_MS5,
  VT_MS6,
  VT_MS7,
  VT_MS8,
  VT_MS9,
  VT_MS10,
  VT_MS11,
} from '../exports/valleyMSImgUrl'
import {
  MAP4,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON8,
  SEASON13,
  SEASON15,
} from '../exports/seasonIcons'
import {
  VALLEY_SPIRIT_1,
  VALLEY_SPIRIT_2,
  VALLEY_SPIRIT_3,
  VALLEY_SPIRIT_4,
  VALLEY_SPIRIT_5,
  VALLEY_SPIRIT_6,
  VALLEY_SPIRIT_7,
  VALLEY_SEASON_SPIRIT_1,
  VALLEY_SEASON_SPIRIT_2,
  VALLEY_SEASON_SPIRIT_3,
  VALLEY_SEASON_SPIRIT_4,
  VALLEY_SEASON_SPIRIT_5,
  VALLEY_SEASON_SPIRIT_6,
  VALLEY_SEASON_SPIRIT_7,
  VALLEY_SEASON_SPIRIT_8,
  VALLEY_SEASON_SPIRIT_9,
  VALLEY_SEASON_SPIRIT_10,
  VALLEY_SEASON_SPIRIT_11,
  VALLEY_SEASON_SPIRIT_12,
  VALLEY_SEASON_SPIRIT_13,
  VALLEY_SEASON_SPIRIT_14,
  VALLEY_SEASON_SPIRIT_15,
  VALLEY_SEASON_SPIRIT_16,
} from '../exports/spiritValleyImages'
import {
  CONFIDENT_ITEM_1,
  CONFIDENT_ITEM_2,
  CHAMPION_ITEM_1,
  CHAMPION_ITEM_2,
  HANDSTAND_ITEM_1,
  HANDSTAND_ITEM_2,
  PROUD_ITEM_1,
  PROUD_ITEM_2,
  PROUD_ITEM_3,
  MEDALIST_ITEM_1,
  MEDALIST_ITEM_2,
  CHEERFUL_ITEM_1,
  CHEERFUL_ITEM_2,
  DANCER_ITEM_1,
  DANCER_ITEM_2,
  TWIRLING_ITEM_1,
  TWIRLING_ITEM_2,
  TWIRLING_ITEM_3,
  PARENT_ITEM_1,
  PARENT_ITEM_2,
  PARENT_ITEM_3,
  JUGGLER_ITEM_1,
  JUGGLER_ITEM_2,
  JUGGLER_ITEM_3,
  JUGGLER_ITEM_4,
  PERFORMER_ITEM_1,
  PERFORMER_ITEM_2,
  PERFORMER_ITEM_3,
  PERFORMER_ITEM_4,
  PEEKING_ITEM_1,
  PEEKING_ITEM_2,
  PEEKING_ITEM_3,
  PEEKING_ITEM_4,
  MENTOR_ITEM_1,
  MENTOR_ITEM_2,
  MENTOR_ITEM_3,
  HERMIT_ITEM_1,
  HERMIT_ITEM_2,
  HERMIT_ITEM_3,
  FRANTIC_ITEM_1,
  FRANTIC_ITEM_2,
  FRANTIC_ITEM_3,
  FORGETFUL_ITEM_1,
  FORGETFUL_ITEM_2,
  FORGETFUL_ITEM_3,
  FORGETFUL_ITEM_4,
  MELLOW_ITEM_1,
  MELLOW_ITEM_2,
  MELLOW_ITEM_3,
  MELLOW_ITEM_4,
  MODEST_ITEM_1,
  MODEST_ITEM_2,
  MODEST_ITEM_3,
  WAYFARER_ITEM_1,
  WAYFARER_ITEM_2,
  WAYFARER_ITEM_3,
  MINER_ITEM_1,
  MINER_ITEM_2,
  MINER_ITEM_3,
  MINER_ITEM_4,
  WARRIOR_ITEM_1,
  WARRIOR_ITEM_2,
  WARRIOR_ITEM_3,
  HOPE_ITEM_1,
  HOPE_ITEM_2,
  HOPE_ITEM_3,
} from '../exports/spiritValleyCollectibles'
import ValleyConstellation from '../assets/images/maps-constellations/Valley_Constellation.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import DyeAlertMessage from '../pages/components/DyeAlertMessage'
import ValleyDyes from '../pages/components/MapDyeLocations/ValleyDyes'
import { MapPinIcon, SparklesIcon, SwatchIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/solid'

const youtube_embed = 'https://www.youtube.com/embed/'

export const valley = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    icon: UserIcon,
    desc: (
      <>
        <LazyLoadImage
          src={ValleyConstellation}
          alt="Valley of Triumph"
          title="Valley of Triumph"
          placeholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
          effect="blur"
          className="rounded-xl"
        />
        <Typography className="antialiased font-sans pt-4">
          There are{' '}
          <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
            {VALLEY_NUM_REG_SPIRIT}
          </span>{' '}
          regular spirits that you can find here.
        </Typography>
      </>
    ),
    spirits: [
      // CONFIDENT_SIGHTSEER
      {
        id: 1,
        spirit_id: 'valley1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Confident Sightseer',
        spirit_img_url: CONFIDENT_SIGHTSEER,
        spirit_image: VALLEY_SPIRIT_1,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: CONFIDENT_ITEM_1,
            currency: 'Hearts',
            price: 2,
          },
          {
            label: 'Outfit',
            img: CONFIDENT_ITEM_2,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Emote',
            img: CONFIDENT_SIGHTSEER,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 7,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Valley of Triumph',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + 'ukkYW0UiuKE',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `Fly upward beside the passage on the right, where you will find this spirit.`,
        ],
      },
      // BACKFLIPPING_CHAMPION
      {
        id: 2,
        spirit_id: 'valley2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 50,
        difficulty_types: [0, 2, 5, 6],
        spirit_name: 'Backflipping Champion',
        spirit_img_url: BACKFLIPPING_CHAMPION,
        spirit_image: VALLEY_SPIRIT_2,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: CHAMPION_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Mask',
            img: CHAMPION_ITEM_2,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Emote',
            img: BACKFLIPPING_CHAMPION,
            currency: 'Candles',
            price: 11,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 20,
            hearts: 10,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Valley of Triumph',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + 'GUqYcLjeYA8',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `Enter the passage on the left that leads to the Citadel.`,
          `Fly forward until you reach the Citadel entrance.`,
          `There is a small tower on your left. The spirit is inside it.`,
        ],
      },
      // HANDSTANDING_THRILLSEEKER
      {
        id: 3,
        spirit_id: 'valley3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 50,
        difficulty_types: [0, 2, 5, 6],
        spirit_name: 'Handstanding Thrillseeker',
        spirit_img_url: HANDSTANDING_THRILLSEEKER,
        spirit_image: VALLEY_SPIRIT_3,
        spirit_collectibles: [
          {
            label: 'Cape Lvl 1',
            img: HANDSTAND_ITEM_1,
            currency: 'Hearts',
            price: 40,
          },
          {
            label: 'Cape Lvl 2',
            img: HANDSTAND_ITEM_2,
            currency: 'Hearts',
            price: 120,
          },
          {
            label: 'Emote',
            img: HANDSTANDING_THRILLSEEKER,
            currency: 'Candles',
            price: 11,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 20,
            hearts: 160,
            ascended_candles: 12,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Valley of Triumph',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + 'AwpBBSZcfeE',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `Enter the passage on the left that leads to the Citadel.`,
          `Fly forward until you reach the Citadel entrance.`,
          `Fly toward the main Citadel towers. You will find this spirit along the tower walkways.`,
        ],
      },
      // MANTA_WHISPERER
      {
        id: 4,
        spirit_id: 'valley4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'call',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 65,
        difficulty_types: [0, 2, 5, 6, 12],
        spirit_name: 'Manta Whisperer',
        spirit_img_url: MANTA_WHISPERER,
        spirit_image: VALLEY_SPIRIT_4,
        spirit_collectibles: [
          {
            label: 'Sound-Call',
            img: MANTA_WHISPERER,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 3,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Valley of Triumph',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + 'Tq3HWYajMzY',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `Enter the passage on the left that leads to the Citadel.`,
          `Fly forward until you reach the Citadel entrance.`,
          `Fly toward the main Citadel towers, then head right. This spirit is behind the staircase.`,
        ],
      },
      // PROUD_VICTOR
      {
        id: 5,
        spirit_id: 'valley5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 6],
        spirit_name: 'Proud Victor',
        spirit_img_url: PROUD_VICTOR,
        spirit_image: VALLEY_SPIRIT_5,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: PROUD_ITEM_1,
            currency: 'Hearts',
            price: 30,
          },
          {
            label: 'Cape Lvl 1',
            img: PROUD_ITEM_2,
            currency: 'Hearts',
            price: 10,
          },
          {
            label: 'Cape Lvl 2',
            img: PROUD_ITEM_3,
            currency: 'Hearts',
            price: 30,
          },
          {
            label: 'Stance',
            img: PROUD_VICTOR,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 70,
            ascended_candles: 12,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Valley of Triumph',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + 'HgL7qC1uJvs',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `Enter the passage directly ahead to begin the Skating Race.`,
          `When you reach the Coliseum, go to the upper-left seating area near the statue to find this spirit.`,
        ],
      },
      // BOWING_MEDALIST
      {
        id: 6,
        spirit_id: 'valley6',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 6],
        spirit_name: 'Bowing Medalist',
        spirit_img_url: BOWING_MEDALIST,
        spirit_image: VALLEY_SPIRIT_6,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MEDALIST_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Mask',
            img: MEDALIST_ITEM_2,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Emote',
            img: BOWING_MEDALIST,
            currency: 'Candles',
            price: 11,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 20,
            hearts: 10,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Valley of Triumph',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + 'wwpu2V_6nKI',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `Enter the passage directly ahead to begin the Skating Race.`,
          `When you reach the Coliseum, go to the upper-right seating area near the statue to find this spirit.`,
        ],
      },
      // CHEERFUL_SPECTATOR
      {
        id: 7,
        spirit_id: 'valley7',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 6],
        spirit_name: 'Cheerful Spectator',
        spirit_img_url: CHEERFUL_SPECTATOR,
        spirit_image: VALLEY_SPIRIT_7,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: CHEERFUL_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Prop',
            img: CHEERFUL_ITEM_2,
            currency: 'Hearts',
            price: 10,
          },
          {
            label: 'Emote',
            img: CHEERFUL_SPECTATOR,
            currency: 'Candles',
            price: 11,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 20,
            hearts: 15,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Valley of Triumph',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP4,
        spirit_guide_video_url: youtube_embed + 'kkRnJ8a5p3U',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `Enter the passage directly ahead to begin the Skating Race.`,
          `When you reach the Coliseum, go to the upper-right seating area near the statue to find this spirit.`,
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
        These spirits appeared during previous Seasonal Events and can be found
        whenever you enter the Valley of Triumph. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {VALLEY_NUM_SEASON_SPIRIT}
        </span>{' '}
        seasonal spirits that you can find and relive here.
      </Typography>
    ),
    spirits: [
      // LEAPING_DANCER
      {
        id: 8,
        spirit_id: 'valley8',
        season_id: 1,
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'emote',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 40,
        difficulty_types: [2, 3, 7],
        spirit_name: 'Leaping Dancer',
        spirit_img_url: LEAPING_DANCER,
        spirit_image: VALLEY_SEASON_SPIRIT_1,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: DANCER_ITEM_1,
            currency: 'Candles',
            price: 54,
          },
          {
            label: 'Prop',
            img: DANCER_ITEM_2,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Emote',
            img: LEAPING_DANCER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 107,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jun 24, 2020',
            visitNo: 12,
          },
          {
            visit_date: 'Mar 18, 2021',
            visitNo: 31,
          },
          {
            visit_date: 'Jul 3, 2023',
            visitNo: 'GV#3',
          },
          {
            visit_date: 'Jun 6, 2024',
            visitNo: 115,
          },
          {
            visit_date: 'Aug 27, 2026',
            visitNo: 173,
          },
        ],
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'qM46Yfsl4Oc',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `On the lower-right side is a two-player door. The spirit is inside.`,
        ],
      },
      // TWIRLING_CHAMPION
      {
        id: 9,
        spirit_id: 'valley9',
        season_id: 2,
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseeker',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 2],
        spirit_name: 'Twirling Champion',
        spirit_img_url: TWIRLING_CHAMPION,
        icon_route: SEASON2,
        spirit_image: VALLEY_SEASON_SPIRIT_2,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: TWIRLING_ITEM_1,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Mask',
            img: TWIRLING_ITEM_2,
            currency: 'Candles',
            price: 24,
          },
          {
            label: 'Prop',
            img: TWIRLING_ITEM_3,
            currency: 'Candles',
            price: 60,
          },
          {
            label: 'Emote',
            img: TWIRLING_CHAMPION,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 131,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Sep 17, 2020',
            visitNo: 18,
          },
          {
            visit_date: 'Jan 6, 2022',
            visitNo: 52,
          },
          {
            visit_date: 'Feb 1, 2024',
            visitNo: 106,
          },
          {
            visit_date: 'Jun 4, 2026',
            visitNo: 167,
          },
        ],
        spirit_guide_video_url: youtube_embed + 'gJMN_Wuq2lM',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `You will find this spirit on the left side of the Ice Rink.`,
        ],
      },
      // SPARKLE_PARENT
      {
        id: 10,
        spirit_id: 'valley10',
        season_id: 3,
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 65,
        difficulty_types: [1, 2, 4, 5, 6],
        spirit_name: 'Sparkler Parent',
        spirit_img_url: SPARKLE_PARENT,
        spirit_image: VALLEY_SEASON_SPIRIT_3,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: PARENT_ITEM_1,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Mask',
            img: PARENT_ITEM_2,
            currency: 'Candles',
            price: 36,
          },
          {
            label: 'Prop',
            img: PARENT_ITEM_3,
            currency: 'Candles',
            price: 33,
          },
          {
            label: 'Emote',
            img: SPARKLE_PARENT,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 116,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'May 14, 2020',
            visitNo: 9,
          },
          {
            visit_date: 'Apr 1, 2021',
            visitNo: 32,
          },
          {
            visit_date: 'Dec 23, 2021',
            visitNo: 51,
          },
          {
            visit_date: 'Jun 22, 2023',
            visitNo: 90,
          },
          {
            visit_date: 'Jan 15, 2026',
            visitNo: 157,
          },
        ],
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + '1U65HqbrWeM',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `Enter the passage directly ahead to begin the Skating Race.`,
          `When you reach the Coliseum, enter the temple. A passage on the left leads to this spirit.`,
        ],
      },
      // TROUPE_JUGGLER
      {
        id: 11,
        spirit_id: 'valley11',
        season_id: 4,
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rythm',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Troupe Juggler',
        spirit_img_url: TROUPE_JUGGLER,
        spirit_image: VALLEY_SEASON_SPIRIT_4,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: JUGGLER_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Outfit',
            img: JUGGLER_ITEM_2,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Cape',
            img: JUGGLER_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Prop',
            img: JUGGLER_ITEM_4,
            currency: 'Hearts',
            price: 14,
          },
          {
            label: 'Emote',
            img: TROUPE_JUGGLER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 205,
            hearts: 27,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Sep 16, 2021',
            visitNo: 44,
          },
          {
            visit_date: 'Oct 26, 2023',
            visitNo: 99,
          },
          {
            visit_date: 'Jan 13, 2025',
            visitNo: 'GV#7',
          },
        ],
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'Fa5csPKdgCo',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph, and slide down until you reach the Ice Rink plaza.`,
          `Enter the tunnel on the left side of the Ice Rink. You will find this spirit inside.`,
        ],
      },
      // DANCING_PERFORMER
      {
        id: 12,
        spirit_id: 'valley12',
        season_id: 8,
        spirit_type: 'seasonal',
        season: 'Season 8 - Season of Dreams',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Dancing Performer',
        spirit_img_url: DANCING_PERFORMER,
        spirit_image: VALLEY_SEASON_SPIRIT_5,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: PERFORMER_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Mask',
            img: PERFORMER_ITEM_2,
            currency: 'Candles',
            price: 50,
          },
          {
            label: 'Cape',
            img: PERFORMER_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Prop',
            img: PERFORMER_ITEM_4,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: DANCING_PERFORMER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 240,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Apr 25, 2024',
            visitNo: 112,
          },
        ],
        icon_route: SEASON8,
        spirit_guide_video_url: youtube_embed + 'CUcyXXvawO8',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph. Enter the passage on your right.`,
          `Skate downhill. You will find this spirit among the houses on the left.`,
        ],
      },
      // PEEKING_POSTMAN
      {
        id: 13,
        spirit_id: 'valley13',
        season_id: 8,
        spirit_type: 'seasonal',
        season: 'Season 8 - Season of Dreams',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Peeking Postman',
        spirit_img_url: PEEKING_POSTMAN,
        spirit_image: VALLEY_SEASON_SPIRIT_6,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: PEEKING_ITEM_1,
            currency: 'Candles',
            price: 54,
          },
          {
            label: 'Outfit',
            img: PEEKING_ITEM_2,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Cape',
            img: PEEKING_ITEM_3,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Shoes',
            img: PEEKING_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: PEEKING_POSTMAN,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 217,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jun 23, 2022',
            visitNo: 64,
          },
        ],
        icon_route: SEASON8,
        spirit_guide_video_url: youtube_embed + 'uCfBPcR9X4k',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph. Enter the passage on your right.`,
          `Skate down to the Village of Dreams plaza. This spirit is hidden behind the Quest Giver's house.`,
        ],
      },
      // SPINNING_MENTOR
      {
        id: 14,
        spirit_id: 'valley14',
        season_id: 8,
        spirit_type: 'seasonal',
        season: 'Season 8 - Season of Dreams',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Spinning Mentor',
        spirit_img_url: SPINNING_MENTOR,
        spirit_image: VALLEY_SEASON_SPIRIT_7,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MENTOR_ITEM_1,
            currency: 'Candles',
            price: 44,
          },
          {
            label: 'Mask',
            img: MENTOR_ITEM_2,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Cape',
            img: MENTOR_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: SPINNING_MENTOR,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 169,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Apr 14, 2022',
            visitNo: 59,
          },
          {
            visit_date: 'Jul 6, 2023',
            visitNo: 91,
          },
          {
            visit_date: 'Aug 15, 2024',
            visitNo: 120,
          },
          {
            visit_date: 'Aug 13, 2026',
            visitNo: 172,
          },
        ],
        icon_route: SEASON8,
        spirit_guide_video_url: youtube_embed + 'QOFfrU-J-Yw',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph. Enter the passage on your right.`,
          `Skate down to the Village of Dreams plaza. Just ahead of the Quest Giver, on the right, this spirit is beside a house.`,
        ],
      },
      // BEARHUG_HERMIT
      {
        id: 15,
        spirit_id: 'valley15',
        season_id: 8,
        spirit_type: 'seasonal',
        season: 'Season 8 - Season of Dreams',
        spirit_category: 'frienship action',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 55,
        difficulty_types: [1, 4, 5, 6],
        spirit_name: 'Bearhug Hermit',
        spirit_img_url: BEARHUG_HERMIT,
        spirit_image: VALLEY_SEASON_SPIRIT_8,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: HERMIT_ITEM_1,
            currency: 'Candles',
            price: 50,
          },
          {
            label: 'Hair Accessory',
            img: HERMIT_ITEM_2,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Outfit',
            img: HERMIT_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Friendship Action',
            img: BEARHUG_HERMIT,
            currency: 'Hearts',
            price: 8,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 190,
            hearts: 8,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Nov 24, 2022',
            visitNo: 75,
          },
          {
            visit_date: 'Feb 15, 2024',
            visitNo: 107,
          },
        ],
        icon_route: SEASON8,
        spirit_guide_video_url: youtube_embed + 's_0_jm6c8SY',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph. Enter the passage on your right.`,
          `Skate down to the Village of Dreams plaza. This spirit is behind one of the houses on the left.`,
        ],
      },
      // FRANTIC_STAGEHEAD
      {
        id: 16,
        spirit_id: 'valley16',
        season_id: 13,
        spirit_type: 'seasonal',
        season: 'Season 13 - Season of Performance',
        spirit_category: 'friendship action',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Frantic Stagehand',
        spirit_img_url: FRANTIC_STAGEHEAD,
        spirit_image: VALLEY_SEASON_SPIRIT_9,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: FRANTIC_ITEM_1,
            currency: 'Candles',
            price: 48,
          },
          {
            label: 'Mask',
            img: FRANTIC_ITEM_2,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Outfit',
            img: FRANTIC_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Friendship Action',
            img: FRANTIC_STAGEHEAD,
            currency: 'Hearts',
            price: 8,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 187,
            hearts: 8,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Mar 4, 2024',
            visitNo: 'GV#5',
          },
        ],
        icon_route: SEASON13,
        spirit_guide_video_url: youtube_embed + 'iRsevRYePBI',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph. Enter the passage on your right.`,
          `Skate downhill and enter the Village Theater on your right.`,
          `You will find this spirit between the third and fourth houses on your left.`,
        ],
      },
      // FORGETFUL_STORYTELLER
      {
        id: 17,
        spirit_id: 'valley17',
        season_id: 13,
        spirit_type: 'seasonal',
        season: 'Season 13 - Season of Performance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Forgetful Storyteller',
        spirit_img_url: FORGETFUL_STORYTELLER,
        spirit_image: VALLEY_SEASON_SPIRIT_10,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: FORGETFUL_ITEM_1,
            currency: 'Candles',
            price: 44,
          },
          {
            label: 'Mask',
            img: FORGETFUL_ITEM_2,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Outfit',
            img: FORGETFUL_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Cape',
            img: FORGETFUL_ITEM_4,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: FORGETFUL_STORYTELLER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 231,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jan 30, 2025',
            visitNo: 132,
          },
        ],
        icon_route: SEASON13,
        spirit_guide_video_url: youtube_embed + '6fCttoMbOB0',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph. Enter the passage on your right.`,
          `Skate downhill and enter the Village Theater on your right.`,
          `You will immediately see this spirit on your right.`,
        ],
      },
      // MELLOW_MUSICIAN
      {
        id: 18,
        spirit_id: 'valley18',
        season_id: 13,
        spirit_type: 'seasonal',
        season: 'Season 13 - Season of Performance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Mellow Musician',
        spirit_img_url: MELLOW_MUSICIAN,
        spirit_image: VALLEY_SEASON_SPIRIT_11,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MELLOW_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Mask',
            img: MELLOW_ITEM_2,
            currency: 'Candles',
            price: 32,
          },
          {
            label: 'Cape',
            img: MELLOW_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Instrument',
            img: MELLOW_ITEM_4,
            currency: 'Candles',
            price: 80,
          },
          {
            label: 'Emote',
            img: MELLOW_MUSICIAN,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 237,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Aug 1, 2024',
            visitNo: 119,
          },
        ],
        icon_route: SEASON13,
        spirit_guide_video_url: youtube_embed + '-K0-u2qIJsM',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph. Enter the passage on your right.`,
          `Skate downhill and enter the Village Theater on your right.`,
          `You will find this spirit between the first and second houses on your left.`,
        ],
      },
      // MODEST_DANCER
      {
        id: 19,
        spirit_id: 'valley19',
        season_id: 13,
        spirit_type: 'seasonal',
        season: 'Season 13 - Season of Performance',
        spirit_category: 'friendship action',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Modest Dancer',
        spirit_img_url: MODEST_DANCER,
        spirit_image: VALLEY_SEASON_SPIRIT_12,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MODEST_ITEM_1,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Mask',
            img: MODEST_ITEM_2,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Outfit',
            img: MODEST_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Friendship Action',
            img: MODEST_DANCER,
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
            visit_date: 'Jan 13, 2025',
            visitNo: 'GV#7',
          },
        ],
        icon_route: SEASON13,
        spirit_guide_video_url: youtube_embed + 'g3MSGbE9XZA',
        spirit_direction: [
          `Enter the fourth realm, Valley of Triumph. Enter the passage on your right.`,
          `Skate downhill and enter the Village Theater on your right.`,
          `This spirit is behind the fifth and sixth houses on your left.`,
        ],
      },
      // RUNNING_WAYFARER
      {
        id: 20,
        spirit_id: 'valley20',
        season_id: 15,
        spirit_type: 'seasonal',
        season: 'Season 15 - Season of AURORA',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Running Wayfarer',
        spirit_img_url: RUNNING_WAYFARER,
        spirit_image: VALLEY_SEASON_SPIRIT_13,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: WAYFARER_ITEM_1,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Mask',
            img: WAYFARER_ITEM_2,
            currency: 'Candles',
            price: 35,
          },
          {
            label: 'Cape',
            img: WAYFARER_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Emote',
            img: RUNNING_WAYFARER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 178,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jun 9, 2025',
            visitNo: 'GV #9',
          },
        ],
        icon_route: SEASON15,
        spirit_guide_video_url: youtube_embed + '0nc59JDjgoA',
        spirit_direction: [
          `Enter the fifth map, Valley of Triumph, and proceed to the Coliseum.`,
          `Find the AURORA Spirit beside the tent on the right and begin the first quest.`,
          `The quest takes place at the entrance of the first realm, Isle of Dawn.`,
        ],
      },
      // MINDFUL_MINER
      {
        id: 21,
        spirit_id: 'valley21',
        season_id: 15,
        spirit_type: 'seasonal',
        season: 'Season 15 - Season of AURORA',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Mindful Miner',
        spirit_img_url: MINDFUL_MINER,
        spirit_image: VALLEY_SEASON_SPIRIT_14,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MINER_ITEM_1,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Mask',
            img: MINER_ITEM_2,
            currency: 'Candles',
            price: 35,
          },
          {
            label: 'Outfit',
            img: MINER_ITEM_3,
            currency: 'Candles',
            price: 55,
          },
          {
            label: 'Cape',
            img: MINER_ITEM_4,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Emote',
            img: MINDFUL_MINER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 218,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Feb 27, 2025',
            visitNo: 134,
          },
          {
            visit_date: 'Jun 9, 2025',
            visitNo: 'GV #9',
          },
        ],
        icon_route: SEASON15,
        spirit_guide_video_url: youtube_embed + '09XhkJcsL90',
        spirit_direction: [
          `Enter the fifth map, Valley of Triumph, and proceed to the Coliseum.`,
          `Find the AURORA Spirit beside the tent on the right and begin the second quest.`,
          `The quest takes place in the Underground Cavern of the third realm, Hidden Forest.`,
        ],
      },
      // WARRIOR_OF_LOVE
      {
        id: 22,
        spirit_id: 'valley22',
        season_id: 15,
        spirit_type: 'seasonal',
        season: 'Season 15 - Season of AURORA',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Warrior of Love',
        spirit_img_url: WARRIOR_OF_LOVE,
        spirit_image: VALLEY_SEASON_SPIRIT_15,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: WARRIOR_ITEM_1,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Mask',
            img: WARRIOR_ITEM_2,
            currency: 'Candles',
            price: 35,
          },
          {
            label: 'Cape',
            img: WARRIOR_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Emote',
            img: WARRIOR_OF_LOVE,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 183,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Nov 7, 2024',
            visitNo: 126,
          },
          {
            visit_date: 'Jun 9, 2025',
            visitNo: 'GV #9',
          },
        ],
        icon_route: SEASON15,
        spirit_guide_video_url: youtube_embed + 'Lb3DAYkWxoM',
        spirit_direction: [
          `Enter the fifth map, Valley of Triumph, and proceed to the Coliseum.`,
          `Find the AURORA Spirit beside the tent on the right and begin the third quest.`,
          `The quest takes place in the Citadel of the fourth realm, Valley of Triumph.`,
        ],
      },
      // SEED_OF_HOPE
      {
        id: 23,
        spirit_id: 'valley23',
        season_id: 15,
        spirit_type: 'seasonal',
        season: 'Season 15 - Season of AURORA',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Seed of Hope',
        spirit_img_url: SEED_OF_HOPE,
        spirit_image: VALLEY_SEASON_SPIRIT_16,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: HOPE_ITEM_1,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Mask',
            img: HOPE_ITEM_2,
            currency: 'Candles',
            price: 35,
          },
          {
            label: 'Cape',
            img: HOPE_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Emote',
            img: SEED_OF_HOPE,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 178,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jun 9, 2025',
            visitNo: 'GV #9',
          },
        ],
        icon_route: SEASON15,
        spirit_guide_video_url: youtube_embed + 'xLymA7CvM04',
        spirit_direction: [
          `Enter the fifth map, Valley of Triumph, and proceed to the Coliseum.`,
          `Find the AURORA Spirit beside the tent on the right and begin the fourth quest.`,
          `The quest takes place in the Battlefield of the fifth realm, Golden Wasteland.`,
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
        You can also find Winged Lights throughout this realm. Collecting them
        increases your Wing Level, allowing you to fly higher. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {VALLEY_NUM_WL}
        </span>{' '}
        Winged Lights that you can collect here.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'WL1-Slope Entrance',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL1 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill. Steer your Sky kid to the left so that you pass through the Winged Light. You do not need to tap it, but you must pass through its center.`,
        ],
      },
      {
        id: 2,
        wl_label: 'WL2-Ice Rink (Underground)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter the passage beneath the Ice Rink. The Winged Light is near the broken boat.`,
        ],
      },
      {
        id: 3,
        wl_label: 'WL3-Ice Rink (Center Elevated)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `This Winged Light is on the elevated platform at the center of the Ice Rink.`,
        ],
      },
      {
        id: 4,
        wl_label: 'WL4-Citadel (Top Gazebo)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter the passage on the left toward the Citadel. The Winged Light is on the left of the two highest towers when you are facing the Flying Race entrance.`,
        ],
      },
      {
        id: 5,
        wl_label: 'WL5-Citadel (Hollowed Wall)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter the passage on the left toward the Citadel. Go to the lower section of the left tower while facing away from the Flying Race entrance. Pass through the Winged Light to collect it.`,
        ],
      },
      {
        id: 6,
        wl_label: 'WL6-Flying Race (Ruin Hall)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter the passage on the left toward the Citadel and begin the Flying Race. Make sure to pass through the center of the Winged Light because you cannot fly back after passing it.`,
          `It is on the right side of the race. Pass through it to collect it.`,
        ],
      },
      {
        id: 7,
        wl_label: 'WL7-Flying Race (Floating Gazebo)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter the passage on the left toward the Citadel and begin the Flying Race. Make sure to pass through the center of the Winged Light because you cannot fly back after passing it.`,
          `Look for the ruined tower among the floating rocks.`,
          `Steer your Sky kid to the right and pass through the Winged Light to collect it.`,
        ],
      },
      {
        id: 8,
        wl_label: 'WL8-Skating Race (Elevated Platform)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter the middle passage and begin the Skating Race.`,
          `The Winged Light is on a rock. Pass through it to collect it.`,
        ],
      },
      {
        id: 9,
        wl_label: 'WL9-Joined Race (End of Race)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter either the middle or left passage and complete one of the races.`,
          `This Winged Light is at the end of both races, just before entering the Coliseum.`,
        ],
      },
      {
        id: 10,
        wl_label: 'WL10-Coliseum (Left Statue)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL10 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter either the middle or left passage and complete one of the races.`,
          `When you reach the Coliseum, the Winged Light is on the left shoulder of the large left statue when facing the temple, or on your left when facing away from the temple.`,
        ],
      },
      {
        id: 11,
        wl_label: 'WL11-Temple (Temple Maze)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL11 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter either the middle or left passage and complete one of the races.`,
          `When you reach the Coliseum, enter the temple and turn left. There is a passage near the top of the wall.`,
          `Follow the passage to find this Winged Light.`,
        ],
      },
      {
        id: 12,
        wl_label: 'WL12-Village of Dreams (Hollowed Mountain)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL12 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph. A passage on your right leads to the Village of Dreams; enter it.`,
          `Skate downhill. One of the hills on the left has an opening containing the Winged Light.`,
        ],
      },
      {
        id: 13,
        wl_label: 'WL13-Village of Dreams (Hollowed Mountain)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL13 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph. A passage on your right leads to the Village of Dreams; enter it.`,
          `Skate downhill. One of the hills on the right has an opening containing the Winged Light.`,
        ],
      },
      {
        id: 14,
        wl_label: 'WL14-Village Theater (Backstage)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-13',
        wl_url: VT_WL14 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph. A passage on your right leads to the Village of Dreams; enter it.`,
          `When you reach the plaza, enter the passage on your right toward the Village Theater.`,
          `Enter the Theater Hall. Behind the stage is a guitar beside a passage; enter that passage and follow it to the Winged Light at the end.`,
        ],
      },
      {
        id: 15,
        wl_label: 'WL15-Village of Dreams (Terminal 2 Tower)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL15 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph. A passage on your right leads to the Village of Dreams; enter it.`,
          `From the plaza, climb toward the next boat terminal.`,
          `The Winged Light is at the top of the tower in the center.`,
        ],
      },
      {
        id: 16,
        wl_label: `WL16-Hermit's Valley (Outside Hollow)`,
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL16 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph. A passage on your right leads to the Village of Dreams; enter it.`,
          `From the plaza, climb toward the next boat terminal.`,
          `Ride the ferry boat to Hermit's Valley. Behind you, on the right side of the mountain, is a cave containing the Winged Light.`,
        ],
      },
      {
        id: 17,
        wl_label: `WL17-Hermit's Valley (Hollowed Wall)`,
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL17 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 4, Valley of Triumph. A passage on your right leads to the Village of Dreams; enter it.`,
          `From the plaza, climb toward the next boat terminal.`,
          `Ride the ferry boat to Hermit's Valley. You will find this Winged Light behind the mountain.`,
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
        Map Shrines help you determine how many Winged Lights you still need to
        collect and where they are located within the realm. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {VALLEY_NUM_MAP_SHRINES}
        </span>{' '}
        Map Shrines that you can activate throughout the Valley of Triumph.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 1',
        shrine_url: VT_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph. There is a ruined gazebo structure on your right.`,
          `The Map Shrine is behind it.`,
        ],
      },
      {
        id: 2,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 2',
        shrine_url: VT_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `The Map Shrine is on the elevated platform in the center.`,
        ],
      },
      {
        id: 3,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 3',
        shrine_url: VT_MS3 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter the passage on the left toward the Citadel.`,
          `When you reach the Citadel, the Map Shrine is inside the gazebo structure on the right.`,
        ],
      },
      {
        id: 4,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 4',
        shrine_url: VT_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter the passage on the left toward the Citadel.`,
          `When you reach the Citadel, the Map Shrine is behind the tallest pillar—the pillar on the right when facing the Flying Race entrance.`,
        ],
      },
      {
        id: 5,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 5',
        shrine_url: VT_MS5 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter the passage on the left toward the Citadel.`,
          `Proceed to the Flying Race temple and enter it.`,
          `The Map Shrine is on the right side of the temple interior.`,
        ],
      },
      {
        id: 6,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 6',
        shrine_url: VT_MS6 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph, and skate downhill until you reach the Ice Rink.`,
          `Enter the middle passage toward the Skating Race.`,
          `When you reach the Skating Race temple, the Map Shrine is on the right.`,
        ],
      },
      {
        id: 7,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 7',
        shrine_url: VT_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph. A passage on the right leads to the Village of Dreams.`,
          `Skate downhill. Before reaching the central plaza, look on the left near a house to find the Map Shrine.`,
        ],
      },
      {
        id: 8,
        shrine_group: 'shrine-season-13',
        shrine_label: 'Map Shrine 8',
        shrine_url: VT_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph. A passage on the right leads to the Village of Dreams.`,
          `Skate downhill. Before reaching the central plaza, enter the passage on the right toward the Village Theater.`,
          `When you reach the Village Theater, the Map Shrine is on the left.`,
        ],
      },
      {
        id: 9,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 9',
        shrine_url: VT_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph. A passage on the right leads to the Village of Dreams.`,
          `Skate downhill. The Map Shrine is on an elevated platform in front of the statue, near the Performance Hall exit.`,
        ],
      },
      {
        id: 10,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 10',
        shrine_url: VT_MS10 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph. A passage on the right leads to the Village of Dreams.`,
          `Skate downhill and proceed to the port just ahead of the plaza on the left.`,
          `Ride the floating boat, then take the next boat from the following terminal to Hermit's Valley.`,
          `When you arrive, fly toward the cave on the right. The Map Shrine is on top of the cave.`,
        ],
      },
      {
        id: 11,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 11',
        shrine_url: VT_MS11 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 4, Valley of Triumph, skate downhill to the Ice Rink, and complete either race.`,
          `When you reach the Coliseum, the Map Shrine is behind the upper seating area.`,
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
        <ValleyDyes />
      </div>
    ),
  },
]
