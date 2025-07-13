import React from "react";
import Cards from "./cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    image: "/image/topicream.jpg",
    skinType: "Sensitive skin exposed to sun",
    benefit: "Sun protect",
    title: "MOISTURIZING SUN SPRAY SPF30",
    size: "30/150 ML",
    price: "17.70$",
  },
  {
    image: "/image/topicream1.jpg",
    skinType: "Sensitive skin exposed to sun",
    benefit: "Sun protect",
    title: "MOISTURIZING SUN SPRAY SPF50+",
    size: "50+/150 ML",
    price: "18.80$",
  },
  {
    image: "/image/topicream2.jpg",
    skinType: "Dry Skin",
    benefit: "ULTRA-MOISTURIZING",
    title: "BODY MILK",
    size: "ECO-REFILL",
    price: "14.50$",
  },
  {
    image: "/image/topicream3.jpg",
    skinType: "Dry Skin",
    benefit: "ULTRA-MOISTURIZING",
    title: "SHOWER OIL",
    size: "ECO-REFILL",
    price: "12.50$",
  },
  {
    image: "/image/topicream4.jpg",
    skinType: "Infant's fragile skin",
    benefit: "BABY",
    title: "GENTLE CLEANSING GEL",
    size: "500ML",
    price: "10.40$",
  },
  {
    image: "/image/topicream5.jpg",
    skinType: "Infant fragile skin",
    benefit: "BABY",
    title: "PROTECTIVE MOISTURIZING MILK",
    size: "200ML",
    price: "9.30$",
  },
  {
    image: "/image/topicream6.jpg",
    skinType: "Fragile skin infants other than premature babies",
    benefit: "BABY",
    title: "CLEANSING WATER WIPES",
    size: "*60",
    price: "3.80$",
  },
  {
    image: "/image/topicream7.jpg",
    skinType: "Infants fragile skin",
    benefit: "BABY",
    title: "FLASH CRADLE CAP CARE",
    size: "40ML",
    price: "12.40$",
  },
];

function ProductItems() {
  return (
    <div className="w-[95%] mx-auto mt-10">
      {/* Header Tabs */}
      <div className="flex justify-center gap-6 text-gray-700 font-medium text-lg mb-6">
        {["What's new", "Bestsellers", "Our offers"].map((label, i) => (
          <button key={i} className="hover:text-blue-600 transition">
            {label}
          </button>
        ))}
      </div>

      {/* Product Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="pb-10">
            <Cards
              src={product.image}
              top={product.skinType}
              mid={product.benefit}
              ubottom={product.title}
              umid={product.size}
              lbottom={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductItems;
