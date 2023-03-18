import React, { useState, useEffect } from "react";
import { A11y, Navigation, Scrollbar, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import a1 from '../Images/menu/a1.jpg'
import a2 from '../Images/menu/a2.jpg'
import r1 from '../Images/menu/r1.jpg'
import r2 from '../Images/menu/r2.jpg'
import ramen1 from '../Images/menu/1.jpg'
import ramen5 from '../Images/menu/5.jpg'
import ramen7 from '../Images/menu/7.jpg'

import "./GalleryCarousel.css";

const GalleryCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="gallery">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          601: { slidesPerView: 2 },
          1025: { slidesPerView: 3 },
        }}
        loop={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        // spaceBetween={40}
        // slidesPerView={slidesPerView}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={r2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={r1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={ramen1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={a1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={ramen5} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={a2} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={ramen7} alt="" />
        </SwiperSlide>

        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}

      </Swiper>
    </section>
  );
};

export default GalleryCarousel;
