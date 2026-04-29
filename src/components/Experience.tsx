import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Experience.scss';
import controlengineer from '../assets/images/controlengineer.jpg';

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
                <div className="skill">
                    {/* <FontAwesomeIcon icon={faReact} size="3x"/> */}
                    {/* <img src={controlengineer} alt="Control Engineer" /> */}
                    <h3>Control Engineer - Co-Op</h3>
                    <p> 
                        <h4>Husco, Waukhesa, WI <br/> January 2025- August 2025</h4> 
                        <li>Conducted a thermal paste test to evaluate the effectiveness of the use of thermal paste in the assembly process of the controller. </li>
                        <li>Performed different tests on the microcontroller to test features on analog input, digital input, multi-function inputs. </li>
                        <li>Developed MATLAB code to enhance Huslink, a software used for programming HUSCO controllers, and wrote a comprehensive user guide to improve usability and adoption. </li>
                        <li>Embedded firmware development on advanced fluid-power controls for off-highway vehicles. </li>

                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    {/* <FontAwesomeIcon icon={faDocker} size="3x"/> */}
                    <h3>STEM Lab Instructor</h3>
                    <p> 
                        <h4>Milwaukee School of Engineering, Milwaukee, WI <br/> September 2023- May 2026</h4> 
                        <li>Support evening programs as an instructor and mentor for coding clubs and STEM initiatives. </li>
                        <li>Lead STEM projects in electronics, circuit design, 3D modeling, programming, engineering. </li>
                        <li>Plan and teach STEM related projects to youth in Milwaukee; Support youth with an interest in STEM . </li>
                       
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    {/* <FontAwesomeIcon icon={faPython} size="3x"/> */}
                    <h3>STEM Instructional Support Technician</h3>
                    <p> 
                        <h4>Madison College, Madison, WI <br/> August 2021- May 2023</h4>
                        <li>Assisted in the design and development of items on SOLIDWORKS and glowforge laser to promote access in STEM. </li>
                        <li>Repaired and maintained equipment, did inventory and brainstorm projects ideas for the center. </li>
                        <li>Provided technical support to students and staff in the use of lab equipment and software.</li>
                        <li>Revised the website, provide suggestions with new one I programmed using javascript and css. </li>
                    </p>
                    
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Experience;