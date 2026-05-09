import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectData } from '../data/projects';

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card project">
      <Link to={`/projects/${project.id}`} className="project-card-link">
        <div className="project-card-image">
          <img src={project.image} className="project-card-hero" alt={project.title} />
        </div>
      </Link>
      <div className="project-card-content">
        <Link to={`/projects/${project.id}`} className="project-card-link">
          <h2>{project.title}</h2>
          <h4>{project.subtitle}</h4>
        </Link>
        <p>{project.description}</p>
        <div className="project-card-tags">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="project-card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
