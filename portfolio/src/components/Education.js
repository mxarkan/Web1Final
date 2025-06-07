import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaUniversity, 
  FaSchool, 
  FaLaptopCode, 
  FaCode,
  FaUserTie,
  FaAward 
} from 'react-icons/fa';
import { GiDiploma, GiGraduateCap } from 'react-icons/gi';
import { motion } from 'framer-motion';
import WaveBackground from './WaveBackground';

const educationData = [
  {
    id: 1,
    title: 'Bachelor of Computer Science',
    institution: 'Islamic University of Gaza',
    year: '2021 - Present',
    description: 'Specialized in Software Engineering and Cyber Security',
    type: 'education'
  },
  {
    id: 2,
    title: 'High School Diploma',
    institution: 'Al-Azhar High School',
    year: '2017 - 2020',
    description: 'Science Stream - Graduated with Excellent grade (94.5%)',
    type: 'education'
  }
];

const experienceData = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'Tech Solutions Inc.',
    year: 'Summer 2023',
    description: 'Developed responsive web applications using React.js and implemented modern UI/UX designs.',
    type: 'experience'
  },
  {
    id: 2,
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    year: '2020 - Present',
    description: 'Building custom websites and web applications for clients using modern web technologies.',
    type: 'experience'
  },
  {
    id: 3,
    title: 'Graphic Designer',
    company: 'Freelance',
    year: '2020 - Present',
    description: 'Creating visually appealing designs for digital and print media, including logos, banners, and marketing materials using Adobe Creative Suite.',
    type: 'experience'
  },
  {
    id: 4,
    title: 'Digital Marketer',
    company: 'Freelance',
    year: '2021 - Present',
    description: 'Developing and implementing digital marketing strategies, including social media management, content creation, and online advertising campaigns.',
    type: 'experience'
  }
];

const Education = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getEducationIcon = (index) => {
    const icons = [
      <FaUniversity key="university" />,
      <GiGraduateCap key="graduate" />,
      <FaSchool key="school" />,
      <GiDiploma key="diploma" />
    ];
    return icons[index % icons.length];
  };

  const getExperienceIcon = (index) => {
    const icons = [
      <FaLaptopCode key="laptop" />,
      <FaCode key="code" />,
      <FaUserTie key="user-tie" />,
      <FaAward key="award" />
    ];
    return icons[index % icons.length];
  };
  
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

  const allItems = [...educationData, ...experienceData];
  const displayedItems = activeTab === 'all' 
    ? allItems 
    : activeTab === 'education' 
      ? educationData 
      : experienceData;

  return (
    <EducationSection id="education" className="section">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education & Experience
          </motion.h2>
          <p className="section-subtitle">My academic and professional journey</p>
        </div>

        <div className="section-content">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <FaGraduationCap className="tab-icon" /> Education
            </button>
            <button 
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <FaBriefcase className="tab-icon" /> Experience
            </button>
          </div>

          <TimelineContainer>
            <TimelineLine />
            <TimelineItems>
              {displayedItems.map((item, index) => (
                <TimelineItem key={`${item.type}-${item.id}`} index={index}>
                  <TimelineDot>
  {item.type === 'education' 
    ? getEducationIcon(index)
    : getExperienceIcon(index)
  }
</TimelineDot>
                  <TimelineCard
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TimelineYear>{item.year}</TimelineYear>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineSubtitle>{item.institution || item.company}</TimelineSubtitle>
                    <TimelineDescription>{item.description}</TimelineDescription>
                    <TimelineTag type={item.type}>
                      {item.type === 'education' ? 'Education' : 'Work'}
                    </TimelineTag>
                  </TimelineCard>
                </TimelineItem>
              ))}
            </TimelineItems>
          </TimelineContainer>
        </div>
      </div>
    </EducationSection>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  width: 2px;
  background: linear-gradient(to bottom, 
    transparent, 
    ${({ theme }) => theme.primary}80, 
    transparent);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
  z-index: 0;
  opacity: 0.5;
`;

const TimelineItems = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TimelineItem = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  justify-content: ${({ index }) => (index % 2 === 0 ? 'flex-start' : 'flex-end')};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  ${TimelineItem}:hover & {
    transform: translateX(-50%) scale(1.1);
    box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.15);
  }
`;

const TimelineCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-radius: 16px;
  padding: 25px;
  margin: 10px 0;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${({ index }) => 0.1 * index}s;
  
  &:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.12);
  }
`;

const TimelineYear = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.primary}15;
  color: ${({ theme }) => theme.primary};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 12px;
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.text};
`;

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  margin: 0 0 12px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.textLight};
  margin: 0 0 15px;
  line-height: 1.6;
`;

const TimelineTag = styled.span`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 10px;
  background: ${({ theme, type }) => 
    type === 'education' 
      ? `${theme.primary}15` 
      : `${theme.secondary}15`};
  color: ${({ theme, type }) => 
    type === 'education' 
      ? theme.primary 
      : theme.secondary};
  border: 1px solid ${({ theme, type }) => 
    type === 'education' 
      ? `${theme.primary}30` 
      : `${theme.secondary}30`};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  ${TimelineCard}:hover & {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const EducationSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => `
      radial-gradient(circle at 20% 70%, ${theme.primary}03 0%, transparent 40%),
      radial-gradient(circle at 80% 30%, ${theme.secondary}03 0%, transparent 40%)
    `};
    z-index: 0;
  }
  
  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 60px;
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 15px;
      color: ${({ theme }) => theme.text};
    }
    
    .section-subtitle {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.1rem;
      max-width: 700px;
      margin: 0 auto;
    }
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .tab-btn {
    padding: 10px 20px;
    border: none;
    background: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.textLight};
    border-radius: 50px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &:hover, &.active {
      background: ${({ theme }) => theme.primary};
      color: white;
    }
    
    .tab-icon {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
    
    .section-title h2 {
      font-size: 2rem;
    }
    
    ${TimelineItem} {
      justify-content: flex-start !important;
    }
    
    ${TimelineCard} {
      width: calc(100% - 40px);
      margin-left: 40px;
      
      &::before {
        border-color: transparent ${({ theme }) => theme.cardBg} transparent transparent !important;
        left: -15px !important;
        right: auto !important;
        border-width: 15px 15px 15px 0 !important;
      }
    }
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    
    h2 {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.text};
      margin-bottom: 0.5rem;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: ${({ theme }) => theme.primary};
        border-radius: 2px;
      }
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    .section-subtitle {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 1.1rem;
      margin-top: 1rem;
    }
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
  
  .tab-btn {
    padding: 0.5rem 1.5rem;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
    border-radius: 50px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    .tab-icon {
      font-size: 1rem;
    }
    
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
  
  .section-content {
    position: relative;
    z-index: 1;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .project-card {
    background: ${({ theme }) => theme.card};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.border};
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      border-color: ${({ theme }) => `${theme.primary}20`};
    }
    
    .project-content {
      padding: 2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      
      .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.2rem;
        
        .project-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: ${({ theme }) => `${theme.primary}15`};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${({ theme }) => theme.primary};
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-right: 1rem;
        }
        
        .year {
          background: ${({ theme }) => `${theme.primary}10`};
          color: ${({ theme }) => theme.primary};
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid ${({ theme }) => `${theme.primary}20`};
        }
      }
      
      h3 {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.text};
        margin: 0 0 0.5rem 0;
        line-height: 1.4;
      }
      
      h4 {
        font-size: 1rem;
        color: ${({ theme }) => theme.primary};
        margin: 0 0 1rem 0;
        font-weight: 500;
      }
      
      p {
        color: ${({ theme }) => theme.textSecondary};
        margin: 0 0 1.5rem 0;
        line-height: 1.7;
        font-size: 0.95rem;
      }
      
      .project-tags {
        margin-top: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        
        .tag {
          background: ${({ theme }) => theme.background};
          color: ${({ theme }) => theme.primary};
          padding: 0.3rem 1rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid ${({ theme }) => theme.border};
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
    
    .section-title {
      margin-bottom: 2.5rem;
      
      h2 {
        font-size: 2rem;
      }
      
      .section-subtitle {
        font-size: 1rem;
      }
    }
    
    .project-card {
      .project-content {
        padding: 1.5rem;
        
        h3 {
          font-size: 1.2rem;
        }
        
        h4 {
          font-size: 0.95rem;
        }
        
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default Education;
