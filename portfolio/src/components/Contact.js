import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter, FiCheckCircle } from 'react-icons/fi';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Load form data from localStorage
const loadFormData = () => {
  const savedData = localStorage.getItem('contactFormDraft');
  return savedData 
    ? JSON.parse(savedData) 
    : { name: '', email: '', message: '' };
};

// Load all form submissions from localStorage
const loadSubmissions = () => {
  const savedSubmissions = localStorage.getItem('contactFormSubmissions');
  return savedSubmissions ? JSON.parse(savedSubmissions) : [];
};

// Save a new submission to localStorage
const saveSubmission = (formData) => {
  const submissions = loadSubmissions();
  const newSubmission = {
    ...formData,
    id: Date.now(),
    date: new Date().toISOString()
  };
  submissions.unshift(newSubmission); // Add to beginning of array
  localStorage.setItem('contactFormSubmissions', JSON.stringify(submissions));
  return newSubmission;
};

const Contact = () => {
  const [formData, setFormData] = useState(loadFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxMessageLength = 500;

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('contactFormDraft', JSON.stringify(formData));
    setCharCount(formData.message.length);
  }, [formData]);

  // View submissions in console for debugging
  useEffect(() => {
    console.log('All submissions:', loadSubmissions());
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > maxMessageLength) {
      newErrors.message = `Message should not exceed ${maxMessageLength} characters`;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Send data to server
        const response = await fetch('http://localhost:3001/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString()
          }),
        });
        
        const result = await response.json();
        
        if (result.success) {
          // Clear form and show success message
          setFormData({ name: '', email: '', message: '' });
          localStorage.removeItem('contactFormDraft');
          setIsSubmitted(true);
          
          // Hide success message after 5 seconds
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          alert('Failed to submit form. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <ContactSection id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for any questions or opportunities</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            
            <ul className="info-list">
              <li className="info-item">
                <span className="icon"><FiMapPin /></span>
                <div className="details">
                  <h4>Location</h4>
                  <span>Gaza, Palestine</span>
                </div>
              </li>
              <li className="info-item">
                <span className="icon"><FiMail /></span>
                <div className="details">
                  <h4>Email</h4>
                  <a href="mailto:abdeshkian@students.iugaza.edu.ps">abdeshkian@students.iugaza.edu.ps</a>
                </div>
              </li>
              <li className="info-item">
                <span className="icon"><FiPhone /></span>
                <div className="details">
                  <h4>Phone</h4>
                  <a href="tel:+970597569948">+970 59 756 9948</a>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="contact-form">
            {isSubmitted ? (
              <div className="success-message">
                <FiCheckCircle />
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  />
                  <div className="char-counter">
                    {charCount}/{maxMessageLength} characters
                  </div>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <FiSend className="icon" />
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="social-section">
          <h3 className="social-title">Follow me on Social Media</h3>
          <div className="social-links">
            <a href="#" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="#" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="#" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;

  .container {
    max-width: 1200px;
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
      position: relative;
      display: inline-block;
      padding-bottom: 15px;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: ${({ theme }) => theme.primary};
      }
    }

    p {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 1.1rem;
      margin-top: 10px;
    }
  }

  .contact-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-bottom: 60px;
  }

  .contact-info {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.text};
    }

    p {
      color: ${({ theme }) => theme.textSecondary};
      line-height: 1.6;
      margin-bottom: 30px;
    }

    .info-list {
      list-style: none;
      padding: 0;
      margin: 0;

      .info-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;

        .icon {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.primary};
          margin-right: 15px;
          margin-top: 5px;
        }

        .details {
          h4 {
            font-size: 1.1rem;
            margin: 0 0 5px;
            color: ${({ theme }) => theme.text};
          }

          a, span {
            color: ${({ theme }) => theme.textSecondary};
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
              color: ${({ theme }) => theme.primary};
            }
          }
        }
      }
    }
  }


  .form-group {
    margin-bottom: 1.5rem;
    position: relative;

    input, textarea {
      width: 100%;
      padding: 0.8rem 1.2rem;
      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 8px;
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      font-size: 1rem;
      transition: all 0.3s ease;
      font-family: inherit;

      &::placeholder {
        color: ${({ theme }) => theme.textSecondary};
        opacity: 0.7;
      }
      
      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 3px ${({ theme }) => `${theme.primary}20`};
      }
      
      &.error {
        border-color: #ff4444;
        
        &:focus {
          box-shadow: 0 0 0 3px rgba(255, 68, 68, 0.2);
        }
      }
    }

    textarea {
      resize: vertical;
      min-height: 150px;
    }
  }

  .error-message {
    display: block;
    color: #ff4444;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
  
  .char-counter {
    text-align: right;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textSecondary};
    margin-top: 0.25rem;
  }
  
  .success-message {
    text-align: center;
    padding: 2rem;
    
    svg {
      font-size: 4rem;
      color: #4CAF50;
      margin-bottom: 1rem;
    }
    
    h3 {
      color: ${({ theme }) => theme.text};
      margin-bottom: 1rem;
    }
    
    p {
      color: ${({ theme }) => theme.textSecondary};
      line-height: 1.6;
    }
  }

  .submit-btn {
    width: 100%;
    padding: 1rem;
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    margin-top: 1rem;
    
    &:hover {
      background: ${({ theme }) => theme.primaryDark || '#1a73e8'};
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &:disabled {
      background: #cccccc;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    
    .icon {
      font-size: 1.2rem;
    }
  }

  .social-section {
    text-align: center;
    margin-top: 60px;

    .social-title {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.text};
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 20px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: ${({ theme }) => theme.cardBackground};
        color: ${({ theme }) => theme.text};
        font-size: 1.2rem;
        transition: all 0.3s ease;

        &:hover {
          background: ${({ theme }) => theme.primary};
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }


  @media (max-width: 768px) {
    padding: 60px 0;

    .section-title {
      margin-bottom: 40px;

      h2 {
        font-size: 2rem;
      }
    }

    .contact-container {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
`;
