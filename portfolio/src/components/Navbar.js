import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'education', name: 'Education' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    // Initial calculation
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav scrolled={scrolled}>
      <div className="container">
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>
            <h2>A ESHKIAN</h2>
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              className="nav-link"
              onClick={closeMenu}
              activeClass="active"
              spy={true}
              offset={-70}
            >
              {link.name}
            </Link>
          ))}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <ProgressBar>
        <div 
          className="progress" 
          style={{ 
            width: `${scrollProgress}%`,
            transition: 'width 0.1s ease-out'
          }} 
        />
      </ProgressBar>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme, scrolled }) => 
    scrolled 
      ? theme.name === 'dark' 
        ? 'rgba(30, 30, 30, 0.9)' 
        : 'rgba(255, 255, 255, 0.9)'
      : 'transparent'
  };
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  -webkit-backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1rem 0;
  border-bottom: ${({ scrolled, theme }) => 
    scrolled ? `1px solid ${theme.border}` : 'none'};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .logo {
    h2 {
      color: ${({ theme }) => theme.primary};
      font-size: 1.8rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
      position: fixed;
      top: 80px;
      left: 5%;
      right: 5%;
      transform: translateY(-20px);
      width: 90%;
      max-width: 500px;
      max-height: calc(100vh - 100px);
      overflow-y: auto;
      background: rgba(${({ theme }) => theme.name === 'dark' ? '30, 30, 30' : '255, 255, 255'}, 0.95);
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      flex-direction: column;
      padding: 2rem 1.5rem;
      border-radius: 16px;
      z-index: 1000;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
      opacity: 0;
      pointer-events: none;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      justify-content: center;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
        z-index: -1;
        border-radius: 16px;
      }

      &.active {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  .nav-link {
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.primary};
      transition: width 0.3s ease;
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  .theme-toggle {
    background: ${({ theme }) => theme.cardHover};
    border: 1px solid ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    padding: 0.6rem;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &:hover {
      background: ${({ theme }) => theme.primary};
      color: white;
      border-color: transparent;
      transform: rotate(30deg);
    }
  }

  .hamburger {
    display: none; /* Hidden by default */
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    z-index: 1001;
    background: rgba(${({ theme }) => theme.name === 'dark' ? '30, 30, 30' : '255, 255, 255'}, 0.9);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 44px;
    height: 44px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0.5rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 20px;
    right: 20px;

    &:hover {
      background: ${({ theme }) => theme.primary};
      color: white;
      border-color: transparent;
      transform: rotate(90deg);
      box-shadow: 0 6px 20px ${({ theme }) => theme.primary}40;
    }
    
    &.active {
      transform: rotate(180deg);
      
      &:hover {
        transform: rotate(270deg);
      }
    }

    @media (max-width: 768px) {
      display: flex; /* Only show on mobile */
    }
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: ${({ theme }) => theme.border};
  z-index: 1001;
  
  .progress {
    height: 100%;
    background: ${({ theme }) => theme.primary};
    transition: width 0.1s ease-out;
    border-radius: 0 2px 2px 0;
  }
`;

export default Navbar;
