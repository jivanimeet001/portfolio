import React from 'react';
import ThreeOrbitLogos from './ThreeOrbitLogos';
import styled from 'styled-components';
import { about } from '../data';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  gap: 16px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
    text-align: left;
  }
`;

const Avatar = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb 60%, #60a5fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 4px 24px rgba(37, 99, 235, 0.12);
`;

const Info = styled.div`
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 6px 0;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  margin: 0 0 10px 0;
`;

const Summary = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin: 0 0 8px 0;
  text-align: justify;
`;

const Location = styled.div`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.text};
  margin-top: 4px;
  text-align: justify;
`;

export default function About() {
  return (
    <Wrapper>
  <ThreeOrbitLogos />
      <Info>
        <Name>{about.name}</Name>
        <Title>{about.title}</Title>
        <Summary>{about.summary}</Summary>
        <Location>{about.location}</Location>
      </Info>
    </Wrapper>
  );
}
