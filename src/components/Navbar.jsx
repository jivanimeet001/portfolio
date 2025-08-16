import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const Nav = styled.nav`
  width: 100vw;
  background: linear-gradient(120deg, rgba(255,255,255,0.92) 60%, rgba(168,139,250,0.85) 100%);
  backdrop-filter: blur(18px) saturate(1.8);
  box-shadow:
    0 8px 32px 0 rgba(120,60,255,0.18),
    0 1.5px 0 #fff inset,
    0 1.5px 0 #000,
    0 2px 24px 0 rgba(60,30,120,0.12),
    0 0.5px 0 #fff inset;
  padding: 0 32px;
  position: sticky;
  top: 0;
  z-index: 100;
  border-radius: 0 0 32px 32px;
  transform: perspective(800px) rotateX(8deg) scaleY(1.04);
  transition: background 0.3s, box-shadow 0.3s, transform 0.3s;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  @media (max-width: 600px) {
    padding: 0 8px;
    border-radius: 0 0 16px 16px;
    font-size: 0.98rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 64px;
`;

const NavItem = styled.li`
  font-size: 1.18rem;
  font-weight: 700;
  color: #2a174d;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: color 0.2s, text-shadow 0.2s;
  text-shadow:
    0 2px 8px rgba(120,60,255,0.10),
    0 1.5px 0 #fff,
    0 0.5px 0 #a78bfa;
  &:hover {
    color: #7c3aed;
    text-shadow:
      0 4px 16px rgba(120,60,255,0.18),
      0 2px 0 #fff,
      0 1px 0 #a78bfa;
    transform: scale(1.08) perspective(200px) rotateX(4deg) rotateY(-4deg);
  }
`;

export default function Navbar() {
  // We'll dispatch a custom event to trigger the 3D scroll effect in App.jsx
  const handle3DScroll = (target) => {
    const event = new CustomEvent('trigger3DScroll', { detail: { target } });
    window.dispatchEvent(event);
  };
  return (
    <Nav>
      <NavList>
        <NavItem>
          <ScrollLink
            to="about"
            smooth={true}
            duration={700}
            offset={-60}
            onClick={() => handle3DScroll('about')}
          >About</ScrollLink>
        </NavItem>
        <NavItem>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={700}
            offset={-60}
            onClick={() => handle3DScroll('projects')}
          >Projects</ScrollLink>
        </NavItem>
        <NavItem>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={700}
            offset={-60}
            onClick={() => handle3DScroll('skills')}
          >Skills</ScrollLink>
        </NavItem>
        <NavItem>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            offset={-60}
            onClick={() => handle3DScroll('contact')}
          >Contact</ScrollLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}
