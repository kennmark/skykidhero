import { Button, Chip, Typography } from '@material-tailwind/react'
import React, {useEffect, useState} from 'react'
import veteransImg from '../../assets/images/veterans/skykidheroes.png'
import { SkykidHero } from '../../data/skykidHeroData'
import { Link } from 'react-router-dom'

const VeteranFeatured = () => {
    const [active, setActive] = useState(veteransImg);
    const [activeIgn, setActiveIgn] = useState("")
    const [activeWlCount, setActiveWlCount] = useState()
    const [randomSubset, setRandomsubset] = useState([])

    function TagChip(ign, current_no_of_winged_lights) {
        return (
            <div className='text-sm flex flex-row items-center justify-center'>
                {ign}&nbsp;-&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                </svg>
                {current_no_of_winged_lights}
            </div>
        )
    }
    const vetTotal = SkykidHero.length
    
    useEffect(()=> {
        const shuffledId = [...SkykidHero].sort(()=> 0.5 - Math.random())
        const slicedId = shuffledId.slice(0, 3)

        setRandomsubset(slicedId)
    }, [SkykidHero, vetTotal])
    
  return (
    <div className="my-10">
        <Typography variant="h1" className='pb-5'>Featured Veterans</Typography>
        <div className="grid gap-4">
            <div className='flex flex-col items-center justify-center'>
                <img
                className="h-auto w-full max-w-full rounded-lg object-center md:w-auto md:h-[480px]"
                src={active}
                alt=""
                />
                 {activeIgn!=="" &&<Chip variant='ghost' color='amber' size='sm' value={TagChip(activeIgn, activeWlCount)}/>}
            </div>
            <div className='flex items-center justify-center'>
                <div className="flex  flex-col md:flex-row items-center justify-center gap-2 md:gap-10">
                    {randomSubset.map(({ avatar_img, ign, current_no_of_winged_lights }, index) => (
                        <div key={index} className='border-2 border-amber-500 rounded-xl flex flex-col items-center justify-center pb-2'>
                            <img
                            onClick={() => {
                                setActive(avatar_img)
                                setActiveIgn(ign)
                                setActiveWlCount(current_no_of_winged_lights)
                            }}
                            src={avatar_img}
                            className="h-60 w-[160px] cursor-pointer rounded-lg object-center"
                            alt={ign}
                            />
                            <Chip variant='ghost' color='amber' size='sm' value={TagChip(ign, current_no_of_winged_lights)} />       
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Link to={`/veterans`}>
                    <Button  
                        size="lg"
                        className="theme-button my-5"
                        ripple={true}
                        fullWidth={false}>
                            See All SkykidHeroes
                    </Button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default VeteranFeatured
