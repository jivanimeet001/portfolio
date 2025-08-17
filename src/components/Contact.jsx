import React from 'react';
import styled from 'styled-components';
import { contact } from '../data';
import { SectionTitle, Card } from '../styles/GlobalStyles';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 400px;
`;

const ContactItem = styled.a`
  font-size: 1.1rem;
  color: #2563eb;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  &:hover {
    color: #1e40af;
  }
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  width: 100%;
  max-width: 400px;
`;
const Input = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1.5px solid #c7d2fe;
  font-size: 1rem;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  transition: border 0.2s;
  &:focus {
    border-color: #7c3aed;
    outline: none;
  }
`;
const TextArea = styled.textarea`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1.5px solid #c7d2fe;
  font-size: 1rem;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  min-height: 90px;
  resize: vertical;
  transition: border 0.2s;
  &:focus {
    border-color: #7c3aed;
    outline: none;
  }
`;
const SendButton = styled.button`
  background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%);
  }
`;

export default function Contact() {
  // Simple mailto form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const mailto = `mailto:${contact.email}?subject=Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };
  return (
    <section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <CenterWrapper>
        <Card>
          <ContactList>
            <ContactItem href={`mailto:${contact.email}`}>
              <MdEmail size={22} />
              Email: {contact.email}
            </ContactItem>
            <ContactItem href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={22} color="#0077b5" />
              LinkedIn
            </ContactItem>
            <ContactItem href={contact.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={22} />
              GitHub
            </ContactItem>
          </ContactList>
          <ContactForm onSubmit={handleSubmit}>
            <Input name="name" type="text" placeholder="Your Name" required />
            <Input name="email" type="email" placeholder="Your Email" required />
            <TextArea name="message" placeholder="Your Message" required />
            <SendButton type="submit">Send</SendButton>
          </ContactForm>
        </Card>
      </CenterWrapper>
    </section>
  );
}
