import React from "react";
function Header() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <nav className="navbar navbar-light bg-light justify-content-between">
            <a href="/" className="navbar-brand">
              TTNNTH
            </a>
          </nav>
        </div>
        <div className="container-fluid backgroundLogo">
          <div className="container ">
            <div className="logo">
              <img
                src="https://www.ttn.edu.vn/images/TTNNTH/slideshow/banner1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
