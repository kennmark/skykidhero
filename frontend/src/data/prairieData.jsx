import { Typography, Spinner } from '@material-tailwind/react'
import {
  PRAIRIE_NUM_REG_SPIRIT,
  PRAIRIE_NUM_SEASON_SPIRIT,
  PRAIRIE_NUM_WL,
  PRAIRIE_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  APPLAUDING_BELLMAKER,
  BIRD_WHISPERER,
  BUTTERFLY_CHARMER,
  CEREMONIAL_WORSHIPPER,
  EXHAUSTED_DOCK_WORKER,
  LAUGHING_LIGHT_CATCHER,
  SLUMBERING_SHIPWRIGHT,
  WAVING_BELLMAKER,
  STRETCHING_GURU,
  DOUBLE_FIVE_LIGHT_CATCHER,
  CONFETTI_COUSIN,
  FESTIVAL_SPIN_DANCER,
  CHILL_SUNBATHER,
  GRATEFUL_SHELL_COLLECTOR,
  HIKING_GROUCH,
  JELLY_WHISPERER,
  RALLYING_THRILLSEEKER,
  TIMID_BOOKWORM,
  ASCETIC_MONK,
  JOLLY_GEOLOGIST,
  NIGHTBIRD_WHISPERER,
  REASSURING_RANGER,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  PR_WL1,
  PR_WL2,
  PR_WL3,
  PR_WL4,
  PR_WL5,
  PR_WL6,
  PR_WL7,
  PR_WL8,
  PR_WL9,
  PR_WL10,
  PR_WL11,
  PR_WL12,
  PR_WL13,
  PR_WL14,
  PR_WL15,
  PR_WL16,
  PR_WL17,
  PR_WL18,
  PR_WL19,
  PR_WL20,
  PR_WL21,
  PR_WL22,
  PR_WL23,
  PR_WL24,
} from '../exports/prairieWLImgUrl'
import {
  DP_MS1,
  DP_MS2,
  DP_MS3,
  DP_MS4,
  DP_MS5,
  DP_MS6,
  DP_MS7,
  DP_MS8,
  DP_MS9,
} from '../exports/prairieMSImgUrl'
import {
  MAP2,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON6,
  SEASON18,
} from '../exports/seasonIcons'
import {
  PRAIRIE_SPIRIT_1,
  PRAIRIE_SPIRIT_2,
  PRAIRIE_SPIRIT_3,
  PRAIRIE_SPIRIT_4,
  PRAIRIE_SPIRIT_5,
  PRAIRIE_SPIRIT_6,
  PRAIRIE_SPIRIT_7,
  PRAIRIE_SPIRIT_8,
  PRAIRIE_SEASON_SPIRIT_9,
  PRAIRIE_SEASON_SPIRIT_10,
  PRAIRIE_SEASON_SPIRIT_11,
  PRAIRIE_SEASON_SPIRIT_12,
  PRAIRIE_SEASON_SPIRIT_13,
  PRAIRIE_SEASON_SPIRIT_14,
  PRAIRIE_SEASON_SPIRIT_15,
  PRAIRIE_SEASON_SPIRIT_16,
  PRAIRIE_SEASON_SPIRIT_17,
  PRAIRIE_SEASON_SPIRIT_18,
  PRAIRIE_SEASON_SPIRIT_19,
  PRAIRIE_SEASON_SPIRIT_20,
  PRAIRIE_SEASON_SPIRIT_21,
  PRAIRIE_SEASON_SPIRIT_22,
} from '../exports/spiritPrairieImages'
import {
  APPLAUDING_ITEM_1,
  WHISPERER_ITEM_1,
  CHARMER_ITEM_1,
  CHARMER_ITEM_2,
  CHARMER_ITEM_3,
  WORKER_ITEM_1,
  CATCHER_ITEM_1,
  CATCHER_ITEM_2,
  SHIPWRIGHT_ITEM_1,
  WAVING_ITEM_1,
  WAVING_ITEM_2,
  GURU_ITEM_1,
  GURU_ITEM_2,
  LIGHTCATCHER_ITEM_1,
  LIGHTCATCHER_ITEM_2,
  LIGHTCATCHER_ITEM_3,
  COUSIN_ITEM_1,
  COUSIN_ITEM_2,
  DANCER_ITEM_1,
  DANCER_ITEM_2,
  DANCER_ITEM_3,
  CHILL_ITEM_1,
  CHILL_ITEM_2,
  CHILL_ITEM_3,
  CHILL_ITEM_4,
  RALLY_ITEM_1,
  RALLY_ITEM_2,
  COLLECTOR_ITEM_1,
  COLLECTOR_ITEM_2,
  COLLECTOR_ITEM_3,
  HIKING_ITEM_1,
  HIKING_ITEM_2,
  HIKING_ITEM_3,
  HIKING_ITEM_4,
  JELLY_ITEM_1,
  JELLY_ITEM_2,
  JELLY_ITEM_3,
  TIMID_ITEM_1,
  TIMID_ITEM_2,
  RANGER_ITEM_1,
  RANGER_ITEM_2,
  RANGER_ITEM_3,
  RANGER_ITEM_4,
  JOLLY_ITEM_1,
  JOLLY_ITEM_2,
  JOLLY_ITEM_3,
  MONK_ITEM_1,
  MONK_ITEM_2,
  MONK_ITEM_3,
  NIGHTBIRD_ITEM_1,
  NIGHTBIRD_ITEM_2,
  NIGHTBIRD_ITEM_3,
  NIGHTBIRD_ITEM_4,
} from '../exports/spiritPrairieCollectibles'
import PrairieConstellation from '../assets/images/maps-constellations/Prairie_Constellation.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PrairieDyes from '../pages/components/MapDyeLocations/PrairieDyes'
import DyeAlertMessage from '../pages/components/DyeAlertMessage'
import { MapPinIcon, SparklesIcon, SwatchIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/solid'

const youtube_embed = 'https://www.youtube.com/embed/'

export const prairie = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    icon: UserIcon,
    desc: (
      <>
        <LazyLoadImage
          src={PrairieConstellation}
          alt="Daylight Prairie"
          title="Daylight Prairie"
          placeholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
          effect="blur"
          className="rounded-xl"
        />
        <Typography className="antialiased font-sans pt-4">
          This is the second constellation—Daylight Prairie. There are{' '}
          <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
            {PRAIRIE_NUM_REG_SPIRIT}
          </span>{' '}
          regular spirits you can find here: Applauding Bellmaker, Bird
          Whisperer, Butterfly Charmer, Ceremonial Worshipper, Exhausted Dock
          Worker, Laughing Light Catcher, Slumbering Shipwright, and Waving
          Bellmaker.
        </Typography>
      </>
    ),
    spirits: [
      //APPLAUDING_BELLMAKER
      {
        id: 1,
        spirit_id: 'prairie1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 6],
        spirit_name: 'Applauding Bellmaker',
        spirit_img_url: APPLAUDING_BELLMAKER,
        spirit_image: PRAIRIE_SPIRIT_1,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: APPLAUDING_ITEM_1,
            currency: 'Hearts',
            price: 3,
          },
          {
            label: 'Emote',
            img: APPLAUDING_BELLMAKER,
            currency: 'Candles',
            price: 7,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 16,
            hearts: 3,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Daylight Prairie',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'c7kGy7s9-jY',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, head toward the temple, pass through the stone doorway, and continue flying.`,
          `When you reach the Village Islands, fly to the island on the left with the large door.`,
          `Light one side of the door and wait for another player to light the other side. The door will open, and the spirit is inside.`,
        ],
      },
      //BIRD_WHISPERER
      {
        id: 2,
        spirit_id: 'prairie2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'sound-call',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Bird Whisperer',
        spirit_img_url: BIRD_WHISPERER,
        spirit_image: PRAIRIE_SPIRIT_2,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: WHISPERER_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Sound-Call',
            img: BIRD_WHISPERER,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 6,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Daylight Prairie',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'oEq8TjItdaM',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on the right that leads to Bird's Nest.`,
          `In Bird's Nest, you will see several floating islands.`,
          `Keep flying until you reach the island at the far end, where you will find the glowing Bird Whisperer spirit.`,
        ],
      },
      //BUTTERFLY_CHARMER
      {
        id: 3,
        spirit_id: 'prairie3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Butterfly Charmer',
        spirit_img_url: BUTTERFLY_CHARMER,
        spirit_image: PRAIRIE_SPIRIT_3,
        spirit_collectibles: [
          {
            label: 'Outfit',
            img: CHARMER_ITEM_1,
            currency: 'Hearts',
            price: 4,
          },
          {
            label: 'Lvl 1 Cape',
            img: CHARMER_ITEM_2,
            currency: 'Hearts',
            price: 3,
          },
          {
            label: 'Lvl 2 Cape',
            img: CHARMER_ITEM_3,
            currency: 'Hearts',
            price: 9,
          },
          {
            label: 'Emote',
            img: BUTTERFLY_CHARMER,
            currency: 'Candles',
            price: 5,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 14,
            hearts: 16,
            ascended_candles: 4,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Daylight Prairie',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'FL9QRbJfmgw',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, look for the globe-shaped hill. The spirit is inside the passage beneath it.`,
        ],
      },
      //CEREMONIAL_WORSHIPPER
      {
        id: 4,
        spirit_id: 'prairie4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'task',
        difficulty_level: 15,
        difficulty_types: [3, 8],
        spirit_name: 'Ceremonial Worshiper',
        spirit_img_url: CEREMONIAL_WORSHIPPER,
        spirit_image: PRAIRIE_SPIRIT_4,
        spirit_collectibles: [
          {
            label: 'Emote',
            img: CEREMONIAL_WORSHIPPER,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 0,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Daylight Prairie',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'c0KB1cD5j4Y',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, head toward the temple, pass through the stone doorway, and continue flying.`,
          `When you reach the Village Islands, fly to the island on the right and enter it. Use the Butterfly Charmer emote on the square stones on the floor to open the door.`,
          `Activate the eight-player platform. When it rises, light all the treasure candles surrounding the shrines. A cutscene will play, and you will automatically receive the spirit.`,
        ],
      },
      //EXHAUSTED_DOCK_WORKER
      {
        id: 5,
        spirit_id: 'prairie5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [3, 8],
        spirit_name: 'Exhausted Dock Worker',
        spirit_img_url: EXHAUSTED_DOCK_WORKER,
        spirit_image: PRAIRIE_SPIRIT_5,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: WORKER_ITEM_1,
            currency: 'Hearts',
            price: 4,
          },
          {
            label: 'Emote',
            img: EXHAUSTED_DOCK_WORKER,
            currency: 'Candles',
            price: 11,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 20,
            hearts: 3,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Daylight Prairie',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'ae4nHnxXnaY',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on your left.`,
          `Continue through Prairie Caves. Near the cave exit, look for a small passage on your left.`,
          `Enter the passage to find this spirit.`,
        ],
      },
      //LAUGHING_LIGHT_CATCHER
      {
        id: 6,
        spirit_id: 'prairie6',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Laughing Light Catcher',
        spirit_img_url: LAUGHING_LIGHT_CATCHER,
        spirit_image: PRAIRIE_SPIRIT_6,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: CATCHER_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Instrument',
            img: CATCHER_ITEM_2,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Emote',
            img: LAUGHING_LIGHT_CATCHER,
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
            visit_date: 'Daylight Prairie',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + '_sHazypMGKM',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, head in the direction of the temple.`,
          `In the Village Islands, fly to the island on the right. This spirit is inside.`,
        ],
      },
      //SLUMBERING_SHIPWRIGHT
      {
        id: 7,
        spirit_id: 'prairie7',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 2],
        spirit_name: 'Slumbering Shipwright',
        spirit_img_url: SLUMBERING_SHIPWRIGHT,
        spirit_image: PRAIRIE_SPIRIT_7,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: SHIPWRIGHT_ITEM_1,
            currency: 'Hearts',
            price: 3,
          },
          {
            label: 'Emote',
            img: SLUMBERING_SHIPWRIGHT,
            currency: 'Candles',
            price: 5,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 14,
            hearts: 3,
            ascended_candles: 1,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Daylight Prairie',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'Si6JXZmjMV8',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, head in the direction of the temple.`,
          `In the Village Islands, fly to the central island and look for the door. You will need another player to help open it.`,
          `Once the door opens, you will find the spirit inside.`,
        ],
      },
      //WAVING_BELLMAKER
      {
        id: 8,
        spirit_id: 'prairie8',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 2],
        spirit_name: 'Waving Bellmaker',
        spirit_img_url: WAVING_BELLMAKER,
        spirit_image: PRAIRIE_SPIRIT_8,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: WAVING_ITEM_2,
            currency: 'Hearts',
            price: 2,
          },
          {
            label: 'Mask',
            img: WAVING_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Emote',
            img: WAVING_BELLMAKER,
            currency: 'Candles',
            price: 11,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 20,
            hearts: 7,
            ascended_candles: 8,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Daylight Prairie',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP2,
        spirit_guide_video_url: youtube_embed + 'L33gNWXTxh4',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, head in the direction of the temple.`,
          `In the Village Islands, fly to the central island. You will immediately see this spirit.`,
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
        whenever you enter Daylight Prairie. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {PRAIRIE_NUM_SEASON_SPIRIT}
        </span>{' '}
        seasonal spirits you can find and relive here.
      </Typography>
    ),
    spirits: [
      //STRETCHING_GURU
      {
        id: 9,
        spirit_id: 'prairie9',
        season_id: 1,
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 40,
        difficulty_types: [1, 4, 6],
        spirit_name: 'Stretching Guru',
        spirit_img_url: STRETCHING_GURU,
        spirit_image: PRAIRIE_SEASON_SPIRIT_9,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: GURU_ITEM_1,
            currency: 'Candles',
            price: 26,
          },
          {
            label: 'Cape',
            img: GURU_ITEM_2,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Emote',
            img: STRETCHING_GURU,
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
            visit_date: 'Apr 30, 2020',
            visitNo: 8,
          },
          {
            visit_date: 'Mar 17, 2022',
            visitNo: 57,
          },
          {
            visit_date: 'Apr 10, 2025',
            visitNo: 137,
          },
        ],
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'HCmwZWxOkFM',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on your left.`,
          `When you reach Prairie Caves, go slightly inside the cave entrance. You will find this spirit on your left.`,
        ],
      },
      //DOUBLE_FIVE_LIGHT_CATCHER
      {
        id: 10,
        spirit_id: 'prairie10',
        season_id: 2,
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseekers',
        spirit_category: 'friendship action',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 50,
        difficulty_types: [1, 2, 4, 6],
        spirit_name: 'Doublefive Light Catcher',
        spirit_img_url: DOUBLE_FIVE_LIGHT_CATCHER,
        spirit_image: PRAIRIE_SEASON_SPIRIT_10,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: LIGHTCATCHER_ITEM_1,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Mask',
            img: LIGHTCATCHER_ITEM_2,
            currency: 'Candles',
            price: 24,
          },
          {
            label: 'Instrument',
            img: LIGHTCATCHER_ITEM_3,
            currency: 'Candles',
            price: 55,
          },
          {
            label: 'Friendship Action',
            img: DOUBLE_FIVE_LIGHT_CATCHER,
            currency: 'Hearts',
            price: 7,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 126,
            hearts: 7,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Feb 14, 2020',
            visitNo: 2,
          },
          {
            visit_date: 'Apr 15, 2021',
            visitNo: 33,
          },
          {
            visit_date: 'Jul 21, 2022',
            visitNo: 66,
          },
          {
            visit_date: 'May 23, 2024',
            visitNo: 114,
          },
        ],
        icon_route: SEASON2,
        spirit_guide_video_url: youtube_embed + 'SoF7OUY9Tho',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on the right that leads to Bird's Nest.`,
          `In Bird's Nest, fly to the left. You will find this spirit behind the ruined tower near the far end of the island.`,
        ],
      },
      //CONFETTI_COUSIN
      {
        id: 11,
        spirit_id: 'prairie11',
        season_id: 3,
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'emote',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 65,
        difficulty_types: [2, 5, 6, 7],
        spirit_name: 'Confetti Cousin',
        spirit_img_url: CONFETTI_COUSIN,
        spirit_image: PRAIRIE_SEASON_SPIRIT_11,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: COUSIN_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Cape',
            img: COUSIN_ITEM_2,
            currency: 'Candles',
            price: 60,
          },
          {
            label: 'Emote',
            img: CONFETTI_COUSIN,
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
            visit_date: 'Jul 9, 2020',
            visitNo: 13,
          },
          {
            visit_date: 'Jan 21, 2021',
            visitNo: 27,
          },
          {
            visit_date: 'Sep 28, 2023',
            visitNo: 97,
          },
          {
            visit_date: 'Jul 30, 2026',
            visitNo: 171,
          },
        ],
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + 'H9QcHm8kfBg',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, look for the globe-shaped hill. The spirit is located on top of it.`,
        ],
      },
      //FESTIVAL_SPIN_DANCER
      {
        id: 12,
        spirit_id: 'prairie12',
        season_id: 4,
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rythm',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 2],
        spirit_name: 'Festival Spin Dancer',
        spirit_img_url: FESTIVAL_SPIN_DANCER,
        spirit_image: PRAIRIE_SEASON_SPIRIT_12,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: DANCER_ITEM_1,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Outfit',
            img: DANCER_ITEM_2,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Prop',
            img: DANCER_ITEM_3,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Emote',
            img: FESTIVAL_SPIN_DANCER,
            currency: 'Hearts',
            price: 19,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 157,
            hearts: 19,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Sep 3, 2020',
            visitNo: 17,
          },
          {
            visit_date: 'Oct 14, 2021',
            visitNo: 46,
          },
          {
            visit_date: 'Dec 21, 2023',
            visitNo: 103,
          },
        ],
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'DUpjerHhBqA',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on the right that leads to Bird's Nest.`,
          `When you reach Bird's Nest, drop straight down from where you entered. After landing, you will find the spirit underneath.`,
        ],
      },
      //TIMID_BOOKWORM
      {
        id: 18,
        spirit_id: 'prairie18',
        season_id: 6,
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Timid Bookworm',
        spirit_img_url: TIMID_BOOKWORM,
        spirit_image: PRAIRIE_SEASON_SPIRIT_18,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: TIMID_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Cape',
            img: TIMID_ITEM_2,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Stance',
            img: TIMID_BOOKWORM,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 140,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jun 10, 2021',
            visitNo: 37,
          },
          {
            visit_date: 'Jul 7, 2022',
            visitNo: 65,
          },
          {
            visit_date: 'May 9, 2024',
            visitNo: 113,
          },
        ],
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + '6UafYcL-qDI',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on the right that leads to Bird's Nest.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `When you arrive at Sanctuary Islands, fly to the first floating island in front of you. This spirit is on a ledge behind the island.`,
        ],
      },
      //CHILL_SUNBATHER
      {
        id: 13,
        spirit_id: 'prairie13',
        season_id: 6,
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 55,
        difficulty_types: [1, 4, 5, 6],
        spirit_name: 'Chill Sunbather',
        spirit_img_url: CHILL_SUNBATHER,
        spirit_image: PRAIRIE_SEASON_SPIRIT_13,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: CHILL_ITEM_1,
            currency: 'Candles',
            price: 44,
          },
          {
            label: 'Face Accessory',
            img: CHILL_ITEM_2,
            currency: 'Candles',
            price: 66,
          },
          {
            label: 'Cape',
            img: CHILL_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Prop',
            img: CHILL_ITEM_4,
            currency: 'Candles',
            price: 20,
          },
          {
            label: 'Emote',
            img: CHILL_SUNBATHER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 213,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Aug 19, 2021',
            visitNo: 42,
          },
          {
            visit_date: 'Jan 4, 2024',
            visitNo: 104,
          },
          {
            visit_date: 'May 7, 2026',
            visitNo: 165,
          },
        ],
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + '4W6eiKr_21c',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on the right that leads to Bird's Nest.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `When you arrive at Sanctuary Islands, fly down to the largest island. You will immediately see this spirit outside a small passage.`,
        ],
      },
      //RALLYING_THRILLSEEKER
      {
        id: 14,
        spirit_id: 'prairie14',
        season_id: 6,
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 65,
        difficulty_types: [2, 5, 6, 7],
        spirit_name: 'Rallying Thrillseeker',
        spirit_img_url: RALLYING_THRILLSEEKER,
        spirit_image: PRAIRIE_SEASON_SPIRIT_14,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: RALLY_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Outfit',
            img: RALLY_ITEM_2,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: RALLYING_THRILLSEEKER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 125,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Apr 29, 2021',
            visitNo: 34,
          },
          {
            visit_date: 'Jan 19, 2023',
            visitNo: 79,
          },
          {
            visit_date: 'Mar 27, 2025',
            visitNo: 136,
          },
        ],
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + 'rGjLAZFGM8o',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on the right that leads to Bird's Nest.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `When you arrive at Sanctuary Islands, fly down to the largest island. This spirit is beside the lone geyser in front of the waterfalls.`,
        ],
      },
      //GRATEFUL_SHELL_COLLECTOR
      {
        id: 15,
        spirit_id: 'prairie15',
        season_id: 6,
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 30,
        difficulty_types: [0, 2, 5],
        spirit_name: 'Grateful Shell Collector',
        spirit_img_url: GRATEFUL_SHELL_COLLECTOR,
        spirit_image: PRAIRIE_SEASON_SPIRIT_15,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: COLLECTOR_ITEM_1,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Cape',
            img: COLLECTOR_ITEM_2,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Prop',
            img: COLLECTOR_ITEM_3,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Emote',
            img: GRATEFUL_SHELL_COLLECTOR,
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
            visit_date: 'Sep 21, 2021',
            visitNo: 45,
          },
          {
            visit_date: 'May 25, 2023',
            visitNo: 88,
          },
          {
            visit_date: 'Feb 12, 2026',
            visitNo: 159,
          },
        ],
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + '3qBtSHuGHtQ',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on the right that leads to Bird's Nest.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `When you arrive at Sanctuary Islands, fly down to the largest island. The spirit is beside the entrance to the large cave.`,
        ],
      },
      //HIKING_GROUCH
      {
        id: 16,
        spirit_id: 'prairie16',
        season_id: 6,
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 95,
        difficulty_types: [1, 2, 4, 5, 6, 10],
        spirit_name: 'Hiking Grouch',
        spirit_img_url: HIKING_GROUCH,
        spirit_image: PRAIRIE_SEASON_SPIRIT_16,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: HIKING_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Mask',
            img: HIKING_ITEM_2,
            currency: 'Candles',
            price: 34,
          },
          {
            label: 'Neck Accessory',
            img: HIKING_ITEM_3,
            currency: 'Candles',
            price: 50,
          },
          {
            label: 'Prop',
            img: HIKING_ITEM_4,
            currency: 'Hearts',
            price: 16,
          },
          {
            label: 'Emote',
            img: HIKING_GROUCH,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 139,
            hearts: 29,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Feb 17, 2022',
            visitNo: 55,
          },
          {
            visit_date: 'Aug 7, 2023',
            visitNo: 'GV#4',
          },
          {
            visit_date: 'Mar 12, 2026',
            visitNo: 161,
          },
        ],
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + 'd_jE1N1qlfM',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on the right that leads to Bird's Nest.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `When you arrive at Sanctuary Islands, fly down to the largest island. The spirit is on an elevated area on the right side of the mountain.`,
        ],
      },
      //JELLY_WHISPERER
      {
        id: 17,
        spirit_id: 'prairie17',
        season_id: 6,
        spirit_type: 'seasonal',
        season: 'Season 6 - Season of Sanctuary',
        spirit_category: 'sound-call',
        spirit_relive_type: 'collect-memory',
        difficulty_level: 30,
        difficulty_types: [2, 7],
        spirit_name: 'Jelly Whisperer',
        spirit_img_url: JELLY_WHISPERER,
        spirit_image: PRAIRIE_SEASON_SPIRIT_17,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: JELLY_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Outfit',
            img: JELLY_ITEM_2,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Prop',
            img: JELLY_ITEM_3,
            currency: 'Hearts',
            price: 15,
          },
          {
            label: 'Sound-Call',
            img: JELLY_WHISPERER,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 135,
            hearts: 15,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Nov 25, 2021',
            visitNo: 49,
          },
          {
            visit_date: 'Aug 31, 2023',
            visitNo: 95,
          },
          {
            visit_date: 'Apr 9, 2026',
            visitNo: 163,
          },
        ],
        icon_route: SEASON6,
        spirit_guide_video_url: youtube_embed + '93xGI6POTDQ',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on the right that leads to Bird's Nest.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `When you arrive at Sanctuary Islands, fly down to the largest island. Behind it is a large cave filled with jellyfish, and the spirit is inside.`,
        ],
      },
      //REASSURING_RANGER
      {
        id: 19,
        spirit_id: 'prairie19',
        season_id: 18,
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Moments',
        spirit_category: 'friendship action',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 1, 6],
        spirit_name: 'Reassuring Ranger',
        spirit_img_url: REASSURING_RANGER,
        spirit_image: PRAIRIE_SEASON_SPIRIT_19,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: RANGER_ITEM_1,
            currency: 'Candles',
            price: 36,
          },
          {
            label: 'Mask',
            img: RANGER_ITEM_2,
            currency: 'Candles',
            price: 35,
          },
          {
            label: 'Face Accessory',
            img: RANGER_ITEM_3,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Cape',
            img: RANGER_ITEM_4,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Friendship Action',
            img: REASSURING_RANGER,
            currency: 'Hearts',
            price: 4,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 199,
            hearts: 4,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [{
            visit_date: 'May 21, 2026',
            visitNo: 166,
          },],
        icon_route: SEASON18,
        spirit_guide_video_url: youtube_embed + 'jhm4hLDM-88',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on your left.`,
          `When you reach Prairie Caves, enter the small passage on the left.`,
          `Sit in the boat. After arriving, walk forward until the area opens up. You will see a large rock on your right, and this spirit is behind it.`,
        ],
      },
      //JOLLY_GEOLOGIST
      {
        id: 20,
        spirit_id: 'prairie20',
        season_id: 18,
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Moments',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 11],
        spirit_name: 'Jolly Geologist',
        spirit_img_url: JOLLY_GEOLOGIST,
        spirit_image: PRAIRIE_SEASON_SPIRIT_20,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: JOLLY_ITEM_1,
            currency: 'Candles',
            price: 48,
          },
          {
            label: 'Face Accessory',
            img: JOLLY_ITEM_2,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Prop',
            img: JOLLY_ITEM_3,
            currency: 'Candles',
            price: 36,
          },
          {
            label: 'Emote',
            img: JOLLY_GEOLOGIST,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 154,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jul 17, 2025',
            visitNo: 144,
          },
        ],
        icon_route: SEASON18,
        spirit_guide_video_url: youtube_embed + 'tDwp1gBOIv4',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on your left.`,
          `When you reach Prairie Caves, enter the small passage on the left.`,
          `Sit in the boat. After arriving, fly toward the large waterfall. Before reaching it, enter the small cave opening on the right.`,
        ],
      },
      //ASCETIC_MONK
      {
        id: 21,
        spirit_id: 'prairie21',
        season_id: 18,
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Moments',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [0, 2, 4, 6],
        spirit_name: 'Ascetic Monk',
        spirit_img_url: ASCETIC_MONK,
        spirit_image: PRAIRIE_SEASON_SPIRIT_21,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: MONK_ITEM_1,
            currency: 'Candles',
            price: 32,
          },
          {
            label: 'Mask',
            img: MONK_ITEM_2,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Outfit',
            img: MONK_ITEM_3,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Emote',
            img: ASCETIC_MONK,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 165,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jan 1, 2026',
            visitNo: 156,
          },
        ],
        icon_route: SEASON18,
        spirit_guide_video_url: youtube_embed + 'vQ_Jyh_oink',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on your left.`,
          `When you reach Prairie Caves, enter the small passage on the left.`,
          `Sit in the boat. After arriving, fly to the left toward the tall, snow-covered mountain. You will find this spirit on a flat area of the mountain.`,
        ],
      },
      //NIGHTBIRD_WHISPERER
      {
        id: 22,
        spirit_id: 'prairie22',
        season_id: 18,
        spirit_type: 'seasonal',
        season: 'Season 18 - Season of Moments',
        spirit_category: 'sound-call',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 15,
        difficulty_types: [0, 1],
        spirit_name: 'Nightbird Whisperer',
        spirit_img_url: NIGHTBIRD_WHISPERER,
        spirit_image: PRAIRIE_SEASON_SPIRIT_22,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: NIGHTBIRD_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Hair Accessory',
            img: NIGHTBIRD_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Outfit',
            img: NIGHTBIRD_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Footwear',
            img: NIGHTBIRD_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Sound-Call',
            img: NIGHTBIRD_WHISPERER,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 0,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Oct 23, 2025',
            visitNo: 151,
          },
        ],
        icon_route: SEASON18,
        spirit_guide_video_url: youtube_embed + 'KsXwZnr5dQU',
        spirit_direction: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on your left.`,
          `When you reach Prairie Caves, enter the small passage on the left.`,
          `Sit in the boat. After arriving, fly left toward the mountain passages. Enter the low, narrow passage and continue until you find the largest monolith or steep rock. The spirit is behind it.`,
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
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {PRAIRIE_NUM_WL}
        </span>{' '}
        Winged Lights you can collect in Daylight Prairie.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'WL1-Social Area',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, and remain in the Social Space.`,
          `Head to the Stone Ark in the area.`,
        ],
      },
      {
        id: 2,
        wl_label: 'WL2-Butterfly Field (Cave)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL1 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, enter the small cave on the left.`,
        ],
      },
      {
        id: 3,
        wl_label: 'WL3-Butterfly Field (Dome Top)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, the Winged Light is on top of the small hill.`,
        ],
      },
      {
        id: 4,
        wl_label: 'WL4-Prairie Cave (Hole Left)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, go left and enter the passage.`,
          `Fly toward Prairie Caves, head upward, and look for an opening on the left.`,
        ],
      },
      {
        id: 5,
        wl_label: 'WL5-Prairie Cave (Passage Hole)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, go left and enter the passage.`,
          `Fly into Prairie Caves and continue toward the center. High on the wall to the right, you will find another passage.`,
        ],
      },
      {
        id: 6,
        wl_label: 'WL6-Prairie Village (Center Islet)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly toward the temple.`,
          `When you enter the Village Islands, you will immediately see the Winged Light on the first island in front of you.`,
        ],
      },
      {
        id: 7,
        wl_label: 'WL7-Prairie Village (2-Player Door)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly toward the temple.`,
          `When you enter the Village Islands, fly to the island on your left. The Winged Light is behind the large door.`,
        ],
      },
      {
        id: 8,
        wl_label: 'WL8-Prairie Village (Behind 2nd Bell Islet)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly toward the temple.`,
          `When you enter the Village Islands, the Winged Light is behind the central Village Temple.`,
        ],
      },
      {
        id: 9,
        wl_label: 'WL9-Prairie Temple (Lower Roof)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly toward the temple.`,
          `After leaving the Village Islands, continue toward the temple. The Winged Light is on the upper-left side of the temple.`,
        ],
      },
      {
        id: 10,
        wl_label: 'WL10-Prairie Temple (Upper Roof)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL10 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly toward the temple.`,
          `After leaving the Village Islands, continue toward the temple. The second Winged Light here is at the very top of the temple.`,
        ],
      },
      {
        id: 11,
        wl_label: 'WL11-8 Player Puzzle Area(Cave)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL11 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly toward the temple.`,
          `In the Village Islands, go to the island on the right. Enter through the door and climb upward.`,
          `Look for an opening near the top of the mountain. Enter it to find the Winged Light.`,
        ],
      },
      {
        id: 12,
        wl_label: 'WL12-Birds Nest(Lower Islet)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL12 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `When you reach Bird's Nest, the Winged Light is on the island to the left.`,
        ],
      },
      {
        id: 13,
        wl_label: 'WL13-Birds Nest(Upper Islet)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-0',
        wl_url: PR_WL13 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `In Bird's Nest, the Winged Light is on the island behind the central island with the ruined tower.`,
        ],
      },
      {
        id: 14,
        wl_label: 'WL14-Prairie Peaks (Hollow Bird Cave)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-18',
        wl_url: PR_WL14 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly left and enter the passage.`,
          `After exiting, fly to the right, enter the small opening, and sit in the boat.`,
          `After arriving, fly left and enter the small passage below. In the center of the cave, fly upward and look along the middle wall.`,
        ],
      },
      {
        id: 15,
        wl_label: 'WL15-Prairie Peaks (Crystal Cave)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-18',
        wl_url: PR_WL15 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly left and enter the passage.`,
          `After exiting, fly to the right, enter the small opening, and sit in the boat.`,
          `After arriving, continue inward and fly toward the large waterfall. Swim underneath it.`,
          `Enter the opening, swim through, surface, and fly inside. The Winged Light is beside the orb.`,
        ],
      },
      {
        id: 16,
        wl_label: 'WL16-Prairie Peaks (Mountain Peak)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-18',
        wl_url: PR_WL16 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly left and enter the passage.`,
          `After exiting, fly to the right, enter the small opening, and sit in the boat.`,
          `After arriving, continue inward and fly to the tallest mountain. The Winged Light is at its summit.`,
          `Enter the opening, swim through, surface, and fly inside. The Winged Light is beside the orb.`,
        ],
      },
      {
        id: 17,
        wl_label: 'WL17-Sanctuary Islands (Big floating Island)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL17 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `When you arrive at Sanctuary Islands, you will immediately see the Winged Light on the large floating island.`,
        ],
      },
      {
        id: 18,
        wl_label: 'WL18-Sanctuary Islands (Hole at Mountain Top)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL18 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `When you arrive at Sanctuary Islands, look for the small passage at the top of the largest island.`,
        ],
      },
      {
        id: 19,
        wl_label: 'WL19-Sanctuary Islands (3rd Floating Islet)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL19 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `When you arrive at Sanctuary Islands, look to the right for three small floating islands. The Winged Light is on the rightmost island.`,
        ],
      },
      {
        id: 20,
        wl_label: 'WL20-Sanctuary Islands (Edge of Cliff)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL20 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `At the back of Sanctuary Islands, look for the bells. This Winged Light is positioned below them.`,
        ],
      },
      {
        id: 21,
        wl_label: 'WL21-Sanctuary Islands (Jellyfish Cave)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL21 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `At Sanctuary Islands, look behind the largest island for the jellyfish cave.`,
        ],
      },
      {
        id: 22,
        wl_label: 'WL22-Sanctuary Islands (Bottom of Waterfall)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL22 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `At Sanctuary Islands, fly down and look for the large cave entrance behind the waterfall.`,
        ],
      },
      {
        id: 23,
        wl_label: 'WL23-Sanctuary Islands (High Above 2nd Ladder)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL23 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `At Sanctuary Islands, fly down and enter the large cave. Take the passage on the left.`,
          `Fly upward to find the Winged Light.`,
        ],
      },
      {
        id: 24,
        wl_label: 'WL24-Sanctuary Islands (Crab Cave)',
        wl_group: 'wl-prairie',
        wl_season_group: 'wl-prairie-6',
        wl_url: PR_WL24 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `At Sanctuary Islands, fly down and enter the large cave. Take the passage on the right.`,
          `Enter the crab area, fly upward, and go through the next passage to find the Winged Light.`,
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
        Map Shrines help you identify how many Winged Lights you still need to
        collect and where they are located on the map. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {PRAIRIE_NUM_MAP_SHRINES}
        </span>{' '}
        Map Shrines you can activate in Daylight Prairie.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_label: 'Map Shrine 1',
        shrine_url: DP_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 2, Daylight Prairie.`,
          `In the Social Space, fly to the left side to find this Map Shrine.`,
        ],
      },
      {
        id: 2,
        shrine_label: 'Map Shrine 2',
        shrine_url: DP_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, you will immediately see the Map Shrine.`,
        ],
      },
      {
        id: 3,
        shrine_label: 'Map Shrine 3',
        shrine_url: DP_MS3 ?? MAP_SHRINE,
        shrine_location: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on your left.`,
          `When you reach Prairie Caves, you will find the Map Shrine on the left side before the cave entrance.`,
        ],
      },
      {
        id: 4,
        shrine_label: 'Map Shrine 4',
        shrine_url: DP_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, head toward the temple, pass through the stone doorway, and continue flying.`,
          `When you reach the Village Islands, fly to the island on the right. The Map Shrine is on an elevated section of the island.`,
        ],
      },
      {
        id: 5,
        shrine_label: 'Map Shrine 5',
        shrine_url: DP_MS5 ?? MAP_SHRINE,
        shrine_location: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, head toward the temple, pass through the stone doorway, and continue flying.`,
          `When you reach the Village Islands, fly toward the temple. The Map Shrine is on the right side of the pond.`,
        ],
      },
      {
        id: 6,
        shrine_label: 'Map Shrine 6',
        shrine_url: DP_MS6 ?? MAP_SHRINE,
        shrine_location: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, head toward the temple, pass through the stone doorway, and continue flying.`,
          `When you reach the Village Islands, fly to the island on the right and enter it. Use the Butterfly Charmer emote on the square stones on the floor to open the door.`,
          `Activate the eight-player platform. When it rises, look toward the mountain at the back to find the Map Shrine.`,
        ],
      },
      {
        id: 7,
        shrine_label: 'Map Shrine 7',
        shrine_url: DP_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on your left.`,
          `On the left side of Prairie Caves, enter the opening that leads to Prairie Peaks and ride the boat.`,
          `When you arrive at Prairie Peaks, continue inward. After the area opens up, look on top of the rock to the right for the Map Shrine.`,
        ],
      },
      {
        id: 8,
        shrine_label: 'Map Shrine 8',
        shrine_url: DP_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Enter the second realm, Daylight Prairie, then fly through the clouds.`,
          `After landing, enter the passage on the right that leads to Bird's Nest.`,
          `In Bird's Nest, fly to the island directly in front of you to find the Map Shrine.`,
        ],
      },
      {
        id: 9,
        shrine_label: 'Map Shrine 9',
        shrine_url: DP_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 2, Daylight Prairie, then fly through the clouds.`,
          `After landing in Butterfly Fields, fly right and enter the passage.`,
          `In Bird's Nest, fly downward until you reach the cloud passage.`,
          `When you arrive at Sanctuary Islands, fly down toward the bells. The Map Shrine is near the Sanctuary Guide.`,
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
        <PrairieDyes />
      </div>
    ),
  },
]
