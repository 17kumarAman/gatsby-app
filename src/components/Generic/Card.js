import React from "react";

const Card = ({ imgSrc, heading, description }) => {
  const hasImage = imgSrc !== undefined && imgSrc !== "";

  return (
    <div
      className={`w-${hasImage ? "44" : "60"} ${
        hasImage ? "h-60" : ""
      } bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 relative`}
    >
      {hasImage ? (
        <img
          src={imgSrc}
          alt={heading}
          className="overflow-hidden bg-white object-cover h-2/3"
        />
      ) : (
        <div className="bg-[#aed3e2] w-60 h-72"></div>
      )}
      <div className="p-4">
        <h3 className=" font-semibold">{heading}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
