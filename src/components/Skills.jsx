import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../styles/GlobalStyles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import reactLogo from '../assets/react.svg';
import { DiJava } from 'react-icons/di';
import { FaNodeJs, FaReact, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTypescript, SiGraphql, SiEslint, SiPrettier } from 'react-icons/si';

// Asset SVGs
import PythonLogo from '../assets/Python-Light.svg';
import JavaLogo from '../assets/Java-Light.svg';
import JavaScriptLogo from '../assets/JavaScript.svg';
import TypeScriptLogo from '../assets/TypeScript.svg';
import HTMLLogo from '../assets/HTML.svg';
import CSSLogo from '../assets/CSS.svg';
import PostmanLogo from '../assets/Postman.svg';
import DockerLogo from '../assets/Docker.svg';
import GitLogo from '../assets/Git.svg';
import GitHubActionsLogo from '../assets/GithubActions-Light.svg';
import LinuxLogo from '../assets/Linux-Light.svg';
import AWSLogo from '../assets/AWS-Light.svg';
import MongoDBLogo from '../assets/MongoDB.svg';
import MySQLLogo from '../assets/MySQL-Light.svg';
import GraphQLLogo from '../assets/GraphQL-Light.svg';
import TensorFlowLogo from '../assets/TensorFlow-Light.svg';
import ScikitLearnLogo from '../assets/ScikitLearn-Dark.svg';

const skillsData = [
  { name: 'Java', icon: <img src={JavaLogo} alt="Java" style={{ width: 48, height: 48 }} /> },
  { name: 'Python', icon: <img src={PythonLogo} alt="Python" style={{ width: 48, height: 48 }} /> },
  { name: 'JavaScript', icon: <img src={JavaScriptLogo} alt="JavaScript" style={{ width: 48, height: 48 }} /> },
  { name: 'TypeScript', icon: <img src={TypeScriptLogo} alt="TypeScript" style={{ width: 48, height: 48 }} /> },
  { name: 'React.js', icon: <FaReact size={48} color="#61dafb" /> },
  { name: 'Node.js', icon: <FaNodeJs size={48} color="#68a063" /> },
  { name: 'Express.js', icon: <SiExpress size={48} color="#222" /> },
  { name: 'MongoDB', icon: <img src={MongoDBLogo} alt="MongoDB" style={{ width: 48, height: 48 }} /> },
  { name: 'MySQL', icon: <img src={MySQLLogo} alt="MySQL" style={{ width: 48, height: 48 }} /> },
  { name: 'GraphQL', icon: <img src={GraphQLLogo} alt="GraphQL" style={{ width: 48, height: 48 }} /> },
  { name: 'HTML5', icon: <img src={HTMLLogo} alt="HTML5" style={{ width: 48, height: 48 }} /> },
  { name: 'CSS3', icon: <img src={CSSLogo} alt="CSS3" style={{ width: 48, height: 48 }} /> },
  { name: 'TensorFlow', icon: <img src={TensorFlowLogo} alt="TensorFlow" style={{ width: 48, height: 48 }} /> },
  { name: 'Scikit-learn', icon: <img src={ScikitLearnLogo} alt="Scikit-learn" style={{ width: 48, height: 48 }} /> },
  { name: 'Git', icon: <img src={GitLogo} alt="Git" style={{ width: 48, height: 48 }} /> },
  { name: 'GitHub Actions', icon: <img src={GitHubActionsLogo} alt="GitHub Actions" style={{ width: 48, height: 48 }} /> },
  { name: 'Postman', icon: <img src={PostmanLogo} alt="Postman" style={{ width: 48, height: 48 }} /> },
  { name: 'Docker', icon: <img src={DockerLogo} alt="Docker" style={{ width: 48, height: 48 }} /> },
  { name: 'ESLint', icon: <SiEslint size={48} color="#4b32c3" /> },
  { name: 'Prettier', icon: <SiPrettier size={48} color="#f7b93e" /> },
  { name: 'Linux', icon: <img src={LinuxLogo} alt="Linux" style={{ width: 48, height: 48 }} /> },
  { name: 'AWS', icon: <img src={AWSLogo} alt="AWS" style={{ width: 48, height: 48 }} /> },
];

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  transition: transform 0.5s cubic-bezier(0.4,0.2,0.2,1);
`;

const SkillCard = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(60,60,60,0.08);
  width: 110px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: box-shadow 0.3s, transform 0.3s;
  margin: 0 6px;
  text-align: center;
  &:hover {
    box-shadow: 0 6px 24px rgba(37,99,235,0.18);
    transform: translateY(-6px) scale(1.06);
  }
`;

const SkillIconWrap = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

const ArrowButton = styled.button`
  background: rgba(60,60,60,0.4);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #2563eb;
    color: #fff;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: -24px;
`;
const RightArrow = styled(ArrowButton)`
  right: -24px;
`;

const SkillName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
`;


export default function Skills() {
  const [start, setStart] = useState(0);
  const visibleCount = 6;
  const total = skillsData.length;
  const intervalRef = useRef();
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => setStart(s => (s - 1 + total) % total);
  const next = () => setStart(s => (s + 1) % total);

  // Automatic slider
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setStart(s => (s + 1) % total);
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, total]);

  // Show visibleCount skills, wrap around
  const visibleSkills = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleSkills.push(skillsData[(start + i) % total]);
  }

  return (
    <section id="skills">
  <SectionTitle style={{ textAlign: 'center', marginBottom: 32 }}>
        Skills
      </SectionTitle>
      <CarouselContainer
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <CarouselTrack style={{ position: 'relative' }}>
          <LeftArrow aria-label="Previous" onClick={prev} style={{ left: '-36px' }}>
            <FaChevronLeft size={22} />
          </LeftArrow>
          {visibleSkills.map((skill, i) => (
            <SkillCard key={skill.name}>
              <SkillIconWrap>{skill.icon}</SkillIconWrap>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
          <RightArrow aria-label="Next" onClick={next} style={{ right: '-36px' }}>
            <FaChevronRight size={22} />
          </RightArrow>
        </CarouselTrack>
      </CarouselContainer>
    </section>
  );
}
