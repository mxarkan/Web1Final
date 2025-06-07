import React from 'react';
import styled from 'styled-components';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO at TechCorp',
      content: 'Working with Abdel Fattah was a great experience. His attention to detail and problem-solving skills are exceptional.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Product Manager at DesignHub',
      content: 'The web application delivered was beyond our expectations. Highly recommended for any web development project!',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Founder of StartupX',
      content: 'Professional, punctual, and delivers high-quality work. Will definitely work with him again in the future.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  ];

  return (
    <TestimonialsSection id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What my clients say</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.backgroundSecondary};
  position: relative;

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

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    justify-content: center;
  }

  .testimonial-card {
    background: ${({ theme }) => theme.card};
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }
  }

  .testimonial-content {
    flex: 1;
    margin-bottom: 25px;
    position: relative;

    p {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 1rem;
      line-height: 1.8;
      margin: 0;
      position: relative;
      z-index: 1;
    }

    &::before {
      content: '"';
      position: absolute;
      top: -20px;
      left: -10px;
      font-size: 80px;
      color: ${({ theme }) => theme.primary}15;
      font-family: Georgia, serif;
      line-height: 1;
      z-index: 0;
    }
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    margin-top: auto;
  }

  .author-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
    border: 3px solid ${({ theme }) => theme.primary}20;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .author-info {
    h4 {
      margin: 0 0 5px 0;
      color: ${({ theme }) => theme.text};
      font-size: 1.1rem;
    }

    span {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
  }
`;

export default Testimonials;
