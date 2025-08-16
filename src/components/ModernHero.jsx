import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  width: 100vw;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 64px 0 32px 0;
  z-index: 1;
`;

const Glow = styled.div`
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 400px;
  background: radial-gradient(ellipse at center, rgba(168,139,250,0.25) 0%, rgba(0,0,0,0) 80%);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
`;

const Headline = styled.h1`
  font-size: 3.2rem;
  font-weight: 900;
  color: #fff;
  text-align: center;
  margin-bottom: 18px;
  letter-spacing: -2px;
  z-index: 2;
  text-shadow: 0 8px 32px rgba(120,60,255,0.18);
`;

const Sub = styled.p`
  font-size: 1.25rem;
  color: #c4b5fd;
  text-align: center;
  margin-bottom: 32px;
  z-index: 2;
`;

const CTA = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 16px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 32px 0 rgba(120,60,255,0.18);
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  z-index: 2;
  &:hover {
    background: linear-gradient(90deg, #c4b5fd 0%, #a78bfa 100%);
    transform: translateY(-2px) scale(1.03);
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a78bfa 60%, #7c3aed 100%);
  opacity: 0.18;
  filter: blur(2px);
  z-index: 1;
  animation: float 6s ease-in-out infinite alternate;
  @keyframes float {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(-40px) scale(1.1); }
  }
`;

export default function ModernHero() {
  return (
    <HeroSection>
      <Glow />
      <FloatingShape style={{ left: 60, top: 60, width: 60, height: 60, animationDelay: '0s' }} />
      <FloatingShape style={{ right: 80, top: 120, width: 90, height: 90, animationDelay: '2s' }} />
      <FloatingShape style={{ left: '40%', bottom: 0, width: 70, height: 70, animationDelay: '1s' }} />
    </HeroSection>
  );
}
