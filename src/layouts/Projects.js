import React from 'react';
import { Link } from 'react-router-dom';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>My Projects</h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  
);

export default Projects;
