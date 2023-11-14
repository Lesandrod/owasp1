import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const cards = [
    {
        img: "https://i.ibb.co/HqgT30f/TOP-10-Icons-Final-Broken-Access-Control.png",
        name: "A01:2021 ",
        description: "Pérdida de Control de Acceso"
    },
    {
        img: "https://i.ibb.co/zrcCyB7/TOP-10-Icons-Final-Crypto-Failures-1.png",
        name: "A02:2021",
        description: "Fallas Criptográficas"
    },
    {
        img: "https://i.ibb.co/M8DR88Z/TOP-10-Icons-Final-Injection.png",
        name: "A03:2021  ",
        description: "Inyección"
    },
    {
        img: "https://i.ibb.co/bBhDGtS/TOP-10-Icons-Final-Insecure-Design.png",
        name: "A04:2021 ",
        description: "Diseño Inseguro"
    },
    {
        img: "https://i.ibb.co/SwCQyKf/TOP-10-Icons-Final-Security-Misconfiguration.png",
        name: "A05:2021 ",
        description: "Configuración de Seguridad Incorrecta"
    },
    {
        img: "https://i.ibb.co/FV0kkQV/TOP-10-Icons-Final-Vulnerable-Outdated-Components.png",
        name: "A06:2021",
        description: "Componentes Vulnerables y Desactualizados"
    },
    {
        img: "https://i.ibb.co/hs4b8Yv/TOP-10-Icons-Final-Identification-and-Authentication-Failures.png",
        name: "A07:2021 ",
        description: "Fallas de Identificación y Autenticación"
    },
    {
        img: "https://i.ibb.co/VQRZRCj/TOP-10-Icons-Final-Software-and-Data-Integrity-Failures.png",
        name: "A08:2021 ",
        description: "Fallas en el Software y en la Integridad de los Datos"
    },
    {
        img: "https://i.ibb.co/FVHM8P3/TOP-10-Icons-Final-Security-Logging-and-Monitoring-Failures.png",
        name: "A09:2021",
        description: "Fallas en el Registro y Monitoreo"
    },
    {
        img: "https://i.ibb.co/yQG3BPC/TOP-10-Icons-Final-SSRF.png",
        name: "A10:2021",
        description: "Falsificación de Solicitudes del Lado del Servidor"
    }
]

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
                        <Card name={card.name}  img={card.img} description={card.description}
                          />
                    
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