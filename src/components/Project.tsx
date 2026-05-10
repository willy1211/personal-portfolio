import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
// @ts-ignore: SCSS module import is handled by the build configuration
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Project;
