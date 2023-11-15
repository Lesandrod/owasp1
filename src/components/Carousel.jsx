import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import cards from '../data/cardsdata';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';



const Carousel = () => {
    return (
        <div className="container">
            
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5   ,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >

                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/owasp/owasp${index+1}`}> <Card name={card.name}  img={card.img} description={card.description}
                          /></Link>
                       
                    
                    </SwiperSlide>))}
                

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default Carousel