import React from 'react';
import PropTypes from 'prop-types';

const SkillTag = ({ tags }) => (
  <div className="skilltag">
   {tags 
  &&
  tags.map((tag, index) => (
    <span className="text" key={index}>
      {tag}
      </span>
    ))}
  </div>
);

SkillTag.propTypes = {
  tags: PropTypes.array,
};

export default SkillTag;