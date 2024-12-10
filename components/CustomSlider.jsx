"use client";
import dynamic from "next/dynamic";
const Swiper = dynamic(() => import('swiper/react'), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react'), { ssr: false });
import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const CustomSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  if (!isClient) {
    return null;
  }
  return (

    <div>
      {/* Custom Previous Button */}
      <button
        ref={prevRef}
        className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 p-2 bg-[#5CD2DD] text-white z-50"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 p-2 bg-[#5CD2DD] text-white z-50"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default CustomSlider;