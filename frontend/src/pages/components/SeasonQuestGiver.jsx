import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SeasonQuestGiver = ({
seasonNo,
seasonName,
guideDescription,
seasonGuideName,
seasonGuideImg,
ultiGifts,
icon_route,
propObtainable,
seasonGuideGifts,
isAvailable,
iapItems,
isLimitedItems,
limitedItems
}) => {
  return (
    <div className='flex flex-col items-center justify-center mt-5'>
        <Card className="w-full max-w-[48rem] flex-row theme-card-bg text-white mb-10">
            <CardHeader
                shadow={true}
                floated={false}
                className="flex items-center justify-center m-0 w-2/5 shrink-0 rounded-r-none bg-[#233d4d]"
            >
                <LazyLoadImage
                    src={seasonGuideImg}
                    alt={seasonGuideName}
                    className="h-60 w-auto md:h-96"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase text-white">
                    Season Quest Giver
                </Typography>
                <Typography variant="h4" color="white" className="mb-2">
                    <span className='flex items-center justify-center'><LazyLoadImage src={icon_route} />{seasonGuideName}</span>
                </Typography>
                <Typography color="white" className="mb-8 font-normal">
                    {guideDescription} Although you can still receive hearts once you completed the season quest.
                </Typography>

                <Typography>
                    These Ultimate Gift(s) is/(are) not obtainable.
                </Typography>
                {Object.entries(ultiGifts)?.map(([key, value])=>(
                    <div key={key} className='flex sm:flex-row flex-col items-center justify-center'>
                        <LazyLoadImage  src={value.ultGiftImg} alt={value.ultGiftName} className='h-12 w-auto md:h-16 rounded-full' />
                        <span className='flex items-center justify-evenly'>
                            {value.ultGiftName} - {value.ultGiftPrice}<LazyLoadImage src={value.ultGiftHeartIco} className='h-6 w-auto md:h-8 rounded-full' />
                        </span>
                    </div>
                ))}
                </CardBody>
        </Card>
        {propObtainable && (
            <Card className="flex items-center justify-center w-full max-w-[48rem] theme-card-bg text-white mb-10">
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase text-white">
                        Other Items
                    </Typography>
                    <Typography>
                        This / (These) item(s) are obtainable through Season Guide using white candles / white hearts.
                    </Typography>
                    {Object.entries(seasonGuideGifts)?.map(([key, value])=>(
                        <div key={key} className='flex sm:flex-row flex-col items-center justify-center'>
                            <LazyLoadImage  src={value.propGiftImg} alt={value.propGiftName} className='h-12 w-auto md:h-16 rounded-full' />
                            <span className='flex items-center justify-evenly'>
                                {value.propGiftName} - {value.propGiftPrice}&nbsp;<LazyLoadImage src={value.propGiftCandleIco} className='h-6 w-auto md:h-8 rounded-full' />
                            </span>
                        </div>
                    ))}
                </CardBody>
            </Card>
        )}
        {isAvailable && (
            <Card className="flex items-center justify-center w-full max-w-[48rem] theme-card-bg text-white mb-10">
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase text-white">
                        IAP Items
                    </Typography>
                    <Typography>
                        This / (These) IAP are limited during its season and has no schedule of its return.
                    </Typography>
                    {Object.entries(iapItems)?.map(([key, value])=>(
                        <div key={key} className='flex sm:flex-row flex-col items-center justify-center'>
                            <LazyLoadImage  src={value.iapImg} alt={value.iapName} className='h-12 w-auto md:h-16 rounded-full' />
                            <span className='flex items-center justify-evenly'>
                                {value.iapName} - {value.iapPrice}&nbsp;pesos
                            </span>
                        </div>
                    ))}
                </CardBody>
            </Card>
        )}
        {isLimitedItems && (
            <Card className="flex items-center justify-center w-full max-w-[48rem] theme-card-bg text-white mb-10">
                <CardBody>
                    <Typography variant="h6" color="gray" className="mb-4 uppercase text-white">
                        Limited Items
                    </Typography>
                    <Typography>
                        This / (These) limited item(s) are available during its season and has no schedule of its return.
                    </Typography>

                    {Object.entries(limitedItems)?.map(([key, value])=>(
                        <div key={key} className='flex items-center justify-center gap-6'>
                            <LazyLoadImage  src={value.limitedItemImg} alt={value.limitedItemName} className='h-12 w-auto md:h-16 rounded-full' />
                            {value.limitedItemName}
                        </div>
                    ))}
                </CardBody>
            </Card>
        )}
    </div>
  )
}

export default SeasonQuestGiver
