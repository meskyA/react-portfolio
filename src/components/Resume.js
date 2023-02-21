import React from 'react';

export default function Skills() {
  return (
    <div className='columns'>
      {/* <div className='column'> */}
        {/* <p className='contnet is-medium'>Resume</p> */}
        {/* <hr /> */}

        {/* <a className='button is-primary' href={process.env.PUBLI_URL + './public/Assets/MA Resume-12:2022  .pdf'} target='https://docs.google.com/document/d/1rouUpFwGRwc0RpK9xfsntFJWJdtocgFg/edit?usp=sharing&ouid=114677746370861015726&rtpof=true&sd=true' rel='https://docs.google.com/document/d/1rouUpFwGRwc0RpK9xfsntFJWJdtocgFg/edit?usp=sharing&ouid=114677746370861015726&rtpof=true&sd=true'>
          <span className='icon'>
            <i className='fas fa-download' src='public/Assets/MA Resume-12:2022.pdf'></i>
          </span>
          <span>Download Resume</span>
        </a> */}
      {/* </div> */}
      <div className='column'>
        <p className='content is-medium'>Skills</p>
        <hr />
        <ul>
         
          <img class="mb-5" src="/react-portfolio/Assets/html-5.png" alt=" " />
          <img class="mb-5" src="/react-portfolio/Assets/css.png" alt=" " />
          <img class="mb-5" src="/react-portfolio/Assets/java-script.png" alt=" " />
          <img class="mb-5" src="/react-portfolio/Assets/nodejs.png" alt=" " />
          <img class="mb-5" src="/react-portfolio/Assets/react.png" alt=" " />
          <img class="mb-5" src="/react-portfolio/Assets/mysql.png" alt=" " />
          <img class="mb-5" src="/react-portfolio/Assets/jquery.png" alt=" " />
          <img class="mb-5" src="/react-portfolio/Assets/npm.png" alt=" " />
          <img class="mb-5" src="/react-portfolio/Assets/bootstrap.png" alt=" " />
          <img class="mb-5" src="/react-portfolio/Assets/github.png" alt=" " />
          <li> </li>
        </ul>
      </div>
    </div>
  );
}
