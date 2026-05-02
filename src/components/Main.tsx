import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import hero_img from '../assets/images/hero_img.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="../assets/images/hero_img.jpg" alt="Headshot" /> */}
          <img src={hero_img}  alt="Headshot" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/willy1211" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/wilfried-tapsoba/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
             {/* Resume PDF */}
            {/* <a
              href="./src/assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              View Resume
            </a> */}
            <a
              href={process.env.PUBLIC_URL + "/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              View Resume
            </a>
          </div>
          <h1>Wilfried Tapsoba</h1>
          <h2>Computer Engineer</h2>
          <p>An Enthusiastic, optimistic, innovative, and curious person, passionate about improving people's lives with technology, working on hands-on projects, automated systems, and empowering youth.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/willy1211" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/wilfried-tapsoba/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;