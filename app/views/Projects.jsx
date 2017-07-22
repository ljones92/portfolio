import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const news = require('../assets/img/sky-news.png');
const sports = require('../assets/img/sky-sports.svg');

const Projects = () => (
    <div className='panel panel__projects'>
        <ScrollableAnchor id={'projects'}>
            <h3 className='panel__title'>Projects</h3>
        </ScrollableAnchor>
        <p className='panel__body'>
            I currently work on the team responsible for developing Sky News and Sky Sports.
            Some of the projects I have been involved with include implementing AMP on both
            sites and working on the news elections site during the General Election.
        </p>
        <div className='panel__columns'>
            <div className='panel__image'>
                <a href='http://news.sky.com'>
                    <img src={news} alt='Sky News' />
                </a>
            </div>
            <div className='panel__image'>
                <a href='http://www.skysports.com'>
                    <img src={sports} alt='Sky Sports' />
                </a>
            </div>
        </div>
        <p className='panel__body'>
            Other sites I have worked on include:
        </p>
        <ul className='panel__list'>
            <li className='panel__list--item contact-link'>
                <a href='http://www.peppermintalpacas.co.uk'>Peppermint <span className='highlight'>Alpacas</span></a>
            </li>
            <li className='panel__list--item contact-link'>
                <a href='http://www.joulesgroup.com/'><span className='highlight'>Joules</span> Group</a>
            </li>
            <li className='panel__list--item contact-link'>
                <a href='http://www.digitalmortgages.net'>Atom <span className='highlight'>Bank</span> Digital <span className='highlight'>Mortgages</span></a>
            </li>
        </ul>
    </div>
);

export default Projects;
