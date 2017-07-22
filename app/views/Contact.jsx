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
                <a href='mailto:lj.development92@gmail.com'>lj.development92@gmail.com</a>
            </span>
            You can also find me on
            <span className='contact-link'>
                <a href='https://www.linkedin.com/in/laurencejones1/'>linkedin.com/in/laurencejones1/</a>
            </span>
            <span className='contact-link'>
                <a href='https://github.com/ljones92'>github.com/ljones92</a>
            </span>
        </p>
    </div>
);

export default Contact;
