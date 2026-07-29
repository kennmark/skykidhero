import React from 'react'
import { Typography, Chip, Card } from '@material-tailwind/react'
const DifficultyCriteria = () => {
  return (
    <Card className="flex mt-3 p-5 bg-[#233d4d] text-[#fe7f2d]">
      <Typography className="">
        Information on Spirit's Difficulty Factors:
      </Typography>
      <Typography>
        This criteria is based on the "moth" or "new player" experience.
      </Typography>
      <div className="flex flex-row flex-wrap justify-center gap-2 py-3">
        <Chip color="green" value="Follow +5" />

        <Chip color="teal" value="Walk +10" />
        <Chip color="cyan" value="Fly +10" />
        <Chip color="amber" value="2 or 4 Player Door +10" />
        <Chip color="green" value="Carry +10" />
        <Chip color="indigo" value="Distanced +15" />
        <Chip color="purple" value="Elevated +20" />
        <Chip color="green" value="Collect +20" />
        <Chip color="pink" value="Acquired by Task +5" />
        <Chip color="red" value="Krills +50" />
        <Chip color="amber" value="Need A Veteran +30" />
        <Chip color="cyan" value="Swim +10" />
        <Chip color="pink" value="Chase +15" />
        <Chip color="red" value="Crabs +15" />
        <Chip color="gray" value="None" />
        <Chip color="green" value="Quest +5" />
      </div>
    </Card>
  )
}

export default DifficultyCriteria
