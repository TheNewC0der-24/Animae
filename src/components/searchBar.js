import React from "react";

const SearchBar = (props) => {

  return (
    <>
      <div className="d-grid col-6 ms-auto">
        <form className="d-flex mb-2" onSubmit={props.handleSearch}>
          <input
            type="text"
            className="form-control"
            placeholder="Search for an anime..."
            value={props.searchAnime}
            onChange={(e) => props.setSearchAnime(e.target.value)}
          />
          <button disabled={props.searchAnime ? false : true} className="btn btn-primary search-button">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
