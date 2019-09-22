import React from "react";

class resume extends React.Component {
    render() {
        return (
            <section id="resume">
                {/* Education
        ----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Stanford University</h3>
                                <p className="info">
                                    Bachelors of Electrical Engineering{" "}
                                    <span>•</span>{" "}
                                    <em className="date">
                                        Sept 2016 - June 2020
                                    </em>
                                </p>
                                <p>
                                    My academics focused on both hardware and
                                    software engineering. My work in hardware
                                    was mostly digital systems engineering in
                                    C/C++ and Verilog. My work in software is
                                    much more diverse, covering AI, ML, OOP
                                    design, Systems, Algorithms, and Data
                                    Structures. I've also taken a number of
                                    courses on entrepreneurship, product design,
                                    and Lean Methodology.
                                </p>
                                <p className="info">
                                    Featured Courses: <em className="date"></em>
                                    CNNs for Visual Recognition, Computer
                                    Vision: Recognition to Reconstruction,
                                    Computer Systems, Design and Analysis of
                                    Algorithms, Artificial Intelligence, Virtual
                                    Reality, Digital System Design, Computer
                                    Architectures, Inclusive Design in
                                    Engineering, Hacking for Defense, The
                                    Startup Garage (Stanford GSB)
                                </p>
                            </div>
                        </div>{" "}
                        {/* item end */}
                    </div>{" "}
                    {/* main-col end */}
                </div>{" "}
                {/* End Education */}
                {/* Work
        ----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Invicted Inc</h3>
                                <p className="info">
                                    Founder, Chief Product Officer<span>•</span>{" "}
                                    <em className="date">Feb 2018 - Present</em>
                                </p>
                                <p>
                                    <span>•</span> Founded Invicted with the
                                    mission of using technology to move America
                                    forward from the moral and economic failures
                                    of the criminal justice system.
                                    <br />
                                    <span>•</span> Conceptualized, designed, and
                                    prototyped a web platform which connects and
                                    facilitates client relationships with case
                                    managed human services non-profits.
                                    <br />
                                    <span>•</span> Led a team of three
                                    developers through ideation, validation,
                                    development, and deployment.
                                    <br />
                                    <span>•</span> Participant in the StartX
                                    Student in Residence program.
                                    <br />
                                    <span>•</span> Participant in the Lightspeed
                                    Ventures Summer Fellowship Program.
                                    <br />
                                    <span>•</span>{" "}
                                    <a href="http://www.invicted.com">
                                        Our Website
                                    </a>
                                </p>
                            </div>
                        </div>{" "}
                        {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Nvidia: Autonomous Vehicles</h3>
                                <p className="info">
                                    Simulation Software Engineer<span>•</span>{" "}
                                    <em className="date">
                                        June 2018 - September 2019
                                    </em>
                                </p>
                                <p>
                                    <span>•</span> Worked on the AV team to
                                    build tools and infrastructure enabling
                                    Hardware-In-the-Loop Simulation
                                    <br />
                                    <span>•</span> Built a remote integration
                                    system for AV simulator and drive stack in
                                    C++ <br />
                                    <span>•</span> Prototyped simulation cloud
                                    service cluster in Kubernetes
                                    <br />
                                    <span>•</span> Developed a multi-sensor
                                    streaming system in Cuda and C++ for
                                    visualization from cloud simulators
                                </p>
                            </div>
                        </div>{" "}
                        {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Delphi Automotive: Autonomous Vehicles</h3>
                                <p className="info">
                                    Software Engineering Intern <span>•</span>{" "}
                                    <em className="date">
                                        June 2017 - September 2017
                                    </em>
                                </p>
                                <p>
                                    <span>•</span>Worked on the Autonomous
                                    Driving team for Delphi focusin on building
                                    an AV driving simulator in Unity
                                    <br />
                                    <span>•</span>Prototyped simulated object
                                    detection Neural Nets for detecting
                                    vehicles, road type, and lane lines
                                    <br />
                                    <span>•</span>Built a data intake pipeline
                                    for virtual world generation using ArcGIS,
                                    Unity, and Python
                                </p>
                            </div>
                        </div>{" "}
                        {/* item end */}
                    </div>{" "}
                    {/* main-col end */}
                </div>{" "}
                {/* End Work */}
                {/* Skills
        ----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>Management</p>
                        <p className="date">
                            System Design <span>•</span> Product Design{" "}
                            <span>•</span> Project Management <span>•</span>{" "}
                            Prototyping <span>•</span> Lean Methodology{" "}
                            <span>•</span> Customer Success <span>•</span>{" "}
                            Design Thinking
                        </p>
                        <p>Technical</p>
                        <p className="Date">
                            C/C++ <span>•</span> React.JS <span>•</span> Linux{" "}
                            <span>•</span> Python <span>•</span> AWS/Google
                            Cloud <span>•</span> Verilog <span>•</span> Analog
                            Circuit Design <span>•</span> Assembly{" "}
                            <span>•</span> AI/ML <span>•</span> Pytorch{" "}
                            <span>•</span> Android <span>•</span> OpenCV{" "}
                            <span>•</span> Cuda <span>•</span> git
                        </p>
                        {/* <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                  <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                  <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                  <li><span className="bar-expand css" /><em>CSS</em></li>
                  <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                </ul>
              </div> */}
                    </div>{" "}
                    {/* main-col end */}
                </div>{" "}
                {/* End skills */}
            </section>
        );
    }
}

export default resume;
