import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import SkillTag from '../Resume/Skills/SkillTag';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image" target="_blank">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}  <SkillTag tags={data.skills} /></p>
        <a href={data.code} target='_blank'>
        <FontAwesomeIcon className="descr-icon" icon={faGithub} size='lg'/>
          </a> 
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    code: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string,
    desc: PropTypes.string.isRequired,
    skills :PropTypes.array,
  }).isRequired,
};

export default Cell;
