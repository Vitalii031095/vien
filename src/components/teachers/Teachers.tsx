'use client'
import {teachers } from "./teachersAr"

// ___________слайд____________________
import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination} from "swiper/modules"

import "./teachers.css"
import Image from "next/image.js"
//_________________________________________

const Teachers = () => {
  const teachersArray = teachers.map((teach) => {
    return (
      <SwiperSlide key={teach.id}>
        <div className="teachers__wrapper">
          <div className="teachers__img">
				<Image src={teach.img} alt={teach.name} width='400' height='400'/>
            {/* <img src={teach.img} alt={teach.name} /> */}
          </div>
			 <div className="teachers__info">
				<p className="teachers__name">{teach.name}</p>
				<p className="teachers__position">{teach.position}</p>
			 </div>
        </div>
      </SwiperSlide>
    )
  })
  return (
    <>
      <section className="teachers-slide">
        <div className="teachers-slide__container">
          <h2 className="meta__title teachers-slide__title">Наші вчителі:</h2>
          <Swiper
			 spaceBetween={20}
			  loop={true}
			 pagination={{
				clickable: true,
			 }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
		// 		   breakpoints={{
      //     640: {
      //       slidesPerView: 2,
      //       spaceBetween: 20,
      //     },
      //     768: {
      //       slidesPerView: 4,
      //       spaceBetween: 40,
      //     },
      //     1024: {
      //       slidesPerView: 5,
      //       spaceBetween: 50,
      //     },
      //   }}
				
            modules={[EffectCoverflow,Pagination ]}
            className="mySwiper__teachers"
          >
           
      
       
          {teachersArray}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Teachers
