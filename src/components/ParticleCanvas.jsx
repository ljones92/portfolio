import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

import config from '../particle.json';

const ParticleCanvas = ({ height }) => (
    <Particles height={height} params={config} />
);

ParticleCanvas.propTypes = {
  height: PropTypes.string.isRequired,
};

export default ParticleCanvas;
