import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
