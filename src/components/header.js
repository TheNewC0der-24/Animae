import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand mx-auto " to="/" style={{ cursor: "pointer" }}>
            THE <span className="fw-bolder animae-font"> ANIMAE</span> DATABASE
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
