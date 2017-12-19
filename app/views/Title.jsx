import React from 'react';

import ParticleCanvas from '../components/ParticleCanvas';

const Title = () => (
    <div className='title'>
        <ParticleCanvas height={window.innerWidth < 1200 ? '600px' : '800px'} />
        <div className='title__heading'>
            <h1>Laurence Jones</h1>
            <span>Software Consultant</span>
        </div>
    </div>
);

export default Title;
