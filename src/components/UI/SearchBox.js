import React, { useState } from "react";

function SearchBox({ onSearchChange }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value); // Call the callback with the search term
  };

  return (
    <div className="mx-8">
      <input
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent text-white border-b-2 border-transparent transition-colors duration-300 focus:border-white hover:border-white"
        aria-label="Search input"
        title={search ? "" : "Search term is required"}
      />
    </div>
  );
}

export default SearchBox;
