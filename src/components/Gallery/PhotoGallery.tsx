"use client";
import React from "react";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
// Стилі

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import Image from "next/image";

const Gallery: React.FC = () => {
  const images = [
	 { src: "/images/im26.jpg", thumb: "/images/im26.jpg" },
	  { src: "/images/im27.jpg", thumb: "/images/im27.jpg" },
	  { src: "/images/im28.jpg", thumb: "/images/im28.jpg" },
	  { src: "/images/im29.jpg", thumb: "/images/im29.jpg" },
	  { src: "/images/im30.jpg", thumb: "/images/im30.jpg" },
	  { src: "/images/im31.jpg", thumb: "/images/im31.jpg" },
	  { src: "/images/im32.jpg", thumb: "/images/im32.jpg" },
	  { src: "/images/im33.jpg", thumb: "/images/im33.jpg" },
	  { src: "/images/im34.jpg", thumb: "/images/im34.jpg" },
	  
    { src: "/images/im0.jpg", thumb: "/images/im0.jpg" },
    { src: "/images/im1.jpg", thumb: "/images/im1.jpg" },
    { src: "/images/im2.jpg", thumb: "/images/im2.jpg" },
    { src: "/images/im3.jpg", thumb: "/images/im3.jpg" },
    { src: "/images/im4.jpg", thumb: "/images/im4.jpg" },
    { src: "/images/im5.jpg", thumb: "/images/im5.jpg" },
    { src: "/images/im6.jpg", thumb: "/images/im6.jpg" },
    { src: "/images/im7.jpg", thumb: "/images/im7.jpg" },
    { src: "/images/im8.jpg", thumb: "/images/im8.jpg" },
    { src: "/images/im9.jpg", thumb: "/images/im9.jpg" },
    { src: "/images/im10.jpg", thumb: "/images/im10.jpg" },
    { src: "/images/im11.jpg", thumb: "/images/im11.jpg" },
    { src: "/images/im12.jpg", thumb: "/images/im12.jpg" },
    { src: "/images/im14.jpg", thumb: "/images/im14.jpg" },
    { src: "/images/im15.jpg", thumb: "/images/im15.jpg" },
    { src: "/images/im16.jpg", thumb: "/images/im16.jpg" },
    { src: "/images/im17.jpg", thumb: "/images/im17.jpg" },
    { src: "/images/im18.jpg", thumb: "/images/im18.jpg" },
    { src: "/images/im19.jpg", thumb: "/images/im19.jpg" },
    { src: "/images/im20.jpg", thumb: "/images/im20.jpg" },
    { src: "/images/im21.jpg", thumb: "/images/im21.jpg" },
    { src: "/images/im22.jpg", thumb: "/images/im22.jpg" },
    { src: "/images/im23.jpg", thumb: "/images/im23.jpg" },
    { src: "/images/im24.jpg", thumb: "/images/im24.jpg" },
    { src: "/images/im25.jpg", thumb: "/images/im25.jpg" },

	 
  ];

  return (
    <section className="gallery mt-15">
		<div className="gallery__container">
      <h2 className="text-center text-3xl mb-5 font-bold">Галерея нашої школи</h2>
		<div className="grid grid-cols-1   min-[500px]:grid-cols-2 md:grid-cols-4 gap-4">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}  elementClassNames="contents">
        {images.map((img, i) => (
          <a href={img.src} key={i}  
			//  data-sub-html="<h4>Гори Карпати</h4><p>Світанок над полониною</p>"
			// data
			 >
				<Image src={img.src} alt='' width='400' height='400' className="img--g"/>
				{/* <p>text</p> */}
            {/* <img src={img.thumb} alt={`Фото ${i + 1}`} /> */}
          </a>
        ))}
      </LightGallery >
		</div>
		</div>
    </section>
  );
};

export default Gallery;