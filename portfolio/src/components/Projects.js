import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    description: 'Comprehensive brand identity design including logo, color palette, typography, and brand guidelines for a modern tech startup.',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Identity', 'Adobe Illustrator', 'Adobe Photoshop'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Responsive Portfolio Website',
    description: 'A fully responsive portfolio website built with React, featuring smooth animations and a clean, modern design.',
    category: 'Web Development',
    tags: ['React', 'Styled Components', 'Framer Motion', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'UI/UX Dashboard Design',
    description: 'Modern admin dashboard UI/UX design with a focus on user experience and data visualization.',
    category: 'UI/UX Design',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Adobe XD', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'E-commerce Web Application',
    description: 'Full-stack e-commerce platform with product catalog, user authentication, and payment processing.',
    category: 'Web Development',
    tags: ['MERN Stack', 'Redux', 'JWT', 'Stripe', 'E-commerce'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Print Design Collection',
    description: 'A collection of print materials including business cards, brochures, and flyers for various clients.',
    category: 'Branding',
    tags: ['Print Design', 'InDesign', 'Typography', 'Layout', 'Business Cards'],
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80',
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    title: 'Interactive Web Animation',
    description: 'Creative web animations and micro-interactions to enhance user engagement and experience.',
    category: 'UI/UX Design',
    tags: ['GSAP', 'CSS Animations', 'JavaScript', 'UI/UX', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <ProjectsSection id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Some of my recent work</p>
        </div>

        <div className="filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'Web Development' ? 'active' : ''}`}
            onClick={() => setFilter('Web Development')}
          >
            Web Dev
          </button>
          <button 
            className={`filter-btn ${filter === 'UI/UX Design' ? 'active' : ''}`}
            onClick={() => setFilter('UI/UX Design')}
          >
            UI/UX Design
          </button>
          <button 
            className={`filter-btn ${filter === 'Branding' ? 'active' : ''}`}
            onClick={() => setFilter('Branding')}
          >
            Branding
          </button>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProjectsSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.background} 0%, ${({ theme }) => theme.primary}08 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 30%, ${({ theme }) => theme.primary}05 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, ${({ theme }) => theme.secondary}05 0%, transparent 40%);
    z-index: 0;
    pointer-events: none;
  }
  
  .project-image {
    position: relative;
    overflow: hidden;
    height: 200px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .project-links {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      
      a {
        color: white;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        
        &:hover {
          background: ${({ theme }) => theme.primary};
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 8px 25px ${({ theme }) => theme.primary}40;
        }
      }
    }
    
    &:hover {
      img {
        transform: scale(1.05);
      }
      
      .project-links {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  
  .project-card {
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    height: 100%;
    transform: translateY(20px);
    opacity: 0;
    animation: ${fadeIn} 0.6s ease-out forwards;
    animation-delay: ${({ index }) => 0.1 * index}s;

    &:hover {
      transform: translateY(-8px) !important;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.1);
      
      .project-image img {
        transform: scale(1.05);
      }
      
      .project-links {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .project-content {
      padding: 25px;
      flex: 1;
      display: flex;
      flex-direction: column;
      
      h3 {
        font-size: 1.4rem;
        margin-bottom: 12px;
        color: ${({ theme }) => theme.text};
        font-weight: 600;
        background: linear-gradient(135deg, ${({ theme }) => theme.text} 0%, ${({ theme }) => theme.textSecondary} 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      }
      
      p {
        color: ${({ theme }) => theme.textSecondary};
        margin-bottom: 20px;
        flex: 1;
        line-height: 1.6;
      }
      
      .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 15px;
        
        .tag {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          color: ${({ theme }) => theme.text};
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          
          &:hover {
            background: ${({ theme }) => theme.primary}15;
            color: ${({ theme }) => theme.primary};
            border-color: ${({ theme }) => theme.primary}30;
            transform: translateY(-2px);
          }
        }
      }
    }
  }
  overflow: hidden;

  .filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .filter-btn {
    padding: 0.5rem 1.5rem;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
    border-radius: 50px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
      border-color: ${({ theme }) => theme.primary};
    }

    &.active {
      background: ${({ theme }) => theme.primary};
      color: white;
      border-color: ${({ theme }) => theme.primary};
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default Projects;
