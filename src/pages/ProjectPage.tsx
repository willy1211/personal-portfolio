import React from 'react';
import { projectLookup } from '../data/projects';
import ProjectDetail from '../components/ProjectDetail';
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';

function getProjectIdFromPath(): string | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const match = window.location.pathname.match(/\/project\/([^/]+)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

export default function ProjectPage() {
  const projectId = getProjectIdFromPath();
  const project = projectId ? projectLookup[projectId] : undefined;

  if (!project) {
    return (
      <div className="projects-container">
        <h1>Project not found</h1>
        <p>The project you are looking for does not exist.</p>
        <Link to="/" className="project-detail-button">
          Back to Home
        </Link>
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}
