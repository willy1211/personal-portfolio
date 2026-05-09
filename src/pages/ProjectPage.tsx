import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectLookup } from '../data/projects';
import ProjectDetail from '../components/ProjectDetail';


export default function ProjectPage() {
  const { projectId } = useParams();
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
