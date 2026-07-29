import React from 'react'
import { Typography, Card } from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { WINGED_LIGHT } from '../../exports/defaultImages'
import {
  WL_COUNT_DATE_UPDATED,
  TOTAL_WL_COUNT,
  WB_TRAVELING_SPIRITS,
  WB_REGULAR_SPIRITS,
  WL_COUNT,
  SHARDS_WL,
  ORBIT_WL,
  PLAYSTATION_MAX_WL,
  STEAM_MAX_WL,
} from '../../exports/constants'

const WingedLightIntro = () => {
  return (
    <div className="justify-start w-full ">
      <div>
        <Typography variant="h1" className="my-10 text-[#fe7f2d]">
          Winged Lights
        </Typography>
        <Typography className="leading-8 py-5 px-10 text-white">
Winged Lights (WL) provide the ability to increase a Skykid's Wing Power and Wing Level. There are two (2) ways for a Skykid to achieve higher Wing Power and Wing Level. The first (1st) way is to collect all the Winged Lights that can be found throughout the Sky Kingdom.
 There are {' '}
          <span className="font-extrabold text-[#fe7f2d]">{WL_COUNT} WL</span>{' '}
          that you'll get on all (7) Realms including the Season Maps and as of{' '}
          <span className="font-extrabold text-[#fe7f2d]">
            {WL_COUNT_DATE_UPDATED}
          </span>{' '}
          on iOS, Android OS and Nintendo Switch. The second (2nd) way is to purchase the Wing Buffs available from Regular Spirits and Traveling Spirits.
 There are{' '}
          <span className="font-extrabold text-[#fe7f2d]">
            {WB_REGULAR_SPIRITS} Wing Buffs on Regular Spirits
          </span>{' '}
          and{' '}
          <span className="font-extrabold text-[#fe7f2d]">
            {WB_TRAVELING_SPIRITS} Wing Buffs on Traveling Spirits
          </span>{' '}
          as well. The Wing Buffs are permanent Wing Levels after you
          are reborn from Eden.
        </Typography>
        <Typography className="leading-8 pb-5 px-10 text-white">
          On iOS, Android and Nintendo Switch there are{' '}
          <span className="font-extrabold text-[#fe7f2d]">
            {TOTAL_WL_COUNT} WL
          </span>{' '}
          Max Winged Light .
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center">
        <Card className="py-3 px-1 h-auto md:h-96 mb-10">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Source
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  Count
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 p-3">WL in All Maps</td>
                <td className="border border-slate-700 p-3">{WL_COUNT}</td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  WB in Regular Spirits
                </td>
                <td className="border border-slate-700 p-3">
                  {WB_REGULAR_SPIRITS}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  WB in Traveling Spirits
                </td>
                <td className="border border-slate-700 p-3">
                  {WB_TRAVELING_SPIRITS}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  Orbit (After Sky Logo Credits)
                </td>
                <td className="border border-slate-700 p-3">{ORBIT_WL}</td>
              </tr>
              <tr>
                <td className="border border-slate-700 p-3">
                  WL in Shattering Void Space
                </td>
                <td className="border border-slate-700 p-3">{SHARDS_WL}</td>
              </tr>
              <tr>
                <td className="border border-slate-700 font-bold p-3">
                  WL TOTAL
                </td>
                <td className="border border-slate-700 font-bold text-[#fe7f2d] p-3">
                  {TOTAL_WL_COUNT}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
        <LazyLoadImage src={WINGED_LIGHT} className="pl-5 gap-3 w-auto h-96" />
      </div>
    </div>
  )
}

export default WingedLightIntro
