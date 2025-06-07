import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';
import { generatePDF } from '../utils/pdfGenerator';

const About = () => {

  return (
    <AboutSection id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me</p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="/images/aeshkian.png" alt="Abdel Fattah Abu Eshkian" />
            </div>
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <h2>I'm Abdel Fattah Abu Eshkian, a Computer Science Student & Web Developer</h2>
            <div className="info">
              <div className="info-item">
                <span>Name:</span>
                <p>Abdel Fattah Abu Eshkian</p>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <p>abdeshkian@students.iugaza.edu.ps</p>
              </div>
              <div className="info-item">
                <span>From:</span>
                <p>Palestine, Gaza Strip</p>
              </div>
              <div className="info-item">
                <span>Experience:</span>
                <p>3+ Years</p>
              </div>
            </div>
            <p className="description">
              I'm a passionate Computer Science student at the Islamic University of Gaza with expertise in Graphic Design, UI/UX Design, and Web Development. 
              I love creating beautiful, responsive, and user-friendly digital experiences. 
              With a strong foundation in both design and development, I bridge the gap between aesthetics and functionality 
              to deliver exceptional digital solutions that make an impact.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <button onClick={generatePDF} className="btn btn-outline">
                <FaDownload /> Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;

  .about-content {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-top: 4rem;

    @media (max-width: 992px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .about-image {
    flex: 1;
    position: relative;
    z-index: 1;

    @media (min-width: 993px) {
      max-width: 450px;
    }
  }

  .image-wrapper {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.card};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.primary}10;
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);

      img {
        transform: scale(1.05);
      }
    }
  }

  .about-text {
    flex: 1;
    padding: 20px 0;

    h3 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.primary};
      margin-bottom: 1rem;
      font-weight: 600;
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: ${({ theme }) => theme.text};
      line-height: 1.3;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }

  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin: 2rem 0;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    @media (max-width: 992px) {
      justify-content: center;
    }

    span {
      font-weight: 600;
      color: ${({ theme }) => theme.primary};
      min-width: 80px;
      display: inline-block;
    }

    p {
      margin: 0;
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 2rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;

    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .btn {
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 500;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;

    &-primary {
      background: ${({ theme }) => theme.primary};
      color: white;
      border: 2px solid transparent;

      &:hover {
        background: ${({ theme }) => theme.secondary};
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(108, 99, 255, 0.4);
      }
    }

    &-outline {
      background: transparent;
      color: ${({ theme }) => theme.text};
      border: 2px solid ${({ theme }) => theme.primary};

      &:hover {
        background: ${({ theme }) => theme.primary}10;
        transform: translateY(-3px);
      }
    }
  }
`;

export default About;
