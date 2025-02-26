import React from 'react';
import PropTypes from 'prop-types';

import Certificate from './Certificates/Certificate';

const getRows = (certificates) => certificates
  .map((certificate, idx) => (
    <Certificate
      data={certificate}
      key={certificate.title}
      last={idx === certificates.length - 1}
    />
  ));

const Certificates = ({ data }) => (
  <div className="certificates">
    <div className="link-to" id="certificates" />
    <div className="title">
      <h3>Certificates</h3>
    </div>
    <ul className="certificate-list">{getRows(data)}</ul>
  </div>
);

Certificates.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      toughtby: PropTypes.string,
      link: PropTypes.string,
      intitution: PropTypes.string,
    }),
  ),
};

Certificates.defaultProps = {
  data: [],
};

export default Certificates;
