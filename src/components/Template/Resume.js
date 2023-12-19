import React from 'react';

import Education from '../Resume/Education';
import Experience from '../Resume/Experience';
import References from '../Resume/References';

import degrees from '../../data/resume/degrees';
import work from '../../data/resume/work';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  References: () => <References />,
};

const Resume = () => (

    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Resume</h2>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  
);

export default Resume;
