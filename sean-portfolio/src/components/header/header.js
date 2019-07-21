import React from 'react';

class header extends React.Component {
    render () {
      return (
          <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Sean Konz.</h1>
              <h3>I'm an engineer motivated by building new, cool stuff that can change the world. I'm interested in working at both the 
                hardware and software layer, and in tackling problems that can have a positive social impact. I'm currently working on 
                founding <a href="http://www.invicted.com">Invicted</a>, a criminal justice company working to help correct the injustices caused
                by mass incarceration.
              </h3>
              <hr />
              <ul className="social">
                <li><a href="https://www.facebook.com/sean.konz.1"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.linkedin.com/in/sean-k-19a327b2/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/swkonz"><i className="fa fa-github" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      );
    }
  };

export default header;