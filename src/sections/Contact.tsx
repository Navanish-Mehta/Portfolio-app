import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { IconType } from 'react-icons';

const ContactSection = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 2.5rem;
  padding: 2rem;
  position: relative;
  background: ${props => props.theme === 'dark' 
    ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-radius: 28px;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
    : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-top: 1.5rem;
    border-radius: 20px;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: ${props => props.theme === 'dark'
    ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
    : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 0.8rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
    transition: all 0.3s ease;
    border-radius: 20px;
  }

  &:hover::before {
    opacity: 0.5;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2563eb 60%, #38bdf8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
`;

const ContactText = styled.div`
  h3 {
    color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme === 'dark' ? '#bfc6d8' : '#4a5568'};
    font-size: 1rem;
  }
`;

const ContactForm = styled(motion.form)`
  background: ${props => props.theme === 'dark'
    ? 'linear-gradient(135deg, #23243a 0%, #181c2f 100%)'
    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme === 'dark'
    ? '0 8px 32px rgba(37,99,235,0.13), 0 2px 16px #0002'
    : '0 8px 32px rgba(0,0,0,0.1), 0 2px 16px rgba(0,0,0,0.05)'};
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
    transition: all 0.3s ease;
    border-radius: 20px;
  }

  &:hover::before {
    opacity: 0.5;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  display: block;
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  margin-bottom: 0.5rem;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
  background: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
  background: ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
    min-height: 120px;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px) rotateX(5deg);
    box-shadow: 0 8px 20px rgba(37,99,235,0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0) rotateX(0);
  }
`;

interface StatusMessageProps {
  status: 'success' | 'error' | null;
}

const StatusMessage = styled(motion.div)<StatusMessageProps>`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  background: ${props => props.status === 'success' 
    ? 'rgba(34, 197, 94, 0.1)' 
    : props.status === 'error' 
    ? 'rgba(239, 68, 68, 0.1)' 
    : 'transparent'};
  color: ${props => props.status === 'success' 
    ? '#22c55e' 
    : props.status === 'error' 
    ? '#ef4444' 
    : 'inherit'};
`;

const ContactTitle = styled.h2`
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #2563eb 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: 'Let\'s Connect';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.5;
    transform: translateY(2px);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const ContactSubtitle = styled.p`
  color: ${props => props.theme === 'dark' ? '#bfc6d8' : '#4a5568'};
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const Contact = () => {
  const { theme } = useTheme();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const IconComponent = ({ icon: Icon }: { icon: IconType }) => {
    if (!Icon) return null;
    const IconElement = Icon as React.ComponentType<{ className?: string }>;
    return <IconElement />;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      if (!formRef.current) {
        throw new Error('Form reference not found');
      }

      const result = await emailjs.sendForm(
        'service_74lq017',
        'template_i6vayam',
        formRef.current,
        'Ive6RftO22PkbPf3N'
      );
      
      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        formRef.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ContactSection id="contact" theme={theme}>
      <ContactTitle>Get In Touch</ContactTitle>
      <ContactSubtitle theme={theme}>
        Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
      </ContactSubtitle>
      <ContactContainer>
        <ContactInfo>
          <ContactCard
            theme={theme}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.02,
              rotateX: 5,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.5 }}
          >
            <ContactIcon>
              <IconComponent icon={FaEnvelope} />
            </ContactIcon>
            <ContactText theme={theme}>
              <h3>Email</h3>
              <p>navanishmehta@gmail.com</p>
            </ContactText>
          </ContactCard>

          <ContactCard
            theme={theme}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.02,
              rotateX: 5,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactIcon>
              <IconComponent icon={FaPhone} />
            </ContactIcon>
            <ContactText theme={theme}>
              <h3>Phone</h3>
              <p>+91 6207746066</p>
            </ContactText>
          </ContactCard>

          <ContactCard
            theme={theme}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.02,
              rotateX: 5,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactIcon>
              <IconComponent icon={FaMapMarkerAlt} />
            </ContactIcon>
            <ContactText theme={theme}>
              <h3>Location</h3>
              <p>East Champaran,Bihar -845303</p>
            </ContactText>
          </ContactCard>
        </ContactInfo>

        <ContactForm
          ref={formRef}
          theme={theme}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.02,
            rotateX: 5,
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.5 }}
        >
          <FormGroup>
            <Label theme={theme}>Name</Label>
            <Input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              theme={theme}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label theme={theme}>Email</Label>
            <Input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              theme={theme}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label theme={theme}>Subject</Label>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              theme={theme}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label theme={theme}>Message</Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              theme={theme}
              required
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>

          {status.type && (
            <StatusMessage
              status={status.type}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {status.message}
            </StatusMessage>
          )}
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 