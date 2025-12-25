import React from "react";

const Card = ({ imageUrl, title, rating, onClick }) => {
  return (
    <div
      className="
        sm:min-w-[180px] sm:max-w-[180px]
     min-w-[150px] max-w-[150px]
        rounded-xl
        overflow-hidden
        bg-[#0B0F1A]
        shadow-lg
        hover:scale-105
        transition-transform duration-300
        cursor-pointer
      "
      onClick={onClick}
    >
      {/* Poster */}
      <div className="relative h-[250px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Rating */}
        {rating && (
          <div className="
            absolute top-2 right-2
            bg-black/70
            text-yellow-400
            text-xs font-semibold
            px-2 py-1
            rounded-md
          ">
            ⭐ {rating}
          </div>
        )}
      </div>

      {/* Title */}
      <div className="p-2">
        <h3 className="text-sm text-white font-medium truncate">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
