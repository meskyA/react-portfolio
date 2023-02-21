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
      case "Projects":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Skills":
        return <Resume />;

    default:
        return <About />;
    }
  };
  return (
      <div>
          <nav className='navbar'>
              <div className="navebar-brand">
                
                      <span className="content-name is-large">Meskerem 'Mesky' Assefa</span>
              
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