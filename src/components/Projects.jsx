import React from 'react';
import styled from 'styled-components';
import { projects } from '../data';

import { SectionTitle, Card as BaseCard, Button } from '../styles/GlobalStyles';


const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: #2563eb;
  margin-bottom: 8px;
`;

const Card = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
  min-width: 220px;
  max-width: 260px;
  margin: 12px;
`;

const RowWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 0;
`;

const TechList = styled.div`
  margin: 12px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tech = styled.span`
  background: #f1f5f9;
  color: #2563eb;
  border-radius: 5px;
  padding: 4px 10px;
  font-size: 0.95rem;
`;

export default function Projects() {
  return (
    <section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <RowWrap>
        {projects.map((project, i) => (
          <Card key={i}>
            <div>
              <ProjectTitle>{project.name}</ProjectTitle>
              <div>{project.description}</div>
              <TechList>
                {project.tech.map((t, j) => (
                  <Tech key={j}>{t}</Tech>
                ))}
              </TechList>
            </div>
            {project.link && (
              <Button as="a" href={project.link} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start', marginTop: '24px' }}>
                View Project
              </Button>
            )}
          </Card>
        ))}
      </RowWrap>
    </section>
  );
}
