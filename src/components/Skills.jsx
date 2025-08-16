
import { useState } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../styles/GlobalStyles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import reactLogo from '../assets/react.svg';
import { DiJava } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const skillsData = [
  { name: 'Java', icon: <DiJava size={90} color="#e76f00" /> },
  { name: 'React.js', icon: <img src={reactLogo} alt="React logo" style={{ width: 90, height: 90, objectFit: 'contain' }} /> },
  { name: 'Node.js', icon: <FaNodeJs size={90} color="#68a063" /> },
  { name: 'Express.js', icon: <SiExpress size={90} color="#222" /> },
  { name: 'MongoDB', icon: <SiMongodb size={90} color="#10aa50" /> },
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
`;

const SkillCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(60,60,60,0.08);
  width: 180px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: box-shadow 0.2s, transform 0.2s;
  margin: 0 8px;
`;

const SkillIconWrap = styled.div`
  width: 90px;
  height: 90px;
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
  const visibleCount = 5;
  const total = skillsData.length;

  // For future: if more than 5, make it scrollable
  const prev = () => setStart(s => (s - 1 + total) % total);
  const next = () => setStart(s => (s + 1) % total);

  // For now, always show all 5
  const visibleSkills = skillsData.slice(0, visibleCount);

  return (
    <section id="skills">
      <SectionTitle style={{ textAlign: 'center', marginBottom: 8 }}>SKILL SET</SectionTitle>
      <div style={{ borderBottom: '4px solid #2563eb', width: '98%', margin: '0 auto 32px auto' }} />
      <CarouselContainer>
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
