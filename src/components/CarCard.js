import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const CarCard = ({ car, onClick }) => {
  const [liked, setLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleLike = (e) => {
    e.stopPropagation(); // Prevent triggering onClick of card
    setLiked((prev) => !prev);
  };

  return (
    <div
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl border border-gray-700 cursor-pointer max-w-sm mx-auto"
      onClick={() => onClick(car)}
    >
      <div className="relative">
        <img
          src={car.thumbnail}
          alt={`${car.brand} Thumbnail`}
          className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity"
        />

        {/* Top Performer Badge */}
        {car.salesCount > 1000000 && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded-full animate-pulse shadow-lg flex items-center gap-1">
            <FaStar className="text-sm" />
            Best Seller
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={toggleLike}
          className="absolute top-3 right-3 text-red-400 hover:text-red-600 transition"
          aria-label="Toggle Favorite"
          data-tooltip-id={`like-tooltip-${car.id}`}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
        <Tooltip id={`like-tooltip-${car.id}`} content={liked ? "Unfavorite" : "Add to favorites"} />
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-100">{car.brand}</h2>
        <p className="text-sm text-gray-400">📅 Established: {car.year}</p>

        <div className="mt-3 space-y-2">
          <p className="text-blue-400 font-semibold">
            🚀 Sales Count: {car.salesCount.toLocaleString()}
          </p>
          <p className="text-green-400 font-semibold">
            💰 Profit: {car.profit}
          </p>
        </div>

        {/* Toggleable Extra Details */}
        {showDetails && (
          <div className="mt-4 text-sm text-gray-300 border-t border-gray-700 pt-3 space-y-1">
            <p>⚙️ Engine: {car.engineType}</p>
            <p>⛽ Fuel Efficiency: {car.fuelEfficiency} km/l</p>
            <p>🪑 Seats: {car.seats}</p>
            <p>🌍 Country: {car.country}</p>
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowDetails((prev) => !prev);
          }}
          className="mt-4 text-sm text-blue-400 hover:underline focus:outline-none"
        >
          {showDetails ? "Hide Details ▲" : "More Info ▼"}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
