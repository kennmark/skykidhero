import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './Clock.css'
import './fonts/MooliFont.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Layout from './pages/layout/Layout'

import ScrollToTop from './pages/components/ScrollToTop '
import { Spinner } from '@material-tailwind/react'
const HomeSpace = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/HomeSpace')), 300)
  })
})
const News = lazy(() => import('./pages/News'))
const PageSeasonMap = lazy(() => import('./pages/PageSeasonMap'))
const Team = lazy(() => import('./pages/Team'))
const Events = lazy(() => import('./pages/Events'))
const Support = lazy(() => import('./pages/Support'))
const FaQ = lazy(() => import('./pages/FaQ'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))

const MapContainer = lazy(() => import('./pages/MapContainer'))
const SeasonContainer = lazy(() => import('./pages/SeasonContainer'))

const PageWingedLights = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageWingedLights')), 300)
  })
})
const PageMapShrines = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/PageMapShrines')), 300)
  })
})
const PageVeterans = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/VeteranPage')), 300)
  })
})

function App() {
  return (
    <div className="mooliMono">
      <Suspense
        fallback={
          <div className="w-1/2 h-1/2 absolute top-1/2 left-1/2 -mx-6 my-0">
            <div className="flex">
              <Spinner className="h-20 w-20" color="amber" />
            </div>
          </div>
        }
      >
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<HomeSpace />} />

                <Route path="news" element={<News />} />
                <Route path="seasons" element={<PageSeasonMap />}/>
                <Route path="team" element={<Team />} />
                <Route path="events" element={<Events />} />
                <Route path="support" element={ <Support />} />
                <Route  path="faq" element={<FaQ />} />

                <Route path="maps/:mapId/:mapName" element={<MapContainer />} />
                
                <Route path="seasons/:seasonSlug" element={<SeasonContainer />} />

                <Route path="*" element={<ErrorPage />} />

                <Route path="winged-lights" element={ <PageWingedLights />} />
                <Route path="map-shrines" element={<PageMapShrines />} />
                <Route path="veterans" element={<PageVeterans /> } />
              </Route>
            </Routes>
          </ScrollToTop>
        </Router>
       
      </Suspense>
    </div>
  )
}

export default App
