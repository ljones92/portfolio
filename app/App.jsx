import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';

import Menu from './components/Menu';
import Title from './views/Title';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Footer from './components/Footer';

configureAnchors({ offset: -60, scrollDuration: 800 });

const App = () => (
    <div className='wrapper'>
        <Menu />
        <Title />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
);

export default App;
