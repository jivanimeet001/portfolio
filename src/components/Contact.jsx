import React from 'react';
import styled from 'styled-components';
import { contact } from '../data';
import { SectionTitle, Card } from '../styles/GlobalStyles';

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

export default function Contact() {
  return (
    <section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <CenterWrapper>
        <Card>
          <ContactList>
            <ContactItem href={`mailto:${contact.email}`}>Email: {contact.email}</ContactItem>
            <ContactItem href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</ContactItem>
            <ContactItem href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</ContactItem>
          </ContactList>
        </Card>
      </CenterWrapper>
    </section>
  );
}
