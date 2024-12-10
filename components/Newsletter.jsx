import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 px-4  mt-14">
      <Image
        className="h-[220px] object-cover rounded-md md:basis-1/2"
        src={assets.testi_img}
        alt="image"
        loading="lazy"
      />

      <div className="md:basis-1/2 bg-[#FFF3F9] p-5 rounded-md">
        <h2 className="font-playfair font-medium text-4xl text-bodyPrimary mb-1">
          S’inscrire & économiser <span className="text-[#5CD2DD]">10%</span>
        </h2>
        <p className="font-geist text-sm text-[#BDA2B0] leading-normal">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didn&apos;t. Yet busy any meeting
          shark light marginalised 4-blocker message. Productize corporate nail
          caught synergy highlights lunch. Company another pushback items dear
          or any.
        </p>
        <form className=" mt-4 flex flex-col md:flex-row gap-2">
          <input
            type="text"
            placeholder="john@doe.com"
            className="input w-full border border-[#F5E1EB] focus:outline-none "
          />
          <button className="font-cabinet btn bg-[#5CD2DD] text-sm md:text-base font-medium text-white border-none outline-none hover:bg-[#5CD2DD]">
            S’inscrire{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.58331 8.00004H14.4166M14.4166 8.00004L7.99998 1.58337M14.4166 8.00004L7.99998 14.4167"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
