import React from "react";

function Search({ value, onSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
