import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterSection>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="home" smooth={true} duration={500} className="logo">
              A ESHKIAN
            </Link>
            <p>
              A passionate Web Developer and Graphic Designer dedicated to creating beautiful, functional, and user-friendly digital experiences.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={500}>About</Link></li>
              <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
              <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <FaEnvelope /> abdeshkian@students.iugaza.edu.ps
              </li>
              <li>
                <FaPhone /> +972 59 756 9948
              </li>
              <li>
                <FaMapMarkerAlt /> Palestine, Gaza Strip 00972
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="mailto:your.email@example.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Abdel Fattah Abu Eshkian. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
        </svg>
      </button>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.card};
  padding: 80px 0 20px;
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.border};

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .footer-logo {
    .logo {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.primary};
      text-decoration: none;
      margin-bottom: 1.5rem;
      display: inline-block;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.secondary};
      }
    }

    p {
      color: ${({ theme }) => theme.textSecondary};
      line-height: 1.7;
      margin-top: 1.5rem;
    }
  }

  .footer-links,
  .footer-contact,
  .footer-social {
    h3 {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.text};
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.8rem;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 40px;
        height: 2px;
        background: ${({ theme }) => theme.primary};
      }
    }
  }

  .footer-links {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.8rem;

        a {
          color: ${({ theme }) => theme.textSecondary};
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 1px;
            bottom: -2px;
            left: 0;
            background: ${({ theme }) => theme.primary};
            transition: width 0.3s ease;
          }
          &:hover {
            color: ${({ theme }) => theme.primary};
            transform: translateX(5px);

            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }


  .footer-contact {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.textSecondary};

        svg {
          margin-right: 1rem;
          color: ${({ theme }) => theme.primary};
          font-size: 1.2rem;
          min-width: 20px;
        }

        a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: ${({ theme }) => theme.primary};
          }
        }
      }
    }
  }


  .footer-social {
    .social-icons {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;

      a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        transition: all 0.3s ease;
        border: 1px solid ${({ theme }) => theme.border};

        &:hover {
          background: ${({ theme }) => theme.primary};
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(108, 99, 255, 0.3);
        }
      }
    }
  }


  .footer-bottom {
    border-top: 1px solid ${({ theme }) => theme.border};
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }

    p {
      margin: 0;
      color: ${({ theme }) => theme.textSecondary};
      font-size: 0.9rem;
    }
  }

  .footer-legal {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      color: ${({ theme }) => theme.textSecondary};
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }

    span {
      color: ${({ theme }) => theme.textSecondary};
      opacity: 0.5;
    }
  }

  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);

    &.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    &:hover {
      background: ${({ theme }) => theme.secondary};
      transform: translateY(-3px) !important;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0 20px;

    .scroll-to-top {
      width: 45px;
      height: 45px;
      bottom: 1.5rem;
      right: 1.5rem;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default Footer;
