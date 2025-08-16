import React from 'react';
import styled from 'styled-components';
import { experiences } from '../data';
import { SectionTitle, Flex, Card as BaseCard } from '../styles/GlobalStyles';

const ExpTitle = styled.h3`
  font-size: 1.15rem;
  color: #2563eb;
  margin-bottom: 4px;
`;

const Company = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  color: #7c3aed;
  margin-bottom: 2px;
`;

const Period = styled.div`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;
`;

const Card = styled(BaseCard)`
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BulletList = styled.ul`
  margin: 0 0 0 18px;
  padding: 0;
  font-size: 0.98rem;
  color: ${({ theme }) => theme.text};
`;

export default function Experiences() {
  return (
    <section id="experiences">
      <SectionTitle>Work Experience</SectionTitle>
      <Flex>
        {experiences.map((exp, i) => (
          <Card key={i}>
            <ExpTitle>{exp.title}</ExpTitle>
            <Company>{exp.company}</Company>
            <Period>{exp.period}</Period>
            <BulletList>
              {exp.summary.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </BulletList>
          </Card>
        ))}
      </Flex>
    </section>
  );
}
