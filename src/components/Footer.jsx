import React from 'react';
import styled from 'styled-components';
import { contact } from '../data';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 32px 0 18px 0;
  margin-top: 48px;
  border-top: 1.5px solid #e0e7ef;
`;
const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 12px;
`;
const FooterLink = styled.a`
  color: #2563eb;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.08rem;
  text-decoration: none;
  &:hover {
    color: #1e40af;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href={`mailto:${contact.email}`}>
          <MdEmail size={20} />
          {contact.email}
        </FooterLink>
        <FooterLink href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} color="#0077b5" />
          LinkedIn
        </FooterLink>
        <FooterLink href={contact.github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
          GitHub
        </FooterLink>
      </FooterLinks>
      <div style={{ fontSize: '1rem', fontWeight: 500, marginTop: 8 }}>
        © {new Date().getFullYear()} All rights reserved. Created by Meet Jivani
      </div>
    </FooterContainer>
  );
}
