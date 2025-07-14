import React from "react";
import Productcards from "./productcards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    img: "/image/topibg.jpg",
    alt: "Sun Protect",
    topText: "Sur toute la gamme",
    midText: "SUN PROTECT",
    bottomText: "Protection & soin au délicat parfum d'été",
  },
  {
    img: "/image/topibg0.jpg",
    alt: "MELA",
    topText: "Sur toute la gamme * anti-taches",
    midText: "MELA",
    bottomText: "Pour un teint unifié & éclatant",
  },
  {
    img: "/image/topibg02.jpg",
    alt: "Ultra Hydratant",
    topText: "Nacré & Scintillant Corps",
    midText: "ULTRA-HYDRATANT",
    bottomText: "Cet été, ALLIEZ HYDRATATION & PAILLETTES",
  },
];

function ProductOptions() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <Productcards
              imgsrc={item.img}
              imgalt={item.alt}
              top={item.topText}
              mid={item.midText}
              bottom={item.bottomText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductOptions;
