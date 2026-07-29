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
          regular spirits that is on this map. Spirits that you can find here are
          Pointing Candlemaker, Rejecting Voyager and Ushering Stargazer.
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
          'Pasok ka Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',

          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',

          'Tumalon ka at igawi mo ang iyong skykid pakaliwa at makikita mo ang maliit na kweba ng Sand Dunes.',

          'Ang Pointing Candlemaker ay nasa labas lng ng pintuan ng kweba.',
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
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',

          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka patungo sa isang hagdanan na bato sa iyong harapan.',
          'Sa ilalim ng dulo ng hagdanan makikita mo ang spirit.',
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
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',

          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka patungo sa templo.',

          'Pagkalapag sa lupa, igawi mo ang skykid mo sa kaliwang bahagi ng templo ay may maliit na kweba. Pumasok ka at makikita mo ang Rejecting Voyager sa daan.',
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
        Nandito ang mga spirits na dumaan noong nakaraang Seasonal Events na
        makikita mo tuwing papasok ka sa Isle of Dawn. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {ISLE_NUM_SEASON_SPIRIT}
        </span>{' '}
        season spirits na pwede mong makita at makuha dito.
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
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan.',
          'At malapit sa pader kung saan may mga ulap sa buhangin makikita ang spirit.',
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
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kaliwa.',
          'Pagkalagpas mo sa isang maliit na bukid na buhangin, may kweba kang makikita.',
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
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka patungong templo.',
          'Sa Kanan may makita kang daanan na ulap, pumasok ka at makita mo sa pintuan ang spirit.',
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
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan.',
          'Makikita mo ang Passage Stone na malaking bato kang makikita at sa bandang likod nito ay ang spirit.',
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
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan, may makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan',
          'Lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
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
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan, May makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan.',
          'Lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
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
        ],
        icon_route: SEASON7,
        spirit_guide_video_url: youtube_embed + 'uGk2xSqdobk',
        spirit_direction: [
          'Pasok ka sa Unang Mapa - Isle of Dawn, lumakad ka o lumipad papasok sa unang kweba na makita mo.',
          'Lakarin mo ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan, May makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan.',
          ' Lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
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
        ],
        icon_route: SEASON7,
        spirit_guide_video_url: youtube_embed + 'bEOTU3o7iuM',
        spirit_direction: [
          'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
          'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan may makitang kang ulap na kweba, pumasok ka at pagkapasok mo lilipad ka ulit papasok hanggang sa umabot ka sa pintuan.',
          'Pagkapasok mo, lumapit ka sa Quest Giver na nasa gitna at ituturo sayo ang spirit.',
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
          'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
          'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine. ',
          'Lumipad ka gawi papuntang kweba ng Cave of Prophecy, at kung saan banda ang spirit na Sassy Drifter, makikita mo ang spirit na ito.',
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
          `Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.`,
          `Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.`,
          `Lumipad ka gawing kanan. Sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine.`,
          `Lumipad ka gawi papuntang kweba ng Cave of Prophecy, bago ka makarating sa Oddball Outcast spirit makikita mo na agad ang spirit na ito.`,
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
          'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
          'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad ka gawing kanan sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine.',
          'Lumipad ka gawing papunta sa batong may hagdanan, bago ka makarating sa hagdanan, sa likod ng posteng bato, makikita mo ang spirit na ito.',
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
          'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
          'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad  ka gawing kanan sa likod ng malaking bato umupo ka sa likod ng Passage Stone Shrine.',
          'Lumipad ka pabalik sa San Dunes kung nasaan iyong spirit na Pointing Candlemaker. Sa taas ng kweba malapit na sa dagat makikita mo ang spirit na ito.',
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
          'Pagkapasok mo sa Unang Mapa - Isle of Dawn, lumakad ka o Lumipad papasok sa unang kweba na makita mo.',
          'Pagkapasok mo ay lakarin mo lng ito hanggang sa umabot ka sa dulo kung saan makikita mo ang malawak na tanawin.',
          'Lumipad  ka gawing kaliwa hanggang makita mo ang campsite/tent ng Migration Spirit Guide',
          'Sa labas ng tent makikita mo ang spirit na ito.',
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
        Sa mapang ito mo rin makikita ang mga Winged Lights kung tawagin. Ito ay
        nagpapataas ng lebel para ikaw ay makalipad ng mas mataas. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {ISLE_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito sa Isle of Dawn, kasama na
        ang 4 na nasa trials ng Season Of Prophecy.
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
          `Pagkapasok mo sa Map 1 | Isle of Dawn,`,
          `Nasa tuktok ng unang kweba sa bandang kaliwa ang winged light.`,
        ],
      },
      {
        id: 2,
        wl_label: 'WL2-Sand Dunes(Boat)',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `Pagkalabas mo ng unang kweba, makikita mo agad sa gawing kanan, ang
          sirang bangka na may winged light sa ibabaw nito.`,
        ],
      },
      {
        id: 3,
        wl_label: 'WL3-Sand Dunes(Cave)',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan, hanggang sa makita mo ang maliit na kweba `,
          `Sa loob nito ay may isang winged light.`,
        ],
      },
      {
        id: 4,
        wl_label: 'WL4-Sand Dunes(Stairs)',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka patungong templo, sa dulo ng hagdanan na bato ay makita mo ang winged light`,
        ],
      },
      {
        id: 5,
        wl_label: 'WL5-Sand Dunes Migration Camp',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-27',
        wl_url: ID_WL10 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `Lumipad ka gawing kaliwa at hanapin lamang ang Camp Site ng Migration`,
          `Sa Likod ng Camp Door Post makikita ang Winged Light.`,
        ],
      },
      {
        id: 6,
        wl_label: 'WL6-Butterfly Cave',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-0',
        wl_url: ID_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka patungong templo, may lagusan na ulap sa gawing kanan pumasok ka`,
          `Pagdating sa butterfly cave, kinakailangan mong makaakyat pataas. Pag nakaakyat ka na, may makikita kang lagusan
        sa gawing kanan.`,
          `Pagkapasok mo, sa bandang kanan mo naman ulit may butas kung saan naroron ang isang winged light.`,
        ],
      },
      {
        id: 7,
        wl_label: 'WL7-Trial of Water',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Water Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
      },
      {
        id: 8,
        wl_label: 'WL8-Trial of Earth',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Earth Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
      },
      {
        id: 9,
        wl_label: 'WL9-Trial of Air',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Air Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
        ],
      },
      {
        id: 10,
        wl_label: 'WL10-Trial of Fire',
        wl_group: 'wl-isle',
        wl_season_group: 'wl-isle-season-7',
        wl_url: ID_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `lumipad ka gawing kanan at may lagusan papasok sa Cave of Prophecy pumasok ka,`,
          `Pumasok ka sa Fire Trial ng Cave of Prophecy nasa dulo ng trial ang winged light.`,
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
        Ang Map Shrines ay nagsisilbing gabay upang magtukoy kung ilan at saan
        pa ang kailangan mong kunin na winged lights sa loob ng mapa. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {ISLE_NUM_MAP_SHRINES}
        </span>{' '}
        na Map Shrines ang pwede mong mabuksan sa loob ng Isle of Dawn.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 1',
        shrine_url: ID_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          `Pagkalabas mo ay lumipad patungo sa sirang bangka sa baba.At sa itaas lamang
          nito ay ang map shrine.`,
        ],
      },
      {
        id: 2,
        shrine_group: 'shrine-season-17',
        shrine_label: 'Map Shrine 2',
        shrine_url: ID_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan nasa tuktok ito ng
          Passage Stone.`,
        ],
      },
      {
        id: 3,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 3',
        shrine_url: ID_MS3 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad patungong templo.`,
          `Pumasok ka sa lagusan sa gawing kanan at may 2-player door, umakyat ka pataas at pumasok ka sa gawing kanan na lagusan.`,
          `At sa dulo ng tunnel ay sa tuktok ng Butterfly Cave makita ang map shrine.`,
        ],
      },
      {
        id: 4,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 4',
        shrine_url: ID_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad patungong templo.`,
          `Pagkalapag ay nasa daanan lang ang map shrine.`,
        ],
      },
      {
        id: 5,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 5',
        shrine_url: ID_MS5 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, tumalon ka pakaliwa sa ibaba lang mismo makikita ang map shrine.`,
        ],
      },
      {
        id: 6,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 6',
        shrine_url: ID_MS6 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Water Trial nasa gawing kanan ang map shrine.`,
        ],
      },
      {
        id: 7,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 7',
        shrine_url: ID_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Earth Trial, Pagdumating ka sa aakyat ng hagdaan, sa kanan nito ang map shrine.`,
        ],
      },
      {
        id: 8,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 8',
        shrine_url: ID_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Air Trial`,
        ],
      },
      {
        id: 9,
        shrine_group: 'shrine-season-7',
        shrine_label: 'Map Shrine 9',
        shrine_url: ID_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Pagkapasok mo sa Map 1 | Isle of Dawn, ay pumasok ka sa kweba na may lagusan.`,
          ` Pagkalabas mo ay lumipad gawing kanan, may lagusan papasok Cave of Prophecy.`,
          `Pagdating sa Cave of Prophecy, Gawin ang Fire Trial, at bago pumasok sa 3rd floor nasa gawing kanan ng pintuan ang map shrine.`,
        ],
      },
    ],
  },
]
