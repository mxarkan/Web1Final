import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { generatePDF } from '../utils/pdfGenerator';

const Header = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Web Developer', 'UI/UX Designer', 'Problem Solver'];
  const currentRole = roles[loopNum % roles.length];

  useEffect(() => {
    const handleTyping = () => {
      setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentRole, loopNum, typingSpeed]);

  return (
    <HeaderSection id="home">
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <h3>Hello, I'm</h3>
            <h1>Abdel Fattah Abu Eshkian</h1>
            <h2>
              {text}
              <Cursor>|</Cursor>
            </h2>
            <p>
              I'm a passionate Computer Science student at IUG with expertise in Graphic Design, UI/UX Design, and Web Development.
              I love creating beautiful and functional digital experiences.
            </p>
            <div className="social-links">
              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Email">
                <HiOutlineMail />
              </a>
            </div>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <button onClick={generatePDF} className="btn btn-secondary">
                <FaDownload /> Download CV
              </button>
            </div>
          </div>
          <div className="header-image">
            <div className="image-wrapper">
              <img
                src="/images/aeshkian.png"
                alt="Abdel Fattah Abu Eshkian"
                className="profile-img"
              />
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </HeaderSection>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const HeaderSection = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}05 0%, ${({ theme }) => theme.secondary}05 100%);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 10% 20%, ${({ theme }) => theme.primary}08 0%, transparent 30%),
                radial-gradient(circle at 90% 80%, ${({ theme }) => theme.secondary}08 0%, transparent 30%);
    z-index: 0;
  }
  overflow: hidden;
  padding-top: 80px;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.primary}15 0%, ${theme.secondary}15 100%)`};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: -1;
  }

  .container {
    width: 100%;
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateY(20px);
    opacity: 0;
    animation: ${fadeIn} 0.8s ease-out forwards;
    transition: all 0.3s ease;
    margin: 20px auto;
    max-width: 1200px;
    
    &:hover {
      transform: translateY(0);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 1200px) {
      margin: 20px 2rem;
      width: calc(100% - 4rem);
    }

    @media (max-width: 992px) {
      flex-direction: column-reverse;
      text-align: center;
      gap: 2rem;
      padding: 30px;
      margin: 20px auto;
      width: 90%;
    }
    
    @media (max-width: 576px) {
      padding: 20px 15px;
      width: 95%;
      margin: 20px auto;
    }
  }

  .header-text {
    flex: 1;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media (max-width: 992px) {
      align-items: center;
      padding-right: 0;
      width: 100%;
    }
    color: ${({ theme }) => theme.text};
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.primary};
      font-weight: 600;
    }

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.text};
      line-height: 1.2;

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    h2 {
      font-size: 2rem;
      color: ${({ theme }) => theme.primary};
      margin-bottom: 1.5rem;
      min-height: 3rem;
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.textSecondary};
      margin-bottom: 2rem;
      line-height: 1.8;
    }
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${({ theme }) => theme.cardHover};
      color: ${({ theme }) => theme.text};
      transition: all 0.3s ease;
      font-size: 1.2rem;
      border: 1px solid ${({ theme }) => theme.border};
      
      &:hover {
        background: ${({ theme }) => theme.primary};
        color: white;
        transform: translateY(-3px);
        border-color: transparent;
      }
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    @media (max-width: 576px) {
      flex-direction: column;
    }

    @media (max-width: 992px) {
      justify-content: center;
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
    cursor: pointer;
    text-decoration: none;

    &-primary {
      background: ${({ theme }) => theme.primary};
      color: white !important;
      border: 2px solid transparent;

      &:hover {
        background: ${({ theme }) => theme.secondary};
        color: white !important;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(108, 99, 255, 0.4);
      }
    }

    &-secondary {
      background: transparent;
      color: ${({ theme }) => theme.text};
      border: 2px solid ${({ theme }) => theme.primary};

      &:hover {
        background: ${({ theme }) => theme.primary}10;
        transform: translateY(-3px);
      }
    }
  }

  .header-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    @media (max-width: 992px) {
      margin-top: 2rem;
    }
    position: relative;
    z-index: 1;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 400px;
    border-radius: 30px;
    overflow: hidden;
    animation: ${pulse} 8s ease-in-out infinite;

    @media (max-width: 768px) {
      max-width: 300px;
      height: 300px;
    }
  }

  .profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
    position: relative;
    z-index: 3;
    transition: all 0.3s ease;
  }

  .floating-shape {
    position: absolute;
    border-radius: 20px;
    background: ${({ theme }) => theme.primary}20;
    backdrop-filter: blur(5px);
    z-index: 1;
    animation: ${float} 6s ease-in-out infinite;

    &.shape-1 {
      width: 100px;
      height: 100px;
      top: -20px;
      left: -20px;
      animation-delay: 0s;
    }

    &.shape-2 {
      width: 150px;
      height: 150px;
      bottom: -30px;
      right: -30px;
      animation-delay: 0.5s;
      animation-duration: 8s;
    }

    &.shape-3 {
      width: 80px;
      height: 80px;
      top: 50%;
      right: -20px;
      animation-delay: 1s;
      animation-duration: 10s;
    }
  }

  .scroll-down {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};

      .mouse {
        transform: translateY(5px);
      }
    }
  }

  .mouse {
    width: 25px;
    height: 40px;
    border: 2px solid ${({ theme }) => theme.textSecondary};
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    padding-top: 5px;
    transition: all 0.3s ease;
  }

  .wheel {
    width: 5px;
    height: 8px;
    background: ${({ theme }) => theme.textSecondary};
    border-radius: 10px;
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(10px);
      opacity: 0;
    }
  }
`;

const Cursor = styled.span`
  display: inline-block;
  margin-left: 3px;
  animation: blink 0.7s infinite;
  color: ${({ theme }) => theme.primary};

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

export default Header;
