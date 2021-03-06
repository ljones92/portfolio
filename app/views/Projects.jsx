import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const super6 = require('../assets/img/super6-logo.png');
const pick7 = require('../assets/img/pick7-logo.png');
const news = require('../assets/img/sky-news.png');
const sports = require('../assets/img/sky-sports.svg');

const Projects = () => (
    <div className='panel panel__projects'>
        <ScrollableAnchor id={'projects'}>
            <h3 className='panel__title'>Projects</h3>
        </ScrollableAnchor>
        <p className='panel__body'>
            I currently work as part of a consultantany team contracted out to SkyBet
            to work on various free to play games including Super 6 and Pick 7. In the past
            I have also worked on high profile projects such as Sky News and Sky Sports.
        </p>
        <div className='panel__columns'>
            <div className='panel__image'>
                <a href='https://super6.skysports.com'>
                    <img src={super6} alt='Super 6' />
                </a>
            </div>
            <div className='panel__image'>
                <a href='https://pick7.sportinglife.com'>
                    <img src={pick7} alt='Pick 7' />
                </a>
            </div>
            <div className='panel__image'>
                <a href='https://news.sky.com'>
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
