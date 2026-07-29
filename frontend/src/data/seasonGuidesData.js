import { 
    S3GUIDE, 
    S4GUIDE,
    S5GUIDE,
    S6GUIDE,
    S7GUIDE,
    S8GUIDE,
    S9GUIDE,
    S10GUIDE,
    S11GUIDE,
    S12GUIDE,
    S13GUIDE,
    S14GUIDE,
    S15GUIDE,
    S16GUIDE,
    S17GUIDE,
    S18GUIDE,
    S19GUIDE,
    S20GUIDE,
    S21GUIDE,
    S22GUIDE,
    S23GUIDE,
    S24GUIDE,
    S25GUIDE,
    S26GUIDE,
    S27GUIDE,
    S28GUIDE,
    S29GUIDE,
    S30GUIDE,
 } from './../exports/seasonGuideImages';
import { 
    S3HEART,
    S4HEART,
    S5HEART,
    S6HEART,
    S7HEART,
    S8HEART,    
    S9HEART,    
    S10HEART,    
    S11HEART,
    S12HEART,
    S13HEART,
    S14HEART,
    S15HEART,
    S16HEART,
    S17HEART,
    S18HEART,
    S19HEART,
    S20HEART,
    S21HEART,
    S22HEART,
    S23HEART,
    S24HEART,
    S25HEART,
    S26HEART,
    S27HEART,
    S28HEART,
    S29HEART,
    S30HEART,
} from '../exports/seasonHearts';
import { 
    S3ULTIGIFT1,
    S4ULTIGIFT1, 
    S4ULTIGIFT2,
    S5ULTIGIFT1,
    S5ULTIGIFT2,
    S6ULTIGIFT1,
    S6ULTIGIFT2,
    S7ULTIGIFT1,
    S7ULTIGIFT2,
    S8ULTIGIFT1,
    S8ULTIGIFT2,
    S9ULTIGIFT1,
    S9ULTIGIFT2,
    S9ULTIGIFT3,
    S9ULTIGIFT4,
    S10ULTIGIFT1,
    S10ULTIGIFT2,
    S10ULTIGIFT3,
    S11ULTIGIFT1,
    S11ULTIGIFT2,
    S12ULTIGIFT1,
    S12ULTIGIFT2,
    S12ULTIGIFT3,
    S13ULTIGIFT1,
    S13ULTIGIFT2,
    S13ULTIGIFT3,
    S14ULTIGIFT1,
    S14ULTIGIFT2,
    S15ULTIGIFT1,
    S15ULTIGIFT2,
    S15ULTIGIFT3,
    S16ULTIGIFT1,
    S16ULTIGIFT2,
    S17ULTIGIFT1,
    S17ULTIGIFT2,
    S18ULTIGIFT1,
    S18ULTIGIFT2,
    S18ULTIGIFT3,
    S19ULTIGIFT1,
    S19ULTIGIFT2,
    S20ULTIGIFT1,
    S20ULTIGIFT2,
    S20ULTIGIFT3,
    S21ULTIGIFT1,
    S21ULTIGIFT2,
    S22ULTIGIFT1,
    S22ULTIGIFT2,
    S22ULTIGIFT3,
    S23ULTIGIFT1,
    S23ULTIGIFT2,
    S23ULTIGIFT3,
    S24ULTIGIFT1,
    S24ULTIGIFT2,
    S25ULTIGIFT1,
    S25ULTIGIFT2,
    S26ULTIGIFT1,
    S26ULTIGIFT2,
    S27ULTIGIFT1,
    S27ULTIGIFT2,
    S27ULTIGIFT3,
    S28ULTIGIFT1,
    S28ULTIGIFT2,
    S28ULTIGIFT3,
    S29ULTIGIFT1,
    S29ULTIGIFT2,
    S30ULTIGIFT1,
    S30ULTIGIFT2,
    S30ULTIGIFT3,
} from '../exports/seasonUltiGiftsImages';
import { 
    S9PROP1,
    S9PROP2, 
    S9PROP3, 
    S9PROP4, 
    S9PROP5,
    S12PROP1,
    S13PROP1,
    S13PROP2,
    S16PROP1,
    S16PROP2,
    S16PROP3,
    S16PROP4,
    S16PROP5,
    S17PROP1,
    S17PROP2,
    S17PROP3,
    S17PROP4,
    S17PROP5,
    S18PROP1,
    S19PROP1,
    S20PROP1,
    S22PROP1,
    S22EXP1,
    S23PROP1,
    S23PROP2,
    S23EXP1,
    S24PROP1,
    S25PROP1,
    S25EXP1,
    S25STANCE1,
    S25CALL1,
    S26PROP1,
    S27PROP1,
    S29PROP1,
    S29PROP2,
    S29PROP3,
    S29PROP4,
    S29PROP5,
    S29PROP6,
    S30PROP1,
    S30PROP2,
    S30PROP3,
    S30PROP4,
    S30PROP5,
    S30PROP6,
} from './../exports/seasonPropGiftsImages';
import { 
    S10LIMITEDITEM1,
    S10LIMITEDITEM2,
    S10LIMITEDITEM3,
    S10LIMITEDITEM4,
    S15LIMITEDITEM1,
    S15LIMITEDITEM2,
    S15EXP1,
    S15EXP2,
    S15EXP3,
    S20LIMITEDITEM1,
    S23LIMITEDITEM1,
    S23LIMITEDITEM2,
    S23LIMITEDITEM3,
    S23LIMITEDITEM4,
    S23LIMITEDITEM5,
    S23LIMITEDITEM6,
    S23LIMITEDITEM7
} from '../exports/seasonLimitedItems';
import whiteCandle from '../assets/images/icons/candle.webp'
import whiteHeart from '../assets/images/icons/heart.webp'

export const SeasonGuidesData = [
    {
        seasonNo: 3,
        seasonName: 'Belonging',
        seasonGuideName: 'Belonging Guide',
        seasonGuideImg: S3GUIDE,
        guideDescription: 'Belonging Guide now is the grandma that visits every xx:35 minutes at Hidden Forest.',
        ultiGifts: [
            {
                ultGiftName: 'Bonfire',
                ultGiftImg: S3ULTIGIFT1,
                ultGiftPrice: 6,
                ultGiftHeartIco: S3HEART
            }
        ],
        propObtainable: false,
        seasonGuideGifts: [
            {
                propGiftName: '',
                propGiftImg: '',
                propGiftPrice: '',
                propGiftCandleIco: whiteCandle
            }
        ]
    },
    {
        seasonNo: 4,
        seasonName: 'Rhythm',
        seasonGuideName: 'Rhythm Guide',
        seasonGuideImg: S4GUIDE,
        guideDescription: 'The first owl hair-styled guide. It is rumored that his siblings were Performance Guide and Carnival Guide.',
        ultiGifts: [
            {
                ultGiftName: 'Hair',
                ultGiftImg: S4ULTIGIFT1,
                ultGiftPrice: 4,
                ultGiftHeartIco: S4HEART
            },
            {
                ultGiftName: 'Mask',
                ultGiftImg: S4ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S4HEART
            }
        ],
        propObtainable: false,
        seasonGuideGifts: [
            {
                propGiftName: '',
                propGiftImg: '',
                propGiftPrice: '',
                propGiftCandleIco: whiteCandle
            }
        ]
    },
    {
        seasonNo: 5,
        seasonName: 'Enchantment',
        seasonGuideName: 'Enchantment Guide',
        seasonGuideImg: S5GUIDE,
        guideDescription: 'Season Guide will be located at the center of a little pond near the ark.',
        ultiGifts: [
            {
                ultGiftName: 'Hat',
                ultGiftImg: S5ULTIGIFT1,
                ultGiftPrice: 4,
                ultGiftHeartIco: S5HEART
            },
            {
                ultGiftName: 'Accessory',
                ultGiftImg: S5ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S5HEART
            }
        ],
        propObtainable: false,
        seasonGuideGifts: [
            {
                propGiftName: '',
                propGiftImg: '',
                propGiftPrice: '',
                propGiftCandleIco: whiteCandle
            }
        ]
    },
    {
        seasonNo: 6,
        seasonName: 'Sanctuary',
        seasonGuideName: 'Sanctuary Guide',
        seasonGuideImg: S6GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is located beneath the Bell Towers.',
        ultiGifts: [
            {
                ultGiftName: 'Cape',
                ultGiftImg: S6ULTIGIFT1,
                ultGiftPrice: 3,
                ultGiftHeartIco: S6HEART
            },
            {
                ultGiftName: 'Instrument',
                ultGiftImg: S6ULTIGIFT2,
                ultGiftPrice: 3,
                ultGiftHeartIco: S6HEART
            }
        ],
        propObtainable: false,
        seasonGuideGifts: [
            {
                propGiftName: '',
                propGiftImg: '',
                propGiftPrice: '',
                propGiftCandleIco: whiteCandle
            }
        ]
    },
    {
        seasonNo: 7,
        seasonName: 'Prophecy',
        seasonGuideName: 'Prophecy Guide',
        seasonGuideImg: S7GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide inside the Prophecy Cave.',
        ultiGifts: [
            {
                ultGiftName: 'Mask',
                ultGiftImg: S7ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S7HEART
            },
            {
                ultGiftName: 'Instrument',
                ultGiftImg: S7ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S7HEART
            }
        ],
        propObtainable: false,
        seasonGuideGifts: [
            {
                propGiftName: '',
                propGiftImg: '',
                propGiftPrice: '',
                propGiftCandleIco: whiteCandle
            }
        ]
    },
    {
        seasonNo: 8,
        seasonName: 'Dreams',
        seasonGuideName: 'Dreams Guide',
        seasonGuideImg: S8GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide at Village of Dreams.',
        ultiGifts: [
            {
                ultGiftName: 'Mask',
                ultGiftImg: S8ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S8HEART
            },
            {
                ultGiftName: 'Instrument',
                ultGiftImg: S8ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S8HEART
            }
        ],
        propObtainable: false,
        seasonGuideGifts: [
            {
                propGiftName: '',
                propGiftImg: '',
                propGiftPrice: '',
                propGiftCandleIco: whiteCandle
            }
        ]
    },
    {
        seasonNo: 9,
        seasonName: 'Assembly',
        seasonGuideName: 'Assembly Guide',
        seasonGuideImg: S9GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Treehouse.',
        ultiGifts: [
            {
                ultGiftName: 'Hat',
                ultGiftImg: S9ULTIGIFT1,
                ultGiftPrice: 1,
                ultGiftHeartIco: S9HEART
            },
            {
                ultGiftName: 'Nask',
                ultGiftImg: S9ULTIGIFT2,
                ultGiftPrice: 1,
                ultGiftHeartIco: S9HEART
            },
             {
                ultGiftName: 'Cape',
                ultGiftImg: S9ULTIGIFT3,
                ultGiftPrice: 2,
                ultGiftHeartIco: S9HEART
            },
             {
                ultGiftName: 'Instrument',
                ultGiftImg: S9ULTIGIFT4,
                ultGiftPrice: 2,
                ultGiftHeartIco: S9HEART
            }
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Pillow',
                propGiftImg: S9PROP1,
                propGiftPrice: 5,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Jar',
                propGiftImg: S9PROP2,
                propGiftPrice: 8,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Brazier',
                propGiftImg: S9PROP3,
                propGiftPrice: 12,
                propGiftCandleIco: whiteHeart
            },
            {
                propGiftName: 'Bookcase',
                propGiftImg: S9PROP4,
                propGiftPrice: 30,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Tent',
                propGiftImg: S9PROP5,
                propGiftPrice: 24,
                propGiftCandleIco: whiteHeart
            },
        ]
    },
    {
        seasonNo: 10,
        seasonName: 'The Little Prince',
        seasonGuideName: 'The Rose',
        seasonGuideImg: S10GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Starlight Dessert.',
        ultiGifts: [
            {
                ultGiftName: 'Hair',
                ultGiftImg: S10ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S10HEART
            },
            {
                ultGiftName: 'Suitpant',
                ultGiftImg: S10ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S10HEART
            },
             {
                ultGiftName: 'Rose',
                ultGiftImg: S10ULTIGIFT3,
                ultGiftPrice: 2,
                ultGiftHeartIco: S10HEART
            },
        ],
        propObtainable: false,
        seasonGuideGifts: [
            // {
            //     propGiftName: 'Pillow',
            //     propGiftImg: S10PROP1,
            //     propGiftPrice: 5,
            //     propGiftCandleIco: whiteCandle
            // },
        ],
        isAvailable: true,
        iapItems: [
            {
                iapName: 'Little Prince Asteroid Jacket',
                iapImg: S10LIMITEDITEM3,
                iapPrice: 1500,
            },
            {
                iapName: 'Little Prince Scarf',
                iapImg: S10LIMITEDITEM2,
                iapPrice: 900,
            },
            {
                iapName: 'Little Prince Fox',
                iapImg: S10LIMITEDITEM4,
                iapPrice: 600,
            },
        ],
        isLimitedItems: true,
        limitedItems: [
            {
                limitedItemName: 'SwordPants',
                limitedItemImg: S10LIMITEDITEM1,
                limitedItemPrice: 'X',
                limitedItemCandleIco: whiteCandle
            },
        ]
    },
    {
        seasonNo: 11,
        seasonName: 'Flight',
        seasonGuideName: 'Flight Guide',
        seasonGuideImg: S11GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Wind Paths.',
        ultiGifts: [
            {
                ultGiftName: 'Suitpants',
                ultGiftImg: S11ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S11HEART
            },
            {
                ultGiftName: 'Hair Accessory',
                ultGiftImg: S11ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S11HEART
            },
        ],
        propObtainable: false,
        seasonGuideGifts: [
            // {
            //     propGiftName: 'Pillow',
            //     propGiftImg: S11PROP1,
            //     propGiftPrice: 5,
            //     propGiftCandleIco: whiteCandle
            // },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
            // {
            //     iapName: 'Little Prince Scarf',
            //     iapImg: S11LIMITEDITEM2,
            //     iapPrice: 900,
            // },
            // {
            //     iapName: 'Little Prince Fox',
            //     iapImg: S11LIMITEDITEM4,
            //     iapPrice: 600,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'SwordPants',
            //     limitedItemImg: S11LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 12,
        seasonName: 'Abyss',
        seasonGuideName: 'Abyss Guide',
        seasonGuideImg: S12GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Boat of Treasure Reef.',
        ultiGifts: [
            {
                ultGiftName: 'Hair Accessory',
                ultGiftImg: S12ULTIGIFT1,
                ultGiftPrice: 1,
                ultGiftHeartIco: S12HEART
            },
            {
                ultGiftName: 'Mask',
                ultGiftImg: S12ULTIGIFT2,
                ultGiftPrice: 1,
                ultGiftHeartIco: S12HEART
            },
            {
                ultGiftName: 'Cape',
                ultGiftImg: S12ULTIGIFT3,
                ultGiftPrice: 2,
                ultGiftHeartIco: S12HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Mask',
                propGiftImg: S12PROP1,
                propGiftPrice: 48,
                propGiftCandleIco: whiteCandle
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
            // {
            //     iapName: 'Little Prince Scarf',
            //     iapImg: S11LIMITEDITEM2,
            //     iapPrice: 900,
            // },
            // {
            //     iapName: 'Little Prince Fox',
            //     iapImg: S11LIMITEDITEM4,
            //     iapPrice: 600,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'SwordPants',
            //     limitedItemImg: S11LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 13,
        seasonName: 'Performance',
        seasonGuideName: 'Performance Guide',
        seasonGuideImg: S13GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Village Theater.',
        ultiGifts: [
            {
                ultGiftName: 'Hair',
                ultGiftImg: S13ULTIGIFT1,
                ultGiftPrice: 1,
                ultGiftHeartIco: S13HEART
            },
            {
                ultGiftName: 'Mask',
                ultGiftImg: S13ULTIGIFT2,
                ultGiftPrice: 1,
                ultGiftHeartIco: S13HEART
            },
            {
                ultGiftName: 'Cape',
                ultGiftImg: S13ULTIGIFT3,
                ultGiftPrice: 2,
                ultGiftHeartIco: S13HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Mask',
                propGiftImg: S13PROP1,
                propGiftPrice: 42,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Ptop',
                propGiftImg: S13PROP2,
                propGiftPrice: 52,
                propGiftCandleIco: whiteCandle
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
            // {
            //     iapName: 'Little Prince Scarf',
            //     iapImg: S11LIMITEDITEM2,
            //     iapPrice: 900,
            // },
            // {
            //     iapName: 'Little Prince Fox',
            //     iapImg: S11LIMITEDITEM4,
            //     iapPrice: 600,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'SwordPants',
            //     limitedItemImg: S11LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 14,
        seasonName: 'Shattering',
        seasonGuideName: 'Shattering Guide',
        seasonGuideImg: S14GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at every shard eruption.',
        ultiGifts: [
            {
                ultGiftName: 'Manta Cape',
                ultGiftImg: S14ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S14HEART
            },
            {
                ultGiftName: 'Krill Cape',
                ultGiftImg: S14ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S14HEART
            },
        ],
        propObtainable: false,
        seasonGuideGifts: [
            // {
            //     propGiftName: 'Mask',
            //     propGiftImg: S13PROP1,
            //     propGiftPrice: 42,
            //     propGiftCandleIco: whiteCandle
            // },
            // {
            //     propGiftName: 'Ptop',
            //     propGiftImg: S13PROP2,
            //     propGiftPrice: 52,
            //     propGiftCandleIco: whiteCandle
            // },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
            // {
            //     iapName: 'Little Prince Scarf',
            //     iapImg: S11LIMITEDITEM2,
            //     iapPrice: 900,
            // },
            // {
            //     iapName: 'Little Prince Fox',
            //     iapImg: S11LIMITEDITEM4,
            //     iapPrice: 600,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'SwordPants',
            //     limitedItemImg: S11LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 15,
        seasonName: 'AURORA',
        seasonGuideName: 'AURORA Guide',
        seasonGuideImg: S15GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Valley Coliseum.',
        ultiGifts: [
            {
                ultGiftName: 'AURORA Hair',
                ultGiftImg: S15ULTIGIFT1,
                ultGiftPrice: 1,
                ultGiftHeartIco: S15HEART
            },
            {
                ultGiftName: 'AURORA Suitpants',
                ultGiftImg: S15ULTIGIFT2,
                ultGiftPrice: 1,
                ultGiftHeartIco: S15HEART
            },
            {
                ultGiftName: 'AURORA Cape',
                ultGiftImg: S15ULTIGIFT3,
                ultGiftPrice: 2,
                ultGiftHeartIco: S15HEART
            },
        ],
        propObtainable: false,
        seasonGuideGifts: [
            // {
            //     propGiftName: 'Mask',
            //     propGiftImg: S13PROP1,
            //     propGiftPrice: 42,
            //     propGiftCandleIco: whiteCandle
            // },
            // {
            //     propGiftName: 'Ptop',
            //     propGiftImg: S13PROP2,
            //     propGiftPrice: 52,
            //     propGiftCandleIco: whiteCandle
            // },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
            // {
            //     iapName: 'Little Prince Scarf',
            //     iapImg: S11LIMITEDITEM2,
            //     iapPrice: 900,
            // },
            // {
            //     iapName: 'Little Prince Fox',
            //     iapImg: S11LIMITEDITEM4,
            //     iapPrice: 600,
            // },
        ],
        isLimitedItems: true,
        limitedItems: [
            {
                limitedItemName: 'Cure For Me Mask',
                limitedItemImg: S15LIMITEDITEM1,
                limitedItemPrice: 'X',
                limitedItemCandleIco: whiteCandle
            },
            {
                limitedItemName: 'Cure For Me Pants',
                limitedItemImg: S15LIMITEDITEM2,
                limitedItemPrice: 'X',
                limitedItemCandleIco: whiteCandle
            },
            {
                limitedItemName: 'Silent Clap',
                limitedItemImg: S15EXP1,
                limitedItemPrice: 'X',
                limitedItemCandleIco: whiteCandle
            },
            {
                limitedItemName: 'Conduct',
                limitedItemImg: S15EXP2,
                limitedItemPrice: 'X',
                limitedItemCandleIco: whiteCandle
            },
            {
                limitedItemName: 'Skipping',
                limitedItemImg: S15EXP3,
                limitedItemPrice: 'X',
                limitedItemCandleIco: whiteCandle
            },
        ]
    },
    {
        seasonNo: 16,
        seasonName: 'Rememberance',
        seasonGuideName: 'Rememberance Guide',
        seasonGuideImg: S16GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Vault Repository.',
        ultiGifts: [
            {
                ultGiftName: 'Neck Accessory',
                ultGiftImg: S16ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S16HEART
            },
            {
                ultGiftName: 'Prop',
                ultGiftImg: S16ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S16HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Chimes',
                propGiftImg: S16PROP1,
                propGiftPrice: 30,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Kettle',
                propGiftImg: S16PROP2,
                propGiftPrice: 50,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Plant',
                propGiftImg: S16PROP3,
                propGiftPrice: 40,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Manta Plush',
                propGiftImg: S16PROP4,
                propGiftPrice: 17,
                propGiftCandleIco: whiteHeart
            },
            {
                propGiftName: 'Crab Plush',
                propGiftImg: S16PROP5,
                propGiftPrice: 19,
                propGiftCandleIco: whiteHeart
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Cure For Me Mask',
            //     limitedItemImg: S15LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 17,
        seasonName: 'Passage',
        seasonGuideName: 'Passage Guide',
        seasonGuideImg: S17GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Isle of Dawn.',
        ultiGifts: [
            {
                ultGiftName: 'Neck Accessory',
                ultGiftImg: S17ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S17HEART
            },
            {
                ultGiftName: 'Prop',
                ultGiftImg: S17ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S17HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Serow Mask',
                propGiftImg: S17PROP1,
                propGiftPrice: 48,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Boar Mask',
                propGiftImg: S17PROP2,
                propGiftPrice: 44,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Monkey Mask',
                propGiftImg: S17PROP3,
                propGiftPrice: 46,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Racoon Mask',
                propGiftImg: S17PROP4,
                propGiftPrice: 52,
                propGiftCandleIco: whiteHeart
            },
            {
                propGiftName: 'Footbag',
                propGiftImg: S17PROP5,
                propGiftPrice: 39,
                propGiftCandleIco: whiteHeart
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Cure For Me Mask',
            //     limitedItemImg: S15LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 18,
        seasonName: 'Moments',
        seasonGuideName: 'Moments Guide',
        seasonGuideImg: S18GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Prairie Peaks. Get your free camera from the guide.',
        ultiGifts: [
            {
                ultGiftName: 'Hat',
                ultGiftImg: S18ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S18HEART
            },
            {
                ultGiftName: 'Face Accessory',
                ultGiftImg: S18ULTIGIFT2,
                ultGiftPrice: 1,
                ultGiftHeartIco: S18HEART
            },
            {
                ultGiftName: 'Camera',
                ultGiftImg: S18ULTIGIFT3,
                ultGiftPrice: 1,
                ultGiftHeartIco: S18HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Camera',
                propGiftImg: S18PROP1,
                propGiftPrice: 'Free',
                propGiftCandleIco: whiteCandle
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Cure For Me Mask',
            //     limitedItemImg: S15LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 19,
        seasonName: 'Moments',
        seasonGuideName: 'Hopeful Steward',
        seasonGuideImg: S19GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Aviary Village.',
        ultiGifts: [
            {
                ultGiftName: 'Hair',
                ultGiftImg: S19ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S19HEART
            },
            {
                ultGiftName: 'Cape',
                ultGiftImg: S19ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S19HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Hair',
                propGiftImg: S19PROP1,
                propGiftPrice: 'Free',
                propGiftCandleIco: whiteCandle
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Cure For Me Mask',
            //     limitedItemImg: S15LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 20,
        seasonName: '9 Colored-Deer',
        seasonGuideName: 'Spirit of Mural',
        seasonGuideImg: S20GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Collab Room at Vault.',
        ultiGifts: [
            {
                ultGiftName: 'Hair',
                ultGiftImg: S20ULTIGIFT1,
                ultGiftPrice: 1,
                ultGiftHeartIco: S20HEART
            },
            {
                ultGiftName: 'Suitpants',
                ultGiftImg: S20ULTIGIFT2,
                ultGiftPrice: 1,
                ultGiftHeartIco: S20HEART
            },
            {
                ultGiftName: 'Cape',
                ultGiftImg: S20ULTIGIFT3,
                ultGiftPrice: 2,
                ultGiftHeartIco: S20HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'HairAccessory',
                propGiftImg: S20PROP1,
                propGiftPrice: '50',
                propGiftCandleIco: whiteCandle
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
        ],
        isLimitedItems: true,
        limitedItems: [
            {
                limitedItemName: 'Mask',
                limitedItemImg: S20LIMITEDITEM1,
                limitedItemPrice: 'X',
                limitedItemCandleIco: whiteCandle
            },
        ]
    },
    {
        seasonNo: 21,
        seasonName: 'Nesting',
        seasonGuideName: 'Nesting Guide',
        seasonGuideImg: S21GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Aviary Village Nesting Store.',
        ultiGifts: [
            {
                ultGiftName: 'Suitpants',
                ultGiftImg: S21ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S21HEART
            },
            {
                ultGiftName: 'Prop',
                ultGiftImg: S21ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S21HEART
            },
        ],
        propObtainable: false,
        seasonGuideGifts: [
            // {
            //     propGiftName: 'HairAccessory',
            //     propGiftImg: S21PROP1,
            //     propGiftPrice: '50',
            //     propGiftCandleIco: whiteCandle
            // },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Mask',
            //     limitedItemImg: S21LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 22,
        seasonName: 'Duets',
        seasonGuideName: 'Duets Guide',
        seasonGuideImg: S22GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Vault Collab Room.',
        ultiGifts: [
            {
                ultGiftName: 'Cape',
                ultGiftImg: S22ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S22HEART
            },
            {
                ultGiftName: 'Instrument',
                ultGiftImg: S22ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S22HEART
            },
            {
                ultGiftName: 'Prop',
                ultGiftImg: S22ULTIGIFT3,
                ultGiftPrice: 1,
                ultGiftHeartIco: S22HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Mask',
                propGiftImg: S22PROP1,
                propGiftPrice: '65',
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Emote',
                propGiftImg: S22EXP1,
                propGiftPrice: 'Free',
                propGiftCandleIco: whiteCandle
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: 'Little Prince Asteroid Jacket',
            //     iapImg: S11LIMITEDITEM3,
            //     iapPrice: 1500,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Mask',
            //     limitedItemImg: S22LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 23,
        seasonName: 'Moomin',
        seasonGuideName: 'Moomin Storybook',
        seasonGuideImg: S23GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Vault Collab Room.',
        ultiGifts: [
            {
                ultGiftName: 'Suitpants',
                ultGiftImg: S23ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S23HEART
            },
            {
                ultGiftName: 'Prop',
                ultGiftImg: S23ULTIGIFT2,
                ultGiftPrice: 1,
                ultGiftHeartIco: S23HEART
            },
            {
                ultGiftName: 'Moomin Plush',
                ultGiftImg: S23ULTIGIFT3,
                ultGiftPrice: 1,
                ultGiftHeartIco: S23HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Suit',
                propGiftImg: S23PROP1,
                propGiftPrice: '190',
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S23PROP2,
                propGiftPrice: '35',
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Emote',
                propGiftImg: S23EXP1,
                propGiftPrice: '9',
                propGiftCandleIco: whiteHeart
            },
        ],
        isAvailable: true,
        iapItems: [
            {
                iapName: `Moominmamma's Masterpiece Cape`,
                iapImg: S23LIMITEDITEM1,
                iapPrice: 1499,
            },
            {
                iapName: `Hattifattener Shoulder Buddy`,
                iapImg: S23LIMITEDITEM2,
                iapPrice: 179,
            },
            {
                iapName: `Moomintroll Accessory Set - Ears`,
                iapImg: S23LIMITEDITEM3,
                iapPrice: 719,
            },
            {
                iapName: `Moomintroll Accessory Set - Tail`,
                iapImg: S23LIMITEDITEM4,
                iapPrice: 'bundle',
            },
            {
                iapName: `Roving Snufkin Robe Set - Robe`,
                iapImg: S23LIMITEDITEM5,
                iapPrice: 599,
            },
            {
                iapName: `Roving Snufkin Robe Set - Scarf`,
                iapImg: S23LIMITEDITEM6,
                iapPrice: 'bundle',
            },
            {
                iapName: `Pointed Snufkin Hat`,
                iapImg: S23LIMITEDITEM7,
                iapPrice: 299,
            },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Mask',
            //     limitedItemImg: S23LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 24,
        seasonName: 'Moomin',
        seasonGuideName: 'Moomin Storybook',
        seasonGuideImg: S24GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Vault Collab Room.',
        ultiGifts: [
            {
                ultGiftName: 'Mask',
                ultGiftImg: S24ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S24HEART
            },
            {
                ultGiftName: 'Cape',
                ultGiftImg: S24ULTIGIFT1,
                ultGiftPrice: 1,
                ultGiftHeartIco: S24HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'cape',
                propGiftImg: S24PROP1,
                propGiftPrice: 12,
                propGiftCandleIco: whiteHeart
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: `Moominmamma's Masterpiece Cape`,
            //     iapImg: S24LIMITEDITEM1,
            //     iapPrice: 1499,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Mask',
            //     limitedItemImg: S24LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 25,
        seasonName: 'Blue Bird',
        seasonGuideName: 'Blue Bird Guide',
        seasonGuideImg: S25GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Season Meditation Transport is at Blue Bird Theater - Elevated Clearing Hidden Forest.',
        ultiGifts: [
            {
                ultGiftName: 'Mask',
                ultGiftImg: S25ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S25HEART
            },
            {
                ultGiftName: 'Cape',
                ultGiftImg: S25ULTIGIFT2,
                ultGiftPrice: 3,
                ultGiftHeartIco: S25HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Prop',
                propGiftImg: S25PROP1,
                propGiftPrice: 18,
                propGiftCandleIco: whiteHeart
            },
            {
                propGiftName: 'Expression',
                propGiftImg: S25EXP1,
                propGiftPrice: 8,
                propGiftCandleIco: whiteHeart
            },
            {
                propGiftName: 'Stance',
                propGiftImg: S25STANCE1,
                propGiftPrice: 3,
                propGiftCandleIco: whiteHeart
            },
            {
                propGiftName: 'Call',
                propGiftImg: S25CALL1,
                propGiftPrice: 3,
                propGiftCandleIco: whiteHeart
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: `Moominmamma's Masterpiece Cape`,
            //     iapImg: S25LIMITEDITEM1,
            //     iapPrice: 1499,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Mask',
            //     limitedItemImg: S25LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 26,
        seasonName: 'The Two Embers - Part 1',
        seasonGuideName: `Vault Elder's Lantern`,
        seasonGuideImg: S26GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Season Meditation Transport is at Sky Cinema - Aviary Village.',
        ultiGifts: [
            {
                ultGiftName: 'Head Accessory',
                ultGiftImg: S26ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S26HEART
            },
            {
                ultGiftName: 'Cape',
                ultGiftImg: S26ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S26HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Prop',
                propGiftImg: S26PROP1,
                propGiftPrice: 27,
                propGiftCandleIco: whiteCandle
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: `Moominmamma's Masterpiece Cape`,
            //     iapImg: S26LIMITEDITEM1,
            //     iapPrice: 1499,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Mask',
            //     limitedItemImg: S26LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 27,
        seasonName: 'Migration',
        seasonGuideName: `Migration Guide`,
        seasonGuideImg: S27GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is camped at sand Dunes of Isle of Dawn.',
        ultiGifts: [
            {
                ultGiftName: 'Head Accessory',
                ultGiftImg: S27ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S27HEART
            },
            {
                ultGiftName: 'Suitpants',
                ultGiftImg: S27ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S27HEART
            },
            {
                ultGiftName: 'Boots',
                ultGiftImg: S27ULTIGIFT3,
                ultGiftPrice: 1,
                ultGiftHeartIco: S27HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Prop',
                propGiftImg: S27PROP1,
                propGiftPrice: 32,
                propGiftCandleIco: whiteCandle
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: `Moominmamma's Masterpiece Cape`,
            //     iapImg: S27LIMITEDITEM1,
            //     iapPrice: 1499,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Mask',
            //     limitedItemImg: S27LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 28,
        seasonName: 'Lightmending',
        seasonGuideName: `Lightmending Guide`,
        seasonGuideImg: S28GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Vault.',
        ultiGifts: [
            {
                ultGiftName: 'Hair',
                ultGiftImg: S28ULTIGIFT1,
                ultGiftPrice: 1,
                ultGiftHeartIco: S28HEART
            },
            {
                ultGiftName: 'Mask',
                ultGiftImg: S28ULTIGIFT2,
                ultGiftPrice: 1,
                ultGiftHeartIco: S28HEART
            },
            {
                ultGiftName: 'Cape',
                ultGiftImg: S28ULTIGIFT3,
                ultGiftPrice: 2,
                ultGiftHeartIco: S28HEART
            },
        ],
        propObtainable: false,
        seasonGuideGifts: [
            // {
            //     propGiftName: 'Prop',
            //     propGiftImg: S28PROP1,
            //     propGiftPrice: 32,
            //     propGiftCandleIco: whiteCandle
            // },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: `Moominmamma's Masterpiece Cape`,
            //     iapImg: S28LIMITEDITEM1,
            //     iapPrice: 1499,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Mask',
            //     limitedItemImg: S28LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 29,
        seasonName: 'Carnival',
        seasonGuideName: `Carnival Guide`,
        seasonGuideImg: S29GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is campled at sand Dunes of Isle of Dawn.',
        ultiGifts: [
            {
                ultGiftName: 'Hair',
                ultGiftImg: S29ULTIGIFT1,
                ultGiftPrice: 2,
                ultGiftHeartIco: S29HEART
            },
            {
                ultGiftName: 'Cape',
                ultGiftImg: S29ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S29HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Prop',
                propGiftImg: S29PROP1,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S29PROP2,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S29PROP3,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S29PROP4,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S29PROP5,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S29PROP6,
                propGiftPrice: 26,
                propGiftCandleIco: whiteCandle
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: `Moominmamma's Masterpiece Cape`,
            //     iapImg: S29LIMITEDITEM1,
            //     iapPrice: 1499,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Mask',
            //     limitedItemImg: S29LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
    {
        seasonNo: 30,
        seasonName: 'Dear Van Gogh',
        seasonGuideName: `Vase with Fifteen Sunflowers`,
        seasonGuideImg: S30GUIDE,
        guideDescription: 'Season Quest is available for all players to complete and relive. Guide is at Story Space - Starry Gallery.',
        ultiGifts: [
            {
                ultGiftName: 'Hair',
                ultGiftImg: S30ULTIGIFT1,
                ultGiftPrice: 1,
                ultGiftHeartIco: S30HEART
            },
            {
                ultGiftName: 'Cape',
                ultGiftImg: S30ULTIGIFT2,
                ultGiftPrice: 2,
                ultGiftHeartIco: S30HEART
            },
            {
                ultGiftName: 'Prop',
                ultGiftImg: S30ULTIGIFT3,
                ultGiftPrice: 1,
                ultGiftHeartIco: S30HEART
            },
        ],
        propObtainable: true,
        seasonGuideGifts: [
            {
                propGiftName: 'Prop',
                propGiftImg: S30PROP1,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S30PROP2,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S30PROP3,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S30PROP4,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S30PROP5,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
            {
                propGiftName: 'Prop',
                propGiftImg: S30PROP6,
                propGiftPrice: 0,
                propGiftCandleIco: whiteCandle
            },
        ],
        isAvailable: false,
        iapItems: [
            // {
            //     iapName: `Moominmamma's Masterpiece Cape`,
            //     iapImg: S29LIMITEDITEM1,
            //     iapPrice: 1499,
            // },
        ],
        isLimitedItems: false,
        limitedItems: [
            // {
            //     limitedItemName: 'Mask',
            //     limitedItemImg: S29LIMITEDITEM1,
            //     limitedItemPrice: 'X',
            //     limitedItemCandleIco: whiteCandle
            // },
        ]
    },
]