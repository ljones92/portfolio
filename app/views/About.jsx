import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const about = require('../assets/img/about.jpg');

const About = () => (
    <div className='panel panel__about'>
        <ScrollableAnchor id={'about'}>
            <h3 className='panel__title'>About</h3>
        </ScrollableAnchor>
        <p className='panel__body'>
            I am a Software Engineer currently working at Sky in Leeds. I work as a full-stack
            developer but focus on back-end engineering. As is the nature of software
            development, my skills and interests are constantly evolving but the
            technologies I am currently focused on include:
        </p>
        <ul className='panel__list panel__list--2'>
            <li className='panel__list--item'>PHP</li>
            <li className='panel__list--item'>Javascript</li>
            <li className='panel__list--item'>React</li>
            <li className='panel__list--item'>Node JS</li>
            <li className='panel__list--item'>AWS</li>
            <li className='panel__list--item'>Docker</li>
            <li className='panel__list--item'>Go</li>
            <li className='panel__list--item'>Python</li>
            <li className='panel__list--item'>C#</li>
            <li className='panel__list--item'>SCSS</li>
        </ul>
        <div className='panel__image'>
            <img src={about} alt='Sky Vote 2017 desk' />
        </div>
    </div>
);

export default About;
