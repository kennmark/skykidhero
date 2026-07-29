import React, { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  ButtonGroup,
  Chip,
  Tooltip,
  Spinner,
  Checkbox,
} from '@material-tailwind/react'
import VideoModalContainer from './VideoModalContainer'
import SpiritDifficultyLevelProgressBar from './SpiritDifficultyLevelProgressBar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { TextGuideModal } from './TextGuideModal'
import SpiritImageDetails from './SpiritImageDetails'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const SpiritCardContainer = ({
  spirit_img_url,
  spirit_name,
  spirit_image,
  spirit_direction,
  spirit_guide_video_url,
  spirit_category,
  spirit_relive_type,
  season,
  icon_route,
  constellation_icon_route,
  difficulty_level,
  difficulty_types,
  spirit_collectibles,
  spirit_tree_cost,
  number_of_visits,
  isCurrentSeason,
  checkedSpirits,
  handleCheckboxChange,
}) => {
  const [openVideoModal, setOpenVideoModal] = useState(false)
  const [openTextModal, setOpenTextModal] = useState(false)
  const [openSpiritImageModal, setOpenSpiritImageModal] = useState(false)
  const handleVideoGuideOpen = () => setOpenVideoModal(!openVideoModal)
  const handleTextGuideOpen = () => setOpenTextModal(!openTextModal)
  const handleSpiritImageOpen = () =>
    setOpenSpiritImageModal(!openSpiritImageModal)

  const iconUrl = icon_route ?? ''
  const seasonLabel = season ?? ''
  const videoUrl = spirit_guide_video_url ?? ''
  const constellationIconUrl = constellation_icon_route ?? ''
  const spiritDirection = spirit_direction ?? ''
  const spiritCategory = spirit_category ?? ''
  const spiritReliveType = spirit_relive_type ?? ''

  return (
    <Card className="theme-card-bg lg:w-72 w-80 justify-between mb-5">
      <CardHeader
        shadow={false}
        color="transparent"
        className="card-header mr-0"
      >
        <span className="icon-badge">
          <LazyLoadImage
            src={iconUrl || constellationIconUrl}
            alt={seasonLabel}
            title={seasonLabel}
            width={35}
            placeholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
            effect="blur"
          />
        </span>
        <LazyLoadImage
          src={spirit_img_url}
          alt={spirit_name}
          title={spirit_name}
          placeholderSrc={<Spinner className="h-10 w-10 text-gray-900/50" />}
          effect="blur"
          className="w-auto h-14 m-auto"
        />
        <span
          className={`${
            checkedSpirits[spirit_name]
              ? 'checkbox-collected'
              : 'checkbox-uncollected'
          }`}
        >
          <Tooltip
            content={
              checkedSpirits[spirit_name] ? 'Spirit Relived' : 'Not Yet Relived'
            }
          >
            <Checkbox
              className="color: #233d4d"
              id={`ripple-on ${spirit_name}`}
              type="checkbox"
              name={spirit_name}
              checked={checkedSpirits[spirit_name] || false}
              onChange={handleCheckboxChange}
              ripple={true}
            />
          </Tooltip>
        </span>
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          className="text-[#fe7f2d] mb-2 flex justify-center items-center"
        >
          <span>{spirit_name}</span>
        </Typography>
        <Typography className="mb-2 italic text-sm">{seasonLabel}</Typography>
        <span className="flex justify-center gap-2 pb-4 px-2">
          <Tooltip
            content="Type of Expression"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Chip
              value={spiritCategory}
              className="rounded-full text-[#fe7f2d] bg-[#233d4d] border-[#fe7f2d]/80 border-2"
            />
          </Tooltip>
          <Tooltip
            content="Way of Reliving Spirit"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Chip
              color="indigo"
              value={spiritReliveType}
              className="rounded-full text-[#fe7f2d] bg-[#233d4d] border-[#fe7f2d]/80 border-2"
            />
          </Tooltip>
        </span>
        <span className="flex justify-center gap-2 pb-4 px-2">
          <SpiritDifficultyLevelProgressBar
            difficultyTypes={difficulty_types}
            difficulty_level={difficulty_level}
            difficulty_label={
              difficulty_level <= 25
                ? 'Easy'
                : difficulty_level <= 50
                ? 'Average'
                : difficulty_level <= 90
                ? 'Hard'
                : 'Need Veteran'
            }
          />
        </span>
        <span className="text-blue-gray-300 text-xs leading-relaxed">
          Tap / Click the progress bar to see more about the spirit's difficulty.
        </span>
        <ButtonGroup size="sm" ripple={true} className="mt-2" role="group">
          <Button onClick={handleVideoGuideOpen} className="theme-button">
            Video Guide
          </Button>
          <Button onClick={handleSpiritImageOpen} className="theme-button">
            Spirit Info
          </Button>
          <Button onClick={handleTextGuideOpen} className="theme-button">
            Text Guide
          </Button>
        </ButtonGroup>

        <VideoModalContainer
          handleOpen={handleVideoGuideOpen}
          open={openVideoModal}
          spirit_guide_video_url={videoUrl}
          spirit_name={spirit_name}
        />
        <TextGuideModal
          direction={spiritDirection}
          handleOpen={handleTextGuideOpen}
          open={openTextModal}
          label={spirit_name}
        />

        <SpiritImageDetails
          handleOpen={handleSpiritImageOpen}
          open={openSpiritImageModal}
          label={spirit_name}
          spiritImg={spirit_image}
          spiritCollectibles={spirit_collectibles}
          seasonLabel={seasonLabel}
          spiritTreeCost={spirit_tree_cost}
          noOfVisits={number_of_visits}
          isCurrentSeason={isCurrentSeason}
        />
      </CardBody>
    </Card>
  )
}

export default SpiritCardContainer
