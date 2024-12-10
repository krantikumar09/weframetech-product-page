"use client";
import dynamic from "next/dynamic";
import React from "react";
import Title from "./Title";
import ReactCarousal from "./ReactCarousal";


const Articles = () => {
  return (
    <div className="px-4 mt-14 relative">
      <Title
        heading="Articles similaires"
        linkText="Voir toute la collection"
      />

      <ReactCarousal/>
    </div>
  );
};

export default Articles;
