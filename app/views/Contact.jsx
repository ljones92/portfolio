import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Contact = () => (
    <div className='panel panel__contact'>
        <ScrollableAnchor id={'contact'}>
            <h3 className='panel__title'>Contact</h3>
        </ScrollableAnchor>
        <p className='panel__body'>
            Feel free to contact me on
            <span className='contact-email'>
                <a href='mailto:lj.development92@gmail.com'>
                    lj.<span className='highlight'>development</span>92@<span className='highlight'>gmail</span>.com
                </a>
            </span>
            You can also find me on
            <span className='contact-link'>
                <a href='https://www.linkedin.com/in/laurencejones1/'>
                    <span className='highlight'>linkedin</span>.com/in/<span className='highlight'>laurencejones1</span>/
                </a>
            </span>
            <span className='contact-link'>
                <a href='https://github.com/ljones92'><span className='highlight'>github</span>.com/<span className='highlight'>ljones92</span></a>
            </span>
        </p>
    </div>
);

export default Contact;
