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
          May{' '}
          <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
            {VALLEY_NUM_REG_SPIRIT}
          </span>{' '}
          regular spirits you will see here.
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa bandang kanan ng lagusan, lumipad ka pataas at makikita mo ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa bandang kaliwa ay may lagusan patungong citadel, pumasok ka.`,
          `Lumipad ka hanggang sa makarating ka sa entrance ng Citadel.`,
          `Sa iyong kaliwa ay may maliit na tower, nasa loob nito ang spirit.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa bandang kaliwa ay may lagusan patungong citadel, pumasok ka.`,
          `Lumipad ka hanggang sa makarating ka sa entrance ng Citadel.`,
          `Lumipad ka patungo sa main Citadel towers, sa mga daanan ng towers makita mo ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa bandang kaliwa ay may lagusan patungong citadel, pumasok ka.`,
          `Lumipad ka hanggang sa makarating ka sa entrance ng Citadel.`,
          `Lumipad ka patungo sa main Citadel towers, lumipad gawing kanan at sa likod ng hagdanan ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Pumasok ka sa Skating Race sa iyong harapan na lagusan.`,
          `Pagdating sa Coliseum, sa kaliwang banda sa tuktok ng mga upuan malapit sa statwa, makita mo ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Pumasok ka sa Skating Race sa iyong harapan na lagusan.`,
          `Pagdating sa Coliseum, sa kanang banda sa tuktok ng mga upuan malapit sa statwa, makita mo ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Pumasok ka sa Skating Race sa iyong harapan na lagusan.`,
          `Pagdating sa Coliseum, sa kanang banda sa tuktok ng mga upuan malapit sa statwa, makita mo ang spirit na ito.`,
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
        makikita mo tuwing papasok ka sa Valley of Triumph. May{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {VALLEY_NUM_SEASON_SPIRIT}
        </span>{' '}
        season spirits na pwede mong makita at makuha dito.
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
            visitNo: 19,
          },
          {
            visit_date: 'Jul 3, 2023',
            visitNo: 'GV#3',
          },
          {
            visit_date: 'Jun 6, 2024',
            visitNo: 115,
          },
        ],
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'qM46Yfsl4Oc',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa kanang banda pababa, ay may 2-Player door, nasa loob nito ang spirit.`,
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
        ],
        spirit_guide_video_url: youtube_embed + 'gJMN_Wuq2lM',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Sa kaliwang banda ay makita mo ang spirit na ito.`,
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
        ],
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + '1U65HqbrWeM',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Pumasok ka sa Skating Race sa iyong harapan na lagusan.`,
          `Pagdating sa Coliseum, Pasok sa templo at sa kaliwang banda ay may lagusan kung nasaan ang spirit.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, slide pababa hanggang sa makarating ka sa plaza ng Ice Rink.`,
          `Pumasok ka sa tunnel na nasa kaliwang banda ng Ice Rink, sa looban makita mo ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, sa mga kabahayan sa kaliwang banda ay makita mo ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, papuntang plaza ng Village of Dreams, at sa likod na bahay ng Quest Giver, ay nakatago ang spirit na ito.`,
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
        ],
        icon_route: SEASON8,
        spirit_guide_video_url: youtube_embed + 'QOFfrU-J-Yw',
        spirit_direction: [
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, papuntang plaza ng Village of Dreams, at sa unahan lng ng Quest Giver, bandang kanan, nasa gilid ng bahay ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, papuntang plaza ng Village of Dreams, at sa kabahayan sa kaliwang banda, nasa likod nito ang spirit.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, sa iyong kanan ang Village Theater, pumasok ka.`,
          `Sa gitna ng pang 3rd at 4th na bahay sa iyong kaliwa ay makikita mo ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, sa iyong kanan ang Village Theater, pumasok ka.`,
          `Sa iyong kanan makikita mo agad ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, sa iyong kanan ang Village Theater, pumasok ka.`,
          `Sa iyong kaliwa, sa 1st at 2nd na bahay, ay nasa gitna mo makikita ang spirit na ito.`,
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
          `Pasok ka Pang-Apat na Mapa - Valley of Triumph, sa iyong kanan may may lagusan, pumasok ka.`,
          `Mag-skate pababa, sa iyong kanan ang Village Theater, pumasok ka.`,
          `Sa iyong kaliwa, sa 5th at 6th na bahay, ay nasa likod nito ang spirit.`,
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
          `Pasok ka sa Ikalimang Mapa - Valley of Triumph, Dumako ka sa Colisuem.`,
          `At hanapin si Aurora spirit sa bandang kanan na may tent. Gawin ang Unang quest.`,
          `Ang Quest ay nasa Unang Mapa - Isle of Dawn, Entrance.`,
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
          `Pasok ka sa Ikalimang Mapa - Valley of Triumph, Dumako ka sa Colisuem.`,
          `At hanapin si Aurora spirit sa bandang kanan na may tent. Gawin ang Pangalawang quest.`,
          `Ang Quest ay nasa Pangatlong Mapa - Hidden Forest, Underground Cave.`,
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
          `Pasok ka sa Ikalimang Mapa - Valley of Triumph, Dumako ka sa Colisuem.`,
          `At hanapin si Aurora spirit sa bandang kanan na may tent. Gawin ang pangatlong quest.`,

          `Ang Quest ay nasa Pang-apat na Mapa - Valley of Triumph, Citadle.`,
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
          `Pasok ka sa Ikalimang Mapa - Valley of Triumph, Dumako ka sa Colisuem.`,
          `At hanapin si Aurora spirit sa bandang kanan na may tent. Gawin ang pang-apat na quest.`,
          `Ang Quest ay nasa Ikalimang Mapa - Golden Wasteland, Battlefield.`,
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
          {VALLEY_NUM_WL}
        </span>{' '}
        na winged lights ang pwede mong makuha dito.
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
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa at sa igawi ang skykid pakaliwa upang madaanan
          ang winged light. Tandaan hindi ito kailangan pindutin pero dapat sentro ang pagkadaan dito.`,
        ],
      },
      {
        id: 2,
        wl_label: 'WL2-Ice Rink (Underground)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `May lagusan papasok sa ilalim ng Ice Rink at makikita ang winged light malapit sa sirang
          bangka.`,
        ],
      },
      {
        id: 3,
        wl_label: 'WL3-Ice Rink (Center Elevated)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Sa elevated platform ng Ice Rink sa gitna makikita ang winged light na ito.`,
        ],
      },
      {
        id: 4,
        wl_label: 'WL4-Citadel (Top Gazebo)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Pumasok sa kaliwang lagusan, papuntang Citadle. Pinakamataas na tore, nasa kaliwang tore ang winged light.
          (Nakaharap ka sa Flying Race)`,
        ],
      },
      {
        id: 5,
        wl_label: 'WL5-Citadel (Hollowed Wall)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Pumasok sa kaliwang lagusan, papuntang Citadle, sa kaliwang tore (Nakatalikod sa entrance
            ng Flying Race) nasa pinaka ibaba ito. Daanan mo lang at makuha mo agad ito.`,
        ],
      },
      {
        id: 6,
        wl_label: 'WL6-Flying Race (Ruin Hall)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          ` Pumasok sa kaliwang lagusan, papuntang Citadle, gawin ang Flying Race.
          TANDAAN: Siguraduhin na madaanan mo sa gitna ang winged light dahil di ka na makalipad pabalik, pagkalagpas mo.`,
          `Nasa kanang parte ng race ito, Daanan mo lang at makukuha mo agad ito.`,
        ],
      },
      {
        id: 7,
        wl_label: 'WL7-Flying Race (Floating Gazebo)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Pumasok sa kaliwang lagusan, papuntang Citadle, gawin ang Flying Race.
          TANDAAN: Siguraduhin na madaanan mo sa gitna ang winged light dahil di ka na makalipad pabalik, pagkalagpas mo.`,
          `Sa gitna ng mga nakalutang na bato, ay makita mo ang sirang tore.`,
          `Igawi mo sa kanan ang skykid mo at daanan mo lang, makukuha mo agad ang winged light na ito.`,
        ],
      },
      {
        id: 8,
        wl_label: 'WL8-Skating Race (Elevated Platform)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Pumasok sa gitnang lagusan, at gawin ang Skating Race.`,
          `Nasa bato ang spirit na ito, daanan mo lang at makukuha mo agad ito.`,
        ],
      },
      {
        id: 9,
        wl_label: 'WL9-Joined Race (End of Race)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Pumasok sa gitna o kaliwang lagusan, at gawin mo ang isa sa mga race.`,
          `Sa dulo ng dalawang race bago pumasok sa Coliseum ay makikita ang winged light na ito.`,
        ],
      },
      {
        id: 10,
        wl_label: 'WL10-Coliseum (Left Statue)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL10 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Pumasok sa gitna o kaliwang lagusan, at gawin mo ang isa sa mga race.`,
          `Pagdating sa Colliseum, sa kaliwang balikat (kapag nakatalikod ka sa templo) 
          ng kaliwang statue (kapag nakaharap ka sa templo) na malaki ay nandoon ang spirit na ito.`,
        ],
      },
      {
        id: 11,
        wl_label: 'WL11-Temple (Temple Maze)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-0',
        wl_url: VT_WL11 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Pumasok sa gitna o kaliwang lagusan, at gawin mo ang isa sa mga race.`,
          `Pagdating sa Colliseum, Pumasok ka sa templo, at gawing kaliwa, may lagusan sa pinaka-itass ng pader.`,
          `Sundan lang ang lagusan at makita mo ang winged light na ito.`,
        ],
      },
      {
        id: 12,
        wl_label: 'WL12-Village of Dreams (Hollowed Mountain)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL12 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagkapasok, mag skate pababa at sa mga bukid na nasa kaliwa, isa dito ay 
          may butas kung nasaan ang winged light.`,
        ],
      },
      {
        id: 13,
        wl_label: 'WL13-Village of Dreams (Hollowed Mountain)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL13 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagkapasok, mag skate pababa at sa mga bukid na nasa kanan, isa dito ay 
          may butas kung nasaan ang winged light.`,
        ],
      },
      {
        id: 14,
        wl_label: 'WL14-Village Theater (Backstage)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-13',
        wl_url: VT_WL14 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagdating sa plaza, sa iyong kanan ay may lagusan papuntang Village Theater, pumasok ka.`,
          `Pumasok ka sa Theater Hall at sa likod ng stage ay may gitara sa labas ng lagusan, pumasok ka at sa dulo nag winged light.`,
        ],
      },
      {
        id: 15,
        wl_label: 'WL15-Village of Dreams (Terminal 2 Tower)',
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL15 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagdating sa plaza, umakyat ka papunta sa susunod na boat terminal`,
          `At sa tuktok ng tore na nasa gitna makita mo ang winged light.`,
        ],
      },
      {
        id: 16,
        wl_label: `WL16-Hermit's Valley (Outside Hollow)`,
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL16 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagdating sa plaza, umakyat ka papunta sa susunod na boat terminal`,
          `Sumakay ka sa Ferry Boat papuntang Hermitt's Valley, at sa likod mo ay may kweba sa bandang kanan ng bundok.`,
        ],
      },
      {
        id: 17,
        wl_label: `WL17-Hermit's Valley (Hollowed Wall)`,
        wl_group: 'wl-valley',
        wl_season_group: 'wl-valley-8',
        wl_url: VT_WL17 ?? WINGED_LIGHT,
        wl_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may lagusan papuntang 
          Village of Dreams, pumasok ka.`,
          `Pagdating sa plaza, umakyat ka papunta sa susunod na boat terminal`,
          `Sumakay ka sa Ferry Boat papuntang Hermitt's Valley, at sa likod ng bundok makita ang winged light dito.`,
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
          {VALLEY_NUM_MAP_SHRINES}
        </span>{' '}
        na Map Shrines ang pwede mong mabuksan sa loob ng Isle of Dawn.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 1',
        shrine_url: VT_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa iyong kanan, ay may sirang Gazebo (bahay) structure`,
          `sa likod nito makita ang map shrine.`,
        ],
      },
      {
        id: 2,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 2',
        shrine_url: VT_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Sa elevated platform na nasa gitna makita ang map shrine.`,
        ],
      },
      {
        id: 3,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 3',
        shrine_url: VT_MS3 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Pumasok sa kaliwang lagusan, papuntang Citadle.`,
          `Pagkadating sa Citadle, Sa bandang kanan sa loob ng Gazebo (bahay) structure,
          Makita mo ang map shrine.`,
        ],
      },
      {
        id: 4,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 4',
        shrine_url: VT_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Pumasok sa kaliwang lagusan, papuntang Citadle.`,
          `Pagkadating sa Citadle, Sa bandang likuran ng pinakamataas na poste(KANAN na POSTE kung nakaharap
            sa Flying Race Entrance), Makita mo ang map shrine.`,
        ],
      },
      {
        id: 5,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 5',
        shrine_url: VT_MS5 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Pumasok sa kaliwang lagusan, papuntang Citadle.`,
          `Pagkadating sa Citadle, magtungo sa Flying Race Temple at pumasok.`,
          `Pagkapasok sa loob, nasa kanan na parte ng temple ang map shrine.`,
        ],
      },
      {
        id: 6,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 6',
        shrine_url: VT_MS6 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa hanggang makarating sa Ice Rink.`,
          `Magtungo sa gitnang lagusan, papuntang Skating Race.`,
          `Pagkadating sa Skating Race Temple ay nasa kanan ang map shrine.`,
        ],
      },
      {
        id: 7,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 7',
        shrine_url: VT_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa gawing kanan ay may lagusan papuntang Village of Dreams.`,
          `Magskate pababa, at bago makarating sa plaza sa gitna, sa gawing kaliwa malapit sa bahay, makita
          ang map shrine.`,
        ],
      },
      {
        id: 8,
        shrine_group: 'shrine-season-13',
        shrine_label: 'Map Shrine 8',
        shrine_url: VT_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa gawing kanan ay may lagusan papuntang Village of Dreams.`,
          `Magskate pababa, at bago makarating sa plaza sa gitna, sa gawing kanan ay may lagusan papuntang
          Village Theater, pumasok ka.`,
          `Pagkarating sa Village Theeater, sa kaliwang banda makita ang map shrine.`,
        ],
      },
      {
        id: 9,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 9',
        shrine_url: VT_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa gawing kanan ay may lagusan papuntang Village of Dreams.`,
          `Magskate pababa, sa unahan ng statue, naka elevated ang map shrine malapit sa exit ng Performance Hall.`,
        ],
      },
      {
        id: 10,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 10',
        shrine_url: VT_MS10 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, Sa gawing kanan ay may lagusan papuntang Village of Dreams.`,
          `Magskate pababa, at magtungo sa Port sa unahan lng ng plaza, sa kaliwang banda.`,
          `Pagkasakay ng lumulutang na bangka, gawin din ito sa susunod na terminal patungo sa Hermitt's Valley`,
          `Pagkarating ay lumipad patungo sa Cave na nasa bandang kanan, at sa tuktok ng Cave na ito ang map shrine.`,
        ],
      },
      {
        id: 11,
        shrine_group: 'shrine-season-0',
        shrine_label: 'Map Shrine 11',
        shrine_url: VT_MS11 ?? MAP_SHRINE,
        shrine_location: [
          `Pasok sa Map 4 | Valley of Triumph, magskate pababa patungong Ice Rink at gawin ang isang Race.`,
          `Pagkarating sa Coliseum, nasa bandang likod sa itaas ng mga upuan ang map shrine.`,
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
