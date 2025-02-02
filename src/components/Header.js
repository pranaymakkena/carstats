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
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Title Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Car Brand Stats</h1>
        </div>

        {/* Search and Sort Section */}
        <div className="flex flex-col md:flex-row items-center md:items-end w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            className="p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-violet-500 w-full md:w-auto"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by Car Brand"
          />

          {/* Sorting Dropdown */}
          <select
            onChange={handleSortChange}
            className="p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-violet-500 w-full md:w-auto"
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
