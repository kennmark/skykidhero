import React from 'react'
import { Typography, Progress, Tooltip, Chip } from '@material-tailwind/react'

const SpiritDifficultyLevelProgressBar = ({
  difficulty_level,
  difficulty_label,
  difficultyTypes,
}) => {
  const typeValue = [
    <Chip color="green" value="Follow +5" key={1} />, // 0
    <Chip color="teal" value="Walk +10" key={2} />, // 1
    <Chip color="cyan" value="Fly +10" key={3} />, // 2
    <Chip color="amber" value="2 or 4 Player Door +10" key={4} />, // 3
    <Chip color="green" value="Carry +10" key={5} />, // 4
    <Chip color="indigo" value="Distanced +15" key={6} />, // 5
    <Chip color="purple" value="Elevated +20" key={7} />, // 6
    <Chip color="green" value="Collect +20" key={8} />, // 7
    <Chip color="pink" value="Acquired by Task +5" key={9} />, // 8
    <Chip color="red" value="Krills +50" key={10} />, // 9
    <Chip color="amber" value="Need A Veteran +30" key={11} />, // 10
    <Chip color="cyan" value="Swim +10" key={12} />, // 11
    <Chip color="pink" value="Chase +15" key={13} />, // 12
    <Chip color="red" value="Crabs +15" key={14} />, // 13
    <Chip color="gray" value="None" key={15} />, // 14
    <Chip color="light-green" value="Quest +5" key={16} />, // 14
  ]

  const difficultyType = difficultyTypes?.map((type) => typeValue[type])

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="white" className="text-md">
          Difficulty:
        </Typography>
        <Typography
          color={
            difficulty_level <= 25
              ? 'green'
              : difficulty_level <= 50
                ? 'amber'
                : difficulty_level <= 90
                  ? 'pink'
                  : 'red'
          }
          variant="h6"
        >
          {difficulty_label}
        </Typography>
      </div>
      <Tooltip
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        content={
          <span className=" w-60">
            <div>
              Gaano kahirap i-relive ang spirit na ito.{' '}
              <span
                className={
                  difficulty_level <= 25
                    ? 'text-green-500'
                    : difficulty_level <= 50
                      ? 'text-amber-500'
                      : difficulty_level <= 90
                        ? 'text-pink-500'
                        : 'text-red-500'
                }
              >
                {difficulty_label}
              </span>
            </div>
            <div className="flex flex-wrap text-center justify-center gap-1 pt-3">
              {difficultyType}
            </div>
          </span>
        }
        className="bg-black/80 w-60"
      >
        <Progress
          value={difficulty_level}
          color={
            difficulty_level <= 25
              ? 'green'
              : difficulty_level <= 50
                ? 'amber'
                : difficulty_level <= 90
                  ? 'pink'
                  : 'red'
          }
          size="lg"
          label={' '}
          variant="gradient"
        />
      </Tooltip>
    </div>
  )
}

export default SpiritDifficultyLevelProgressBar
