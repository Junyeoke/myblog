import React from "react";

function Header() {
  return (
    <div>
      {/* <!-- Navigation--> */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">JunHyuk Lee</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="assets/img/profile.png"
              alt="..."
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            {/* About 시작 */}
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            {/* About 끝 */}

            {/* 보유기술 시작 */}
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                experience
              </a>
            </li>
            {/* 보유기술 끝 */}

            {/* 보유기술 시작 */}
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#project">
                Project
              </a>
            </li>
            {/* 보유기술 끝 */}

            {/* 자유게시판 시작 */}
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/#board">
                board
              </a>
            </li>
            {/* 자유게시판 끝 */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
