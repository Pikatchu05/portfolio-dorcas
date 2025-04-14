import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Icon from '../utils/Icon';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Application de Gestion des Absences",
    description: "Une application web permettant aux établissements scolaires de gérer et suivre les absences des élèves en temps réel, avec notifications aux parents.",
    technologies: ["React", "Node.js", "MySQL", "Express"],
    image: "absence-manager.jpg",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Chatbot IA pour École",
    description: "Un assistant virtuel intelligent qui aide les élèves et parents à trouver des informations sur l'établissement, les cours et les événements scolaires.",
    technologies: ["React", "JavaScript", "Node.js", "Hugging Face API"],
    image: "school-chatbot.jpg",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filterProjects = (category: string) => {
    setActiveFilter(category);
  };
  
  return (
    <ProjectsContainer id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mes Projets
        </motion.h2>
        
        <ProjectFilters>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => filterProjects('all')}
          >
            Tous
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'react'} 
            onClick={() => filterProjects('react')}
          >
            React
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'ai'} 
            onClick={() => filterProjects('ai')}
          >
            IA
          </FilterButton>
        </ProjectFilters>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard>
                <ProjectImageContainer>
                  <ProjectImagePlaceholder>
                    <span>{project.title.substring(0, 2)}</span>
                  </ProjectImagePlaceholder>
                  <ProjectLinks>
                    {project.githubUrl && (
                      <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Icon icon="FaGithub" />
                      </ProjectLink>
                    )}
                    {project.liveUrl && (
                      <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Icon icon="FaExternalLinkAlt" />
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectImageContainer>
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTechStack>
                    {project.technologies.map((tech, i) => (
                      <TechTag key={i}>{tech}</TechTag>
                    ))}
                  </ProjectTechStack>
                </ProjectInfo>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 5rem 0;
  
  .container {
    text-align: center;
  }
  
  .section-title {
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
  }
`;

const ProjectFilters = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1rem;
  
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.6rem 1.2rem;
  background-color: ${({ active }) => (active ? 'var(--primary-color)' : 'white')};
  color: ${({ active }) => (active ? 'white' : 'var(--text-color)')};
  border: 1px solid ${({ active }) => (active ? 'var(--primary-color)' : '#e0e0e0')};
  border-radius: 30px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 350px));
  gap: 2rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(280px, 350px);
  }
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const ProjectImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  
  span {
    font-size: 3rem;
    font-weight: 700;
    color: white;
  }
`;

const ProjectLinks = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  opacity: 0;
  transition: var(--transition);
  
  ${ProjectImageContainer}:hover & {
    opacity: 1;
  }
`;

const ProjectLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: white;
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  font-weight: 700;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const ProjectDescription = styled.p`
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 500;
`;

const ProjectTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: var(--light-gray);
  color: var(--primary-color);
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
`;

export default ProjectsSection;
