import React from "react";
import SearchBar from "./searchBar";
import TopAnimaeList from "./topAnimaeList";

const RightSidebar = () => {
  return (
    <>
      <div className="float-end mx-3">
        <SearchBar />
        <TopAnimaeList />
      </div>
    </>
  );
};

export default RightSidebar;
