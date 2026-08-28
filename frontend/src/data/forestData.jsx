import { Typography, Spinner } from '@material-tailwind/react'
import {
  FOREST_NUM_REG_SPIRIT,
  FOREST_NUM_SEASON_SPIRIT,
  FOREST_NUM_WL,
  FOREST_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  APOLOGETIC_LUMBERJACK,
  BLUSHING_PROSPECTOR,
  DISMAYED_HUNTER,
  HIDENSEEK_PIONEER,
  POUTY_PORTER,
  SHIVERING_TRAILBLAZER,
  TEARFUL_MINER,
  WHALE_WHISPERER,
  PROVOKING_PERFORMER,
  LAIDBACK_PIONEER,
  HAIRTOUSLE_TEEN,
  ADMIRING_ACTOR,
  BAFFLED_BOTANIST,
  CHUCKLING_SCOUT,
  DAYDREAM_FORESTER,
  MARCHING_ADVENTURER,
  SCAREDY_CADET,
  SCOLDING_SPIRIT,
  LIGHT_WHISPERER,
  LIVELY_NAVIGATOR,
  TALENTED_BUILDER,
  TINKERING_CHIMESMITH,
  DIVING_WISE_GRANDPARENT,
  COSTUMED_CONFETTI_COUSIN,
  NOSTALGIC_SPARKLER_PARENT,
  ROYAL_HAIRTOUSLE_TEEN,
  WOODCUTTING_PLEAFUL_PARENT,
  MIGRATING_MANTA_WHISPERER,
  MIGRATING_BIRD_WHISPERER,
  MIGRATING_BUTTERFLY_WHISPERER,
  MIGRATING_JELLY_WHISPERER,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT, NON_SPIRIT } from '../exports/defaultImages'
import {
  MAP3,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON9,
  SEASON11,
  SEASON25,
  SEASON27,
} from '../exports/seasonIcons'
import {
  HF_WL1,
  HF_WL2,
  HF_WL3,
  HF_WL4,
  HF_WL5,
  HF_WL6,
  HF_WL7,
  HF_WL8,
  HF_WL9,
  HF_WL10,
  HF_WL11,
  HF_WL12,
  HF_WL13,
  HF_WL14,
  HF_WL15,
  HF_WL16,
  HF_WL17,
  HF_WL18,
  HF_WL19,
  HF_WL20,
  HF_WL21,
} from '../exports/forestImgWLUrl'
import {
  HF_MS1,
  HF_MS2,
  HF_MS3,
  HF_MS4,
  HF_MS5,
  HF_MS6,
  HF_MS7,
  HF_MS8,
  HF_MS9,
  HF_MS10,
  HF_MS11,
} from '../exports/forestMSImgUrl'
import {
  FOREST_SPIRIT_1,
  FOREST_SPIRIT_2,
  FOREST_SPIRIT_3,
  FOREST_SPIRIT_4,
  FOREST_SPIRIT_5,
  FOREST_SPIRIT_6,
  FOREST_SPIRIT_7,
  FOREST_SPIRIT_8,
  FOREST_SEASON_SPIRIT_9,
  FOREST_SEASON_SPIRIT_10,
  FOREST_SEASON_SPIRIT_11,
  FOREST_SEASON_SPIRIT_12,
  FOREST_SEASON_SPIRIT_13,
  FOREST_SEASON_SPIRIT_14,
  FOREST_SEASON_SPIRIT_15,
  FOREST_SEASON_SPIRIT_16,
  FOREST_SEASON_SPIRIT_17,
  FOREST_SEASON_SPIRIT_18,
  FOREST_SEASON_SPIRIT_19,
  FOREST_SEASON_SPIRIT_20,
  FOREST_SEASON_SPIRIT_21,
  FOREST_SEASON_SPIRIT_22,
  FOREST_SEASON_SPIRIT_23,
  FOREST_SEASON_SPIRIT_24,
  FOREST_SEASON_SPIRIT_25,
  FOREST_SEASON_SPIRIT_26,
  FOREST_SEASON_SPIRIT_27,
  FOREST_SEASON_SPIRIT_28,
  FOREST_SEASON_SPIRIT_29,
  FOREST_SEASON_SPIRIT_30,
  FOREST_SEASON_SPIRIT_31,
} from '../exports/spiritForestImages'
import {
  SHIVERING_ITEM_1,
  SHIVERING_ITEM_2,
  PROSPECTOR_ITEM_1,
  PROSPECTOR_ITEM_2,
  PIONEER_ITEM_1,
  PIONEER_ITEM_2,
  PIONEER_ITEM_3,
  PORTER_ITEM_1,
  PORTER_ITEM_2,
  PORTER_ITEM_3,
  HUNTER_ITEM_1,
  HUNTER_ITEM_2,
  HUNTER_ITEM_3,
  APOLOGETIC_ITEM_1,
  APOLOGETIC_ITEM_2,
  MINER_ITEM_1,
  PERFORMER_ITEM_1,
  PERFORMER_ITEM_2,
  LAIDBACK_ITEM_1,
  LAIDBACK_ITEM_2,
  LAIDBACK_ITEM_3,
  TEEN_ITEM_1,
  TEEN_ITEM_2,
  ACTOR_ITEM_1,
  ACTOR_ITEM_2,
  BOTANIST_ITEM_1,
  BOTANIST_ITEM_2,
  BOTANIST_ITEM_3,
  STUDENT_ITEM_1,
  STUDENT_ITEM_2,
  STUDENT_ITEM_3,
  ADVENTURER_ITEM_1,
  ADVENTURER_ITEM_2,
  ADVENTURER_ITEM_3,
  CADET_ITEM_1,
  CADET_ITEM_2,
  CADET_ITEM_3,
  SCOUT_ITEM_1,
  SCOUT_ITEM_2,
  SCOUT_ITEM_3,
  SCOUT_ITEM_4,
  FORESTER_ITEM_1,
  FORESTER_ITEM_2,
  TINKERING_ITEM_1,
  TINKERING_ITEM_2,
  TINKERING_ITEM_3,
  TINKERING_ITEM_4,
  LIGHT_ITEM_1,
  LIGHT_ITEM_2,
  LIGHT_ITEM_3,
  LIGHT_ITEM_4,
  LIVELY_ITEM_1,
  LIVELY_ITEM_2,
  LIVELY_ITEM_3,
  BUILDER_ITEM_1,
  BUILDER_ITEM_2,
  BUILDER_ITEM_3,
  DIVINING_ITEM_1,
  DIVINING_ITEM_2,
  COSTUMED_ITEM_1,
  COSTUMED_ITEM_2,
  COSTUMED_ITEM_3,
  COSTUMED_ITEM_4,
  ROYAL_ITEM_1,
  ROYAL_ITEM_2,
  ROYAL_ITEM_3,
  NOSTALGIC_ITEM_1,
  NOSTALGIC_ITEM_2,
  WOODCUTTING_ITEM_1,
  WOODCUTTING_ITEM_2,
  MMANTA_ITEM_1,
  MMANTA_ITEM_2,
  MMANTA_ITEM_3,
  MBIRD_ITEM_1,
  MBIRD_ITEM_2,
  MBUTTERFLY_ITEM_1,
  MBUTTERFLY_ITEM_2,
  MJELLY_ITEM_1,
  MJELLY_ITEM_2,
} from '../exports/spiritForestCollectibles'

import ForestConstellation from '../assets/images/maps-constellations/Forest_Constellation.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ForestDyes from '../pages/components/MapDyeLocations/ForestDyes'
import DyeAlertMessage from '../pages/components/DyeAlertMessage'
import { MapPinIcon, SparklesIcon, SwatchIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/solid'

const youtube_embed = 'https://www.youtube.com/embed/'

export const hiddenForest = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    icon: UserIcon,
    desc: (
      <>
        <LazyLoadImage
          src={ForestConstellation}
          alt="Hidden Forest"
          title="Hidden Forest"
          placeholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
          effect="blur"
          className="rounded-xl"
        />
        <Typography className="antialiased font-sans pt-4">
          This is the third constellation—Hidden Forest. There are{' '}
          <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
            {FOREST_NUM_REG_SPIRIT}
          </span>{' '}
          regular spirits you can find here.
        </Typography>
      </>
    ),
    spirits: [
      // SHIVERING_TRAILBLAZER
      {
        id: 1,
        spirit_id: 'forest1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 3],
        spirit_name: 'Shivering Trailblazer',
        spirit_img_url: SHIVERING_TRAILBLAZER,
        spirit_image: FOREST_SPIRIT_1,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: SHIVERING_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Outfit',
            img: SHIVERING_ITEM_2,
            currency: 'Hearts',
            price: 2,
          },
          {
            label: 'Emote',
            img: SHIVERING_TRAILBLAZER,
            currency: 'Candles',
            price: 8,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 17,
            hearts: 7,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Hidden Forest',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + '8pc34umHQSE',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate',
          `Light the fire icon that appears on the right side of the gate to open it.`,
          'Once the gate opens, the spirit is on the left side of the room.',
        ],
      },
      // BLUSHING_PROSPECTOR
      {
        id: 2,
        spirit_id: 'forest2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Blushing Prospector',
        spirit_img_url: BLUSHING_PROSPECTOR,
        spirit_image: FOREST_SPIRIT_2,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: PROSPECTOR_ITEM_1,
            currency: 'Hearts',
            price: 3,
          },
          {
            label: 'Instrument',
            img: PROSPECTOR_ITEM_2,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Emote',
            img: BLUSHING_PROSPECTOR,
            currency: 'Candles',
            price: 11,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 20,
            hearts: 8,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Hidden Forest',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + 'hYHmaLE69Ts',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone shelter.',
          'You will find another stone shelter on your left where this spirit is located.',
        ],
      },
      // HIDENSEEK_PIONEER
      {
        id: 3,
        spirit_id: 'forest3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: `Hide'n'Seek Pioneer`,
        spirit_img_url: HIDENSEEK_PIONEER,
        spirit_image: FOREST_SPIRIT_3,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: PIONEER_ITEM_1,
            currency: 'Hearts',
            price: 2,
          },
          {
            label: 'Mask',
            img: PIONEER_ITEM_2,
            currency: 'Hearts',
            price: 20,
          },
          {
            label: 'Outfit',
            img: PIONEER_ITEM_3,
            currency: 'Hearts',
            price: 15,
          },
          {
            label: 'Emote',
            img: HIDENSEEK_PIONEER,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 37,
            ascended_candles: 9,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Hidden Forest',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + 'XoCtDrapcZc',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone bridge.',
          'Before reaching the bridge, burn the dark plants on your right. This spirit is inside.',
        ],
      },
      // POUTY_PORTER
      {
        id: 4,
        spirit_id: 'forest4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Pouty Porter',
        spirit_img_url: POUTY_PORTER,
        spirit_image: FOREST_SPIRIT_4,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: PORTER_ITEM_1,
            currency: 'Hearts',
            price: 3,
          },
          {
            label: 'Cape Lvl 1',
            img: PORTER_ITEM_2,
            currency: 'Hearts',
            price: 20,
          },
          {
            label: 'Cape Lvl 2',
            img: PORTER_ITEM_3,
            currency: 'Hearts',
            price: 60,
          },
          {
            label: 'Emote',
            img: POUTY_PORTER,
            currency: 'Candles',
            price: 11,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 20,
            hearts: 83,
            ascended_candles: 8,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Hidden Forest',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + 'fgQxc-BYips',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone bridge.',
          'The tunnel on your left is where this spirit is located.',
        ],
      },
      // DISMAYED_HUNTER
      {
        id: 5,
        spirit_id: 'forest5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Dismayed Hunter',
        spirit_img_url: DISMAYED_HUNTER,
        spirit_image: FOREST_SPIRIT_5,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: HUNTER_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Cape Lvl 1',
            img: HUNTER_ITEM_2,
            currency: 'Hearts',
            price: 30,
          },
          {
            label: 'Cape Lvl 2',
            img: HUNTER_ITEM_3,
            currency: 'Hearts',
            price: 90,
          },
          {
            label: 'Emote',
            img: DISMAYED_HUNTER,
            currency: 'Candles',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 22,
            hearts: 125,
            ascended_candles: 12,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Hidden Forest',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + 'rLhuEJ2t0BM',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone bridge and enter the tunnel at the end.',
          'After exiting the tunnel, you will find this spirit sheltered along the right side.',
        ],
      },
      // APOLOGETIC_LUMBERJACK
      {
        id: 6,
        spirit_id: 'forest6',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Apologetic Lumberjack',
        spirit_img_url: APOLOGETIC_LUMBERJACK,
        spirit_image: FOREST_SPIRIT_6,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: APOLOGETIC_ITEM_1,
            currency: 'Hearts',
            price: 3,
          },
          {
            label: 'Mask',
            img: APOLOGETIC_ITEM_2,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Emote',
            img: APOLOGETIC_LUMBERJACK,
            currency: 'Candles',
            price: 9,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 18,
            hearts: 8,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Hidden Forest',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + 'z4LBCfASS6I',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone bridge and enter the tunnel at the end.',
          'After exiting, look toward the left side of the tunnels to find this spirit.',
        ],
      },
      // WHALE_WHISPERER
      {
        id: 7,
        spirit_id: 'forest7',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'call',
        spirit_relive_type: 'task',
        difficulty_level: 15,
        difficulty_types: [1, 8],
        spirit_name: 'Whale Whisperer',
        spirit_img_url: WHALE_WHISPERER,
        spirit_image: FOREST_SPIRIT_7,
        spirit_collectibles: [
          {
            label: 'Sound-Call',
            img: WHALE_WHISPERER,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 2,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Hidden Forest',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + 'sIGC16Ex-Kk',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone bridge and enter the tunnel at the end.',
          'After exiting, fly toward the broken bridges. You will see whale bones on the left; burn all the dark plants there to obtain this spirit.',
        ],
      },
      // TEARFUL_MINER
      {
        id: 8,
        spirit_id: 'forest8',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Tearful Light Miner',
        spirit_img_url: TEARFUL_MINER,
        spirit_image: FOREST_SPIRIT_8,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MINER_ITEM_1,
            currency: 'Hearts',
            price: 3,
          },
          {
            label: 'Emote',
            img: TEARFUL_MINER,
            currency: 'Candles',
            price: 21,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 30,
            hearts: 3,
            ascended_candles: 4,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Hidden Forest',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP3,
        spirit_guide_video_url: youtube_embed + 'n-SGJml4iXs',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone bridge and enter the tunnel at the end.',
          'After exiting, fly toward the broken bridges. There is a cave on the right with this spirit inside.',
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
        These spirits appeared during past Seasonal Events and can be found
        when you enter Hidden Forest. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {FOREST_NUM_SEASON_SPIRIT}
        </span>{' '}
        seasonal spirits you can find and relive here.
      </Typography>
    ),
    spirits: [
      // PROVOKING_PERFORMER
      {
        id: 1,
        spirit_id: 'forest9',
        season_id: 1,
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Provoking Performer',
        spirit_img_url: PROVOKING_PERFORMER,
        spirit_image: FOREST_SEASON_SPIRIT_9,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: PERFORMER_ITEM_1,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Mask',
            img: PERFORMER_ITEM_2,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Emote',
            img: PROVOKING_PERFORMER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 104,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Mar 12, 2020',
            visitNo: 4,
          },
          {
            visit_date: 'Oct 1, 2020',
            visitNo: 19,
          },
          {
            visit_date: 'Mar 30, 2023',
            visitNo: 84,
          },
          {
            visit_date: 'Sep 11, 2025',
            visitNo: 148,
          },
        ],
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'ykP_DP2CuBQ',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the area before the stone bridge.',
          'This spirit is at the tunnel entrance on your left.',
        ],
      },
      // LAIDBACK_PIONEER
      {
        id: 2,
        spirit_id: 'forest10',
        season_id: 2,
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseeker',
        spirit_category: 'stance',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Laidback Pioneer',
        spirit_img_url: LAIDBACK_PIONEER,
        icon_route: SEASON2,
        spirit_image: FOREST_SEASON_SPIRIT_10,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: LAIDBACK_ITEM_1,
            currency: 'Candles',
            price: 18,
          },
          {
            label: 'Mask',
            img: LAIDBACK_ITEM_2,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Prop',
            img: LAIDBACK_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Stance',
            img: LAIDBACK_PIONEER,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 151,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Feb 27, 2020',
            visitNo: 3,
          },
          {
            visit_date: 'Nov 26, 2020',
            visitNo: 23,
          },
          {
            visit_date: 'Oct 13, 2022',
            visitNo: 72,
          },
          {
            visit_date: 'Jun 5, 2025',
            visitNo: 141,
          },
        ],
        spirit_guide_video_url: youtube_embed + '7LTOXtTzXc0',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the area before the stone bridge.',
          'Turn right and fly upward. You will find this spirit beneath the tree.',
        ],
      },
      // HAIRTOUSLE_TEEN
      {
        id: 3,
        spirit_id: 'forest11',
        season_id: 3,
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'friendship-action',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 75,
        difficulty_types: [0, 1, 2, 3, 5, 6],
        spirit_name: 'Hairtousle Teen',
        spirit_img_url: HAIRTOUSLE_TEEN,
        spirit_image: FOREST_SEASON_SPIRIT_11,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: TEEN_ITEM_1,
            currency: 'Candles',
            price: 50,
          },
          {
            label: 'Instrument',
            img: TEEN_ITEM_2,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Friendship Action',
            img: HAIRTOUSLE_TEEN,
            currency: 'Hearts',
            price: 9,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 148,
            hearts: 9,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jun 11, 2020',
            visitNo: 11,
          },
          {
            visit_date: 'Jun 9, 2022',
            visitNo: 63,
          },
          {
            visit_date: 'Mar 28, 2024',
            visitNo: 110,
          },
        ],
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + 'zX_ids0ygV8',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, move forward slightly and enter the tunnel on the right. In Sunny Forest, fly toward the broken bridge.',
          'Turn left and look for a hole beneath the tree. You will need another player to perform the Pouty emote with you. After descending, fly to the end; the spirit is on the right.',
        ],
      },
      // ADMIRING_ACTOR
      {
        id: 4,
        spirit_id: 'forest12',
        season_id: 4,
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rythm',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Admiring Actor',
        spirit_img_url: ADMIRING_ACTOR,
        spirit_image: FOREST_SEASON_SPIRIT_12,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: ACTOR_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Outfit',
            img: ACTOR_ITEM_2,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Emote',
            img: ADMIRING_ACTOR,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 135,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Oct 15, 2020',
            visitNo: 20,
          },
          {
            visit_date: 'Jun 24, 2021',
            visitNo: 38,
          },
          {
            visit_date: 'Jun 8, 2023',
            visitNo: 89,
          },
          {
            visit_date: 'Oct 9, 2025',
            visitNo: 150,
          },
        ],
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'BrqjwxellSM',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone bridge and enter the tunnel at the end.',
          'After exiting, fly toward the broken bridges. You will find this spirit beneath the second stone shelter.',
        ],
      },
      // BAFFLED_BOTANIST
      {
        id: 5,
        spirit_id: 'forest13',
        season_id: 9,
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Baffled Botanist',
        spirit_img_url: BAFFLED_BOTANIST,
        spirit_image: FOREST_SEASON_SPIRIT_13,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: BOTANIST_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Mask',
            img: BOTANIST_ITEM_2,
            currency: 'Candles',
            price: 24,
          },
          {
            label: 'Prop',
            img: BOTANIST_ITEM_3,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Emote',
            img: BAFFLED_BOTANIST,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 127,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jan 5, 2023',
            visitNo: 78,
          },
          {
            visit_date: 'Mar 6, 2023',
            visitNo: 'GV#1',
          },
          {
            visit_date: 'Sep 26, 2024',
            visitNo: 123,
          },
        ],
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + 'FjBXDty6SuQ',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly left behind the trees to find this spirit.',
        ],
      },
      // SCOLDING_SPIRIT
      {
        id: 6,
        spirit_id: 'forest14',
        season_id: 9,
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Scolding Student',
        spirit_img_url: SCOLDING_SPIRIT,
        spirit_image: FOREST_SEASON_SPIRIT_14,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: STUDENT_ITEM_1,
            currency: 'Candles',
            price: 50,
          },
          {
            label: 'Mask',
            img: STUDENT_ITEM_2,
            currency: 'Candles',
            price: 24,
          },
          {
            label: 'Cape',
            img: STUDENT_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: SCOLDING_SPIRIT,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 157,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Aug 18, 2022',
            visitNo: 68,
          },
          {
            visit_date: 'Dec 5, 2024',
            visitNo: 128,
          },
        ],
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + '2P8DrkECLCM',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the next gate. You will find this spirit on the left.',
        ],
      },
      // MARCHING_ADVENTURER
      {
        id: 7,
        spirit_id: 'forest15',
        season_id: 9,
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Marching Adventurer',
        spirit_img_url: MARCHING_ADVENTURER,
        spirit_image: FOREST_SEASON_SPIRIT_15,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: ADVENTURER_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Mask',
            img: ADVENTURER_ITEM_2,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Prop',
            img: ADVENTURER_ITEM_3,
            currency: 'Candles',
            price: 55,
          },
          {
            label: 'Emote',
            img: MARCHING_ADVENTURER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 143,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Mar 6, 2023',
            visitNo: 'GV#1',
          },
          {
            visit_date: 'Jul 3, 2025',
            visitNo: 143,
          },
        ],
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + 'j1ciHsJ937o',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone shelter on the upper-left side of the field. You will find the spirit near the candle underneath it.',
        ],
      },
      // SCAREDY_CADET
      {
        id: 8,
        spirit_id: 'forest16',
        season_id: 9,
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Scaredy Cadet',
        spirit_img_url: SCAREDY_CADET,
        spirit_image: FOREST_SEASON_SPIRIT_16,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: CADET_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Mask',
            img: CADET_ITEM_2,
            currency: 'Candles',
            price: 24,
          },
          {
            label: 'Prop',
            img: CADET_ITEM_3,
            currency: 'Candles',
            price: 55,
          },
          {
            label: 'Emote',
            img: SCAREDY_CADET,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 152,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Mar 6, 2023',
            visitNo: 'GV#1',
          },
          {
            visit_date: 'Aug 28, 2025',
            visitNo: 147,
          },
          {
            visit_date: 'Feb 27, 2026',
            visitNo: 'GV#12',
          },
        ],
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + 'o_xH5KOe_nc',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone shelter on the upper-right side of the field. You will find the spirit near the bonfire.',
        ],
      },
      // CHUCKLING_SCOUT
      {
        id: 9,
        spirit_id: 'forest17',
        season_id: 9,
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Chuckling Scout',
        spirit_img_url: CHUCKLING_SCOUT,
        spirit_image: FOREST_SEASON_SPIRIT_17,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: SCOUT_ITEM_1,
            currency: 'Candles',
            price: 36,
          },
          {
            label: 'Outfit',
            img: SCOUT_ITEM_2,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Shoes',
            img: SCOUT_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: SCOUT_ITEM_4,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Emote',
            img: CHUCKLING_SCOUT,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 159,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Mar 6, 2023',
            visitNo: 'GV#1',
          },
          {
            visit_date: 'Mar 13, 2025',
            visitNo: 135,
          },
        ],
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + '7H1jciUCheE',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone bridge and enter the tunnel at the end. Fly upward and turn right; the spirit is BESIDE the treehouse.',
        ],
      },
      // DAYDREAM_FORESTER
      {
        id: 10,
        spirit_id: 'forest18',
        season_id: 9,
        spirit_type: 'seasonal',
        season: 'Season 9 - Season of Assembly',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Daydream Forester',
        spirit_img_url: DAYDREAM_FORESTER,
        spirit_image: FOREST_SEASON_SPIRIT_18,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: FORESTER_ITEM_1,
            currency: 'Candles',
            price: 44,
          },
          {
            label: 'Mask',
            img: FORESTER_ITEM_2,
            currency: 'Candles',
            price: 24,
          },
          {
            label: 'Emote',
            img: DAYDREAM_FORESTER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 96,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Apr 28, 2022',
            visitNo: 60,
          },
          {
            visit_date: 'Mar 14, 2024',
            visitNo: 109,
          },
        ],
        icon_route: SEASON9,
        spirit_guide_video_url: youtube_embed + 'Z-aufTQT0H0',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—and fly down through the clouds until you reach the gate.',
          'Once it opens, continue to the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the next gate and light the fire icon that appears.',
          'Once it opens, fly toward the stone bridge and enter the tunnel at the end. Fly upward and turn right; the spirit is BEHIND the treehouse.',
        ],
      },
      // TINKERING_CHIMESMITH
      {
        id: 11,
        spirit_id: 'forest19',
        season_id: 11,
        spirit_type: 'seasonal',
        season: 'Season 11 - Season of Flight',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Tinkering Chimesmith',
        spirit_img_url: TINKERING_CHIMESMITH,
        spirit_image: FOREST_SEASON_SPIRIT_19,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: TINKERING_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Hair Accessory',
            img: TINKERING_ITEM_2,
            currency: 'Candles',
            price: 35,
          },
          {
            label: 'Outfit',
            img: TINKERING_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Instrument',
            img: TINKERING_ITEM_4,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Stance',
            img: TINKERING_CHIMESMITH,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 238,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'May 11, 2023',
            visitNo: 87,
          },
          {
            visit_date: 'Aug 14, 2025',
            visitNo: 146,
          },
        ],
        icon_route: SEASON11,
        spirit_guide_video_url: youtube_embed + '_WIn5vyLPv4',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—then fly to the right and enter the cloud tunnel.',
          'Land on the largest island and turn left at the stairs to find the spirit.',
        ],
      },
      // LIGHT_WHISPERER
      {
        id: 12,
        spirit_id: 'forest20',
        season_id: 11,
        spirit_type: 'seasonal',
        season: 'Season 11 - Season of Flight',
        spirit_category: 'call',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Light Whisperer',
        spirit_img_url: LIGHT_WHISPERER,
        spirit_image: FOREST_SEASON_SPIRIT_20,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: LIGHT_ITEM_1,
            currency: 'Candles',
            price: 50,
          },
          {
            label: 'Hair Accessory',
            img: LIGHT_ITEM_2,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Outfit',
            img: LIGHT_ITEM_3,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Cape',
            img: LIGHT_ITEM_4,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Sound-Call',
            img: LIGHT_WHISPERER,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 243,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Feb 29, 2024',
            visitNo: 108,
          },
          {
            visit_date: 'Jul 16, 2026',
            visitNo: 170,
          },
        ],
        icon_route: SEASON11,
        spirit_guide_video_url: youtube_embed + 'pJjVGRbjL3g',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—then fly to the right and enter the cloud tunnel.',
          'Land on the largest island. You will find this spirit just behind it.',
        ],
      },
      // LIVELY_NAVIGATOR
      {
        id: 13,
        spirit_id: 'forest21',
        season_id: 11,
        spirit_type: 'seasonal',
        season: 'Season 11 - Season of Flight',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Lively Navigator',
        spirit_img_url: LIVELY_NAVIGATOR,
        spirit_image: FOREST_SEASON_SPIRIT_21,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: LIVELY_ITEM_1,
            currency: 'Candles',
            price: 55,
          },
          {
            label: 'Hair Accessory',
            img: LIVELY_ITEM_2,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Cape',
            img: LIVELY_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: LIVELY_NAVIGATOR,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 198,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Aug 17, 2023',
            visitNo: 94,
          },
          {
            visit_date: 'May 8, 2025',
            visitNo: 139,
          },
        ],
        icon_route: SEASON11,
        spirit_guide_video_url: youtube_embed + 'xFXP57ZCsvw',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—then fly to the right and enter the cloud tunnel.',
          'Land on the second island from the left surrounding the main island. This spirit is located there.',
        ],
      },
      // TALENTED_BUILDER
      {
        id: 14,
        spirit_id: 'forest22',
        season_id: 11,
        spirit_type: 'seasonal',
        season: 'Season 11 - Season of Flight',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 1, 2, 6],
        spirit_name: 'Talented Builder',
        spirit_img_url: TALENTED_BUILDER,
        spirit_image: FOREST_SEASON_SPIRIT_22,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: BUILDER_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Neck Accessory',
            img: BUILDER_ITEM_2,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Outfit',
            img: BUILDER_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: TALENTED_BUILDER,
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
            visit_date: 'Nov 23, 2023',
            visitNo: 101,
          },
        ],
        icon_route: SEASON11,
        spirit_guide_video_url: youtube_embed + 'bzCvgOT3t0g',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—then fly to the right and enter the cloud tunnel.',
          'Land on the first island from the right to find this spirit.',
        ],
      },
      //DIVINING_WISE_GRANDPARENT
      {
        id: 15,
        spirit_id: 'blue-bird-1',
        spirit_name: `Divining Wise Grandparent`,
        spirit_img_url: DIVING_WISE_GRANDPARENT,
        spirit_category: 'spirit',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: FOREST_SEASON_SPIRIT_23,
        icon_route: SEASON25,
        spirit_guide_video_url: youtube_embed + '',
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: DIVINING_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: DIVINING_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 0,
          },
        ],
        number_of_visits: [],
      },
      //COSTUMED_CONFETTI_COUNS
      {
        id: 16,
        spirit_id: 'blue-bird-2',
        spirit_name: `Costumed Confetti Cousin`,
        spirit_img_url: COSTUMED_CONFETTI_COUSIN,
        spirit_category: 'spirit',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: FOREST_SEASON_SPIRIT_24,
        icon_route: SEASON25,
        spirit_guide_video_url: youtube_embed + '',
        spirit_collectibles: [
          {
            label: 'Hair',
            img: COSTUMED_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Hair Accessory',
            img: COSTUMED_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Mask',
            img: COSTUMED_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'OUtfit',
            img: COSTUMED_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          // {
          //   candles: 0,
          //   hearts: 0,
          //   ascended_candles: 0,
          // },
        ],
        number_of_visits: [],
      },
      //ROYAL_HAIRTOUSLE_TEEN
      {
        id: 17,
        spirit_id: 'blue-bird-3',
        spirit_name: `Royal Hairtousle Teen`,
        spirit_img_url: ROYAL_HAIRTOUSLE_TEEN,
        spirit_category: 'emote',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: FOREST_SEASON_SPIRIT_25,
        icon_route: SEASON25,
        spirit_guide_video_url: youtube_embed + '',
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: ROYAL_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Pants',
            img: ROYAL_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: ROYAL_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: ROYAL_HAIRTOUSLE_TEEN,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          // {
          //   candles: 0,
          //   hearts: 0,
          //   ascended_candles: 0,
          // },
        ],
        number_of_visits: [],
      },
      //NOSTALGIC_SPARKLER_PARENT
      {
        id: 18,
        spirit_id: 'blue-bird-4',
        spirit_name: `Nostalgic Sparkler Parent`,
        spirit_img_url: NOSTALGIC_SPARKLER_PARENT,
        spirit_category: 'spirit',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: FOREST_SEASON_SPIRIT_26,
        icon_route: SEASON25,
        spirit_guide_video_url: youtube_embed + '',
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: NOSTALGIC_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: NOSTALGIC_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          // {
          //   candles: 0,
          //   hearts: 0,
          //   ascended_candles: 0,
          // },
        ],
        number_of_visits: [],
      },
      //WOODWORKING_PLEAFUL_PARENT
      {
        id: 19,
        spirit_id: 'blue-bird-5',
        spirit_name: `Woodworking Pleaful Parent`,
        spirit_img_url: WOODCUTTING_PLEAFUL_PARENT,
        spirit_category: 'spirit',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: FOREST_SEASON_SPIRIT_27,
        icon_route: SEASON25,
        spirit_guide_video_url: youtube_embed + '',
        spirit_collectibles: [
          {
            label: 'Outfit',
            img: WOODCUTTING_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Shoes',
            img: WOODCUTTING_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          // {
          //   candles: 0,
          //   hearts: 0,
          //   ascended_candles: 0,
          // },
        ],
        number_of_visits: [],
      },
      //MIGRATING_MANTA_WHISPERER
      {
        id: 20,
        spirit_id: 'isle16',
        season_id: 27,
        spirit_type: 'seasonal',
        season: 'Season 27 - Season of Migration',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 30,
        difficulty_types: [0, 2, 5],
        spirit_name: 'Migrating Manta Whisperer',
        spirit_img_url: MIGRATING_MANTA_WHISPERER,
        spirit_image: FOREST_SEASON_SPIRIT_28,
        icon_route: SEASON27,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MMANTA_ITEM_1,
            currency: 'Season Candles',
            price: 23,
          },
          {
            label: 'Suitpants',
            img: MMANTA_ITEM_2,
            currency: 'Season Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: MMANTA_ITEM_3,
            currency: 'Season Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: MIGRATING_MANTA_WHISPERER,
            currency: 'Season Candles',
            price: 24,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 74,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [],
        spirit_guide_video_url: youtube_embed + 'nTARZnLz3FI',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—then fly to the right and enter the cloud tunnel.',
          'On the first island to your right, you will find the spirit at the top.',
        ],
      },
      //MIGRATING_BIRD_WHISPERER
      {
        id: 21,
        spirit_id: 'isle18',
        season_id: 27,
        spirit_type: 'seasonal',
        season: 'Season 27 - Season of Migration',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Migrating Bird Whisperer',
        spirit_img_url: MIGRATING_BIRD_WHISPERER,
        spirit_image: FOREST_SEASON_SPIRIT_29,
        icon_route: SEASON27,
        spirit_collectibles: [
          {
            label: 'Suitpants',
            img: MBIRD_ITEM_1,
            currency: 'Season Candles',
            price: 30,
          },
          {
            label: 'Cape',
            img: MBIRD_ITEM_2,
            currency: 'Season Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: MIGRATING_BIRD_WHISPERER,
            currency: 'Season Candles',
            price: 24,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 75,
            hearts: 1,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [],
        spirit_guide_video_url: youtube_embed + 'hopjKjGtXHg',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—then fly to the right and enter the cloud tunnel.',
          'On the first island to your left, you will find the spirit at the entrance of a small cave.',
        ],
      },
      //MIGRATING_BUTTERFLY_WHISPERER
      {
        id: 22,
        spirit_id: 'isle19',
        season_id: 27,
        spirit_type: 'seasonal',
        season: 'Season 27 - Season of Migration',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Migrating Butterfly Whisperer',
        spirit_img_url: MIGRATING_BUTTERFLY_WHISPERER,
        spirit_image: FOREST_SEASON_SPIRIT_30,
        icon_route: SEASON27,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: MBUTTERFLY_ITEM_1,
            currency: 'Season Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: MBUTTERFLY_ITEM_2,
            currency: 'Season Candles',
            price: 30,
          },
          {
            label: 'Emote',
            img: MIGRATING_BUTTERFLY_WHISPERER,
            currency: 'Season Candles',
            price: 24,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 73,
            hearts: 1,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [],
        spirit_guide_video_url: youtube_embed + 'pKsSGxVwOYU',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—then fly to the right and enter the cloud tunnel.',
          'On the main island, fly slightly toward the right side to find this spirit.',
        ],
      },
      //MIGRATING_JELLY_WHISPERER
      {
        id: 23,
        spirit_id: 'isle20',
        season_id: 27,
        spirit_type: 'seasonal',
        season: 'Season 27 - Season of Migration',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Migrating Jelly Whisperer',
        spirit_img_url: MIGRATING_JELLY_WHISPERER,
        spirit_image: FOREST_SEASON_SPIRIT_31,
        icon_route: SEASON27,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: MJELLY_ITEM_1,
            currency: 'Season Candles',
            price: 36,
          },
          {
            label: 'Suitpants',
            img: MJELLY_ITEM_2,
            currency: 'Season Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: MIGRATING_JELLY_WHISPERER,
            currency: 'Season Candles',
            price: 24,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 78,
            hearts: 1,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [],
        spirit_guide_video_url: youtube_embed + 'DPCfM5SyEWc',
        spirit_direction: [
          'Enter Map 3—Hidden Forest—then fly to the right and enter the cloud tunnel.',
          'On the main island, fly slightly toward the left side to find this spirit.',
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
        Winged Lights can also be found throughout this realm. Collecting them
        increases your Wing Level, allowing you to fly higher. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {FOREST_NUM_WL}
        </span>{' '}
        Winged Lights you can collect in Hidden Forest.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'WL1-Forest Entrance(Branch)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL1 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Before landing, look to the right for this Winged Light on a tree branch.`,
        ],
      },
      {
        id: 2,
        wl_label: 'WL2-Forest Entrance (3rd Gate)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first and second gates. You will find the Winged Light when you reach the third gate.`,
        ],
      },
      {
        id: 3,
        wl_label: 'WL3-Forest Brook (2nd Left Gazebo)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `Walk forward a little, then look up to the right to find a stone gazebo.`,
          `Fly up to the gazebo to find the Winged Light.`,
        ],
      },
      {
        id: 4,
        wl_label: 'WL4-Forest Brook (Left Cave)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `Pass the stone shelter where a spirit is located, then look for an opening along the side of the wall.`,
        ],
      },
      {
        id: 5,
        wl_label: 'WL5-Forest Brook (1st Right Gazebo)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, fly toward the stone bridge ahead.`,
          `Before reaching the bridge, fly upward to the stone gazebo on your left. The Winged Light is inside it.`,
        ],
      },
      {
        id: 6,
        wl_label: 'WL6-Forest Brook (End of Brook)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, head toward the bridge. You will find the Winged Light at the end of the tunnel.`,
        ],
      },
      {
        id: 7,
        wl_label: 'WL7-Sunny Forest (Behind Big Tree)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, walk forward a little and enter the tunnel in the wall on your right.`,
          `When you enter Sunny Forest, continue toward the large trees. The Winged Light is on an elevated rock near the far end.`,
        ],
      },
      {
        id: 8,
        wl_label: 'WL8-Sunny Forest (Near the Bridge)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, walk forward a little and enter the tunnel in the wall on your right.`,
          `When you enter Sunny Forest, fly toward the large trees on the right. The Winged Light is behind one of them.`,
        ],
      },
      {
        id: 9,
        wl_label: 'WL9-Underground Cavern (Bottom Gated Area)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, walk forward a little and enter the tunnel in the wall on your right.`,
          `In Sunny Forest, head toward the broken bridge. Enter the tunnel beneath the tree on the left and perform the Pouty Porter expression.`,
          `After descending, fly to the far end and then fly upward. Enter the tunnel and look for a gate in the lower-right area. The Winged Light is there.`,
        ],
      },
      {
        id: 10,
        wl_label: 'WL10-Underground Cavern (Birds Stream Cave)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL10 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, walk forward a little and enter the tunnel in the wall on your right.`,
          `In Sunny Forest, head toward the broken bridge. Enter the tunnel beneath the tree on the left and perform the Pouty Porter expression.`,
          `After descending, fly to the far end and then fly upward. Enter the tunnel, take the first passage on the left, and fly upward to find the Winged Light.`,
        ],
      },
      {
        id: 11,
        wl_label: 'WL11-Underground Cavern (Butterfly Cave)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-3',
        wl_url: HF_WL11 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first three gates. At Forest Brook, enter the tunnel in the wall on your right.`,
          `In Sunny Forest, head toward the broken bridge. Enter the tunnel beneath the tree on the left and perform the Pouty Porter expression.`,
          `After descending, fly to the far end and then fly upward. Enter the tunnel, go to the second cave on the left, use a Deep Call, and fly upward to find the Winged Light.`,
        ],
      },
      {
        id: 12,
        wl_label: 'WL12-Underground Cavern (Exit Gate)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-3',
        wl_url: HF_WL12 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, walk forward a little and enter the tunnel in the wall on your right.`,
          `In Sunny Forest, head toward the broken bridge. Enter the tunnel beneath the tree on the left and perform the Pouty Porter expression.`,
          `After descending, fly to the far end and then fly upward. Go to the Underground Cavern exit gate; the Winged Light is on its left side.`,
        ],
      },
      {
        id: 13,
        wl_label: 'WL13-Tree Tunnels (Big Tree)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-3',
        wl_url: HF_WL14 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, fly toward the tunnel at the far end.`,
          `When you reach Boneyard, fly toward the tunnels. On the right, the Winged Light is inside an opening in the large tree.`,
        ],
      },
      {
        id: 14,
        wl_label: 'WL14-Boneyard (Top Tower)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-3',
        wl_url: HF_WL13 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, fly toward the tunnel at the far end.`,
          `When you reach Boneyard, look for the tower on the left. The Winged Light is at the top of it.`,
        ],
      },
      {
        id: 15,
        wl_label: 'WL15-Boneyard (Last Gazebo)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL15 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, fly toward the tunnel at the far end.`,
          `When you reach Boneyard, continue to the end of the broken bridges to find the Winged Light.`,
        ],
      },
      {
        id: 16,
        wl_label: 'WL16-Forest End (Tree Stump)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-0',
        wl_url: HF_WL16 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates. When you reach Forest Brook, fly to the left.`,
          `At Forest Brook, fly toward the tunnel at the far end.`,
          `When you reach Boneyard, fly toward the temple.`,
          `Outside the temple, you will find the Winged Light on the left.`,
        ],
      },
      {
        id: 17,
        wl_label: 'WL17-TreeHouse (Hole in the Tree)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-9',
        wl_url: HF_WL17 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Before reaching the entrance gate, enter the tunnel on the right.`,
          `After leaving the cave, look for a hammock on the right. The Winged Light is hidden higher up inside the tree.`,
        ],
      },
      {
        id: 18,
        wl_label: 'WL18-TreeHouse (Inside Treehouse)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-9',
        wl_url: HF_WL18 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Before reaching the entrance gate, enter the tunnel on the right.`,
          `After leaving the cave, you will see a large treehouse. Enter it.`,
          `Inside the treehouse is a passage leading downward, where you will find this spirit.`,
        ],
      },
      {
        id: 19,
        wl_label: 'WL19-Wind Paths (Wind Tunnel)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-19',
        wl_url: HF_WL19 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest, fly to the right, and enter the tunnel.`,
          `When you enter the Wind Paths, you will see a large island in the center.`,
          `Fly down along the right side of the island and enter the tunnel marked by the red circle. You will exit through the tunnel marked by the yellow circle.`,
        ],
      },
      {
        id: 20,
        wl_label: 'WL20-Elevated Clearing(Bridge)',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-20',
        wl_url: HF_WL20 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest and head to Forest Brook after passing through the third gate.`,
          `At Forest Brook, enter the passage on the right that leads to the Elevated Clearing.`,
          `Go near the bridge and look to the right for the branch that leads to the Seasonal Area.`,
        ],
      },
      {
        id: 21,
        wl_label: 'WL21-Wind Paths Main Island',
        wl_group: 'wl-forest',
        wl_season_group: 'wl-forest-21',
        wl_url: HF_WL21 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 3 | Hidden Forest, fly to the right, and enter the tunnel.`,
          `When you enter the Wind Paths, you will see a large island in the center.`,
          `Fly toward the right side of the central island. The Winged Light is along the edge near the top.`,
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
        Map Shrines serve as guides that help you determine how many Winged
        Lights you still need to collect and where they are located. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {FOREST_NUM_MAP_SHRINES}
        </span>{' '}
        Map Shrines you can activate in Hidden Forest.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 1',
        shrine_url: HF_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest. Ahead, near the stone door leading to the Social Area, look to the left to find the Map Shrine beside a tree.`,
        ],
      },
      {
        id: 2,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 2',
        shrine_url: HF_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Before entering the gate, look on the right side. The Map Shrine is close to the gate.`,
        ],
      },
      {
        id: 3,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 3',
        shrine_url: HF_MS3 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates to reach Forest Brook.`,
          `At Forest Brook, fly straight toward the stone bridge.`,
          `Look to the right beneath the tree to find the Map Shrine.`,
        ],
      },
      {
        id: 4,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 4',
        shrine_url: HF_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates to reach Forest Brook.`,
          `At Forest Brook, fly to the right and enter the tunnel.`,
          `When you reach Sunny Forest, fly to the right. The Map Shrine is on an elevated platform behind a tree.`,
        ],
      },
      {
        id: 5,
        shrine_group: 'shrine-season-3',
        shrine_label: 'Map Shrine 5',
        shrine_url: HF_MS5 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates to reach Forest Brook.`,
          `At Forest Brook, fly to the right and enter the tunnel.`,
          `When you reach Sunny Forest, fly toward the broken bridge. Enter the opening in the tree on your left, follow the tunnel downward, then fly upward at the far end and enter the next passage.`,
          `The Map Shrine is near the exit door used while reliving the Hairtousle Teen spirit.`,
        ],
      },
      {
        id: 6,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 6',
        shrine_url: HF_MS6 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates to reach Forest Brook.`,
          `At Forest Brook, fly toward the broken bridge and continue through the exit tunnel.`,
          `Go to the beginning of the broken bridges. On the right is a separate ruined tower where the Map Shrine is located.`,
        ],
      },
      {
        id: 7,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 7',
        shrine_url: HF_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates to reach Forest Brook.`,
          `At Forest Brook, fly toward the broken bridge and continue through the exit tunnel.`,
          `Fly to the temple and enter it. The Map Shrine is on the right side, near the Dark Plants.`,
        ],
      },
      {
        id: 8,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 8',
        shrine_url: HF_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Pass through the first, second, and third gates to reach Forest Brook.`,
          `At Forest Brook, fly toward the broken bridge and continue through the exit tunnel.`,
          `Fly to the temple, enter it, and then continue outside to the garden area near the pond. The Map Shrine is located there.`,
        ],
      },
      {
        id: 9,
        shrine_group: 'shrine-season-9',
        shrine_label: 'Map Shrine 9',
        shrine_url: HF_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest and fly down through the clouds.`,
          `Before reaching the entrance gate, enter the small tunnel on the right that leads to the Treehouse.`,
          `The Map Shrine is located at the top of the Treehouse.`,
        ],
      },
      {
        id: 10,
        shrine_group: 'shrine-season-11',
        shrine_label: 'Map Shrine 10',
        shrine_url: HF_MS10 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest, fly to the right, and enter the Wind Paths.`,
          `At the Wind Paths, fly toward the far island below. The Map Shrine is in the docking area.`,
        ],
      },
      {
        id: 10,
        shrine_group: 'shrine-season-25',
        shrine_label: 'Map Shrine 11',
        shrine_url: HF_MS11 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 3 | Hidden Forest and head to Forest Brook after passing through the third gate.`,
          `At Forest Brook, enter the passage on the right that leads to the Elevated Clearing.`,
          `Go near the bridge and look to the right for the branch that leads to the Seasonal Area.`,
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
        <ForestDyes />
      </div>
    ),
  },
]
