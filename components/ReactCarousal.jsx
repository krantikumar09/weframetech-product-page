import React, { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import specific styles if needed
import "swiper/css/pagination"; // Import specific styles if needed
import { Navigation, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const ReactCarousal = () => {
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
  return (
    <div>
      {/* Custom Previous Button */}
      <button
        ref={prevRef}
        className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 p-2 bg-[#5CD2DD] text-white z-50"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
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
};

export default ReactCarousal;
