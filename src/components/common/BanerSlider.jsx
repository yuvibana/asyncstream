import React, { useEffect, useRef } from 'react';
import Swiper, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

Swiper.use([Autoplay]);

const BannerSlider = ({ slideDirection = false, slidesData = [] }) => {

    const swiperRef = useRef(null);

    useEffect(() => {
        if (slidesData.length > 0 && swiperRef.current) {
            new Swiper(swiperRef.current, {
                spaceBetween: 0,
                slidesPerView: 4,
                centeredSlides: true,
                longSwipes: true,
                allowTouchMove: true,
                reverseDirection: slideDirection,
                autoplay: {
                    delay: 1,
                },
                freeMode: true,
                speed: 5000,
                loop: true,
            });
        }
    }, [slideDirection, slidesData]);

    if (slidesData.length < 1) return <h1 className='text-center'>No data</h1>;

    return (
        <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
                {slidesData.map((slide) => (
                    <div key={slide.id} className="swiper-slide">
                        <img src={slide.imgUrl} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BannerSlider;
