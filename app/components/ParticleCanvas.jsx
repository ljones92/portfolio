import React, { PropTypes } from 'react';
import Particles from 'react-particles-js';

import config from '../assets/config/particle.json';

const ParticleCanvas = ({ height }) => (
    <Particles height={height} params={config} />
);

ParticleCanvas.propTypes = {
  height: PropTypes.string.isRequired,
};

export default ParticleCanvas;
