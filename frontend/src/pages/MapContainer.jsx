import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Spinner, Typography } from '@material-tailwind/react'
import ErrorPage from './ErrorPage'

const MapContainer = () => {
    // Dynamic imports mapping to their respective files
    const mapComponents = {
    'isle-of-dawn': lazy(() => import('./PageIsle')),
    'daylight-prairie': lazy(() => import('./PagePrairie')),
    'hidden-forest': lazy(() => import('./PageForest')),
    'valley-of-triumph': lazy(() => import('./PageValley')),
    'golden-wasteland': lazy(() => import('./PageWasteland')),
    'vault-of-knowledge': lazy(() => import('./PageVault')),
    'eye-of-eden': lazy(() => import('./PageEden')),
    'aviary-village': lazy(() => import('./PageAviary')),
    // Add new future map files here in one place!
    }

    const { mapName } = useParams() // Captures "isle-of-dawn", "daylight-prairie", etc.
    const navigate = useNavigate()

    // Find the matching lazy component from our registry
    const TargetMap = mapComponents[mapName]
    // 4. Scroll To Top Fallback Isolation
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [mapName])

  // If someone enters an invalid map URL string, render a fallback or your error page
  if (!TargetMap) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <Typography variant="h3" className="text-[#fe7f2d] uppercase mb-2">
          Map Area Not Found
        </Typography>
        <Typography className="text-gray-400 mb-6 max-w-sm">
          The map path "{mapName}" (ID: {mapId}) does not exist or has been moved in the latest game update.
        </Typography>
        <Button 
          onClick={() => navigate('/')} 
          className="theme-button uppercase"
          size="sm"
        >
          Home
        </Button>
      </div>
    )
  }

  return (
   <Suspense 
      fallback={
        <div className="flex flex-col justify-center items-center min-h-[50vh] gap-3">
          <Spinner className="h-16 w-16" color="amber" />
          <Typography className="text-gray-400 text-xs font-mono tracking-widest uppercase animate-pulse">
            Teleporting To Map Area...
          </Typography>
        </div>
      }
    >
      <TargetMap />
    </Suspense>
  )
}


export default MapContainer
