import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="d-grid col-6 ms-auto">
        <input type="text" className="form-control mb-5" placeholder="Search for an anime..." />
      </div>
    </>
  );
};

export default SearchBar;
