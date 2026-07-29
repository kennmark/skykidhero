import React from 'react'
import { SkykidHero } from '../data/skykidHeroData'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Alert, Typography } from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import ScrollToTop from 'react-scroll-to-top'
import FlipCard from './components/FlipCard'

const VeteranPage = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-5">
        <SideBarContainer />
      </div>
      <div className="h-fit w-full my-5 px-5">
        <Typography variant="h2" className="pb-5">
          The Veterans
        </Typography>
        <Typography className="mt-4">
          Veteran Badge is being awarded to SkyPH members who first willingly
          joined the program conducted by the Admins and Moderators of the SkyPH
          group. Veteran Badge is for SkyPH members only and those who passed
          the qualifying series of tests and interview. Veteran / Professional
          Sky Player will be called SkykidHero.
        </Typography>
        <Typography className="mt-4">
          <span className='text-amber-700'>Objectives: </span>
          In support to TGC #AdoptAMoth, SkyPH produces a program that will provide assistance for the new players with their SkykidHero of Sky: Children of The Light in playing the game from the basics, such as Traversing all 7 maps, reliving regular spirits, hunting winged lights, unlocking all map shrines, braving Eden and even completing past season quests that scattered throughout Sky World. To produce a healthy new player guided by SkyPH program - SkykidHeroes, bestowed upon by the Admins and Moderators of the group, a Veteran Badge, as an indicator along with their names that would help in all means a new player to grow as a Master or a Pro player of the game.
        </Typography>
        <Typography className="mt-4">
          <span className='text-amber-700'>Goal: </span>
          Is to provide aid and safe guidance about the game for new players of the game.To minimize troll players, feeding new players to Krills and/or leaving alone scaredy moths at Eden.To show new players the beauty of the game, without using any third party or hacked contents and prevent to minimal new players in resorting to cheating.To have a new generation of genuine players who mastered the game professionally and artistically.
        </Typography>
        <Alert color="amber" className='mt-10'>A special thanks to <span className='font-bold'>Admin Alanis</span> and <span className='font-bold'>Moderator Bill</span> for their contributions to make this program possible.</Alert>
        <div className="flex items-center justify-center gap-5 flex-wrap mt-10">
          {SkykidHero.map((hero, index) => (
            <FlipCard
              key={index}
              ign={hero.ign}
              socials={hero.socials}
              title={hero.title}
              level={hero.level}
              avatar_img={hero.avatar_img}
              no_of_moth_helped={hero.no_of_moth_helped}
              current_no_of_winged_lights={hero.current_no_of_winged_lights}
              season_started={hero.season_started}
              seasonIconUrl={hero.seasonIconUrl}
              mastery={hero.mastery}
              mp={hero.masteryPoints}
              season_bg={hero.season_bg}
            />
          ))}
        </div>
        
      </div>
      <ScrollToTop smooth className="scrollToTop" />
    </div>
  )
}

export default VeteranPage
