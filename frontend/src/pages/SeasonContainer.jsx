import { useParams } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Spinner } from '@material-tailwind/react'

// Centralized registry of your 30 season page components
const seasonComponents = {
  's1-gratitude': lazy(() => import('./SeasonsPages/S1GratitudePage')),
  's2-lightseeker': lazy(() => import('./SeasonsPages/S2LightSeekerPage')),
  's3-belonging': lazy(() => import('./SeasonsPages/S3BelongingPage')),
  's4-rhythm': lazy(() => import('./SeasonsPages/S4RhythmPage')),
  's5-enchantment': lazy(() => import('./SeasonsPages/S5EnchantmentPage')),
  's6-sanctuary': lazy(() => import('./SeasonsPages/S6SanctuaryPage')),
  's7-prophecy': lazy(() => import('./SeasonsPages/S7ProphecyPage')),
  's8-dreams': lazy(() => import('./SeasonsPages/S8DreamsPage')),
  's9-assembly': lazy(() => import('./SeasonsPages/S9AssemblyPage')),
  's10-the-little-prince': lazy(() => import('./SeasonsPages/S10TheLittlePrincePage')),
  's11-flight': lazy(() => import('./SeasonsPages/S11FlightPage')),
  's12-abyss': lazy(() => import('./SeasonsPages/S12AbyssPage')),
  's13-performance': lazy(() => import('./SeasonsPages/S13PerformancePage')),
  's14-shattering': lazy(() => import('./SeasonsPages/S14ShatteringPage')),
  's15-aurora': lazy(() => import('./SeasonsPages/S15AuroraPage')),
  's16-remembrance': lazy(() => import('./SeasonsPages/S16RemembrancePage')),
  's17-passage': lazy(() => import('./SeasonsPages/S17PassagePage')),
  's18-moments': lazy(() => import('./SeasonsPages/S18MomentsPage')),
  's19-revival': lazy(() => import('./SeasonsPages/S19RevivalPage')),
  's20-the-nine-colored-deer': lazy(() => import('./SeasonsPages/S20TheNineColoredDeerPage')),
  's21-nesting': lazy(() => import('./SeasonsPages/S21NestingPage')),
  's22-duet': lazy(() => import('./SeasonsPages/S22DuetPage')),
  's23-moomin': lazy(() => import('./SeasonsPages/S23MoominPage')),
  's24-radiance': lazy(() => import('./SeasonsPages/S24RadiancePage')),
  's25-bluebird': lazy(() => import('./SeasonsPages/S25BlueBirdPage')),
  's26-two-embers-one': lazy(() => import('./SeasonsPages/S26TwoEmbersOnePage')),
  's27-migration': lazy(() => import('./SeasonsPages/S27MigrationPage')),
  's28-light-mending': lazy(() => import('./SeasonsPages/S28LightMendingPage')),
  's29-carnival': lazy(() => import('./SeasonsPages/S29CarnivalPage')),
  's30-dear-van-gogh': lazy(() => import('./SeasonsPages/S30VanGoghPage')),
}

const SeasonContainer = () => {
  const { seasonSlug } = useParams() // Captures parameters like "s1-gratitude"
  
  const TargetSeason = seasonComponents[seasonSlug]

  if (!TargetSeason) {
    return <div className="text-center py-10 text-red-500">Season archive not found.</div>
  }

  return (
    <Suspense 
      fallback={
        <div className="flex justify-center items-center py-20">
          <Spinner className="h-12 w-12" color="amber" />
        </div>
      }
    >
      <TargetSeason />
    </Suspense>
  )
}

export default SeasonContainer