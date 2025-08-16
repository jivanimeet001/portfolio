import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGithub } from 'react-icons/fa';

const orbit = keyframes`
  0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
`;

const IconOrbit = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 1;
`;

const IconWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  animation: ${orbit} 12s linear infinite;
  animation-delay: ${({ delay }) => delay || '0s'};
  filter: drop-shadow(0 4px 16px rgba(120,60,255,0.18));
`;

const CenterIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #a78bfa 60%, #7c3aed 100%);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(120,60,255,0.18);
  z-index: 2;
`;

const OrbitContainer = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  margin: 0 auto 32px auto;
`;

export default function WebDevOrbit() {
  return (
    <OrbitContainer>
      <CenterIcon>
        <FaGithub size={40} color="#fff" />
      </CenterIcon>
      <IconOrbit>
        <IconWrap delay="0s"><FaReact size={36} color="#61dafb" /></IconWrap>
        <IconWrap delay="-2s"><FaNodeJs size={36} color="#68a063" /></IconWrap>
        <IconWrap delay="-4s"><FaHtml5 size={36} color="#e34c26" /></IconWrap>
        <IconWrap delay="-6s"><FaCss3Alt size={36} color="#2965f1" /></IconWrap>
        <IconWrap delay="-8s"><FaJs size={36} color="#f7df1e" /></IconWrap>
        <IconWrap delay="-10s"><FaDatabase size={36} color="#a78bfa" /></IconWrap>
      </IconOrbit>
    </OrbitContainer>
  );
}
