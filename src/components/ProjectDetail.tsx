import React from 'react';
import { ProjectData } from '../data/projects';
import '../assets/styles/ProjectDetail.scss';

interface ProjectDetailProps {
  project: ProjectData;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="project-detail-page">
      <div className="project-detail-header">
        <div>
          <p className="project-detail-label">Project</p>
          <h1>{project.title}</h1>
          <p className="project-detail-subtitle">{project.subtitle}</p>
          <p className="project-detail-description">{project.description}</p>
          <a
            href={project.actionUrl}
            target="_blank"
            rel="noreferrer"
            className="project-detail-button"
          >
            {project.actionLabel}
          </a>
        </div>
        <img className="project-detail-hero" src={project.image} alt={project.title} />
      </div>

      <div className="project-detail-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-detail-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-detail-grid">
        <div className="project-detail-row">
          <div className="project-detail-row-title">Motivation</div>
          <div className="project-detail-row-content">{project.motivation}</div>
        </div>
        <div className="project-detail-row">
          <div className="project-detail-row-title">Solution</div>
          <div className="project-detail-row-content">{project.solution}</div>
        </div>
        <div className="project-detail-row">
          <div className="project-detail-row-title">System Overview</div>
          <div className="project-detail-row-content">
            <ul>
              {project.systemOverview.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="project-detail-row">
          <div className="project-detail-row-title">Key Technical Work</div>
          <div className="project-detail-row-content">
            <ul>
              {project.keyTechnicalWork.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="project-detail-row">
          <div className="project-detail-row-title">Technical Decisions</div>
          <div className="project-detail-row-content">
            <ul>
              {project.technicalDecisions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="project-detail-row">
          <div className="project-detail-row-title">Results</div>
          <div className="project-detail-row-content">{project.results}</div>
        </div>
        <div className="project-detail-row">
          <div className="project-detail-row-title">Learned</div>
          <div className="project-detail-row-content">{project.learned}</div>
        </div>
      </div>
    </div>
  );
}
