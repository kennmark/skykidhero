import { Typography } from '@material-tailwind/react'
import {
  EDEN_NUM_REG_SPIRIT,
  EDEN_NUM_SEASON_SPIRIT,
  EDEN_NUM_WL,
  EDEN_NUM_MAP_SHRINES,
} from '../exports/constants'
import { MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import {
  EE_WL1,
  EE_WL2,
  EE_WL3,
  EE_WL4,
  EE_WL5,
  EE_WL6,
  EE_WL7,
  EE_WL8,
  EE_WL9,
  EE_WL10,
} from '../exports/edenWLImgUrl'
import { EE_MS1, EE_MS2, EE_MS3, EE_MS4 } from '../exports/edenMSImgUrl'
import DyeAlertMessage from '../pages/components/DyeAlertMessage'
import EdenDyes from '../pages/components/MapDyeLocations/EdenDyes'
import { MapPinIcon, SparklesIcon, SwatchIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/solid'

export const eden = [
  {
    label: 'Regular Spirits',
    value: 'regular_spirits',
    icon: UserIcon,
    desc: (
      <Typography className="antialiased font-sans">
        No Regular Spirit here.
      </Typography>
    ),
    spirits: [],
  },
  {
    label: 'Seasonal Spirits',
    value: 'seasonal_spirits',
    icon: UserGroupIcon,
    desc: (
      <Typography className="antialiased font-sans">
        No Seasonal Spirit here.
      </Typography>
    ),
    spirits: [],
  },
  {
    label: 'Winged Lights',
    value: 'winged_lights',
    icon: SparklesIcon,
    desc: (
      <Typography className="antialiased font-sans">
       On this map, you can also find Winged Lights. Collecting them increases your Wing Level, allowing you to fly higher and travel farther through the skies. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {EDEN_NUM_WL}
        </span>{' '}
        winged lights you can collect here.
      </Typography>
    ),
    winged_lights: [
      {
        id: 1,
        wl_label: 'Eden-WL1',
        wl_group: 'wl-vault',
        wl_url: EE_WL1 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 7 | Eye of Eden`,
          `Open the big gate.`,
          `climp up unto the next level.`,
          `Winged light will be found inside the room.`,
        ],
      },
      {
        id: 2,
        wl_label: 'Eden-WL2',
        wl_group: 'wl-vault',
        wl_url: EE_WL2 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 7 | Eye of Eden, Open the big gate.`,
          `Climb up unto the 2nd and 3rd Level.`,
          `On the last level, before entering the doorway.`,
          `Left side among the rocks a winged light.`,
        ],
      },
      {
        id: 3,
        wl_label: 'Eden-WL3',
        wl_group: 'wl-vault',
        wl_url: EE_WL3 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 7 | Eye of Eden, Open the big gate.`,
          `Climb up unto the 2nd and 3rd Level.`,
          `On the last level, before entering the doorway.`,
          `A winged light is just by the door.`,
        ],
      },
      {
        id: 4,
        wl_label: 'Eden-WL4',
        wl_group: 'wl-vault',
        wl_url: EE_WL4 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 7 | Eye of Eden, Open the big gate.`,
          `Climb up unto the 2nd and 3rd Level.`,
          `On the last level, before entering the doorway.`,
          `Winged lights are just along the pathway.`,
        ],
      },
      {
        id: 5,
        wl_label: 'Eden-WL5',
        wl_group: 'wl-vault',
        wl_url: EE_WL5 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 7 | Eye of Eden, Open the big gate.`,
          `Climb up unto the 2nd and 3rd Level.`,
          `On the last level, before entering the doorway.`,
          `Winged lights are just along the pathway.`,
        ],
      },
      {
        id: 6,
        wl_label: 'Eden-WL6',
        wl_group: 'wl-vault',
        wl_url: EE_WL6 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 7 | Eye of Eden, Open the big gate.`,
          `Climb up unto the 2nd and 3rd Level.`,
          `On the last level, before entering the doorway.`,
          `Winged lights are just along the pathway.`,
        ],
      },
      {
        id: 7,
        wl_label: 'Eden-WL7',
        wl_group: 'wl-vault',
        wl_url: EE_WL7 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 7 | Eye of Eden, Open the big gate.`,
          `Climb up unto the 2nd and 3rd Level.`,
          `On the last level, before entering the doorway.`,
          `Winged lights are just along the pathway.`,
        ],
      },
      {
        id: 8,
        wl_label: 'Eden-WL8',
        wl_group: 'wl-vault',
        wl_url: EE_WL8 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 7 | Eye of Eden, Open the big gate.`,
          `Climb up unto the 2nd and 3rd Level.`,
          `On the last level, before entering the doorway.`,
          `Winged lights are just along the pathway.`,
        ],
      },
      {
        id: 9,
        wl_label: 'Eden-WL9',
        wl_group: 'wl-vault',
        wl_url: EE_WL9 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 7 | Eye of Eden, Open the big gate.`,
          `Climb up unto the 2nd and 3rd Level.`,
          `On the last level, before entering the doorway.`,
          `Winged lights are just along the pathway.`,
        ],
      },
      {
        id: 10,
        wl_label: 'Eden-WL10',
        wl_group: 'wl-vault',
        wl_url: EE_WL10 ?? WINGED_LIGHT,
        wl_location: [
          `Enter Map 7 | Eye of Eden, Open the big gate.`,
          `Climb up unto the 2nd and 3rd Level.`,
          `On the last level, before entering the doorway.`,
          `Winged lights are just along the pathway.`,
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
       Map Shrines serves as literally the map for entire Sky Kingdom, showing the locations of all. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-amber-700 rounded-3xl px-2">
          {EDEN_NUM_MAP_SHRINES}
        </span>{' '}
        map shrines that you can unlock within the Eye of Eden.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_label: 'Map Shrine 1',
        shrine_url: EE_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 7 | Eye of Eden`,
          `In the Social Space, near the entrance,
        you will find this map shrine.`,
        ],
      },
      {
        id: 2,
        shrine_label: 'Map Shrine 2',
        shrine_url: EE_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 7 | Eye of Eden`,
          `On the third level, 
        when you exit the tunnel, turn left.`,
        ],
      },
      {
        id: 3,
        shrine_label: 'Map Shrine 3',
        shrine_url: EE_MS3 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 7 | Eye of Eden`,
          `Climb up unto the last level and enter the hallway to Eden`,
          `In the Storm Area of Eden, at the Entrance,
        turn right behind the rock to find the map shrine.`,
        ],
      },
      {
        id: 4,
        shrine_label: 'Map Shrine 4',
        shrine_url: EE_MS4 ?? MAP_SHRINE,
        shrine_location: [
          `Enter Map 7 | Eye of Eden`,
          `Climb up unto the last level and enter the hallway to Eden`,
          `Make sure your skykid is petrified and travel to the Orbit.`,
          `Under the meditating shrine, you will find the map shrine.`,
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
        <EdenDyes />
      </div>
    ),
  },
]
