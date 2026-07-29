import {useState, useRef } from 'react'
import {
    motion, 
    useMotionTemplate,
    useMotionValue,
    useSpring
} from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Chip,
    Button,
    Tooltip,
    Typography,
    Avatar,
    IconButton,
} from "@material-tailwind/react";
import vetbadge from '../../assets/images/logo/vetbadge.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Tiktok } from "iconoir-react";

const FlipCard = ({
    ign,
    socials,
    title,
    level,
    avatar_img,
    no_of_moth_helped,
    current_no_of_winged_lights,
    season_started,
    seasonIconUrl,
    mastery,
    mp,
    season_bg
    }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const handleFlip = () => {
        setIsAnimating(true)
        setIsFlipped(!isFlipped)
    }

    // console.log(avatar_img);
    
  return (
    <div className="flex items-center justify-center h-[500px] cursor-pointer ">
        <div className='flip-card w-[300px] rounded-lg h-[500px]' onClick={handleFlip}>
            <motion.div
                className='flip-card-inner w-[100%] h-[100%]'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.3, animationDirection: "normal"}}
                onAnimationComplete={() => setIsAnimating(false)}
                >
                    {/* Front Card */}
                    <Card
                        shadow={true}
                        className="flip-card-front flex flex-col items-center justify-between w-[100%] h-[100%] bg-cover border-[1px] border-amber-500 text-white bg-linear-65 from-purple-500 to-pink-500"
                        >
                        <CardHeader
                        floated={false}
                        shadow={true}
                        color="transparent"
                        className={`absolute inset-0 m-0 h-full w-full`}
                        style={{backgroundImage: `url(${avatar_img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                        >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative pt-60">
                            <div className='flex flex-row items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='teal' className="size-6">
                                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>
                                <Typography
                                        variant="h2"
                                        color="white"
                                        className="font-medium leading-[1.5]"
                                        >
                                            {ign} 
                                </Typography>
                            </div>
                           
                            <Typography variant="h5" className=" mb-1 text-gray-400 text-sm">
                                    {title}
                                </Typography>
                            <div className="mb-1 flex justify-start gap-5 px-2 md:px-8">
                                
                                <div className="mb-1 flex justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
                                        <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                                    </svg>
                                    <Typography variant="h5" className="mb-4 text-gray-400 text-sm">
                                        {current_no_of_winged_lights}
                                    </Typography>
                                </div>
                                <div className="mb-1 flex justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-6">
                                        <path fillRule="evenodd" d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                                    </svg>

                                    <Typography variant="h5" className="mb-4 text-gray-400 text-sm">
                                        {level}
                                    </Typography>
                                </div>
                                <div className="mb-1 flex justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                    <Typography variant="h5" className="mb-4 text-gray-400 text-sm">
                                        {no_of_moth_helped}
                                    </Typography>
                                </div>
                            </div>
                            <Avatar
                            size="xl"
                            variant="circular"
                            alt="skykidhero logo"
                            className="border-2 border-amber-500"
                            src={vetbadge}
                            />
                        </CardBody>
                        <CardFooter className="pt-0 flex flex-row items-center justify-center gap-2 z-10">
                            <span className='text-amber-900'>See More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                            </svg>
                        </CardFooter>
                    </Card>
                    {/* End Front Card */}
                    {/* Back Card */}
                    <Card
                        shadow={true}
                        className="flip-card-back flex flex-col items-center justify-between w-[100%] h-[100%] bg-cover text-white"
                    >              
                        <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-lg"
                        style={{background: `${season_bg}`}}

                        >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full" />
                        </CardHeader>
                        <CardBody className="relative pt-8 px-2 md:px-6 flex flex-col items-center justify-center gap-5">
                            <Typography
                            variant="h2"
                            color="white"
                            className="text-lg leading-[1.5]"
                            >
                            SkykidHero {ign} Info
                            </Typography>
                            <div className="flex flex-row items-center justify-center gap-1">
                                <Typography variant="h5" className="mb-4 text-gray-400">
                                    Birth:{season_started}
                                </Typography>
                                <Avatar
                                    size="lg"
                                    variant="circular"
                                    alt={season_started}
                                    title={season_started}
                                    className="border-2 border-white"
                                    src={seasonIconUrl}
                                />
                            </div>
                            <div className="flex flex-row gap-2 relative flex-wrap justify-center items-center">
                                <Typography className="text-gray-400">
                                        Mastery Points: {mp}
                                </Typography><br/>
                                {Object.entries(mastery).map(([key, value]) => (
                                    <Tooltip content={value.description} key={key}>
                                        <Chip color={value.color} className="text-[8px] font-semibold" value={`${key.replace(/_/g, ' ')}: ${value.value}`} />
                                    </Tooltip>
                                ))}
                            </div>
                        </CardBody>  
                        <CardFooter className="flex justify-evenly gap-2 pt-2 z-10">
                            {Object.entries(socials).map(([key, value]) => (
                                <div key={key}>
                                    {value.fburl && (
                                        <Link to={value.fburl}>
                                            <IconButton  
                                                className="rounded-full bg-[#1877F2] hover:shadow-[#1877F2]/20 focus:shadow-[#1877F2]/20 active:shadow-[#1877F2]/10"
                                                ripple={true}
                                                >
                                                <Facebook className="h-4 w-4 stroke-2" />
                                            </IconButton>
                                        </Link>
                                    )}
                                    {value.igurl && (
                                        <Link to={value.igurl}>
                                            <IconButton  
                                                className="rounded-full bg-[#D62976] hover:shadow-[#D62976]/20 focus:shadow-[#D62976]/20 active:shadow-[#D62976]/10"
                                                ripple={true}
                                                >
                                                <Instagram className="h-4 w-4 stroke-2" />
                                            </IconButton>
                                        </Link>
                                    )}
                                    {value.tturl && (
                                        <Link to={value.igurl}>
                                            <IconButton  
                                                className="rounded-full bg-[#000000] hover:shadow-[#000000]/20 focus:shadow-[#000000]/20 active:shadow-[#000000]/10"
                                                ripple={true}
                                                >
                                                <Tiktok className="h-4 w-4 stroke-2" />
                                            </IconButton>
                                        </Link>
                                    )}
                                </div>
                            ))}
                            
                        </CardFooter>
                    </Card> 
                    {/* Endd Back Card */}               
            </motion.div>
        </div>
    </div>
  )
}

export default FlipCard
