"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="product px-4 mt-6">
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-bodyPrimary">Home</p>
        <p className="text-sm font-medium text-bodyPrimaryLight flex items-center gap-2">
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.3" cx="2.5" cy="2.5" r="2.5" fill="#9C9C9C" />
          </svg>
          Art de la table
        </p>
      </div>

      {/* product */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="flex flex-col-reverse lg:flex-row gap-4 bg-[#F8F6F4] p-4 md:p-8 rounded-xl">
          <div className="flex lg:flex-col gap-3">
            <div className="w-16 h-16  cursor-pointer rounded-md overflow-hidden">
              <Image className="object-cover" src={assets.table} alt="" loading="lazy" />
            </div>
            <div className="w-16 h-16  cursor-pointer rounded-md overflow-hidden opacity-50">
              <Image className="object-cover" src={assets.table} alt="" loading="lazy" />
            </div>
            <div className="w-16 h-16  cursor-pointer rounded-md overflow-hidden opacity-50">
              <Image className="object-cover" src={assets.table} alt="" loading="lazy" />
            </div>
            <div className="w-16 h-16  cursor-pointer rounded-md overflow-hidden opacity-50">
              <Image className="object-cover" src={assets.table} alt="" loading="lazy" />
            </div>
          </div>

          <Image
            className="flex-1 w-full h-[500px] rounded-md"
            loading="lazy"
            src={assets.main_product}
            alt=""
          />
        </div>

        <div className="p-2 flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h1 className="font-playfair text-2xl md:text-4xl lg:text-4xl text-gray-900 leading-normal mb-3">
                Cheese – appareil à raclette 1/2 roue
              </h1>
              <FontAwesomeIcon icon={faHeart} className="text-2xl" />
            </div>

            <h6 className="font-geist text-gray-900 text-xl md:text-2xl mb-3">
              39,50€ <span className="text-bodyPrimaryLight">/pièce</span>
            </h6>

            <hr className="bg-[#9C9C9C]" />

            <div className="my-4 md:my-6 flex gap-6">
              <div className="flex gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8616 5.11819L18.8818 0.138422C18.7931 0.0498281 18.673 0 18.5476 0C18.4223 0 18.3022 0.0498281 18.2135 0.138422L14.9272 3.42473L14.9272 3.42478L14.9271 3.42483L11.6409 6.71105L11.6408 6.71114L11.6407 6.71123L1.78153 16.5704L1.78148 16.5705L0.138375 18.2135C0.0498281 18.3022 0 18.4223 0 18.5476C0 18.6729 0.0498281 18.7932 0.138422 18.8818L5.11823 23.8616C5.21053 23.9539 5.33147 24 5.45236 24C5.5733 24 5.69419 23.9539 5.78648 23.8616L23.8616 5.78648C23.9502 5.69789 24 5.57766 24 5.45236C24 5.32702 23.9502 5.20683 23.8616 5.11819ZM5.45236 22.8591L1.14089 18.5476L2.11561 17.5729L2.94347 18.4008C3.03577 18.4931 3.1567 18.5392 3.27759 18.5392C3.39853 18.5392 3.51942 18.4931 3.61172 18.4008C3.79627 18.2162 3.79627 17.917 3.61172 17.7324L2.78391 16.9046L3.75891 15.9296L5.26889 17.4396C5.36119 17.5319 5.48212 17.578 5.60302 17.578C5.72395 17.578 5.84484 17.5318 5.93714 17.4396C6.12169 17.255 6.12169 16.9558 5.93714 16.7713L4.42716 15.2613L5.40211 14.2863L6.22997 15.1142C6.32227 15.2065 6.4432 15.2526 6.56409 15.2526C6.68498 15.2526 6.80592 15.2065 6.89822 15.1142C7.08277 14.9296 7.08277 14.6304 6.89822 14.4458L6.07036 13.618L7.04513 12.6432L8.5553 14.1534C8.64759 14.2457 8.76853 14.2919 8.88942 14.2919C9.01036 14.2919 9.1313 14.2457 9.22355 14.1534C9.40809 13.9689 9.40809 13.6697 9.22355 13.4851L7.71333 11.9749L8.68814 11.0001L9.516 11.8276C9.60825 11.9199 9.72919 11.966 9.85003 11.966C9.97102 11.966 10.092 11.9198 10.1842 11.8275C10.3687 11.6429 10.3687 11.3437 10.1841 11.1592L9.35634 10.3318L10.3315 9.35667L11.8417 10.8669C11.934 10.9592 12.0549 11.0053 12.1758 11.0053C12.2967 11.0053 12.4177 10.9592 12.51 10.8669C12.6945 10.6823 12.6945 10.3831 12.51 10.1985L10.9997 8.68833L11.9745 7.71361L12.8023 8.54147C12.8946 8.63377 13.0155 8.67989 13.1364 8.67989C13.2573 8.67989 13.3783 8.63372 13.4706 8.54147C13.6551 8.35692 13.6551 8.05772 13.4706 7.87317L12.643 7.04531L13.6178 6.07055L15.128 7.58077C15.2203 7.67306 15.3412 7.71919 15.4621 7.71919C15.583 7.71919 15.7039 7.67302 15.7962 7.58077C15.9808 7.39622 15.9808 7.09702 15.7962 6.91247L14.286 5.4022L15.261 4.42725L16.0886 5.25487C16.1809 5.34717 16.3018 5.3933 16.4227 5.3933C16.5436 5.3933 16.6645 5.34717 16.7568 5.25487C16.9414 5.07033 16.9414 4.77112 16.7568 4.58653L15.9293 3.75891L16.9043 2.78391L18.4145 4.29413C18.5068 4.38642 18.6278 4.43255 18.7486 4.43255C18.8695 4.43255 18.9905 4.38637 19.0828 4.29413C19.2673 4.10958 19.2673 3.81037 19.0828 3.62583L17.5729 2.11561L18.5476 1.14089L22.8591 5.45236L5.45236 22.8591Z"
                    fill="#9C9C9C"
                  />
                </svg>

                <p className="font-geist text-md md:text-xl font-medium">
                  20 <sup>cm</sup>
                </p>
              </div>

              <div className="flex gap-4">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5295 0.954895C18.9217 0.954895 24.1035 6.13678 24.1035 12.529C24.1035 18.9212 18.9217 24.103 12.5295 24.103C6.13728 24.103 0.955395 18.9212 0.955395 12.529C0.955395 6.13678 6.13728 0.954895 12.5295 0.954895ZM12.5295 1.88082C6.64866 1.88082 1.88132 6.64816 1.88132 12.529C1.88132 18.4098 6.64866 23.1771 12.5295 23.1771C18.4103 23.1771 23.1776 18.4098 23.1776 12.529C23.1776 6.64816 18.4103 1.88082 12.5295 1.88082Z"
                    fill="#9C9C9C"
                  />
                  <path
                    d="M24.0046 0.395325L24.6595 1.04994L1.05458 24.6632L0.399731 24.0086L24.0046 0.395325Z"
                    fill="#9C9C9C"
                  />
                </svg>

                <p className="font-geist text-md md:text-xl font-medium">
                  50 <sup>cm</sup>
                </p>
              </div>
            </div>

            <hr className="bg-[#9C9C9C]" />

            <ul className="mt-3">
              <li className="font-geist text-sm md:text-base text-[#5D5D5D] leading-normal mb-1">
                Location appareil à raclette - Raclette traditionnelle 1/2 roue
              </li>
              <li className="font-geist text-sm md:text-base text-[#5D5D5D] leading-normal mb-1">
                Réglable en hauteur Appareil à raclette professionnel Boîtier de
              </li>
              <li className="font-geist text-sm md:text-base text-[#5D5D5D] leading-normal mb-1">
                chauffe horizontal réglable en hauteur
              </li>
              <li className="font-geist text-sm md:text-base text-[#5D5D5D] leading-normal mb-1">
                200V
              </li>
              <li className="font-geist text-sm md:text-base text-[#5D5D5D] leading-normal mb-1">
                900W
              </li>
            </ul>
          </div>

          <div>
            <hr className="bg-[#9C9C9C] mb-6" />
            <div className="flex gap-3">
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 border border-[#9C9C9C] rounded-md">
                <button
                  className="px-3 py-1"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </button>
                <span className="text-sm md:text-base font-medium">
                  {quantity}
                </span>
                <button
                  className="px-3 py-1"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>
              <button className="flex-1 font-cabinet btn bg-[#5CD2DD] text-sm md:text-base font-medium text-white border-none outline-none hover:bg-[#5CD2DD]">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
