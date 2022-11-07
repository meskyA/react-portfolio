import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";


function Footer() {
    return (
        <footer className='footer'>
            <div className='content has-text-centered'>
                <p>
                    <strong>My Web Development Portfolio</strong>  {' '}
                   
                    <hr />
                    <a href='https://github.com/meskyA' target='_blank' rel='noreferrer'>
                        <BsGithub/>
                    </a>{' '}
                    |{' '}{' '}
                    <a href='https://www.linkedin.com/in/mesky-assefa-2030i/' target='_blank' rel='noreferrer'>
                        < BsLinkedin />
                    </a>{' '}
                    |{' '}{' '}
                    <a href='/https://twitter.com/M73706634/' target='_blank'><BsTwitter /></a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;