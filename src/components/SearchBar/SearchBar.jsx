import React from "react";

const SearchBar =({ setSearch }) =>{
  return (
    // <div className ="search-bar">
    <input
      type="text"
      placeholder="Search cars..."
      onChange={(e) => setSearch(e.target.value)}
    />
    // </div>
  );
}
export default SearchBar;
