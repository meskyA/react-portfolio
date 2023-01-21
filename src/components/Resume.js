import React from 'react';

export default function Resume() {
  return (
    <div className='columns'>
      <div className='column'>
        <p className='contnet is-medium'>Resume</p>
        <hr />

        <a className='button is-primary' href={process.env.PUBLI_URL + './public/Assets/MA Resume-12:2022  .pdf'} target='https://docs.google.com/document/d/1rouUpFwGRwc0RpK9xfsntFJWJdtocgFg/edit?usp=sharing&ouid=114677746370861015726&rtpof=true&sd=true' rel='https://docs.google.com/document/d/1rouUpFwGRwc0RpK9xfsntFJWJdtocgFg/edit?usp=sharing&ouid=114677746370861015726&rtpof=true&sd=true'>
          <span className='icon'>
            <i className='fas fa-download' src='public/Assets/MA Resume-12:2022.pdf'></i>
          </span>
          <span>Download Resume</span>
        </a>
      </div>
      <div className='column'>
        <p className='content is-medium'>Skills</p>
        <hr />
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>OpenAPI, Node.js, JSON</li>
          <li>MongoDB, Insomnia, Heroku</li>
          <li>Markdown</li>
          <li>GitHub Repo</li>
          <li> </li>
        </ul>
      </div>
    </div>
  );
}
