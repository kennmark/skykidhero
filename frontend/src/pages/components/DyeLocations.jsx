import React from 'react'
import PrairieDyes from './MapDyeLocations/PrairieDyes'
import ForestDyes from './MapDyeLocations/ForestDyes'
import ValleyDyes from './MapDyeLocations/ValleyDyes'
import WastelandDyes from './MapDyeLocations/WastelandDyes'
import VaultDyes from './MapDyeLocations/VaultDyes'
import EdenDyes from './MapDyeLocations/EdenDyes'
import DyesMaxPerDay from './DyesMaxPerDay'

const DyeLocations = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5">
      <DyesMaxPerDay />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 justify-items-center content-evenly">
        <PrairieDyes />
        <ForestDyes />
        <ValleyDyes />
        <WastelandDyes />
        <VaultDyes />
        <EdenDyes />
      </div>
    </div>
  )
}

export default DyeLocations
