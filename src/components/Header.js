import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Resume from "./Resume";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

    default:
        return <About />;
    }
  };
  return (
      <div>
          <nav className='navbar'>
              <div className="navebar-brand">
                  <a
                  className="navbar-item" rel="nonreferrer" target="_blank"
                  href='https://github.com/meskyA?tab=repositories'>
                      <span className="content is-large">Meskerem 'Mesky' Assefa</span>
                  </a>
              </div>
          </nav>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          <main>
              <div>{renderPage(currentPage)}</div>
          </main>
      </div>
  );
}

export default Header;