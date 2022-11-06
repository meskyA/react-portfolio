import React from '../../../../react-portfolio/node_modules/@types/react';

export default function Resume() {
  return (
    <div className='columns'>
      <div className='column'>
        <p className='contnet is-medium'>Resume</p>
        <hr />

        <a className='button is-primary' href={process.env.PUBLI_URL + '/mesky-resume.pdf'} target='_blank' rel='noreferrer'>
          <span className='icon'>
            <i className='fas fa-download'></i>
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
