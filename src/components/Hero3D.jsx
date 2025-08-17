import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: #0a0a0a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5vw;
  position: relative;
  overflow: hidden;
`;

const Headline = styled.h1`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 18px;
  letter-spacing: 0.01em;
`;

const Subheadline = styled.p`
  color: #bdbdbd;
  font-size: 1.2rem;
  max-width: 480px;
  margin-bottom: 32px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 18px;
`;

const CTAButton = styled.a`
  background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 14px 32px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%);
  }
`;

export default function Hero3D() {
  return (
    <HeroSection>
      <Headline>
        EMAIL FOR <br /> DEVELOPERS
      </Headline>
      <Subheadline>
        The best way to reach humans instead of spam folders.<br />
        Deliver transactional and marketing emails at scale.
      </Subheadline>
      <ButtonRow>
        <CTAButton href="#docs">Documentation &gt;</CTAButton>
        <CTAButton href="#getstarted" style={{ background: '#fff', color: '#222' }}>Get Started &gt;</CTAButton>
      </ButtonRow>
      <div style={{ position: 'absolute', right: 0, top: 0, width: '50vw', height: '100vh', zIndex: 0 }}>
        <iframe
          src="https://community.spline.design/file/9d60c478-0e28-4514-a1ac-5605c039d6e6"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ background: 'transparent' }}
          title="3D Animation"
        ></iframe>
      </div>
    </HeroSection>
  );
}
