"use client";

import { useEffect, useState } from "react";
import RefreshIcon from "./components/icons/refresh-icon";
import ProductModal from "./components/ProductModal";
import { productData } from "./data/productData";

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");

  const options = ["Grounding", "Softness", "Energy", "Freedom"];

  const colorOptions = [
    "text-pink-500", // Grounding - Pink
    "text-blue-500", // Softness - Blue
    "text-green-500", // Energy - Green
    "text-yellow-500", // Freedom - Yellow
  ];

  const hoverBackgrounds = [
    "hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600", // Grounding
    "hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600", // Softness
    "hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600", // Energy
    "hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600", // Freedom
  ];

  const handleStartOver = () => {
    setSelected(null);
    setShowModal(false);
  };

  const handleRefresh = () => {
    localStorage.setItem("visited", "true");
    window.location.reload();
  };

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("visited");

    if (hasVisitedBefore) {
      setWelcomeMessage("Welcome back!");
      setTimeout(() => {
        setWelcomeMessage("");
      }, 3000);
    } else {
      localStorage.setItem("visited", "true");
    }
  }, []);

  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("visited");
    if (hasVisitedBefore) {
      setShowHeading(true);
    }
  }, []);

  return (
    <main className="bg-[#F6EEE8] px-6 py-12 flex flex-col items-center justify-center min-h-screen">
      {welcomeMessage && (
        <h1 className="text-3xl lg:text-5xl font-light text-pink-600 mt-3 mb-8 font-playfair">
          {welcomeMessage}
        </h1>
      )}
      {showHeading && (
        <h2 className="text-3xl lg:text-5xl font-extralight text-[#2f4858] font-playfair mb-20 text-center animate-fadeInUp">
          What does your body crave today?
        </h2>
      )}
      <div className="w-full max-w-sm space-y-4 mb-10">
        {options.map((option, index) => (
          <button
            key={option}
            onClick={() => {
              setSelected(option);
              setShowModal(true);
            }}
            className={`w-full py-4 rounded-xl border text-center text-xl lg:text-2xl transition-all 
              ${hoverBackgrounds[index]} /* Add unique hover background */
              ${colorOptions[index]}  /* Dynamically set text color */
              ${
                selected === option
                  ? "bg-[#D1FAE5] text-[#2f4858] border-[#A7F3D0]"
                  : "bg-white text-[#2f4858] border-gray-200"
              } hover:text-white`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleRefresh}
        className="flex gap-3 mt-6 py-2 px-4 rounded-lg bg-[#ff8886] text-white text-lg transition-all hover:bg-blue-400"
      >
        <RefreshIcon />
        Refresh
      </button>

      {showModal && selected && (
        <ProductModal
          selected={selected}
          modalData={productData}
          onClick={handleStartOver}
        />
      )}
    </main>
  );
}
