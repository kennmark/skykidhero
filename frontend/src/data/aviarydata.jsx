import { Typography } from '@material-tailwind/react'
import { AV_MS1, AV_MS2, AV_MS3 } from '../exports/aviaryMSImgUrl'
import {
  AVIARY_NUM_SEASON_SPIRIT,
  AVIARY_NUM_REG_SPIRIT,
  AVIARY_NUM_WL,
  AVIARY_NUM_MAP_SHRINES,
} from '../exports/constants'
import { NON_SPIRIT, MAP_SHRINE, WINGED_LIGHT } from '../exports/defaultImages'
import { seasons2023, seasons2024, seasons2025, seasons2026 } from './seasons'
import { Link } from 'react-router-dom'
import {
  SEASON19,
  SEASON21,
  SEASON22,
  SEASON24,
  SEASON29,
  SEASON30,
} from '../exports/seasonIcons'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { GiftIcon, InformationCircleIcon, MapPinIcon, SparklesIcon } from '@heroicons/react/24/solid'

const youtube_embed = 'https://www.youtube.com/embed/'

export const aviaryData = [
  {
    label: 'Info',
    value: 'info',
    icon: InformationCircleIcon,
    desc: (
      <div className="w-full max-w-4xl mx-auto px-4">
        <Typography
          className="
            antialiased
            font-sans
            flex
            flex-wrap
            justify-center
            items-center
            text-center
            gap-x-1
            gap-y-2
            text-white
          "
        >
          <span>Here is the Seasons of:</span>

          <Link
            to="/seasons/s19-revival"
            className="inline-flex items-center gap-1 hover:text-[#fe7f2d] transition-colors"
          >
            <LazyLoadImage
              src={SEASON19}
              className="w-6 h-6 object-contain"
            />
            <span>Revival</span>
          </Link>
          <span>,</span>

          <Link
            to="/seasons/s21-nesting"
            className="inline-flex items-center gap-1 hover:text-[#fe7f2d] transition-colors"
          >
            <LazyLoadImage
              src={SEASON21}
              className="w-6 h-6 object-contain"
            />
            <span>Nesting</span>
          </Link>
          <span>,</span>

          <Link
            to="/seasons/s22-duet"
            className="inline-flex items-center gap-1 hover:text-[#fe7f2d] transition-colors"
          >
            <LazyLoadImage
              src={SEASON22}
              className="w-6 h-6 object-contain"
            />
            <span>Duets</span>
          </Link>
          <span>,</span>

          <Link
            to="/seasons/s24-radiance"
            className="inline-flex items-center gap-1 hover:text-[#fe7f2d] transition-colors"
          >
            <LazyLoadImage
              src={SEASON24}
              className="w-6 h-6 object-contain"
            />
            <span>Radiance</span>
          </Link>
          <span>,</span>

          <Link
            to="/seasons/s29-carnival"
            className="inline-flex items-center gap-1 hover:text-[#fe7f2d] transition-colors"
          >
            <LazyLoadImage
              src={SEASON29}
              className="w-6 h-6 object-contain"
            />
            <span>Carnival</span>
          </Link>
          <span>,</span>
          <Link
            to="/seasons/s30-dear-van-gogh"
            className="inline-flex items-center gap-1 hover:text-[#fe7f2d] transition-colors"
          >
            <LazyLoadImage
              src={SEASON30}
              className="w-6 h-6 object-contain"
            />
            <span>Dear Van Gogh</span>
          </Link>
          <span>.</span>
        </Typography>
      </div>
    ),
    spirits: [],
  },
  {
    label: 'Collectibles',
    value: 'collectibles',
    icon: GiftIcon,
    desc: (
      <Typography className="antialiased font-sans">
        Here are the collectibles that appeared in previous Seasonal Events
        that you can obtain when they return as TS. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {AVIARY_NUM_SEASON_SPIRIT}
        </span>{' '}
        collectibles you can get here.
      </Typography>
    ),
    spirits: [
      //NON_SPIRIT
      {
        spirit_id: seasons2023[3].season_spirits[0].spirit_id,
        spirit_name: seasons2023[3].season_spirits[0].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[0].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[0].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[0].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[0].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      //NON_SPIRIT
      {
        spirit_id: seasons2023[3].season_spirits[1].spirit_id,
        spirit_name: seasons2023[3].season_spirits[1].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[1].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[1].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[1].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[1].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      //NON_SPIRIT
      {
        spirit_id: seasons2023[3].season_spirits[2].spirit_id,
        spirit_name: seasons2023[3].season_spirits[2].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[2].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[2].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[2].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[2].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      //NON_SPIRIT
      {
        spirit_id: seasons2023[3].season_spirits[3].spirit_id,
        spirit_name: seasons2023[3].season_spirits[3].spirit_name,
        spirit_img_url: seasons2023[3].season_spirits[3].spirit_img_url,
        spirit_category: seasons2023[3].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2023[3].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2023[3].season_spirits[3].difficulty_level,
        difficulty_types: seasons2023[3].season_spirits[3].difficulty_types,
        spirit_image: seasons2023[3].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2023[3].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2023[3].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2023[3].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2023[3].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2023[3].season_spirits[3].spirit_direction,
        icon_route: seasons2023[3].icon_route,
      },
      {
        spirit_id: seasons2024[1].season_spirits[0].spirit_id,
        spirit_name: seasons2024[1].season_spirits[0].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[0].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[0].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[0].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[0].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_id: seasons2024[1].season_spirits[1].spirit_id,
        spirit_name: seasons2024[1].season_spirits[1].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[1].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[1].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[1].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[1].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_id: seasons2024[1].season_spirits[2].spirit_id,
        spirit_name: seasons2024[1].season_spirits[2].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[2].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[2].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[2].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[2].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_id: seasons2024[1].season_spirits[3].spirit_id,
        spirit_name: seasons2024[1].season_spirits[3].spirit_name,
        spirit_img_url: seasons2024[1].season_spirits[3].spirit_img_url,
        spirit_category: seasons2024[1].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2024[1].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2024[1].season_spirits[3].difficulty_level,
        difficulty_types: seasons2024[1].season_spirits[3].difficulty_types,
        spirit_image: seasons2024[1].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2024[1].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2024[1].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2024[1].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2024[1].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2024[1].season_spirits[3].spirit_direction,
        icon_route: seasons2024[1].icon_route,
      },
      {
        spirit_id: seasons2024[2].season_spirits[0].spirit_id,
        spirit_name: seasons2024[2].season_spirits[0].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[0].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[0].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[0].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[0].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_id: seasons2024[2].season_spirits[1].spirit_id,
        spirit_name: seasons2024[2].season_spirits[1].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[1].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[1].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[1].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[1].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_id: seasons2024[2].season_spirits[2].spirit_id,
        spirit_name: seasons2024[2].season_spirits[2].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[2].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[2].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[2].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[2].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_id: seasons2024[2].season_spirits[3].spirit_id,
        spirit_name: seasons2024[2].season_spirits[3].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[3].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[3].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[3].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[3].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_id: seasons2024[2].season_spirits[4].spirit_id,
        spirit_name: seasons2024[2].season_spirits[4].spirit_name,
        spirit_img_url: seasons2024[2].season_spirits[4].spirit_img_url,
        spirit_category: seasons2024[2].season_spirits[4].spirit_category,
        spirit_relive_type: seasons2024[2].season_spirits[4].spirit_relive_type,
        difficulty_level: seasons2024[2].season_spirits[4].difficulty_level,
        difficulty_types: seasons2024[2].season_spirits[4].difficulty_types,
        spirit_image: seasons2024[2].season_spirits[4].spirit_image,
        spirit_collectibles:
          seasons2024[2].season_spirits[4].spirit_collectibles,
        spirit_tree_cost: seasons2024[2].season_spirits[4].spirit_tree_cost,
        number_of_visits: seasons2024[2].season_spirits[4].number_of_visits,
        spirit_guide_video_url:
          seasons2024[2].season_spirits[4].spirit_guide_video_url,
        spirit_direction: seasons2024[2].season_spirits[4].spirit_direction,
        icon_route: seasons2024[2].icon_route,
      },
      {
        spirit_id: seasons2025[0].season_spirits[0].spirit_id,
        spirit_name: seasons2025[0].season_spirits[0].spirit_name,
        spirit_img_url: seasons2025[0].season_spirits[0].spirit_img_url,
        spirit_category: seasons2025[0].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2025[0].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2025[0].season_spirits[0].difficulty_level,
        difficulty_types: seasons2025[0].season_spirits[0].difficulty_types,
        spirit_image: seasons2025[0].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2025[0].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2025[0].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2025[0].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2025[0].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2025[0].season_spirits[0].spirit_direction,
        icon_route: seasons2025[0].icon_route,
      },
      {
        spirit_id: seasons2025[0].season_spirits[1].spirit_id,
        spirit_name: seasons2025[0].season_spirits[1].spirit_name,
        spirit_img_url: seasons2025[0].season_spirits[1].spirit_img_url,
        spirit_category: seasons2025[0].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2025[0].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2025[0].season_spirits[1].difficulty_level,
        difficulty_types: seasons2025[0].season_spirits[1].difficulty_types,
        spirit_image: seasons2025[0].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2025[0].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2025[0].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2025[0].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2025[0].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2025[0].season_spirits[1].spirit_direction,
        icon_route: seasons2025[0].icon_route,
      },
      {
        spirit_id: seasons2025[0].season_spirits[2].spirit_id,
        spirit_name: seasons2025[0].season_spirits[2].spirit_name,
        spirit_img_url: seasons2025[0].season_spirits[2].spirit_img_url,
        spirit_category: seasons2025[0].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2025[0].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2025[0].season_spirits[2].difficulty_level,
        difficulty_types: seasons2025[0].season_spirits[2].difficulty_types,
        spirit_image: seasons2025[0].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2025[0].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2025[0].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2025[0].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2025[0].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2025[0].season_spirits[2].spirit_direction,
        icon_route: seasons2025[0].icon_route,
      },
      {
        spirit_id: seasons2026[1].season_spirits[0].spirit_id,
        spirit_name: seasons2026[1].season_spirits[0].spirit_name,
        spirit_img_url: seasons2026[1].season_spirits[0].spirit_img_url,
        spirit_category: seasons2026[1].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2026[1].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2026[1].season_spirits[0].difficulty_level,
        difficulty_types: seasons2026[1].season_spirits[0].difficulty_types,
        spirit_image: seasons2026[1].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2026[1].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2026[1].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2026[1].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2026[1].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2026[1].season_spirits[0].spirit_direction,
        icon_route: seasons2026[1].icon_route,
      },
      {
        spirit_id: seasons2026[1].season_spirits[1].spirit_id,
        spirit_name: seasons2026[1].season_spirits[1].spirit_name,
        spirit_img_url: seasons2026[1].season_spirits[1].spirit_img_url,
        spirit_category: seasons2026[1].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2026[1].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2026[1].season_spirits[1].difficulty_level,
        difficulty_types: seasons2026[1].season_spirits[1].difficulty_types,
        spirit_image: seasons2026[1].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2026[1].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2026[1].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2026[1].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2026[1].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2026[1].season_spirits[1].spirit_direction,
        icon_route: seasons2026[1].icon_route,
      },
      {
        spirit_id: seasons2026[1].season_spirits[2].spirit_id,
        spirit_name: seasons2026[1].season_spirits[2].spirit_name,
        spirit_img_url: seasons2026[1].season_spirits[2].spirit_img_url,
        spirit_category: seasons2026[1].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2026[1].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2026[1].season_spirits[2].difficulty_level,
        difficulty_types: seasons2026[1].season_spirits[2].difficulty_types,
        spirit_image: seasons2026[1].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2026[1].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2026[1].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2026[1].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2026[1].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2026[1].season_spirits[2].spirit_direction,
        icon_route: seasons2026[1].icon_route,
      },
      {
        spirit_id: seasons2026[1].season_spirits[3].spirit_id,
        spirit_name: seasons2026[1].season_spirits[3].spirit_name,
        spirit_img_url: seasons2026[1].season_spirits[3].spirit_img_url,
        spirit_category: seasons2026[1].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2026[1].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2026[1].season_spirits[3].difficulty_level,
        difficulty_types: seasons2026[1].season_spirits[3].difficulty_types,
        spirit_image: seasons2026[1].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2026[1].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2026[1].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2026[1].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2026[1].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2026[1].season_spirits[3].spirit_direction,
        icon_route: seasons2026[1].icon_route,
      },
      {
        spirit_id: seasons2026[2].season_spirits[0].spirit_id,
        spirit_name: seasons2026[2].season_spirits[0].spirit_name,
        spirit_img_url: seasons2026[2].season_spirits[0].spirit_img_url,
        spirit_category: seasons2026[2].season_spirits[0].spirit_category,
        spirit_relive_type: seasons2026[2].season_spirits[0].spirit_relive_type,
        difficulty_level: seasons2026[2].season_spirits[0].difficulty_level,
        difficulty_types: seasons2026[2].season_spirits[0].difficulty_types,
        spirit_image: seasons2026[2].season_spirits[0].spirit_image,
        spirit_collectibles:
          seasons2026[2].season_spirits[0].spirit_collectibles,
        spirit_tree_cost: seasons2026[2].season_spirits[0].spirit_tree_cost,
        number_of_visits: seasons2026[2].season_spirits[0].number_of_visits,
        spirit_guide_video_url:
          seasons2026[2].season_spirits[0].spirit_guide_video_url,
        spirit_direction: seasons2026[2].season_spirits[0].spirit_direction,
        icon_route: seasons2026[2].icon_route,
      },
      {
        spirit_id: seasons2026[2].season_spirits[1].spirit_id,
        spirit_name: seasons2026[2].season_spirits[1].spirit_name,
        spirit_img_url: seasons2026[2].season_spirits[1].spirit_img_url,
        spirit_category: seasons2026[2].season_spirits[1].spirit_category,
        spirit_relive_type: seasons2026[2].season_spirits[1].spirit_relive_type,
        difficulty_level: seasons2026[2].season_spirits[1].difficulty_level,
        difficulty_types: seasons2026[2].season_spirits[1].difficulty_types,
        spirit_image: seasons2026[2].season_spirits[1].spirit_image,
        spirit_collectibles:
          seasons2026[2].season_spirits[1].spirit_collectibles,
        spirit_tree_cost: seasons2026[2].season_spirits[1].spirit_tree_cost,
        number_of_visits: seasons2026[2].season_spirits[1].number_of_visits,
        spirit_guide_video_url:
          seasons2026[2].season_spirits[1].spirit_guide_video_url,
        spirit_direction: seasons2026[2].season_spirits[1].spirit_direction,
        icon_route: seasons2026[2].icon_route,
      },
      {
        spirit_id: seasons2026[2].season_spirits[2].spirit_id,
        spirit_name: seasons2026[2].season_spirits[2].spirit_name,
        spirit_img_url: seasons2026[2].season_spirits[2].spirit_img_url,
        spirit_category: seasons2026[2].season_spirits[2].spirit_category,
        spirit_relive_type: seasons2026[2].season_spirits[2].spirit_relive_type,
        difficulty_level: seasons2026[2].season_spirits[2].difficulty_level,
        difficulty_types: seasons2026[2].season_spirits[2].difficulty_types,
        spirit_image: seasons2026[2].season_spirits[2].spirit_image,
        spirit_collectibles:
          seasons2026[2].season_spirits[2].spirit_collectibles,
        spirit_tree_cost: seasons2026[2].season_spirits[2].spirit_tree_cost,
        number_of_visits: seasons2026[2].season_spirits[2].number_of_visits,
        spirit_guide_video_url:
          seasons2026[2].season_spirits[2].spirit_guide_video_url,
        spirit_direction: seasons2026[2].season_spirits[2].spirit_direction,
        icon_route: seasons2026[2].icon_route,
      },
      {
        spirit_id: seasons2026[2].season_spirits[3].spirit_id,
        spirit_name: seasons2026[2].season_spirits[3].spirit_name,
        spirit_img_url: seasons2026[2].season_spirits[3].spirit_img_url,
        spirit_category: seasons2026[2].season_spirits[3].spirit_category,
        spirit_relive_type: seasons2026[2].season_spirits[3].spirit_relive_type,
        difficulty_level: seasons2026[2].season_spirits[3].difficulty_level,
        difficulty_types: seasons2026[2].season_spirits[3].difficulty_types,
        spirit_image: seasons2026[2].season_spirits[3].spirit_image,
        spirit_collectibles:
          seasons2026[2].season_spirits[3].spirit_collectibles,
        spirit_tree_cost: seasons2026[2].season_spirits[3].spirit_tree_cost,
        number_of_visits: seasons2026[2].season_spirits[3].number_of_visits,
        spirit_guide_video_url:
          seasons2026[2].season_spirits[3].spirit_guide_video_url,
        spirit_direction: seasons2026[2].season_spirits[3].spirit_direction,
        icon_route: seasons2026[2].icon_route,
      },
    ],
  },
  {
    label: 'Winged Lights',
    value: 'winged_lights',
    icon: SparklesIcon,
    desc: (
      <Typography className="antialiased font-sans">
        Here are the Winged Lights you can find in this map. They increase your flight level, allowing you to fly higher. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {AVIARY_NUM_WL}
        </span>{' '}
        winged lights available here in the Hidden Forest.
      </Typography>
    ),
    winged_lights: [
      {
        id: seasons2026[1].winged_lights[0].id,
        wl_label: seasons2026[1].winged_lights[0].wl_label,
        wl_group: seasons2026[1].winged_lights[0].wl_group,
        wl_season_group: seasons2026[1].winged_lights[0].wl_season_group,
        wl_url: seasons2026[1].winged_lights[0].wl_url,
        wl_location: seasons2026[1].winged_lights[0].wl_location,
      },
      {
        id: seasons2026[1].winged_lights[1].id,
        wl_label: seasons2026[1].winged_lights[1].wl_label,
        wl_group: seasons2026[1].winged_lights[1].wl_group,
        wl_season_group: seasons2026[1].winged_lights[1].wl_season_group,
        wl_url: seasons2026[1].winged_lights[1].wl_url,
        wl_location: seasons2026[1].winged_lights[1].wl_location,
      },
    ],
  },
  {
    label: 'Map Shrines',
    value: 'map_shrines',
    icon: MapPinIcon,
    desc: (
      <Typography className="antialiased font-sans">
        Here are the Map Shrines you can find in this map. They help you identify where to find Winged Lights within the map. There are{' '}
        <span className="font-sans font-bold text-lg text-black bg-[#fe7f2d] rounded-3xl px-2">
          {AVIARY_NUM_MAP_SHRINES}
        </span>{' '}
        Map Shrines available.
      </Typography>
    ),
    map_shrines: [
      {
        id: 1,
        shrine_label: 'Map Shrine 1',
        shrine_url: AV_MS1 ?? MAP_SHRINE,
        shrine_location: [
          `Enter the Aviary Village, found in the center portal if you are in the Old Home.`,
          `Or if you're already in the village,`,
          `Go straight towards the end of the village, before passing the tunneland on the left side, you will find the map shrine.`,
        ],
      },
      {
        id: 2,
        shrine_group: 'shrine-season-29',
        shrine_label: 'Map Shrine 2',
        shrine_url: AV_MS2 ?? MAP_SHRINE,
        shrine_location: [
          `In the Aviary Village, head towards the end of the village, after passing the tunnel and on the left side, you will find a boat leading to the Wandering Carnival Boat.`,
          `Upon arriving, board the Wandering Carnival boat and look behind the Athletic Dancer to find the map shrine.`,
        ],
      },
      {
        id: 3,
        shrine_group: 'shrine-season-30',
        shrine_label: 'Map Shrine 3',
        shrine_url: AV_MS3 ?? MAP_SHRINE,
        shrine_location: [
          'At Aviary Village, just across the portals, go inside a cave to Story Space for Starry Galley.',
          'As you enter, find the portal to Season of Dear Van Gogh at the right side of the room.',
        ],
      },
    ],
  },
]
