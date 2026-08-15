import React, { useState } from "react";
import ProductActions from "../template/ProductActions";
import Modal from "../../Common/Modal";

export default function ProductGallery({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => {
      return prev === product.image.length - 1 ? 0 : prev + 1;
    });
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.image.length - 1 : prev - 1,
    );
  };

  /* Lentgh Images After 4 Images */
  const remainingImages = product?.image?.length - 4;

  return (
    <div className="w-full lg:w-2/6">
      <div className="flex flex-col gap-4 p-3 bg-white border border-Caption/35 rounded-xl">
        {/* Main Picture */}
        <img
          src={product?.image[0]}
          alt={product?.title}
          onClick={() => setIsOpen(true)}
          className="w-full h-100 lg:h-auto p-3 border border-Caption/35 rounded-xl cursor-pointer object-contain"
        />
        {/* Gallery */}
        {product?.image?.length > 2 ? (
          <div className="grid grid-cols-4 items-center gap-2 lg:gap-6">
            {product?.image.slice(1, 4).map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="w-15 md:w-20 h-15 md:h-20 border-Caption/35 object-cover rounded-lg cursor-pointer border"
                onClick={() => {
                  setCurrentImage(index + 1);
                  setIsOpen(true);
                }}
              />
            ))}
            {remainingImages > 0 ? (
              <div
                className="w-15 md:w-20 h-15 md:h-20 border-Caption/35 object-cover rounded-lg cursor-pointer border flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={() => {
                  setCurrentImage(4);
                  setIsOpen(true);
                }}
              >
                <span className="text-lg font-semibold text-gray-700">
                  +{remainingImages}
                </span>
              </div>
            ) : (
              product?.image[4] && (
                <img
                  src={product?.image[4]}
                  alt=""
                  className="w-15 md:w-20 h-15 md:h-20 border-Caption/35 object-cover rounded-lg cursor-pointer border"
                  onClick={() => {
                    setCurrentImage(4);
                    setIsOpen(true);
                  }}
                />
              )
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="flex items-center justify-center">
            <img
              src={product?.image[currentImage]}
              alt=""
              className="max-h-[80vh] rounded-xl"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute top-1/2 -translate-y-1/2 left-5 flex items-center justify-center bg-black/50 text-white w-10 h-10 rounded-full cursor-pointer hover:bg-black/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m14 7-4 5 4 5"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={prevImage}
            className="absolute top-1/2 -translate-y-1/2 right-5 flex items-center justify-center bg-black/50 text-white w-10 h-10 rounded-full cursor-pointer hover:bg-black/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m10 7 4 5-4 5"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Modal>
      )}
      <ProductActions product={product}/>
    </div>
  );
}
