import React from 'react';
import PropTypes from 'prop-types';

const Certificate = ({ data, last }) => (
  <li className="certificate-container">
    <a href={data.link}>
      <h4 className="certificate-date">{data.toughtby}:</h4>
      <p className="certificate-name">{data.title}</p>
    </a>
    {!last && (
      <div className="certificate-dot">
        <p className="certificate-date"> &#8226;</p>
      </div>
    )}
  </li>
);

Certificate.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    toughtby: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Certificate.defaultProps = {
  last: false,
};

export default Certificate;
