import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ScrollButton 
      onClick={scrollToTop}
      className={isVisible ? 'visible' : ''}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </ScrollButton>
  );
};

const ScrollButton = styled.button`
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
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

export default ScrollToTop;
