import React from 'react';
import './App.css';

import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
