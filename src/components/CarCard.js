import React from "react";

const CarCard = ({ car, onClick }) => {
  return (
    <div
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl border border-gray-700 cursor-pointer"
      onClick={() => onClick(car)} // Pass the car object to the onClick function
    >
      <img
        src={car.thumbnail}
        alt={`${car.brand} Thumbnail`}
        className="w-full h-30 object-cover opacity-90 hover:opacity-100 transition-opacity"
      />
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-100">{car.brand}</h2>
        <p className="text-sm text-gray-400">📅 Established: {car.year}</p>
        <div className="mt-4 space-y-2">
          <p className="text-blue-400 font-semibold">
            🚀 Sales Count: {car.salesCount.toLocaleString()}
          </p>
          <p className="text-green-400 font-semibold">
            💰 Profit: {car.profit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
