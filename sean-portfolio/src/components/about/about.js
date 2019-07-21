import React from 'react';

class about extends React.Component {
  render () {
      return (
  
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="Pic of me:D" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>I'm currently a Senior at Stanford University finishing my undergrad degree in Electrical Engineering. My experience
                spans the whole computing stack. From designing and building an FPGA ipod in verilog, to building a sign language
                interpreter using pytorch, I'm interested in using my engineering background to make cool stuff. I'm especially
                motivated by using technology to tackle challenging societal problems.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Sean Konz</span><br />

                    <span>swkonz [at] stanford [dot] edu</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={process.env.PUBLIC_URL + "/swkonzResume.pdf"} className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      );
    }
  };

export default about;