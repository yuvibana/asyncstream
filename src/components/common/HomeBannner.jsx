import React, { useState } from 'react';
import BannerSlider from './BanerSlider';
import Localimages from '../../Localimages';

const HomeBannner = () => {

    const [directionDefault, setDirectionDefault] = useState(false)
    const [directionReverse, setDirectionReverse] = useState(true)

    const slidesData1 = [
        { id: 1, imgUrl: Localimages.slideImg1 },
        { id: 2, imgUrl: Localimages.slideImg2 },
        { id: 3, imgUrl: Localimages.slideImg3 },
        { id: 4, imgUrl: Localimages.slideImg4 },
        { id: 5, imgUrl: Localimages.slideImg5 },
    ];

    const slidesData2 = [
        { id: 1, imgUrl: Localimages.slideImg6 },
        { id: 2, imgUrl: Localimages.slideImg7 },
        { id: 3, imgUrl: Localimages.slideImg8 },
        { id: 4, imgUrl: Localimages.slideImg9 },
        { id: 5, imgUrl: Localimages.slideImg10 },
    ];

    const slidesData3 = [
        { id: 1, imgUrl: Localimages.slideImg11 },
        { id: 2, imgUrl: Localimages.slideImg12 },
        { id: 3, imgUrl: Localimages.slideImg13 },
        { id: 4, imgUrl: Localimages.slideImg9 },
        { id: 5, imgUrl: Localimages.slideImg5 },
    ];

    return (
        <div
            className="slidersWrapper customOverLay"
            style={{ background: 'url(https://moviesapp-peach.vercel.app/static/media/banner.fe6f6294084139fe3e10.jpg)' }}>
            <BannerSlider slideDirection={directionDefault} slidesData={slidesData1} />
            <BannerSlider slideDirection={directionReverse} slidesData={slidesData2} />
            <BannerSlider slideDirection={directionDefault} slidesData={slidesData3} />
        </div>
    );
}


export default HomeBannner;