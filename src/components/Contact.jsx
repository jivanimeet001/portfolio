import React from 'react';
import styled from 'styled-components';
import { contact } from '../data';
import { SectionTitle, Card } from '../styles/GlobalStyles';

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
const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Contact() {
  // Formspree endpoint (replace with your own Formspree endpoint)
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrblvejq';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert('Message sent!');
        form.reset();
      } else {
        alert('There was an error sending your message. Please try again later.');
      }
    } catch (err) {
      alert('There was an error sending your message. Please try again later.');
    }
  };
  return (
    <section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <CenterWrapper>
        <Card>
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
