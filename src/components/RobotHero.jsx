import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import robotImg from '../assets/robot.png';

const RobotWrapper = styled.div`
  width: 220px;
  height: 220px;
  margin: 0 auto 24px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 600px;
`;

const RobotFace = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  background: #fff;
  transition: transform 0.2s cubic-bezier(.23,1.01,.32,1);
`;

export default function RobotHero() {
  const faceRef = useRef();

  useEffect(() => {
    const handleMove = (e) => {
      const rect = faceRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const rotateX = Math.max(Math.min(-y / 10, 20), -20);
      const rotateY = Math.max(Math.min(x / 10, 20), -20);
      faceRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const reset = () => {
      faceRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', reset);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <RobotWrapper>
      <RobotFace ref={faceRef} src={robotImg} alt="Robot" />
    </RobotWrapper>
  );
}
