"use client";
import React, { useState } from "react";

const ProductDetail = () => {
  const faqs = [
    {
      question: "Livraisons",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, natus ipsum minima blanditiis rerum dolor!",
    },
    {
      question: "Questions",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, natus ipsum minima blanditiis rerum dolor!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the open state of the answer
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-4 px-4 mt-12">
      <div className="md:basis-1/2">
        <h2 className="font-playfair text-base md:text-2xl font-[400] text-[#111928] leading-normal mb-3">
          Description produit
        </h2>
        <p className="font-geist text-sm text-bodyPrimaryLight leading-normal">
          Festi vous propose à la location un/une &quot;Jewel – grand couteau/10pc&quot;
          pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
          votre mariage, une fête d&apos;anniversaire ou du personnel, ce produit a
          fait l&apos;objet d&lsquo;une sélection rigoureuse par notre équipe. Il est en
          location chez nous sous la référence &quot;VAJGC&quot;. Nous sommes à votre
          disposition pour que les événements de nos clients, même en
          last-minute, soient toujours une réussite. Vous pourrez trouver tout
          une série d&apos;autre produit à louer de ce type dans la catégorie &quot;Art de
          la Table&quot;.
        </p>
      </div>

      <div className="md:basis-1/2 w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full p-4 bg-[rgba(251, 249, 248, 0.6)] mb-2 rounded-md"
          >
            <div className="cursor-pointer flex items-center justify-between" onClick={() => toggleAnswer(index)}>
              <p className="font-cabinet font-[500] text-sm  md:text-base text-bodyPrimary">{faq.question}</p>

              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1V15M1 8H15"
                    stroke="#393939"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {activeIndex === index && (
              <div className="mt-2 text-sm md:text-base text-bodyPrimary">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
