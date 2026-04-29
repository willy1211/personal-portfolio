import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import school from '../assets/images/school.png';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<img src={school}  alt="Headshot" style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%"
            }}/>}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Engineering, Milwaukee School of Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Milwaukee, WI</h4>
            <p>
              Graduated in May 2026 with a Bachelor of Science in Computer Engineering. Coursework included software development, data structures and algorithms, computer architecture, operating systems, embedded systems,machine learning, and artificial intelligence.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '5px solid  white' }}
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            // icon={<FontAwesomeIcon icon={faBriefcase} />}
            icon={<img src={school}  alt="Headshot" style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%"
            }}/>}
          >
            <h3 className="vertical-timeline-element-title">Associate of Science in Electrical Engineering, Madison College</h3>
            <h4 className="vertical-timeline-element-subtitle">Madison, WI</h4>
            <p>
              Graduated in May 2023 with an Associate of Science in Electrical Engineering. Class work included courses in circuit analysis, digital logic design, social sciences, psychology, calculus and embedded systems.
            </p>
          </VerticalTimelineElement>
          

          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement> */}
         

        </VerticalTimeline>
        
      </div>
    </div>
  );
}

export default Timeline;