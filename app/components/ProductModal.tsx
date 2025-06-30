import React from "react";
import { ProductRecord } from "../type/product-type";
import Image from "next/image";

interface ProductModalProps {
  onClick: () => void;
  selected: string;
  modalData: Record<string, ProductRecord>;
}

const ProductModal: React.FC<ProductModalProps> = ({
  onClick,
  selected,
  modalData,
}) => {
  const content = modalData[selected];

  return (
    <div className="fixed inset-0 z-50 bg-[#F6EEE8]/90 backdrop-blur-sm flex items-center justify-center overflow-y-auto">
      <div className="bg-[#FAF5F2] p-6 rounded-xl shadow-xl max-w-md lg:max-w-6xl xl:max-w-7xl lg:p-12 transition-all w-full mx-4 my-12 text-center space-y-4 border border-[#EDE7E3]">
        <h2 className="text-[#2F4858] text-2xl lg:text-3xl font-semibold font-playfair">
          {content.archetype}
        </h2>
        <Image
          src={content.image}
          alt={content.productName}
          width={300}
          height={200}
          priority
          className="w-full h-72 lg:h-80 object-cover rounded-md"
        />
        <div>
          <h3 className="text-[#2F4858] text-xl lg:text-2xl font-semibold pt-2">
            {content.productName}
          </h3>
          <p className="text-[#2F4858] text-lg lg:text-xl mt-1">
            {content.description}
          </p>
          <p className="mt-2 text-md text-[#2F4858] italic">
            Fabric: {content.fabric}
          </p>
        </div>
        <button
          onClick={onClick}
          className="mt-4 px-4 py-2 bg-[#E0E7FF] text-[#2F4858] rounded-lg hover:bg-[#C7D2FE] transition"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
