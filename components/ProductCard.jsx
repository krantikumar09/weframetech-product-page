import { assets } from "@/Assets/assets";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div className="px-4 py-5 relative bg-[#F9F7F5] rounded-md">
        <div className="flex items-center justify-between">
        <FontAwesomeIcon icon={faHeart} className="text-2xl" />

          <span className="font-geist font-[500] text-[10px] leading-normal  text-[#111928] text-center bg-white px-2 py-1 rounded-md uppercase">
            Art de la table
          </span>
        </div>

        <Image className="w-[224px] mx-auto" src={assets.png_table} alt="table" />
      </div>

      <div className="bg-white px-4 py-2">
        <div className="flex items-center justify-between">
          <h3 className="font-playfair font-[400] text-xl md:text-2xl text-bodyPrimary ">
            Title
          </h3>
          <h3 className="font-playfair font-[400] text-xl md:text-2xl text-bodyPrimary">
            0<sup>€</sup>  
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-geist font-[400] text-xs text-bodyPrimaryLight">
            0,35€/Pièce · RÉF : VABGN5
          </p>
          <p className="py-[6px] px-3 rounded-[20px] bg-[#F1F4F6] text[#546A7D] font-geist font-[500] text-[11px] inline-block">20 pièces</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
