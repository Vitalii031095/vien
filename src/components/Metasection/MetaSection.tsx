'use client';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules';
import "swiper/css"
import "swiper/css/effect-cards"
import 'swiper/css/pagination';
// import './metasection.css'

import { EffectCards } from "swiper/modules"
import Image from "next/image";



const MetaSection = () => {
  return (

    <section className="meta">
      <div className="meta__container">
        <h2 className="meta__title">Мета школи:</h2>

        <div className="meta__box">
          <div className="meta__info">
            <ul className="meta__list">
              <li className="meta__item">Спілкування українською мовою</li>
              <li className="meta__item">
                Навчити дітей читати та писати українською мовою
              </li>
              <li className="meta__item">
                Передати культуру, історію, традиції та звичаї українського
                народу.
              </li>
              <li className="meta__item">Згуртовувати українців в Данії.</li>
            </ul>
          </div>

          <div className="meta__slider">
            <Swiper
				 spaceBetween={30}
				 pagination={{
					clickable: true,
				 }}
				// ============карточки=================
				 modules={[EffectCards,Pagination]}
				 className="mySwiper"
				  effect={"cards"}
				  grabCursor={true}
				//   ==============================
            >
					 <SwiperSlide>
						<Image className="meta__img" src='/meta-images/sl4.jpg' alt='as' width='600' height='500' />
                
              </SwiperSlide>
              <SwiperSlide>
					<Image className="meta__img" src='/meta-images/f1.jpg' alt='as'  width='650' height='550'/>
              </SwiperSlide>
              <SwiperSlide>
					<Image className="meta__img" src='/meta-images/fon2.jpg' alt='as' width='600' height='500' />
              </SwiperSlide>
              <SwiperSlide>
					<Image className="meta__img" src='/meta-images/sl3.jpg' alt='as' width='600' height='500' />
              </SwiperSlide>
             
              <SwiperSlide>
					<Image className="meta__img" src='/meta-images/sl5.jpg' alt='as' width='600' height='500' />
              </SwiperSlide>
            
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MetaSection
