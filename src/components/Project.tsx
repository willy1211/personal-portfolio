import React from "react";
import terracare from '../assets/images/terracare.png';
import controlengineer from '../assets/images/controlengineer.jpg';
import embeddedproject from '../assets/images/embeddedproject.jpg';
import autonomouscar from '../assets/images/autonomous_car.png';

// @ts-ignore: SCSS module import is handled by the build configuration
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://lnkd.in/gqUVQukR" target="_blank" rel="noreferrer"><img src={terracare} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lnkd.in/gqUVQukR" target="_blank" rel="noreferrer"><h2>TerraCare</h2></a>
                <p>This project explores how satellite and other data can be used to intelligently identify medical deserts and place medical facilities strategically across Africa to improve accessibility and patient care.</p>
                <h5>Skills: Teamwork, problem solving, public speaking, machine learning.
                <br/>Source: Personal Project for Rosie Competition.
                <br/><a href="https://lnkd.in/gqUVQukR" target="_blank" rel="noreferrer">View Presentation</a></h5>
            </div>
            <div className="project">
                <img src={embeddedproject} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://linkedin.com/in/wilfried-tapsoba" target="_blank" rel="noreferrer"><h2>Embedded Systems Project</h2></a>
                <p>Design and create a PCB for an alarm clock with speakers and wireless capabilities.</p>
                <h4>Skills: Embedded Systems, Soldering, Debugging, Troubleshooting, Programming (C)</h4>
                <h5>Source: Class Project. </h5>
            </div>
            <div className="project">
                <img src={autonomouscar} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://linkedin.com/in/wilfried-tapsoba" target="_blank" rel="noreferrer"><h2>Autonomous Car with Traffic Light System</h2></a>
                <p>This project assesses the safety of self-driving cars with a miniature autonomous car with a traffic light system. Selected as 2nd best research project among other 34 projects at the student showcase at Madison College.</p>
                <h5>Skills: Arduino, Assembly, Problem solving,Debugging, Troubleshooting.
                <br/>Source: Capstone Project. </h5>
            </div>
            {/* <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;