import React, { useState } from "react";

const Header = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <header className="bg-violet-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Car Brand Stats</h1>
        </div>

        {/* Search and Sort Section */}
        <div className="flex space-x-4 items-center mt- md:mt-0">
          {/* Search Bar */}
          <input
            type="text"
            className="p-2 rounded-md bg-white-800 text-black focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by Car Brand"
          />

          {/* Sorting Dropdown */}
          <select
            onChange={handleSortChange}
            className="p-2 rounded-md bg-white-800 text-black focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="sales">Sort by Sales</option>
            <option value="profit">Sort by Profit</option>
            <option value="year">Sort by Year</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
