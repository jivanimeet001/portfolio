import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  bodyBg: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)',
  text: '#18181b',
  cardBg: '#fff',
  cardShadow: '0 4px 32px 0 rgba(120, 60, 255, 0.08)',
  cardShadowHover: '0 8px 48px 0 rgba(120, 60, 255, 0.16)',
  accent: '#7c3aed',
  accentHover: '#a78bfa',
  tagBg: '#ede9fe',
  tagText: '#7c3aed',
  techBg: '#f3f4f6',
  buttonBg: 'linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%)',
  buttonText: '#fff',
  buttonBgHover: 'linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%)',
};

export const darkTheme = {
  bodyBg: 'linear-gradient(120deg, #1a1333 0%, #2a174d 100%)',
  text: '#fff',
  cardBg: 'rgba(40, 20, 60, 0.85)',
  cardShadow: '0 4px 32px 0 rgba(120, 60, 255, 0.18)',
  cardShadowHover: '0 8px 48px 0 rgba(120, 60, 255, 0.32)',
  accent: '#a78bfa',
  accentHover: '#c4b5fd',
  tagBg: 'rgba(120, 60, 255, 0.12)',
  tagText: '#a78bfa',
  techBg: 'rgba(120, 60, 255, 0.08)',
  buttonBg: 'linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%)',
  buttonText: '#fff',
  buttonBgHover: 'linear-gradient(90deg, #c4b5fd 0%, #a78bfa 100%)',
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    background: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    overflow-x: hidden;
    transition: background 0.3s, color 0.3s;
    position: relative;
  }
  body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: -1;
    pointer-events: none;
    background: radial-gradient(ellipse at 50% 0%, rgba(168,139,250,0.25) 0%, rgba(0,0,0,0) 70%);
    filter: blur(32px);
  }
  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.accentHover};
    }
  }
`;

export const Section = styled.section`
  padding: 64px 0 48px 0;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 40px 0 32px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.accent};
  text-align: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  padding: 32px;
  min-width: 260px;
  max-width: 350px;
  flex: 1 1 300px;
  transition: transform 0.2s, box-shadow 0.2s, background 0.3s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: ${({ theme }) => theme.cardShadowHover};
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${({ theme }) => theme.buttonBgHover};
    color: ${({ theme }) => theme.buttonText};
  }
`;
