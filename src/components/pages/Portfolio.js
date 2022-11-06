import React from '../../../../react-portfolio/node_modules/@types/react';
import Project from './Project';

const projects = [
  {
    id: 0,
    name: '',
    image: '',
    description: '',
    technologies: '',
    repo: '',
    deploy: '',
  },
  {
    id: 1,
    name: '',
    image: '',
    description: '',
    technologies: '',
    repo: '',
    deploy: '',
  },
  {
    id: 2,
    name: '',
    image: '',
    description: '',
    technologies: '',
    repo: '',
    deploy: '',
  },
  {
    id: 3,
    name: '',
    image: '',
    description: '',
    technologies: '',
    repo: '',
    deploy: '',
  },
  {
    id: 4,
    name: '',
    image: '',
    description: '',
    technologies: '',
    repo: '',
    deploy: '',
  },
  
]

export default function Portfolio() {
  return (
    <div>
      <p className='content is-medium'>Portfolio</p>
      <hr />
      <Project projects={projects} />
    </div>
  );
}
