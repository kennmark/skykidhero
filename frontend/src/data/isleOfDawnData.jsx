import { Typography, Spinner } from '@material-tailwind/react'
import { MapPinIcon, SparklesIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/solid'
import {
  ISLE_NUM_REG_SPIRIT,
  ISLE_NUM_SEASON_SPIRIT,
  ISLE_NUM_WL,
  ISLE_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  CANDLEMAKER,
  REJECTING_VOYAGER,
  USHERING_STARGAZER,
  SASSY_DRIFTER,
  PIGGYBACK_LIGHTSEEKER,
  BOOGIE_KID,
  TROUPE_GREETER,
  PROPHET_OF_AIR,
  PROPHET_OF_EARTH,
  PROPHET_OF_FIRE,
  PROPHET_OF_WATER,
  MELANCHOLY_MOPE,
  ODDBALL_OUTCAST,
  OVERACTIVE_OVERACHIEVER,
  TUMBLING_TROUBLEMAKER,
  MIGRATING_BELLMAKER,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  MAP1,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON7,
  SEASON17,
  SEASON27,
} from '../exports/seasonIcons'
import {
  ID_WL1,
  ID_WL2,
  ID_WL3,
  ID_WL4,
  ID_WL5,
  ID_WL6,
  ID_WL7,
  ID_WL8,
  ID_WL9,
  ID_WL10,
} from '../exports/isleWLImgUrl'
import {
  ID_MS1,
  ID_MS2,
  ID_MS3,
  ID_MS4,
  ID_MS5,
  ID_MS6,
  ID_MS7,
  ID_MS8,
  ID_MS9,
} from '../exports/isleMSImgUrl'
import {
  ISLE_SPIRIT_1,
  ISLE_SPIRIT_2,
  ISLE_SPIRIT_3,
  ISLE_SEASON_SPIRIT_1,
  ISLE_SEASON_SPIRIT_2,
  ISLE_SEASON_SPIRIT_3,
  ISLE_SEASON_SPIRIT_4,
  ISLE_SEASON_SPIRIT_5,
  ISLE_SEASON_SPIRIT_6,
  ISLE_SEASON_SPIRIT_7,
  ISLE_SEASON_SPIRIT_8,
  ISLE_SEASON_SPIRIT_9,
  ISLE_SEASON_SPIRIT_10,
  ISLE_SEASON_SPIRIT_11,
  ISLE_SEASON_SPIRIT_12,
  ISLE_SEASON_SPIRIT_13,
} from '../exports/spiritIsleImages'
import {
  CANDLEMAKER_ITEM_1,
  CANDLEMAKER_ITEM_2,
  STARGAZER_ITEM_1,
  STARGAZER_ITEM_2,
  VOYAGER_ITEM_1,
  VOYAGER_ITEM_2,
  SASSY_ITEM_1,
  SASSY_ITEM_2,
  PIGGYBACK_ITEM_1,
  PIGGYBACK_ITEM_2,
  PIGGYBACK_ITEM_3,
  BOOGIE_ITEM_1,
  BOOGIE_ITEM_2,
  GREETER_ITEM_1,
  GREETER_ITEM_2,
  WATER_ITEM_1,
  WATER_ITEM_2,
  WATER_ITEM_3,
  WATER_ITEM_4,
  EARTH_ITEM_1,
  EARTH_ITEM_2,
  EARTH_ITEM_3,
  EARTH_ITEM_4,
  AIR_ITEM_1,
  AIR_ITEM_2,
  AIR_ITEM_3,
  AIR_ITEM_4,
  FIRE_ITEM_1,
  FIRE_ITEM_2,
  FIRE_ITEM_3,
  FIRE_ITEM_4,
  FIRE_ITEM_5,
  ODDBALL_ITEM_1,
  ODDBALL_ITEM_2,
  ODDBALL_ITEM_3,
  TUMBLING_ITEM_1,
  TUMBLING_ITEM_2,
  TUMBLING_ITEM_3,
  MOPE_ITEM_1,
  MOPE_ITEM_2,
  MOPE_ITEM_3,
  OVERACTIVE_ITEM_1,
  OVERACTIVE_ITEM_2,
  OVERACTIVE_ITEM_3,
  MBELLMAKER_ITEM_1,
  MBELLMAKER_ITEM_2,
  MBELLMAKER_ITEM_3,
  MBELLMAKER_ITEM_4,
} from '../exports/spiritIsleCollectibles'
import IsleConstellation from '../assets/images/maps-constellations/Isle_Constellation.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const youtube_embed = 'https://www.youtube.com/embed/'

export const isleOfDawn = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    icon: UserIcon,
    desc: (
      <div className="flex justify-center flex-wrap gap-2">
        <LazyLoadImage
          src={IsleConstellation}
          alt="Isle Of Dawn"
          title="Isle Of Dawn"
          placeholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
          effect="blur"
          className="rounded-xl"
        />
        <Typography className="antialiased font-sans pt-4">
          There are{' '}
          <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
            {ISLE_NUM_REG_SPIRIT}
          </span>{' '}
          regular spirits on this map. The spirits you can find here are
          Pointing Candlemaker, Rejecting Voyager, and Ushering Stargazer.
        </Typography>
      </div>
    ),
    spirits: [
      {
        id: 1,
        spirit_id: 'isle1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Pointing Candlemaker',
        spirit_img_url: CANDLEMAKER,
        spirit_image: ISLE_SPIRIT_1,
        spirit_collectibles: [
          {
            label: 'Outfit',
            img: CANDLEMAKER_ITEM_1,
            currency: 'Hearts',
            price: 4,
          },
          {
            label: 'Hair',
            img: CANDLEMAKER_ITEM_2,
            currency: 'Free',
            price: 0,
          },
          {
            label: 'Emote',
            img: CANDLEMAKER,
            currency: 'Candles',
            price: 5,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 14,
            hearts: 4,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Isle of Dawn',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP1,
        spirit_guide_video_url: youtube_embed + 'eNHRHE2OLZc',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Jump down and steer your Sky kid to the left, where you will see a small cave in the Sand Dunes.',
          'The Pointing Candlemaker is just outside the cave entrance.',
        ],
      },
      {
        id: 2,
        spirit_id: 'isle2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Ushering Stargazer',
        spirit_img_url: USHERING_STARGAZER,
        spirit_image: ISLE_SPIRIT_2,
        spirit_collectibles: [
          {
            label: 'Outfit',
            img: STARGAZER_ITEM_1,
            currency: 'Hearts',
            price: 4,
          },
          {
            label: 'Hair',
            img: STARGAZER_ITEM_2,
            currency: 'Free',
            price: 0,
          },
          {
            label: 'Emote',
            img: USHERING_STARGAZER,
            currency: 'Candles',
            price: 5,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 14,
            hearts: 4,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Isle of Dawn',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP1,
        spirit_guide_video_url: youtube_embed + 'EDV18vy6YRE',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly toward the stone staircase directly ahead.',
          'You will find the spirit beneath the far end of the staircase.',
        ],
      },
      {
        id: 3,
        spirit_id: 'isle3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Rejecting Voyager',
        spirit_img_url: REJECTING_VOYAGER,
        spirit_image: ISLE_SPIRIT_3,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: VOYAGER_ITEM_1,
            currency: 'Hearts',
            price: 3,
          },
          {
            label: 'Hair',
            img: VOYAGER_ITEM_2,
            currency: 'Hearts',
            price: 1,
          },
          {
            label: 'Emote',
            img: REJECTING_VOYAGER,
            currency: 'Candles',
            price: 5,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 14,
            hearts: 4,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Isle of Dawn',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP1,
        spirit_guide_video_url: youtube_embed + 'snvZf2bOqlc',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly toward the temple.',
          'After landing, head to the left side of the temple, where you will find a small cave. Enter it, and you will find the Rejecting Voyager along the path.',
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
        when you enter the Isle of Dawn. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {ISLE_NUM_SEASON_SPIRIT}
        </span>{' '}
        seasonal spirits that you can relive and collect here.
      </Typography>
    ),
    spirits: [
      //SASSY DRIFTER
      {
        id: 4,
        spirit_id: 'isle4',
        season_id: 1,
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'stance',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Sassy Drifter',
        spirit_img_url: SASSY_DRIFTER,
        spirit_image: ISLE_SEASON_SPIRIT_1,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: SASSY_ITEM_1,
            currency: 'Candles',
            price: 48,
          },
          {
            label: 'Hair',
            img: SASSY_ITEM_2,
            currency: 'Candles',
            price: 26,
          },
          {
            label: 'Stance',
            img: SASSY_DRIFTER,
            currency: 'Free',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 87,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jan 31, 2020',
            visitNo: 1,
          },
          {
            visit_date: 'May 28, 2020',
            visitNo: 10,
          },
          {
            visit_date: 'Jul 8, 2021',
            visitNo: 39,
          },
          {
            visit_date: 'Dec 8, 2022',
            visitNo: 76,
          },
          {
            visit_date: 'Apr 11, 2024',
            visitNo: 111,
          },
        ],
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'OC0M5IYDnck',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly to the right.',
          'You will find the spirit near the wall where the clouds meet the sand.',
        ],
      },
      //PIGGYBACK_LIGHTSEEKER
      {
        id: 5,
        spirit_id: 'isle5',
        season_id: 2,
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseekers',
        spirit_category: 'friendship-action',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 20,
        difficulty_types: [1, 4],
        spirit_name: 'Piggyback Lightseeker',
        spirit_img_url: PIGGYBACK_LIGHTSEEKER,
        spirit_image: ISLE_SEASON_SPIRIT_2,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: PIGGYBACK_ITEM_1,
            currency: 'Candles',
            price: 26,
          },
          {
            label: 'Mask',
            img: PIGGYBACK_ITEM_2,
            currency: 'Candles',
            price: 24,
          },
          {
            label: 'Cape',
            img: PIGGYBACK_ITEM_3,
            currency: 'Candles',
            price: 60,
          },
          {
            label: 'Emote',
            img: PIGGYBACK_LIGHTSEEKER,
            currency: 'Hearts',
            price: 8,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 123,
            hearts: 8,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Apr 16, 2020',
            visitNo: 7,
          },
          {
            visit_date: 'Mar 4, 2021',
            visitNo: 30,
          },
          {
            visit_date: 'Feb 2, 2023',
            visitNo: 80,
          },
          {
            visit_date: 'Feb 13, 2025',
            visitNo: 133,
          },
        ],
        icon_route: SEASON2,
        spirit_guide_video_url: youtube_embed + '6szBwvCEchU',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly to the left.',
          'After passing a small sand hill, you will see a cave.',
        ],
      },
      //BOOGIE_KID
      {
        id: 6,
        spirit_id: 'isle6',
        season_id: 3,
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 40,
        difficulty_types: [0, 2, 3, 5],
        spirit_name: 'Boogie Kid',
        spirit_img_url: BOOGIE_KID,
        spirit_image: ISLE_SEASON_SPIRIT_3,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: BOOGIE_ITEM_1,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Outfit',
            img: BOOGIE_ITEM_2,
            currency: 'Candles',
            price: 60,
          },
          {
            label: 'Emote',
            img: BOOGIE_KID,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 103,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Nov 12, 2020',
            visitNo: 22,
          },
          {
            visit_date: 'July 22, 2021',
            visitNo: 40,
          },
          {
            visit_date: 'Mar 2, 2023',
            visitNo: 82,
          },
          {
            visit_date: 'Jun 19, 2025',
            visitNo: 142,
          },
        ],
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + 'LPVVeJI9kpo',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly toward the temple.',
          'On the right, you will see a cloud passage. Enter it, and you will find the spirit near the doorway.',
        ],
      },
      //TROUPE_GREETER
      {
        id: 7,
        spirit_id: 'isle7',
        season_id: 4,
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rhythm',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 40,
        difficulty_types: [0, 1, 2, 5],
        spirit_name: 'Troupe Greeter',
        spirit_img_url: TROUPE_GREETER,
        spirit_image: ISLE_SEASON_SPIRIT_4,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: GREETER_ITEM_1,
            currency: 'Candles',
            price: 48,
          },
          {
            label: 'Outfit',
            img: GREETER_ITEM_2,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: TROUPE_GREETER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 146,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Dec 24, 2020',
            visitNo: 25,
          },
          {
            visit_date: 'Mar 3, 2022',
            visitNo: 56,
          },
          {
            visit_date: 'Aug 7, 2023',
            visitNo: 'GV#4',
          },
          {
            visit_date: 'Jan 2, 2025',
            visitNo: 130,
          },
        ],
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'ab4I-QSR4sU',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly to the right.',
          'You will see the Passage Stone, a large rock. The spirit is behind it.',
        ],
      },
      //PROPHET_OF_WATER
      {
        id: 8,
        spirit_id: 'isle8',
        season_id: 7,
        spirit_type: 'seasonal',
        season: 'Season 7 - Season of Prophecy',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Prophet of Water',
        spirit_img_url: PROPHET_OF_WATER,
        spirit_image: ISLE_SEASON_SPIRIT_5,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: WATER_ITEM_1,
            currency: 'Candles',
            price: 44,
          },
          {
            label: 'Mask',
            img: WATER_ITEM_2,
            currency: 'Candles',
            price: 54,
          },
          {
            label: 'Cape',
            img: WATER_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Prop',
            img: WATER_ITEM_4,
            currency: 'Candles',
            price: 15,
          },
          {
            label: 'Emote',
            img: PROPHET_OF_WATER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 201,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Aug 8, 2021',
            visitNo: 41,
          },
          {
            visit_date: 'Nov 10, 2022',
            visitNo: 74,
          },
          {
            visit_date: 'May 15, 2023',
            visitNo: 'GV#2',
          },
          {
            visit_date: 'Dec 19, 2024',
            visitNo: 129,
          },
        ],
        icon_route: SEASON7,
        spirit_guide_video_url: youtube_embed + 'TMz1D1PXGYU',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly to the right. You will see a cloud-covered cave entrance. Enter it and continue flying through the passage until you reach the doorway.',
          'Approach the Quest Giver in the center, who will point you toward the spirit.',
        ],
      },
      //PROPHET_OF_EARTH
      {
        id: 9,
        spirit_id: 'isle9',
        season_id: 7,
        spirit_type: 'seasonal',
        season: 'Season 7 - Season of Prophecy',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        spirit_name: 'Prophet of Earth',
        difficulty_types: [0, 1, 6],
        spirit_img_url: PROPHET_OF_EARTH,
        spirit_image: ISLE_SEASON_SPIRIT_6,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: EARTH_ITEM_1,
            currency: 'Candles',
            price: 44,
          },
          {
            label: 'Mask',
            img: EARTH_ITEM_2,
            currency: 'Candles',
            price: 44,
          },
          {
            label: 'Cape',
            img: EARTH_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Prop',
            img: EARTH_ITEM_4,
            currency: 'Candles',
            price: 15,
          },
          {
            label: 'Emote',
            img: PROPHET_OF_EARTH,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 211,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jan 6, 2022',
            visitNo: 'Error',
          },
          {
            visit_date: 'Feb 3, 2022',
            visitNo: 54,
          },
          {
            visit_date: 'May 15, 2023',
            visitNo: 'GV#2',
          },
          {
            visit_date: 'Aug 29, 2024',
            visitNo: 121,
          },
          {
            visit_date: 'Jul 31, 2025',
            visitNo: 145,
          },
        ],
        icon_route: SEASON7,
        spirit_guide_video_url: youtube_embed + 'zE7Js8dqFfU',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly to the right. You will see a cloud-covered cave entrance. Enter it and continue flying through the passage until you reach the doorway.',
          'Approach the Quest Giver in the center, who will point you toward the spirit.',
        ],
      },
      //PROPHET_OF_AIR
      {
        id: 10,
        spirit_id: 'isle10',
        season_id: 7,
        spirit_type: 'seasonal',
        season: 'Season 7 - Season of Prophecy',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Prophet of Air',
        spirit_img_url: PROPHET_OF_AIR,
        spirit_image: ISLE_SEASON_SPIRIT_7,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: AIR_ITEM_1,
            currency: 'Candles',
            price: 44,
          },
          {
            label: 'Mask',
            img: AIR_ITEM_2,
            currency: 'Candles',
            price: 54,
          },
          {
            label: 'Cape',
            img: AIR_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Prop',
            img: AIR_ITEM_4,
            currency: 'Candles',
            price: 15,
          },
          {
            label: 'Emote',
            img: PROPHET_OF_AIR,
            currency: 'Hearts',
            price: 12,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 201,
            hearts: 12,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'May 12, 2022',
            visitNo: 61,
          },
          {
            visit_date: 'May 15, 2023',
            visitNo: 'GV#2',
          },
          {
            visit_date: 'Sep 25, 2025',
            visitNo: 149,
          },
        ],
        icon_route: SEASON7,
        spirit_guide_video_url: youtube_embed + 'uGk2xSqdobk',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly to the right. You will see a cloud-covered cave entrance. Enter it and continue flying through the passage until you reach the doorway.',
          'Approach the Quest Giver in the center, who will point you toward the spirit.',
        ],
      },
      //PROPHET_OF_FIRE
      {
        id: 11,
        spirit_id: 'isle11',
        season_id: 7,
        spirit_type: 'seasonal',
        season: 'Season 7 - Season of Prophecy',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 1, 6],
        spirit_name: 'Prophet of Fire',
        spirit_img_url: PROPHET_OF_FIRE,
        spirit_image: ISLE_SEASON_SPIRIT_8,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: FIRE_ITEM_1,
            currency: 'Candles',
            price: 44,
          },
          {
            label: 'Mask',
            img: FIRE_ITEM_2,
            currency: 'Candles',
            price: 54,
          },
          {
            label: 'Outfit',
            img: FIRE_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Prop1',
            img: FIRE_ITEM_4,
            currency: 'Hearts',
            price: 13,
          },
          {
            label: 'Prop2',
            img: FIRE_ITEM_5,
            currency: 'Candles',
            price: 15,
          },
          {
            label: 'Emote',
            img: PROPHET_OF_FIRE,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 216,
            hearts: 26,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Dec 9, 2021',
            visitNo: 50,
          },
          {
            visit_date: 'Aug 3, 2023',
            visitNo: 93,
          },
          {
            visit_date: 'Dec 4, 2025',
            visitNo: 154,
          },
        ],
        icon_route: SEASON7,
        spirit_guide_video_url: youtube_embed + 'bEOTU3o7iuM',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly to the right. You will see a cloud-covered cave entrance. Enter it and continue flying through the passage until you reach the doorway.',
          'Approach the Quest Giver in the center, who will point you toward the spirit.',
        ],
      },
      //ODDBALL_OUTCAST
      {
        id: 12,
        spirit_id: 'isle12',
        season_id: 17,
        spirit_type: 'seasonal',
        season: 'Season 17 - Season of Passage',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Oddball Outcast',
        spirit_img_url: ODDBALL_OUTCAST,
        spirit_image: ISLE_SEASON_SPIRIT_9,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: ODDBALL_ITEM_1,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Neck Accessory',
            img: ODDBALL_ITEM_2,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Pants',
            img: ODDBALL_ITEM_3,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Emote',
            img: ODDBALL_OUTCAST,
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
            visit_date: 'Jan 13, 2025',
            visitNo: 'GV#7',
          },
        ],
        icon_route: SEASON17,
        spirit_guide_video_url: youtube_embed + 'jBp8u1A0nmg',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly to the right and sit behind the Passage Stone Shrine, located behind the large rock.',
          'Fly toward the Cave of Prophecy. Near the area where the Sassy Drifter is located, you will find this spirit.',
        ],
      },
      //TUMBLING_TROUBLEMAKER
      {
        id: 13,
        spirit_id: 'isle13',
        season_id: 17,
        spirit_type: 'seasonal',
        season: 'Season 17 - Season of Passage',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Tumbling Troublemaker',
        spirit_img_url: TUMBLING_TROUBLEMAKER,
        spirit_image: ISLE_SEASON_SPIRIT_10,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: TUMBLING_ITEM_1,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Hair Accessory',
            img: TUMBLING_ITEM_2,
            currency: 'Candles',
            price: 55,
          },
          {
            label: 'Cape',
            img: TUMBLING_ITEM_3,
            currency: 'Candles',
            price: 80,
          },
          {
            label: 'Emote',
            img: TUMBLING_TROUBLEMAKER,
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
            visit_date: 'Apr 24, 2025',
            visitNo: 138,
          },
        ],
        icon_route: SEASON17,
        spirit_guide_video_url: youtube_embed + 'zv1fVtpaWoY',
        spirit_direction: [
          `Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.`,
          `Continue through the cave until you reach the end and emerge into the wide-open area.`,
          `Fly to the right and sit behind the Passage Stone Shrine, located behind the large rock.`,
          `Fly toward the Cave of Prophecy. You will find this spirit before reaching the Oddball Outcast.`,
        ],
      },
      //MELANCHOLY_MOPE
      {
        id: 14,
        spirit_id: 'isle14',
        season_id: 17,
        spirit_type: 'seasonal',
        season: 'Season 17 - Season of Passage',
        spirit_category: 'emote',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_relive_type: 'follow-memory',
        spirit_name: 'Melancholy Mope',
        spirit_img_url: MELANCHOLY_MOPE,
        spirit_image: ISLE_SEASON_SPIRIT_11,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MOPE_ITEM_1,
            currency: 'Candles',
            price: 55,
          },
          {
            label: 'Hair Accessory',
            img: MOPE_ITEM_2,
            currency: 'Candles',
            price: 35,
          },
          {
            label: 'Outfit',
            img: MOPE_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: MELANCHOLY_MOPE,
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
            visit_date: 'Jan 29, 2026',
            visitNo: 158,
          },
        ],
        icon_route: SEASON17,
        spirit_guide_video_url: youtube_embed + 'rPGqdQf90Ns',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly to the right and sit behind the Passage Stone Shrine, located behind the large rock.',
          'Fly toward the stone staircase. Before reaching it, look behind the stone pillar to find this spirit.',
        ],
      },
      //OVERACTIVE_OVERACHIEVER
      {
        id: 15,
        spirit_id: 'isle15',
        season_id: 17,
        spirit_type: 'seasonal',
        season: 'Season 17 - Season of Passage',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Overactive Overachiever',
        spirit_img_url: OVERACTIVE_OVERACHIEVER,
        spirit_image: ISLE_SEASON_SPIRIT_12,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: OVERACTIVE_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Cape',
            img: OVERACTIVE_ITEM_2,
            currency: 'Candles',
            price: 80,
          },
          {
            label: 'Instrument',
            img: OVERACTIVE_ITEM_3,
            currency: 'Candles',
            price: 55,
          },
          {
            label: 'Emote',
            img: OVERACTIVE_OVERACHIEVER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 193,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Apr 23, 2026',
            visitNo: 164,
          },
        ],
        icon_route: SEASON17,
        spirit_guide_video_url: youtube_embed + 'vkO4ujp0JNc',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          'Fly to the right and sit behind the Passage Stone Shrine, located behind the large rock.',
          'Fly back toward the Sand Dunes, where the Pointing Candlemaker is located. You will find this spirit above the cave near the sea.',
        ],
      },
      //Migrating Bellmaker
      {
        id: 16,
        spirit_id: 'isle17',
        season_id: 27,
        spirit_type: 'seasonal',
        season: 'Season 27 - Season of Migration',
        spirit_category: 'call',
        spirit_relive_type: 'quest-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Migrating Bellmaker',
        spirit_img_url: MIGRATING_BELLMAKER,
        spirit_image: ISLE_SEASON_SPIRIT_13,
        icon_route: SEASON27,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MBELLMAKER_ITEM_1,
            currency: 'Season Candles',
            price: 23,
          },
          {
            label: 'Cape',
            img: MBELLMAKER_ITEM_2,
            currency: 'Season Candles',
            price: 36,
          },
          {
            label: 'Face Accessory',
            img: MBELLMAKER_ITEM_3,
            currency: 'Season Candles',
            price: 0,
          },
          {
            label: 'Sheet',
            img: MBELLMAKER_ITEM_4,
            currency: 'Season Candles',
            price: 17,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 98,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [],
        spirit_guide_video_url: youtube_embed + 'Bc9Yl-qjkh8',
        spirit_direction: [
          'Enter the first realm, Isle of Dawn, then walk or fly into the first cave you see.',
          'Continue through the cave until you reach the end and emerge into the wide-open area.',
          `Fly to the left until you find the Migration Spirit Guide's campsite or tent.`,
          'You will find this spirit outside the tent.',
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
        Winged Lights can also be found throughout this map. Collecting them
        increases your Wing Level, allowing you to fly higher. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {ISLE_NUM_WL}
        </span>{' '}
        Winged Lights available in the Isle of Dawn, including the four found
        in the Season of Prophecy trials.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'WL1-Mural Cave(Roof)',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL1 ?? WINGED_LIGHT,
        wl_location: [
          `Upon entering Map 1 | Isle of Dawn,`,
          `The Winged Light is on top of the first cave, on the left side.`,
        ],
      },
      {
        id: 2,
        wl_label: 'WL2-Sand Dunes(Boat)',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `After exiting the first cave, look to the right. You will immediately see a
          broken boat with a Winged Light on top.`,
        ],
      },
      {
        id: 3,
        wl_label: 'WL3-Sand Dunes(Cave)',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `Fly to the right until you see a small cave.`,
          `There is a Winged Light inside.`,
        ],
      },
      {
        id: 4,
        wl_label: 'WL4-Sand Dunes(Stairs)',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `Fly toward the temple. You will find the Winged Light at the far end of the stone staircase.`,
        ],
      },
      {
        id: 5,
        wl_label: 'WL5-Sand Dunes Migration Camp',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-27',
        wl_url: ID_WL10 ?? WINGED_LIGHT,
        wl_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `Fly to the left and look for the Migration campsite.`,
          `The Winged Light is behind the campsite's entrance post.`,
        ],
      },
      {
        id: 6,
        wl_label: 'WL6-Butterfly Cave',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `Fly toward the temple, then enter the cloud passage on the right.`,
          `When you reach the Butterfly Cave, climb to the upper area. Once there, you will see a passage
          on the right.`,
          `Enter the passage and look for another opening on the right, where you will find a Winged Light.`,
        ],
      },
      {
        id: 7,
        wl_label: 'WL7-Trial of Water',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `Fly to the right and enter the passage leading to the Cave of Prophecy.`,
          `Enter the Water Trial in the Cave of Prophecy. The Winged Light is at the end of the trial.`,
        ],
      },
      {
        id: 8,
        wl_label: 'WL8-Trial of Earth',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `Fly to the right and enter the passage leading to the Cave of Prophecy.`,
          `Enter the Earth Trial in the Cave of Prophecy. The Winged Light is at the end of the trial.`,
        ],
      },
      {
        id: 9,
        wl_label: 'WL9-Trial of Air',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `Fly to the right and enter the passage leading to the Cave of Prophecy.`,
          `Enter the Air Trial in the Cave of Prophecy. The Winged Light is at the end of the trial.`,
        ],
      },
      {
        id: 10,
        wl_label: 'WL10-Trial of Fire',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `Fly to the right and enter the passage leading to the Cave of Prophecy.`,
          `Enter the Fire Trial in the Cave of Prophecy. The Winged Light is at the end of the trial.`,
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
        collect and where they are located on the map. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {ISLE_NUM_MAP_SHRINES}
        </span>{' '}
        Map Shrines that you can unlock throughout the Isle of Dawn.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 1',
        shrine_url: ID_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `After exiting, fly down toward the broken boat. The Map Shrine is directly
          above it.`,
        ],
      },
      {
        id: 2,
        shrine_group: 'shrine-season-17',
        shrine_label: 'Map Shrine 2',
        shrine_url: ID_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `After exiting, fly to the right. The Map Shrine is on top of the
          Passage Stone.`,
        ],
      },
      {
        id: 3,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 3',
        shrine_url: ID_MS3 ?? MAP_SHRINE,
        shrine_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `After exiting, fly toward the temple.`,
          `Enter the passage on the right, go through the two-player door, climb upward, and enter the passage on the right.`,
          `At the end of the tunnel, you will find the Map Shrine on top of the Butterfly Cave.`,
        ],
      },
      {
        id: 4,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 4',
        shrine_url: ID_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `After exiting, fly toward the temple.`,
          `After landing, you will find the Map Shrine along the path.`,
        ],
      },
      {
        id: 5,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 5',
        shrine_url: ID_MS5 ?? MAP_SHRINE,
        shrine_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `After exiting, fly to the right and enter the passage leading to the Cave of Prophecy.`,
          `When you reach the Cave of Prophecy, jump down to the left. The Map Shrine is directly below.`,
        ],
      },
      {
        id: 6,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 6',
        shrine_url: ID_MS6 ?? MAP_SHRINE,
        shrine_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `After exiting, fly to the right and enter the passage leading to the Cave of Prophecy.`,
          `Complete the Water Trial. The Map Shrine is on the right.`,
        ],
      },
      {
        id: 7,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 7',
        shrine_url: ID_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `After exiting, fly to the right and enter the passage leading to the Cave of Prophecy.`,
          `Complete the Earth Trial. When you reach the staircase leading upward, the Map Shrine is on its right.`,
        ],
      },
      {
        id: 8,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 8',
        shrine_url: ID_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `After exiting, fly to the right and enter the passage leading to the Cave of Prophecy.`,
          `Complete the Air Trial.`,
        ],
      },
      {
        id: 9,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 9',
        shrine_url: ID_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Upon entering Map 1 | Isle of Dawn, enter the first cave passage.`,
          `After exiting, fly to the right and enter the passage leading to the Cave of Prophecy.`,
          `Complete the Fire Trial. Before entering the third floor, the Map Shrine is to the right of the doorway.`,
        ],
      },
    ],
  },
]
