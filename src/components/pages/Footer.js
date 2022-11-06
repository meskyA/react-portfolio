import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <div className='content has-text-centered'>
                <p>
                    <strong>My Web Development Portfolio</strong> - a React site by {' '}
                    <a href='https://github.com/meskyA' target='_blank' rel='noreferrer'>
                        Meskerem 'Mesky' Assefa
                    </a>
                    <hr />
                    <a href='https://www.linkedin.com/in/mesky-assefa-2030i/' target='_blank' rel='noreferrer'>
                        LinkedIn
                    </a>{' '}
                    |{' '}{' '}
                    <a href='/www.mywebsite.com/' target='_blank'>My Website</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;