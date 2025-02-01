import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarCard from "./components/CarCard";
import CarData from "./data/CarData";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(CarData);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [selectedCar, setSelectedCar] = useState(null);

  // Sorting logic
  const handleSort = (key) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (key === "sales") return b.salesCount - a.salesCount;
      if (key === "profit") {
        const profitA = parseInt(a.profit.replace("₹", "").replace(" Cr", ""));
        const profitB = parseInt(b.profit.replace("₹", "").replace(" Cr", ""));
        return profitB - profitA;
      }
      if (key === "year") return b.year - a.year;
      return 0;
    });
    setFilteredData(sortedData);
  };

  // Search logic
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = CarData.filter((car) =>
      car.brand.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after search
  };

  // Pagination logic
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get paginated data
  const getPagedData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  };

  // Handle card click (modal display)
  const handleCardClick = (car) => {
    setSelectedCar(car);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col text-white">
      <Header onSearch={handleSearch} onSort={handleSort} />
      
      <main className="container mx-auto py-6 px-4 flex-grow">
        <h2 className="text-3xl font-semibold text-center mb-6 text-violet-500">
          Car Brand Statistics
        </h2>

        {/* Modal */}
        {selectedCar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-black">
            <img 
        src={selectedCar.thumbnail} 
        alt={`${selectedCar.brand} Thumbnail`} 
        className="w-full h-30 object-cover rounded-md mb-4"
      />
              <h2 className="text-2xl font-semibold">{selectedCar.brand}</h2>
              <p className="text-lg mt-2">Established: {selectedCar.year}</p>
              <p className="text-lg mt-2">Sales Count: {selectedCar.salesCount.toLocaleString()}</p>
              <p className="text-lg mt-2">Profit: {selectedCar.profit}</p>
              <button
                className="mt-4 px-4 py-2 bg-violet-600 text-white rounded"
                onClick={handleCloseModal}  // Close modal when clicked
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Car cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getPagedData().map((car) => (
            <CarCard key={car.id} car={car} onClick={handleCardClick} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination flex justify-center space-x-4 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-violet-600 text-white rounded-md"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * pageSize >= filteredData.length}
            className="px-4 py-2 bg-violet-600 text-white rounded-md"
          >
            Next
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
