import { Typography, Spinner } from '@material-tailwind/react'
import {
  VAULT_NUM_REG_SPIRIT,
  VAULT_NUM_SEASON_SPIRIT,
  VAULT_NUM_WL,
  VAULT_NUM_MAP_SHRINES,
} from '../exports/constants'
import {
  PRAYING_ACOLYTE,
  LEVITATING_ADEPT,
  POLITE_SCHOLAR,
  MEMORY_WHISPERER,
  MEDITATING_MONASTIC,
  SHUSHING_LIGHTSCHOLAR,
  WISE_GRANDPARENT,
  THOUGHTFUL_DIRECTOR,
  GREETING_SHAMAN,
  BECKONING_RULER,
  GLOATING_NARCISSIST,
  SLOUCHING_SOLDIER,
  SNEEZING_GEOGRAPHER,
  STAR_COLLECTOR,
  STRETCHING_LAMPLIGHTER,
  BEREFT_VETERAN,
  PLEADING_CHILD,
  TIPTOEING_TEABREWER,
  WOUNDED_SOLDIER,
  PRINCESS,
  FEUDAL_LORD,
  HUNTER,
  HERB_GATHERER,
  LIGHTMENDING_CHAMPION,
  LIGHTMENDING_PIONEER,
  LIGHTMENDING_LIGHT_SCHOLAR,
  LIGHTMENDING_LIGHT_CATCHER,
} from '../exports/spiritIcons'
import { MAP_SHRINE, WINGED_LIGHT, NON_SPIRIT } from '../exports/defaultImages'
import {
  VK_WL1,
  VK_WL2,
  VK_WL3,
  VK_WL4,
  VK_WL5,
  VK_WL6,
  VK_WL7,
  VK_WL8,
  VK_WL9,
  VK_WL10,
  VK_WL11,
  VK_WL12,
  VK_WL13,
  VK_WL14,
  VK_WL15,
  VK_WL16,
} from '../exports/vaultWLImgUrl'
import {
  VK_MS1,
  VK_MS2,
  VK_MS3,
  VK_MS4,
  VK_MS5,
  VK_MS6,
  VK_MS7,
  VK_MS8,
  VK_MS9,
  VK_MS10,
  VK_MS11,
  VK_MS12,
} from '../exports/vaultMSImgUrl'
import {
  MAP6,
  SEASON1,
  SEASON2,
  SEASON3,
  SEASON4,
  SEASON10,
  SEASON16,
  SEASON20,
  SEASON23,
  SEASON28,
} from '../exports/seasonIcons'
import {
  VAULT_SPIRIT_1,
  VAULT_SPIRIT_2,
  VAULT_SPIRIT_3,
  VAULT_SPIRIT_4,
  VAULT_SPIRIT_5,
  VAULT_SEASON_SPIRIT_1,
  VAULT_SEASON_SPIRIT_2,
  VAULT_SEASON_SPIRIT_3,
  VAULT_SEASON_SPIRIT_4,
  VAULT_SEASON_SPIRIT_5,
  VAULT_SEASON_SPIRIT_6,
  VAULT_SEASON_SPIRIT_7,
  VAULT_SEASON_SPIRIT_8,
  VAULT_SEASON_SPIRIT_9,
  VAULT_SEASON_SPIRIT_10,
  VAULT_SEASON_SPIRIT_11,
  VAULT_SEASON_SPIRIT_12,
  VAULT_SEASON_SPIRIT_13,
  VAULT_SEASON_SPIRIT_14,
  VAULT_SEASON_SPIRIT_15,
  VAULT_SEASON_SPIRIT_16,
  VAULT_SEASON_SPIRIT_17,
  VAULT_SEASON_SPIRIT_18,
  VAULT_SEASON_SPIRIT_19,
  VAULT_SEASON_SPIRIT_20,
  VAULT_SEASON_SPIRIT_21,
  VAULT_SEASON_SPIRIT_22,
} from '../exports/spiritVaultImages'
import {
  ADEPT_ITEM_1,
  ADEPT_ITEM_2,
  SCHOLAR_ITEM_1,
  SCHOLAR_ITEM_2,
  MEMORY_ITEM_1,
  MEMORY_ITEM_2,
  MEMORY_ITEM_3,
  ACOLYTE_ITEM_1,
  ACOLYTE_ITEM_2,
  ACOLYTE_ITEM_3,
  MONASTIC_ITEM_1,
  MONASTIC_ITEM_2,
  DIRECTOR_ITEM_1,
  DIRECTOR_ITEM_2,
  DIRECTOR_ITEM_3,
  SHAMAN_ITEM_1,
  SHAMAN_ITEM_2,
  SHUSHING_ITEM_1,
  SHUSHING_ITEM_2,
  GRANDPARENT_ITEM_1,
  GRANDPARENT_ITEM_2,
  GRANDPARENT_ITEM_3,
  SOLDIER_ITEM_1,
  SOLDIER_ITEM_2,
  NARCISSIST_ITEM_1,
  NARCISSIST_ITEM_2,
  LAMPLIGHTER_ITEM_1,
  LAMPLIGHTER_ITEM_2,
  COLLECTOR_ITEM_1,
  COLLECTOR_ITEM_2,
  COLLECTOR_ITEM_3,
  RULER_ITEM_1,
  RULER_ITEM_2,
  GEOGRAPHER_ITEM_1,
  GEOGRAPHER_ITEM_2,
  VETERAN_ITEM_1,
  VETERAN_ITEM_2,
  VETERAN_ITEM_3,
  WARRIOR_ITEM_1,
  WARRIOR_ITEM_2,
  WARRIOR_ITEM_3,
  BREWER_ITEM_1,
  BREWER_ITEM_2,
  BREWER_ITEM_3,
  CHILD_ITEM_1,
  CHILD_ITEM_2,
  CHILD_ITEM_3,
  CHILD_ITEM_4,
  HUNTER_ITEM_1,
  HUNTER_ITEM_2,
  HUNTER_ITEM_3,
  GATHERER_ITEM_1,
  GATHERER_ITEM_2,
  GATHERER_ITEM_3,
  LORD_ITEM_1,
  LORD_ITEM_2,
  LORD_ITEM_3,
  PRINCESS_ITEM_1,
  PRINCESS_ITEM_2,
  PRINCESS_ITEM_3,
  PRINCESS_ITEM_4,
  COF_ITEM_1,
  COF_ITEM_2,
  COF_ITEM_3,
  COF_ITEM_4,
  COF_ITEM_5,
  SOS_ITEM_1,
  SOS_ITEM_2,
  SOS_ITEM_3,
  SOS_ITEM_4,
  SOA_ITEM_1,
  SOA_ITEM_2,
  SOA_ITEM_3,
  SOA_ITEM_4,
  SOA_ITEM_5,
  IOI_ITEM_1,
  IOI_ITEM_2,
  IOI_ITEM_3,
  IOI_ITEM_4,
  IOI_ITEM_5,
  IOI_ITEM_6,
  LC_ITEM_1,
  LC_ITEM_2,
  LC_ITEM_3,
  LS_ITEM_1,
  LS_ITEM_2,
  LS_ITEM_3,
  LS_ITEM_4,
  LLC_ITEM_1,
  LLC_ITEM_2,
  LLC_ITEM_3,
  LLC_ITEM_4,
  LP_ITEM_1,
  LP_ITEM_2,
  LP_ITEM_3,
} from '../exports/spiritVaultCollectibles'
import VaultConstellation from '../assets/images/maps-constellations/Vault_Constellation.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import DyeAlertMessage from '../pages/components/DyeAlertMessage'
import VaultDyes from '../pages/components/MapDyeLocations/VaultDyes'
import { MapPinIcon, SparklesIcon, SwatchIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/solid'

const youtube_embed = 'https://www.youtube.com/embed/'

export const vault = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    icon: UserIcon,
    desc: (
      <>
        <LazyLoadImage
          src={VaultConstellation}
          alt="Vault of Knowledge"
          title="Vault of Knowledge"
          placeholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
          effect="blur"
          className="rounded-xl"
        />
        <Typography className="antialiased font-sans pt-4">
          There are{' '}
          <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
            {VAULT_NUM_REG_SPIRIT}
          </span>{' '}
          regular spirits that you can find here.
        </Typography>
      </>
    ),
    spirits: [
      // LEVITATING_ADEPT
      {
        id: 1,
        spirit_id: 'vault1',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 3],
        spirit_name: 'Levitating Adept',
        spirit_img_url: LEVITATING_ADEPT,
        spirit_image: VAULT_SPIRIT_1,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: ADEPT_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Mask',
            img: ADEPT_ITEM_2,
            currency: 'Hearts',
            price: 10,
          },
          {
            label: 'Emote',
            img: LEVITATING_ADEPT,
            currency: 'Candles',
            price: 17,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 26,
            hearts: 15,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Vault of Knowledge',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP6,
        spirit_guide_video_url: youtube_embed + 'l4zapmZhb7w',
        spirit_direction: [
          `Enter the sixth realm, Vault of Knowledge, and fly toward the elevating platform.`,
          `Once you reach the center, light the pillars and memory lamps. Sit on the platform to ascend to the second floor.`,
          `On the second floor, open the four-player door.`,
          `Enter the room. The spirit is behind the pillar on the left.`,
        ],
      },
      // POLITE_SCHOLAR
      {
        id: 2,
        spirit_id: 'vault2',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 2],
        spirit_name: 'Polite Scholar',
        spirit_img_url: POLITE_SCHOLAR,
        spirit_image: VAULT_SPIRIT_2,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: SCHOLAR_ITEM_1,
            currency: 'Hearts',
            price: 15,
          },
          {
            label: 'Outfit',
            img: SCHOLAR_ITEM_2,
            currency: 'Hearts',
            price: 2,
          },
          {
            label: 'Stance',
            img: POLITE_SCHOLAR,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 17,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Vault of Knowledge',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP6,
        spirit_guide_video_url: youtube_embed + '2kOiFD5YQ_s',
        spirit_direction: [
          `Enter the sixth realm, Vault of Knowledge, and fly toward the elevating platform.`,
          `Once you reach the center, light the pillars and memory lamps. Sit on the platform to ascend to the second floor.`,
          `On the second floor, open the four-player door.`,
          `Enter the room. The spirit is behind the pillar on the left.`,
        ],
      },
      // MEMORY_WHISPERER
      {
        id: 3,
        spirit_id: 'vault3',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'call',
        spirit_relive_type: 'task',
        difficulty_level: 25,
        difficulty_types: [0, 2],
        spirit_name: 'Memory Whisperer',
        spirit_img_url: MEMORY_WHISPERER,
        spirit_image: VAULT_SPIRIT_3,
        spirit_collectibles: [
          {
            label: 'Outfit',
            img: MEMORY_ITEM_1,
            currency: 'Hearts',
            price: 3,
          },
          {
            label: 'Cape Lvl 1',
            img: MEMORY_ITEM_2,
            currency: 'Hearts',
            price: 50,
          },
          {
            label: 'Cape Lvl 2',
            img: MEMORY_ITEM_3,
            currency: 'Hearts',
            price: 150,
          },
          {
            label: 'Call',
            img: MEMORY_WHISPERER,
            currency: 'Candles',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 9,
            hearts: 203,
            ascended_candles: 16,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Vault of Knowledge',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP6,
        spirit_guide_video_url: youtube_embed + 'VFEsHNyXmm8',
        spirit_direction: [
          `Enter the sixth realm, Vault of Knowledge, and fly toward the elevating platform. Note: You must first relive the Manta Whisperer in the Valley of Triumph.`,
          `Once you reach the center, light the pillars and memory lamps. Continue ascending until you reach the fourth floor.`,
          `On the fourth floor, find the largest set of platforms to the left of the Isle of Dawn constellation.`,
          `Near the lower area are two platforms with five candles. Light all the candles to obtain the spirit.`,
        ],
      },
      // PRAYING_ACOLYTE
      {
        id: 4,
        spirit_id: 'vault4',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 2, 3],
        spirit_name: 'Praying Acolyte',
        spirit_img_url: PRAYING_ACOLYTE,
        spirit_image: VAULT_SPIRIT_4,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: ACOLYTE_ITEM_1,
            currency: 'Hearts',
            price: 5,
          },
          {
            label: 'Cape Lvl 1',
            img: ACOLYTE_ITEM_2,
            currency: 'Hearts',
            price: 25,
          },
          {
            label: 'Cape Lvl 2',
            img: ACOLYTE_ITEM_3,
            currency: 'Hearts',
            price: 75,
          },
          {
            label: 'Emote',
            img: PRAYING_ACOLYTE,
            currency: 'Candles',
            price: 15,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 24,
            hearts: 105,
            ascended_candles: 12,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Vault of Knowledge',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP6,
        spirit_guide_video_url: youtube_embed + 'LGFyXjnMtE0',
        spirit_direction: [
          `Enter the sixth realm, Vault of Knowledge, and fly toward the elevating platform.`,
          `At the platform, you will find a four-player door on the right. Wait for other players and make sure you have the Levitating Emote.`,
          `Once the door opens, enter the room. The spirit is in the middle of the pond.`,
        ],
      },
      // MEDITATING_MONASTIC
      {
        id: 5,
        spirit_id: 'vault5',
        season_id: 'season-0',
        spirit_type: 'regular',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 35,
        difficulty_types: [0, 2, 6],
        spirit_name: 'Meditating Monastic',
        spirit_img_url: MEDITATING_MONASTIC,
        spirit_image: VAULT_SPIRIT_5,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: MONASTIC_ITEM_1,
            currency: 'Hearts',
            price: 10,
          },
          {
            label: 'Prop',
            img: MONASTIC_ITEM_2,
            currency: 'Hearts',
            price: 30,
          },
          {
            label: 'Emote',
            img: MEDITATING_MONASTIC,
            currency: 'Candles',
            price: 27,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 36,
            hearts: 40,
            ascended_candles: 3,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Vault of Knowledge',
            visitNo: '',
          },
        ],
        constellation_icon_route: MAP6,
        spirit_guide_video_url: youtube_embed + '0-1qb2iU_a8',
        spirit_direction: [
          `Enter the sixth realm, Vault of Knowledge, and fly toward the elevating platform.`,
          `Use the platform to ascend to the fourth floor.`,
          `Find the two islands—one higher and one lower—connected by a spiral staircase.`,
          `After climbing the staircase, use the Pray expression to reveal the spirit's memory.`,
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
        whenever you enter the Vault of Knowledge. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {VAULT_NUM_SEASON_SPIRIT}
        </span>{' '}
        seasonal spirits that you can find and relive here.
      </Typography>
    ),
    spirits: [
      // THOUGHTFUL_DIRECTOR
      {
        id: 7,
        spirit_id: 'vault7',
        season_id: 4,
        spirit_type: 'seasonal',
        season: 'Season 4 - Season of Rhythm',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 45,
        difficulty_types: [1, 5, 6],
        spirit_name: 'Thoughtful Director',
        spirit_img_url: THOUGHTFUL_DIRECTOR,
        spirit_image: VAULT_SEASON_SPIRIT_1,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: DIRECTOR_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Cape',
            img: DIRECTOR_ITEM_2,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Prop',
            img: DIRECTOR_ITEM_3,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Emote',
            img: THOUGHTFUL_DIRECTOR,
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
            visit_date: 'May 13, 2021',
            visitNo: 35,
          },
          {
            visit_date: 'Jul 8, 2022',
            visitNo: 67,
          },
          {
            visit_date: 'Jul 3, 2023',
            visitNo: 'GV#3',
          },
          {
            visit_date: 'Jun 20, 2024',
            visitNo: 116,
          },
        ],
        icon_route: SEASON4,
        spirit_guide_video_url: youtube_embed + 'vs3rSSsbULA',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, and fly toward the elevating platform.`,
          `There is a four-player door on the right. Use the Meditating Emote to open it.`,
          `Once the door opens, the spirit is on the right side of the entrance.`,
        ],
      },
      // GREETING_SHAMAN
      {
        id: 8,
        spirit_id: 'vault8',
        season_id: 1,
        spirit_type: 'seasonal',
        season: 'Season 1 - Season of Gratitude',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 30,
        difficulty_types: [0, 2, 5],
        spirit_name: 'Greeting Shaman',
        spirit_img_url: GREETING_SHAMAN,
        spirit_image: VAULT_SEASON_SPIRIT_2,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: SHAMAN_ITEM_1,
            currency: 'Candles',
            price: 54,
          },
          {
            label: 'Instrument',
            img: SHAMAN_ITEM_2,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Emote',
            img: GREETING_SHAMAN,
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
            visit_date: 'Jul 23, 2020',
            visitNo: 14,
          },
          {
            visit_date: 'May 26, 2022',
            visitNo: 62,
          },
          {
            visit_date: 'Jul 3, 2023',
            visitNo: 'GV#3',
          },
        ],
        icon_route: SEASON1,
        spirit_guide_video_url: youtube_embed + 'SSeg3jdBfIM',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, and fly toward the elevating platform.`,
          `Ascend to the fourth floor. Once there, fly toward the Hidden Forest constellation.`,
          `Continue to the end of the moving platforms.`,
        ],
      },
      // SHUSHING_LIGHTSCHOLAR
      {
        id: 9,
        spirit_id: 'vault9',
        season_id: 2,
        spirit_type: 'seasonal',
        season: 'Season 2 - Season of Lightseekers',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 55,
        difficulty_types: [1, 4, 5, 6],
        spirit_name: 'Shushing Light Scholar',
        spirit_img_url: SHUSHING_LIGHTSCHOLAR,
        spirit_image: VAULT_SEASON_SPIRIT_3,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: SHUSHING_ITEM_1,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Cape',
            img: SHUSHING_ITEM_2,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Emote',
            img: SHUSHING_LIGHTSCHOLAR,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 108,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Aug 20, 2020',
            visitNo: 16,
          },
          {
            visit_date: 'Sep 15, 2022',
            visitNo: 70,
          },
          {
            visit_date: 'Sep 12, 2024',
            visitNo: 122,
          },
        ],
        icon_route: SEASON2,
        spirit_guide_video_url: youtube_embed + 'YqX3lKP3sCA',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, and fly toward the elevating platform.`,
          `Ascend to the fourth floor. Once there, fly toward the spiral platform near the Isle of Dawn constellation.`,
          `The spirit is on the first large platform.`,
        ],
      },
      // WISE_GRANDPARENT
      {
        id: 10,
        spirit_id: 'vault10',
        season_id: 3,
        spirit_type: 'seasonal',
        season: 'Season 3 - Season of Belonging',
        spirit_category: 'stance',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 60,
        difficulty_types: [0, 2, 3, 5, 6],
        spirit_name: 'Wise Grandparent',
        spirit_img_url: WISE_GRANDPARENT,
        spirit_image: VAULT_SEASON_SPIRIT_4,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: GRANDPARENT_ITEM_1,
            currency: 'Candles',
            price: 48,
          },
          {
            label: 'Cape',
            img: GRANDPARENT_ITEM_2,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Prop',
            img: GRANDPARENT_ITEM_3,
            currency: 'Candles',
            price: 10,
          },
          {
            label: 'Stance',
            img: WISE_GRANDPARENT,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 156,
            hearts: 0,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Aug 6, 2020',
            visitNo: 15,
          },
          {
            visit_date: 'Nov 11, 2021',
            visitNo: 48,
          },
          {
            visit_date: 'Nov 9, 2023',
            visitNo: 100,
          },
        ],
        icon_route: SEASON3,
        spirit_guide_video_url: youtube_embed + 'brZdwktwP4E',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, and fly to the two-player door on the right.`,
          `Enter the Archives. The spirit is in the middle of the platform.`,
        ],
      },
      // SLOUCHING_SOLDIER
      {
        id: 11,
        spirit_id: 'vault11',
        season_id: 10,
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 30,
        difficulty_types: [1, 2, 4],
        spirit_name: 'Slouching Soldier',
        spirit_img_url: SLOUCHING_SOLDIER,
        spirit_image: VAULT_SEASON_SPIRIT_5,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: SOLDIER_ITEM_1,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Cape',
            img: SOLDIER_ITEM_2,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: SLOUCHING_SOLDIER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 140,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Feb 16, 2023',
            visitNo: 81,
          },
        ],
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + '4gi3bw88THM',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, then fly to the left and enter the passage.`,
          `Walk out of the passage, then fly to the right toward the large jar.`,
          `Enter through the opening of the jar. The spirit is on the right.`,
        ],
      },
      // GLOATING_NARCISSIST
      {
        id: 12,
        spirit_id: 'vault12',
        season_id: 10,
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Gloating Narcissist',
        spirit_img_url: GLOATING_NARCISSIST,
        spirit_image: VAULT_SEASON_SPIRIT_6,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: NARCISSIST_ITEM_1,
            currency: 'Candles',
            price: 46,
          },
          {
            label: 'Outfit',
            img: NARCISSIST_ITEM_2,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Emote',
            img: GLOATING_NARCISSIST,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 139,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Jul 20, 2023',
            visitNo: 92,
          },
        ],
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + 'T6eFDkfCbb4',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, then fly to the left and enter the passage.`,
          `Walk out of the passage, then fly to the left toward the small coliseum with fireworks.`,
          `The spirit is behind a pillar on the right side of the stage.`,
        ],
      },
      // STRETCHING_LAMPLIGHTER
      {
        id: 13,
        spirit_id: 'vault13',
        season_id: 10,
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Stretching Lamplighter',
        spirit_img_url: STRETCHING_LAMPLIGHTER,
        spirit_image: VAULT_SEASON_SPIRIT_7,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: LAMPLIGHTER_ITEM_1,
            currency: 'Candles',
            price: 44,
          },
          {
            label: 'Cape',
            img: LAMPLIGHTER_ITEM_2,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: STRETCHING_LAMPLIGHTER,
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
            visit_date: 'Dec 7, 2023',
            visitNo: 102,
          },
        ],
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + '33IDYonEa5c',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, then fly to the left and enter the passage.`,
          `Walk out of the passage, then fly to the left toward the tall tower. The spirit is inside.`,
        ],
      },
      // STAR_COLLECTOR
      {
        id: 14,
        spirit_id: 'vault14',
        season_id: 10,
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 45,
        difficulty_types: [2, 5, 7],
        spirit_name: 'Star Collector',
        spirit_img_url: STAR_COLLECTOR,
        spirit_image: VAULT_SEASON_SPIRIT_8,
        spirit_collectibles: [
          {
            label: 'Neck Accessory',
            img: COLLECTOR_ITEM_1,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Cape',
            img: COLLECTOR_ITEM_2,
            currency: 'Candles',
            price: 75,
          },
          {
            label: 'Prop',
            img: COLLECTOR_ITEM_3,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: STAR_COLLECTOR,
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
            visit_date: 'Sep 14, 2023',
            visitNo: 96,
          },
        ],
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + 'D_eLgCvFtbo',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, then fly to the left and enter the passage.`,
          `Walk out of the passage, then fly to the left toward the clouds and enter the passage there.`,
          `After exiting, you will see a broken ship. The spirit is inside it.`,
        ],
      },
      // BECKONING_RULER
      {
        id: 15,
        spirit_id: 'vault15',
        season_id: 10,
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Beckoning Ruler',
        spirit_img_url: BECKONING_RULER,
        spirit_image: VAULT_SEASON_SPIRIT_9,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: RULER_ITEM_1,
            currency: 'Candles',
            price: 48,
          },
          {
            label: 'Mask',
            img: RULER_ITEM_2,
            currency: 'Candles',
            price: 42,
          },
          {
            label: 'Emote',
            img: BECKONING_RULER,
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
            visit_date: 'Sep 29, 2022',
            visitNo: 71,
          },
          {
            visit_date: 'Jul 4, 2025',
            visitNo: 117,
          },
        ],
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + 't6nUg257N5M',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, then fly to the left and enter the passage.`,
          `Walk out of the passage, fly toward the moon, and land on the first floating island.`,
          `The spirit is on the left side.`,
        ],
      },
      // SNEEZING_GEOGRAPHER
      {
        id: 16,
        spirit_id: 'vault16',
        season_id: 10,
        spirit_type: 'seasonal',
        season: 'Season 10 - Season of The Little Prince',
        spirit_category: 'emote',
        spirit_relive_type: 'carry-memory',
        difficulty_level: 30,
        difficulty_types: [1, 2, 4],
        spirit_name: 'Sneezing Geographer',
        spirit_img_url: SNEEZING_GEOGRAPHER,
        spirit_image: VAULT_SEASON_SPIRIT_10,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: GEOGRAPHER_ITEM_1,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Cape',
            img: GEOGRAPHER_ITEM_2,
            currency: 'Candles',
            price: 70,
          },
          {
            label: 'Emote',
            img: SNEEZING_GEOGRAPHER,
            currency: 'Hearts',
            price: 13,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 123,
            hearts: 13,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Apr 13, 2023',
            visitNo: 85,
          },
        ],
        icon_route: SEASON10,
        spirit_guide_video_url: youtube_embed + 'JjhpahvgdZo',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, then fly to the left and enter the passage.`,
          `Walk out of the passage, fly toward the moon, and land on the second floating island.`,
          `You will immediately see the spirit.`,
        ],
      },
      // BEREFT_VETERAN
      {
        id: 17,
        spirit_id: 'vault17',
        season_id: 16,
        spirit_type: 'seasonal',
        season: 'Season 16 - Season of Remembrance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Bereft Veteran',
        spirit_img_url: BEREFT_VETERAN,
        spirit_image: VAULT_SEASON_SPIRIT_11,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: VETERAN_ITEM_1,
            currency: 'Candles',
            price: 60,
          },
          {
            label: 'Mask',
            img: VETERAN_ITEM_2,
            currency: 'Candles',
            price: 35,
          },
          {
            label: 'Cape',
            img: VETERAN_ITEM_3,
            currency: 'Candles',
            price: 80,
          },
          {
            label: 'Emote',
            img: BEREFT_VETERAN,
            currency: 'Hearts',
            price: 0,
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
            visit_date: 'May 22, 2025',
            visitNo: 140,
          },
        ],
        icon_route: SEASON16,
        spirit_guide_video_url: youtube_embed + 'feXvYTOGEi4',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, and fly toward the elevating platform.`,
          `Once you reach the center, turn left and look for a passage leading downward.`,
          `Upon reaching the Repository of Refuge, you will find the spirit inside the opening on the left.`,
        ],
      },
      // WOUNDED_SOLDIER
      {
        id: 18,
        spirit_id: 'vault18',
        season_id: 16,
        spirit_type: 'seasonal',
        season: 'Season 16 - Season of Remembrance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Wounded Warrior',
        spirit_img_url: WOUNDED_SOLDIER,
        spirit_image: VAULT_SEASON_SPIRIT_12,
        spirit_collectibles: [
          {
            label: 'Mask',
            img: WARRIOR_ITEM_1,
            currency: 'Candles',
            price: 45,
          },
          {
            label: 'Outfit',
            img: WARRIOR_ITEM_2,
            currency: 'Candles',
            price: 60,
          },
          {
            label: 'Cape',
            img: WARRIOR_ITEM_3,
            currency: 'Candles',
            price: 80,
          },
          {
            label: 'Emote',
            img: WOUNDED_SOLDIER,
            currency: 'Hearts',
            price: 0,
          },
        ],
        spirit_tree_cost: [
          {
            candles: 198,
            hearts: 3,
            ascended_candles: 2,
          },
        ],
        number_of_visits: [
          {
            visit_date: 'Aug 18, 2025',
            visitNo: 'GV#10',
          },
        ],
        icon_route: SEASON16,
        spirit_guide_video_url: youtube_embed + '-Oc-2ftk0OM',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, and fly toward the elevating platform.`,
          `Once you reach the center, turn left and look for a passage leading downward.`,
          `Upon reaching the Repository of Refuge, look behind the Spirit Guide on the right for an opening.`,
          `Enter the opening. The spirit is on the platform outside.`,
        ],
      },
      // TIPTOEING_TEABREWER
      {
        id: 19,
        spirit_id: 'vault19',
        season_id: 16,
        spirit_type: 'seasonal',
        season: 'Season 16 - Season of Remembrance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Tiptoeing Tea-Brewer',
        spirit_img_url: TIPTOEING_TEABREWER,
        spirit_image: VAULT_SEASON_SPIRIT_13,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: BREWER_ITEM_1,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Outfit',
            img: BREWER_ITEM_2,
            currency: 'Candles',
            price: 55,
          },
          {
            label: 'Cape',
            img: BREWER_ITEM_3,
            currency: 'Candles',
            price: 65,
          },
          {
            label: 'Emote',
            img: TIPTOEING_TEABREWER,
            currency: 'Hearts',
            price: 10,
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
            visit_date: 'Aug 18, 2025',
            visitNo: 'GV#10',
          },
        ],
        icon_route: SEASON16,
        spirit_guide_video_url: youtube_embed + 'mwLn70j2Sjs',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, and fly toward the elevating platform.`,
          `Once you reach the center, turn left and look for a passage leading downward.`,
          `Upon reaching the Repository of Refuge, fly upward until you find a platform with a tent.`,
          `Land and enter the opening. The spirit is on the right, behind the wall.`,
        ],
      },
      // PLEADING_CHILD
      {
        id: 20,
        spirit_id: 'vault20',
        season_id: 16,
        spirit_type: 'seasonal',
        season: 'Season 16 - Season of Remembrance',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Pleading Child',
        spirit_img_url: PLEADING_CHILD,
        spirit_image: VAULT_SEASON_SPIRIT_14,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: CHILD_ITEM_1,
            currency: 'Candles',
            price: 60,
          },
          {
            label: 'Neck Accessory',
            img: CHILD_ITEM_2,
            currency: 'Candles',
            price: 50,
          },
          {
            label: 'Outfit',
            img: CHILD_ITEM_3,
            currency: 'Candles',
            price: 40,
          },
          {
            label: 'Shoes',
            img: CHILD_ITEM_4,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Emote',
            img: PLEADING_CHILD,
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
            visit_date: 'Jan 13, 2025',
            visitNo: 'GV#7',
          },
        ],
        icon_route: SEASON16,
        spirit_guide_video_url: youtube_embed + 'PcKmzQOjKFU',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge, and fly toward the elevating platform.`,
          `Once you reach the center, turn left and look for a passage leading downward.`,
          `Upon reaching the Repository of Refuge, fly upward until you reach the top.`,
          `Land anywhere on the highest floor, where you will find the spirit.`,
        ],
      },
      // HUNTER
      {
        id: 21,
        spirit_id: 'vault21',
        season_id: 20,
        spirit_type: 'seasonal',
        season: 'Season 20 - Season of The Nine-Colored Deer',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Hunter',
        spirit_img_url: HUNTER,
        spirit_image: VAULT_SEASON_SPIRIT_15,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: HUNTER_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Outfit',
            img: HUNTER_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: HUNTER_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: HUNTER,
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
        number_of_visits: [],
        icon_route: SEASON20,
        spirit_guide_video_url: youtube_embed + '2yjliDfvtdM',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
          `Upon arrival, find the Spirit Mural. The Hunter Spirit is located above it.`,
        ],
      },
      // HERB_GATHERER
      {
        id: 22,
        spirit_id: 'vault22',
        season_id: 20,
        spirit_type: 'seasonal',
        season: 'Season 20 - Season of The Nine-Colored Deer',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Herb Gatherer',
        spirit_img_url: HERB_GATHERER,
        spirit_image: VAULT_SEASON_SPIRIT_16,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: GATHERER_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Outfit',
            img: GATHERER_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: GATHERER_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: HERB_GATHERER,
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
        number_of_visits: [],
        icon_route: SEASON20,
        spirit_guide_video_url: youtube_embed + 'h0uDIdauBNM',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
          `Upon arrival, head toward the palace. You will find the spirit before crossing the river.`,
        ],
      },
      // FEUDAL_LORD
      {
        id: 23,
        spirit_id: 'vault23',
        season_id: 20,
        spirit_type: 'seasonal',
        season: 'Season 20 - Season of The Nine-Colored Deer',
        spirit_category: 'friendship action',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Feudal Lord',
        spirit_img_url: FEUDAL_LORD,
        spirit_image: VAULT_SEASON_SPIRIT_17,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: LORD_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Mask',
            img: LORD_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: LORD_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Friendship Action',
            img: FEUDAL_LORD,
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
        number_of_visits: [],
        icon_route: SEASON20,
        spirit_guide_video_url: youtube_embed + '83LkIYB5HEs',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
          `Upon arrival, head toward the palace. The spirit is on the left before you enter the palace.`,
        ],
      },
      // PRINCESS
      {
        id: 24,
        spirit_id: 'vault24',
        season_id: 20,
        spirit_type: 'seasonal',
        season: 'Season 20 - Season of The Nine-Colored Deer',
        spirit_category: 'emote',
        spirit_relive_type: 'follow-memory',
        difficulty_level: 25,
        difficulty_types: [0, 1, 2],
        spirit_name: 'Princess',
        spirit_img_url: PRINCESS,
        spirit_image: VAULT_SEASON_SPIRIT_18,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: PRINCESS_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Mask',
            img: PRINCESS_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Outfit',
            img: PRINCESS_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: PRINCESS_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: PRINCESS,
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
        number_of_visits: [],
        icon_route: SEASON20,
        spirit_guide_video_url: youtube_embed + 'XB_wHSO3nKA',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
          `Upon arrival, head toward the palace and climb to the palace tower to find the spirit.`,
        ],
      },
      // Comfort of Kindness
      {
        id: 25,
        spirit_id: 'vault25',
        season_id: 23,
        spirit_type: 'seasonal',
        season: 'Season 23 - Season of Moomin',
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_name: 'Comfort of Kindness',
        spirit_img_url: COF_ITEM_3,
        spirit_image: COF_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: COF_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: COF_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: COF_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: COF_ITEM_5,
            currency: 'Candles',
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
        number_of_visits: [],
        icon_route: SEASON23,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit at the Moomin Mural to travel to Moominvalley Glade.`,
          `Upon arrival, head to the grassy area where the entity shops are located.`,
        ],
      },
      // Sense of Self
      {
        id: 26,
        spirit_id: 'vault26',
        season_id: 23,
        spirit_type: 'seasonal',
        season: 'Season 23 - Season of Moomin',
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_name: 'Sense of Self',
        spirit_img_url: SOS_ITEM_3,
        spirit_image: SOS_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: SOS_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Neck Accessory',
            img: SOS_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Shoes',
            img: SOS_ITEM_4,
            currency: 'Candles',
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
        number_of_visits: [],
        icon_route: SEASON23,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit at the Moomin Mural to travel to Moominvalley Glade.`,
          `Upon arrival, head to the grassy area where the entity shops are located.`,
        ],
      },
      // Spirit of Adventure
      {
        id: 27,
        spirit_id: 'vault27',
        season_id: 23,
        spirit_type: 'seasonal',
        season: 'Season 23 - Season of Moomin',
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_name: 'Spirit of Adventure',
        spirit_img_url: SOA_ITEM_3,
        spirit_image: SOA_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: SOA_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Cape',
            img: SOA_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Instrument',
            img: SOA_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: SOA_ITEM_5,
            currency: 'Candles',
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
        number_of_visits: [],
        icon_route: SEASON23,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit at the Moomin Mural to travel to Moominvalley Glade.`,
          `Upon arrival, head to the grassy area where the entity shops are located.`,
        ],
      },
      // Inspiration of Inclusion
      {
        id: 28,
        spirit_id: 'vault28',
        season_id: 23,
        spirit_type: 'seasonal',
        season: 'Season 23 - Season of Moomin',
        spirit_category: 'non-entity',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_name: 'Inspiration of Inclusion',
        spirit_img_url: IOI_ITEM_3,
        spirit_image: IOI_ITEM_1,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: IOI_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Neck Accessory',
            img: IOI_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Suitpants',
            img: IOI_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: IOI_ITEM_5,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Prop',
            img: IOI_ITEM_6,
            currency: 'Candles',
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
        number_of_visits: [],
        icon_route: SEASON23,
        spirit_guide_video_url: youtube_embed + '',
        spirit_direction: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit at the Moomin Mural to travel to Moominvalley Glade.`,
          `Upon arrival, head to the grassy area where the entity shops are located.`,
        ],
      },
      //Lightmending Champion
      {
        spirit_id: 'lightmending-1',
        spirit_name: `Lightmending Champion`,
        spirit_img_url: LIGHTMENDING_CHAMPION,
        spirit_category: 'emote',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: VAULT_SEASON_SPIRIT_19,
        icon_route: SEASON28,
        spirit_collectibles: [
          {
            label: 'Hair Accessory',
            img: LC_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Mask',
            img: LC_ITEM_2,
            currency: 'Candles',
            price: 25,
          },
          {
            label: 'Suitpants',
            img: LC_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: LIGHTMENDING_CHAMPION,
            currency: 'Candles',
            price: 28,
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
      //Lightmending Pioneer
      {
        spirit_id: 'lightmending-2',
        spirit_name: `Lightmending Pioneer`,
        spirit_img_url: LIGHTMENDING_PIONEER,
        spirit_category: 'emote',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: VAULT_SEASON_SPIRIT_20,
        icon_route: SEASON28,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: LP_ITEM_3,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Mask',
            img: LP_ITEM_2,
            currency: 'Candles',
            price: 19,
          },
          {
            label: 'Suitpants',
            img: LP_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: LIGHTMENDING_PIONEER,
            currency: 'Candles',
            price: 28,
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
      //Lightmending Light Scholar
      {
        spirit_id: 'lightmending-3',
        spirit_name: `Lightmending Light Scholar`,
        spirit_img_url: LIGHTMENDING_LIGHT_SCHOLAR,
        spirit_category: 'emote',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: VAULT_SEASON_SPIRIT_21,
        icon_route: SEASON28,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: LS_ITEM_3,
            currency: 'Candles',
            price: 25,
          },
          {
            label: 'Mask',
            img: LS_ITEM_2,
            currency: 'Candles',
            price: 23,
          },
          {
            label: 'Cape',
            img: LS_ITEM_4,
            currency: 'Candles',
            price: 30,
          },
          {
            label: 'Suitpants',
            img: LS_ITEM_1,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: LIGHTMENDING_LIGHT_SCHOLAR,
            currency: 'Candles',
            price: 28,
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
      //Lightmending Light Catcher
      {
        spirit_id: 'lightmending-4',
        spirit_name: `Lightmending Light Catcher`,
        spirit_img_url: LIGHTMENDING_LIGHT_CATCHER,
        spirit_category: 'emote',
        spirit_relive_type: 'none',
        difficulty_level: 0,
        difficulty_types: [14],
        spirit_image: VAULT_SEASON_SPIRIT_22,
        icon_route: SEASON28,
        spirit_collectibles: [
          {
            label: 'Hair',
            img: LLC_ITEM_2,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Mask',
            img: LLC_ITEM_1,
            currency: 'Candles',
            price: 19,
          },
          {
            label: 'Cape',
            img: LLC_ITEM_3,
            currency: 'Candles',
            price: 38,
          },
          {
            label: 'Instrument',
            img: LLC_ITEM_4,
            currency: 'Candles',
            price: 0,
          },
          {
            label: 'Emote',
            img: LIGHTMENDING_LIGHT_CATCHER,
            currency: 'Candles',
            price: 28,
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
    ],
  },
  {
    label: 'Winged Lights',
    value: 'winged_lights',
    icon: SparklesIcon,
    desc: (
      <Typography className="antialiased font-sans">
        This map also contains collectibles known as Winged Lights. They increase
        your Wing Level, allowing you to fly higher. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {VAULT_NUM_WL}
        </span>{' '}
        Winged Lights that you can collect here in the Vault of Knowledge.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'WL1-Social Space (Ladder)',
        wl_group: 'wl-vault',
        wl_url: VK_WL1 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly to the left toward the staircase. The Winged Light is at the top of the stairs.`,
        ],
      },
      {
        id: 2,
        wl_label: 'WL2-Third Level (Roof of Gazeboo)',
        wl_group: 'wl-vault',
        wl_url: VK_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform and ascend to the third floor.`,
          `The Winged Light is on the roof of the gazebo.`,
        ],
      },
      {
        id: 3,
        wl_label: 'WL3-Fourth Level (Inside of Gazeboo)',
        wl_group: 'wl-vault',
        wl_url: VK_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform and ascend to the fourth floor.`,
          `Fly toward the Daylight Prairie constellation and look for the floating islet with a spiral staircase.`,
          `The Winged Light is inside it.`,
        ],
      },
      {
        id: 4,
        wl_label: 'WL4-Fourth Level (Floating Land)',
        wl_group: 'wl-vault',
        wl_url: VK_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform and ascend to the fourth floor.`,
          `Fly toward the Isle of Dawn constellation.`,
          `The Winged Light is on the highest floating islet.`,
        ],
      },
      {
        id: 5,
        wl_label: 'WL5-Fifth Level (Bone)',
        wl_group: 'wl-vault',
        wl_url: VK_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform and ascend to the fifth floor.`,
          `Fly toward the large bone. The Winged Light is resting on top of it.`,
        ],
      },
      {
        id: 6,
        wl_label: 'WL6-Summit',
        wl_group: 'wl-vault',
        wl_url: VK_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform and continue ascending to the Summit.`,
          `The Winged Light is at the foot of the temple shrine.`,
        ],
      },
      {
        id: 7,
        wl_label: 'WL7-The Archives (3rd Level)',
        wl_group: 'wl-vault',
        wl_url: VK_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly upward and open the two-player door on the right. Once it opens, enter the passage.`,
          `Fly upward after entering, then go through the opening on the left.`,
          `On the third descent, enter the room on the left with several jars. The Winged Light is behind them.`,
        ],
      },
      {
        id: 8,
        wl_label: 'WL8-The Archives (3rd Level)',
        wl_group: 'wl-vault',
        wl_url: VK_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly upward and open the two-player door on the right. Once it opens, enter the passage.`,
          `Fly upward after entering, then go through the opening on the left.`,
          `On the third descent, head toward the staircase and enter the opening above it to find the Winged Light.`,
        ],
      },
      {
        id: 9,
        wl_label: 'WL9-Dessert Starlight (Big Jar)',
        wl_group: 'wl-vault',
        wl_url: VK_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly upward and enter the passage on the left.`,
          `After entering, fly upward and go through the opening on the left.`,
          `Upon reaching Starlight Desert, fly toward the large jar on your right.`,
          `The Winged Light is on top of it.`,
        ],
      },
      {
        id: 10,
        wl_label: 'WL10-Dessert Starlight (Watchtower Roof)',
        wl_group: 'wl-vault',
        wl_url: VK_WL10 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly upward and enter the passage on the left.`,
          `After entering, fly upward and go through the opening on the left.`,
          `Upon reaching Starlight Desert, fly toward the tall tower on your left.`,
          `The Winged Light is on top of the tower.`,
        ],
      },
      {
        id: 11,
        wl_label: 'WL11-Dessert Starlight (Beckoning Ruler Island)',
        wl_group: 'wl-vault',
        wl_url: VK_WL11 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly upward and enter the passage on the left.`,
          `After entering, fly upward and go through the opening on the left.`,
          `Upon reaching Starlight Desert, fly toward the moon.`,
          `The first floating island has a cross-shaped opening underneath it. The Winged Light is inside.`,
        ],
      },
      {
        id: 12,
        wl_label: 'WL12-Repository of Refuge (Broken Bars)',
        wl_group: 'wl-vault',
        wl_url: VK_WL12 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform.`,
          `At the center, enter the passage on your left.`,
          `Inside, enter the opening on your left and continue until you exit into the Repository of Refuge.`,
          `Fly outside toward the right until you see a small light on your right. The Winged Light is outside, behind the bars.`,
        ],
      },
      {
        id: 13,
        wl_label: 'WL13-Crescent Oasis (Pool of Water)',
        wl_group: 'wl-vault',
        wl_url: VK_WL13 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
          `Head toward the Hunter Spirit. The Winged Light is behind and below that location.`,
        ],
      },
      {
        id: 14,
        wl_label: 'WL14-Crescent Oasis (Feudal Lord Building)',
        wl_group: 'wl-vault',
        wl_url: VK_WL14 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
          `Upon arrival, head toward the palace tower. The Winged Light is outside, behind the tower.`,
        ],
      },
      {
        id: 15,
        wl_label: 'WL15-Crescent Oasis (Hidden Glade Tree)',
        wl_group: 'wl-vault',
        wl_url: VK_WL15 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
          `At Crescent Oasis, head toward the waterfalls and enter the cloud passage. Note: You must complete the final Nine-Colored Deer quest first.`,
          `The Winged Light is beneath the tree.`,
        ],
      },
      {
        id: 16,
        wl_label: 'WL16',
        wl_group: 'wl-vault',
        wl_url: VK_WL16 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 6, the Vault of Knowledge. Fly upward and look for a passage on the left.`,
          `Enter the passage. In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
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
          {VAULT_NUM_MAP_SHRINES}
        </span>{' '}
        Map Shrines that you can activate in the Vault of Knowledge.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_label: 'Map Shrine 1',
        shrine_url: VK_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly to the right, open the two-player door, and enter.`,
          `Upon reaching the Archives, fly upward to find the Map Shrine.`,
        ],
      },
      {
        id: 2,
        shrine_label: 'Map Shrine 2',
        shrine_url: VK_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly to the left and enter the passage leading to Starlight Desert.`,
          `After exiting, fly toward the moon until you see a garden.`,
          `The Map Shrine is inside the maze on your right.`,
        ],
      },
      {
        id: 3,
        shrine_label: 'Map Shrine 3',
        shrine_url: VK_MS3 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform.`,
          `The Map Shrine is behind the platform.`,
        ],
      },
      {
        id: 4,
        shrine_label: 'Map Shrine 4',
        shrine_url: VK_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform.`,
          `Enter the downward passage on the left that leads to the Repository of Refuge.`,
          `Continue farther inside. The Map Shrine is on the left near the entrance.`,
        ],
      },
      {
        id: 5,
        shrine_label: 'Map Shrine 5',
        shrine_url: VK_MS5 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly to the left and look behind you for a narrow passage.`,
          `At the entrance, you will find a portal. Note: You need the Founder's Cape, or another player wearing it, to enter.`,
          `After entering, fly farther inside and go through the doorway.`,
          `The Map Shrine is just outside the Office door.`,
        ],
      },
      {
        id: 6,
        shrine_label: 'Map Shrine 6',
        shrine_url: VK_MS6 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform.`,
          `Ascend to the third floor.`,
          `Near one of the spirits, look for a floating rock. The Map Shrine is beside the candle.`,
        ],
      },
      {
        id: 7,
        shrine_label: 'Map Shrine 7',
        shrine_url: VK_MS7 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform.`,
          `Ascend to the fourth floor.`,
          `The Map Shrine is on an island near the elevating platform.`,
        ],
      },
      {
        id: 8,
        shrine_label: 'Map Shrine 8',
        shrine_url: VK_MS8 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly toward the elevating platform.`,
          `Ascend to the Summit, the final floor.`,
          `Upon arrival, the Map Shrine is on the right side of the island.`,
        ],
      },
      {
        id: 9,
        shrine_label: 'Map Shrine 9',
        shrine_url: VK_MS9 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly to the left and enter the portal leading to the collaboration room.`,
          `Inside the room, the Map Shrine is on the right.`,
        ],
      },
      {
        id: 10,
        shrine_label: 'Map Shrine 10',
        shrine_url: VK_MS10 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly to the left and enter the portal leading to the collaboration room.`,
          `In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
          `Upon arrival, head toward the Quest Giver across the lake. The Map Shrine is on the opposite side.`,
        ],
      },
      {
        id: 11,
        shrine_label: 'Map Shrine 11',
        shrine_url: VK_MS11 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly to the left and enter the portal leading to the collaboration room.`,
          `In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
          `Upon arrival, head toward the green tent. The Map Shrine is nearby.`,
        ],
      },
      {
        id: 12,
        shrine_label: 'Map Shrine 12',
        shrine_url: VK_MS12 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 6, the Vault of Knowledge.`,
          `Fly to the left and enter the portal leading to the collaboration room.`,
          `In the collaboration room, sit on the deer icon to travel to Crescent Oasis.`,
          `Upon arrival, head toward the green tent. The Map Shrine is nearby.`,
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
        <VaultDyes />
      </div>
    ),
  },
]
