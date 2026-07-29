import {
  BeakerIcon,
  CircleStackIcon,
  LifebuoyIcon,
  SparklesIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/solid'
import Geyser from '../pages/components/GeyserContainer'
import Grandma from '../pages/components/GrandmaContainer'
import Turtle from '../pages/components/TurtleContainer'
import Fireworks from '../pages/components/FireworksContainer'
import AuroraConcert from '../pages/components/AuroraConcertContainer'
import { dtsValue } from '../exports/constants'

export const skyclock = [
  {
    label: 'Geyser',
    value: 'geyser',
    icon: BeakerIcon,
    desc: <Geyser dtsValue={dtsValue} />,
  },
  {
    label: 'Grandma',
    value: 'grandma',
    icon: CircleStackIcon,
    desc: <Grandma dtsValue={dtsValue} />,
  },

  {
    label: 'Turtle',
    value: 'turtle',
    icon: LifebuoyIcon,
    desc: <Turtle dtsValue={dtsValue} />,
  },
  {
    label: 'Fireworks',
    value: 'fireworks',
    icon: SparklesIcon,
    desc: <Fireworks dtsValue={dtsValue} />,
  },
  {
    label: 'Aurora Concert',
    value: 'aurora-concert',
    icon: MusicalNoteIcon,
    desc: <AuroraConcert dtsValue={dtsValue} />,
  },
]
