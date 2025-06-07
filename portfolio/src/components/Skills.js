import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';

const skills = [
  { name: 'HTML5', percentage: 100, color: '#E44D26' },
  { name: 'CSS3', percentage: 100, color: '#264DE4' },
  { name: 'JavaScript', percentage: 100, color: '#F0DB4F' },
  { name: 'React', percentage: 97, color: '#61DAFB' },
  { name: 'Node.js', percentage: 75, color: '#68A063' },
  { name: 'Adobe Photoshop', percentage: 90, color: '#31A8FF' },
  { name: 'Adobe Illustrator', percentage: 85, color: '#FF9A00' },
  { name: 'UI/UX Design', percentage: 95, color: '#9C27B0' },
];

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <SkillsSection id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <p>My technical level</p>
        </div>
        
        <motion.div 
          className="skills-container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="skills-content">
            <motion.div className="skills-text" variants={itemVariants}>
              <h3>Technical Skills</h3>
              <p>
                With several years of experience as both a Graphic Designer and Web Developer,
                I've honed a diverse skill set that combines technical expertise with creative design.
                My journey has allowed me to master various technologies and design tools.
              </p>
              <p className="highlight">
                I specialize in creating visually stunning and highly functional digital experiences,
                from responsive websites to engaging user interfaces and eye-catching graphic designs.
                My dual expertise enables me to bridge the gap between design and development seamlessly.
              </p>
              <a href="#contact" className="btn">
                Contact Me
              </a>
            </motion.div>
            
            <div className="skills-bars">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item"
                  variants={itemVariants}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: isInView ? `${skill.percentage}%` : 0,
                        transition: { 
                          duration: 1.5,
                          ease: 'easeOut',
                          delay: 0.3 + (index * 0.1)
                        }
                      }}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SkillsSection>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SkillsSection = styled.section`
  padding: 80px 0;
  background: ${({ theme }) => theme.background};
  position: relative;
  color: ${({ theme }) => theme.text};
  overflow: visible;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => `
      radial-gradient(circle at 10% 20%, ${theme.primary}03 0%, transparent 30%),
      radial-gradient(circle at 90% 80%, ${theme.secondary}03 0%, transparent 30%)
    `};
    z-index: 0;
  }

  .skills-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.text};
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    transform: translateY(20px);
    opacity: 0;
    animation: ${fadeIn} 0.8s ease-out forwards 0.3s;
    width: 100%;
    box-sizing: border-box;
    
    &:hover {
      transform: translateY(0);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    @media (max-width: 768px) {
      padding: 1.5rem;
    }
  }

  .skills-text {
    flex: 1;
    min-width: 100%;
    color: ${({ theme }) => theme.text};
    
    @media (min-width: 768px) {
      min-width: 300px;
    }
    
    h3 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      color: ${({ theme }) => theme.primary};
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: ${({ theme }) => theme.textSecondary};
      margin-bottom: 1.5rem;
    }

    .highlight {
      background: ${({ theme }) => theme.primary}10;
      padding: 1.5rem;
      border-radius: 10px;
      border-left: 3px solid ${({ theme }) => theme.primary};
      font-style: italic;
      margin: 2rem 0;
      color: ${({ theme }) => theme.text};
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 2rem;
      background: ${({ theme }) => theme.primary};
      color: white !important;
      border-radius: 50px;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.secondary};
        color: white !important;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(108, 99, 255, 0.4);
      }
    }
  }

  .skills-bars {
    flex: 1;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
    margin-top: 2rem;
    
    @media (min-width: 768px) {
      min-width: 300px;
      margin-top: 0;
    }
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
  }

  .skill-item {
    margin-bottom: 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    padding: 1rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.03);
    
    &:hover {
      background: rgba(255, 255, 255, 0.07);
      transform: translateX(5px);
    }
  }

  .skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    .skill-name {
      font-weight: 600;
      color: ${({ theme }) => theme.text};
      font-size: 1rem;
    }
    
    .skill-percent {
      font-weight: 500;
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  .progress-bar {
    width: 100%;
    height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
    margin-top: 0.5rem;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .progress {
    height: 100%;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: width 1s ease-in-out;
  }
`;

export default Skills;
