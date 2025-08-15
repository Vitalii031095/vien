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
    { src: "/images/fon1.jpg", thumb: "/images/fon1.jpg" },
    { src: "/images/fon3.jpg", thumb: "/images/fon3.jpg" },
    { src: "/images/school.jpg", thumb: "/images/school.jpg" },
    { src: "/images/v1.jpg", thumb: "/images/v1.jpg" },
    { src: "/images/v2.jpg", thumb: "/images/v2.jpg" },
    { src: "/images/v3.jpg", thumb: "/images/v3.jpg" },
    { src: "/images/v4.jpg", thumb: "/images/v4.jpg" },
    { src: "/images/v5.jpg", thumb: "/images/v5.jpg" },
    { src: "/images/v6.jpg", thumb: "/images/v6.jpg" },
    { src: "/images/v7.jpg", thumb: "/images/v7.jpg" },
    { src: "/images/v8.jpg", thumb: "/images/v8.jpg" },
    { src: "/images/v9.jpg", thumb: "/images/v9.jpg" },
    { src: "/images/v10.jpg", thumb: "/images/v10.jpg" },
    { src: "/images/v11.jpg", thumb: "/images/v11.jpg" },
    { src: "/images/v12.jpg", thumb: "/images/v13.jpg" },
    { src: "/images/v13.jpg", thumb: "/images/v13.jpg" },
    { src: "/images/v14.jpg", thumb: "/images/v14.jpg" },
    { src: "/images/v15.jpg", thumb: "/images/v15.jpg" },
    { src: "/images/v16.jpg", thumb: "/images/v16.jpg" },
    { src: "/images/v17.jpg", thumb: "/images/v17.jpg" },
    { src: "/images/v18.jpg", thumb: "/images/v18.jpg" },
    { src: "/images/v19.jpg", thumb: "/images/v19.jpg" },
    { src: "/images/v20.jpg", thumb: "/images/v20.jpg" },
  ];

  return (
    <section className="gallery mt-15">
		<div className="gallery__container">
      <h2 className="text-center text-3xl mb-5 font-bold">Галерея нашої школи</h2>
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}  elementClassNames="contents">
        {images.map((img, i) => (
          <a href={img.src} key={i}  data-sub-html="<h4>Гори Карпати</h4><p>Світанок над полониною</p>">
				<Image src={img.src} alt='' width='400' height='400'/>
				<p>text</p>
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