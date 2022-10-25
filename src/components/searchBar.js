import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <nav className="my-3 container">
        <form className="d-flex">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default SearchBar;
