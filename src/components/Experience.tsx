import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Experience.scss';

const labelsFirst = [
    "Debugging",
    "Testing",
    "Software Development",
    "Matlab",
    "Simulink",
    "Circuit Analysis",
    "Communication",
    "Git"
];

const labelsSecond = [
    "Python",
    "3D printing",
    "Soldering",
    "Teaching",
    "Communication",
    "Electronics",
    "Arduino",
    "Tinkercad",
];

const labelsThird = [
    "Debugging",
    "Troubleshooting",
    "3D Printing",
    "Project Management",
    "Teaching",
    "Web Development"

];

function Experience() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Experience</h1>
            <div className="skills-grid">
                <div className="skill-card">
                    <div className="skill-card-inner">
                        <div className="skill-card-front">
                            <h3>Control Engineer - Co-Op</h3>
                            <div className="skill-card-meta">
                                <span>Husco, Waukhesa, WI</span>
                                <span>January 2025 - August 2025</span>
                            </div>
                            <div className="skill-card-skills">
                                <p className="skill-card-label">Skills acquired</p>
                                <div className="skill-card-chip-row">
                                    {labelsFirst.map((label, index) => (
                                        <Chip key={index} className='chip' label={label} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="skill-card-back">
                            <h4>What I did</h4>
                            <ul>
                                <li>Conducted a thermal paste test to evaluate assembly effectiveness for Husco controllers.</li>
                                <li>Tested analog, digital, and multi-function inputs on the controller microprocessor.</li>
                                <li>Developed MATLAB code to enhance Huslink, and created a user guide to improve adoption.</li>
                                {/* <li>Worked on embedded firmware for advanced fluid-power controls on off-highway vehicles.</li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-card-inner">
                        <div className="skill-card-front">
                            <h3>STEM Lab Instructor</h3>
                            <div className="skill-card-meta">
                                <span>Milwaukee School of Engineering, Milwaukee, WI</span>
                                <span>September 2023 - May 2026</span>
                            </div>
                            <div className="skill-card-skills">
                                <p className="skill-card-label">Skills acquired</p>
                                <div className="skill-card-chip-row">
                                    {labelsSecond.map((label, index) => (
                                        <Chip key={index} className='chip' label={label} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="skill-card-back">
                            <h4>What I did</h4>
                            <ul>
                                <li>Supported evening programs as an instructor and mentor for coding clubs and STEM initiatives.</li>
                                <li>Led projects in electronics, circuit design, 3D modeling, programming, and engineering.</li>
                                <li>Planned and taught STEM activities to youth while supporting their interest in technology.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="skill-card">
                    <div className="skill-card-inner">
                        <div className="skill-card-front">
                            <h3>STEM Instructional Support Technician</h3>
                            <div className="skill-card-meta">
                                <span>Madison College, Madison, WI</span>
                                <span>August 2021 - May 2023</span>
                            </div>
                            <div className="skill-card-skills">
                                <p className="skill-card-label">Skills acquired</p>
                                <div className="skill-card-chip-row">
                                    {labelsThird.map((label, index) => (
                                        <Chip key={index} className='chip' label={label} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="skill-card-back">
                            <h4>What I did</h4>
                            <ul>
                                <li>Designed items in SOLIDWORKS and Glowforge to improve access to STEM resources.</li>
                                <li>Maintained lab equipment, managed inventory, and brainstormed project ideas.</li>
                                <li>Provided technical support for software and lab tools to students and staff.</li>
                                <li>Improved the website and contributed front-end updates using JavaScript and CSS.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Experience;