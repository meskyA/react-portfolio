import React from 'react';

function NavTabs(props) {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <div className="tabs is-centered">
      <ul className="nav nav-tabs 12px">
        {tabs.map((tab) => (
          <li className={
            props.currentPage === tab ? 'nav-item is-active' : 'nav-item'
          }
          key={tab}
          >
           <a href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)} className={
              props.currentPage === tab ? 'tav-link active' : 'nav-link'
            }
            >
              {tab}
              </a>
          </li>
        ))}
        </ul>
        </div>      
  );
}

export default NavTabs;
