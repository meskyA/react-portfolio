import React from 'react';
import Project from './Project';

const projects = [
  {
    id: 0,
    name: 'Horiseon',
    image: '/Assets/online-reputation-management.jpg',
    description: 'Web Accessibility',
    technologies: 'HTML & CSS',
    repo: 'https://github.com/meskyA/horiseon',
    deploy: 'https://meskya.github.io/horiseon/',
  },
  {
    id: 1,
    name: 'PORTFOLIO',
    image: '/Assets/portfolio-challenge.jpeg',
    description: 'Basic-Portfolio',
    technologies: 'HTML & CSS',
    repo: 'https://github.com/meskyA/portfolio',
    deploy: 'https://meskya.github.io/portfolio/',
  },
  {
    id: 2,
    name: 'Weather Dashboard',
    image: '/Assets/Weather-Dashboard-Screen-Shot.png',
    description: 'A weather dashboard APP',
    technologies: 'HTML, CSS and JavaScript',
    repo: 'https://github.com/meskyA/weather-dashboard',
    deploy: ' https://meskya.github.io/weather-dashboard/',
  },
  {
    id: 3,
    name: 'Timed Quiz',
    image: '/Assets/Quiz-Challenge-Screen-Shot-1.png',
    description: 'A timed coding quiz with multiple-choice.',
    technologies: 'HTML, CSS and JavaScript',
    repo: 'https://github.com/meskyA/timed-quiz',
    deploy: 'https://meskya.github.io/timed-quiz/',
  },
  {
    id: 4,
    name: 'MVC Tech Blog',
    image: 'Assets/Home-page.png',
    description: 'MVC (Model-View-Controller) framework to create a blog website where users can create an account, login by using user name and password',
    technologies: 'CSS, JavaScript, Handlebars, Node.js, Express, MySql, JawsDB, Heroku',
    repo: 'https://github.com/meskyA/mvc-tech-blog',
    deploy: 'https://my-mvc-tech-blog.herokuapp.com/',
  },
  {
  id: 5,
    name: 'Social-Network API',
    image: 'Assets/image-demo-3.png',
    description: 'This is a back-end application for a Social Netwrok web where users can post thoughts, create friends list, and react to other users thoughts.',
    technologies: 'Express.js, JavaScript, Moment.js, Node.js, MongoDB, Mongoose, Mongoose validator, Insomnia',
    repo: 'https://github.com/meskyA/social-network-API',
    deploy: 'https://drive.google.com/file/d/1bGm6aezmlEgQoI-W42BN4TtqRAJLeBcB/view',
  },
  
]

// function Wrapper(props) {
// //   return <div className="wrapper">{props.children}</div>;
// }
function Portfolio() {
  return (
    <div>
      <p className="content is-large">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;