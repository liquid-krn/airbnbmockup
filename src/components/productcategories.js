import React from "react";
import Pccards from "./productcartegoriescards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const prod = [
  {
    imgsrc: "/image/topismooth.jpg",
    ptype: "ULTRA-MOISTURIZING",
    pfun: "Hydrates, Protects",
  },
  {
    imgsrc: "/image/topismooth1.jpg",
    ptype: "MELA",
    pfun: "Unifies, Anti-dark spots",
  },
  {
    imgsrc: "/image/topismooth2.jpg",
    ptype: "CICA+",
    pfun: "Repairs, Anti-irritation",
  },
  {
    imgsrc: "/image/topismooth4.jpg",
    ptype: "BABY",
    pfun: "Takes care babies",
  },
  {
    imgsrc: "/image/topismooth5.jpg",
    ptype: "DERMO-SPECIFIC",
    pfun: "Smooth, anti-roughness",
  },
  {
    imgsrc: "/image/topismooth6.jpg",
    ptype: "SUN PROTECT",
    pfun: "Protects, Hydrates",
  },
];

function Productcartegories() {
  return (
    <div className=" w-[90%] m-auto mt-5 mb-5">
      <div className="text-center text-gray-700 font-semibold text-2xl">
        <h1>DERMATOLOGICAL EXPERTISE THAT MEETS ALL NEEDS</h1>
      </div>

      <div className="flex justify-center gap-6 text-gray-700 font-semibold my-4">
        <h1 className="text-lg">Body</h1>
        <h1 className="text-lg">Face</h1>
        <h1 className="text-lg">Hair</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3.2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        scrollbar={{ draggable: true }}
        className="px-2"
      >
        {prod.map((item, index) => (
          <SwiperSlide key={index}>
            <Pccards
              src={item.imgsrc}
              imgClassname="hover:scale-105 hover:opacity-70 transition-opacity duration-200 transfrom transition-transform duration-300 w-full h-full object-cover cursor-pointer "
              bclassName="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-full hover:scale-105 transfrom transition-transform duration-300 text-gray-600 hover:text-yellow-400 transition duration-300"
              name={item.ptype}
              ptype={item.pfun}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Productcartegories;
