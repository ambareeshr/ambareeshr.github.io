import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaTrophy } from 'react-icons/fa';
import { certifications } from "../myData";

const Section = styled.div`
  padding: 60px 20px;
  background-color: ${props => props.theme.body};
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.text};
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  color: ${props => props.theme.text};
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const CardContent = styled.p`
  font-size: 16px;
  color: ${props => props.theme.secondaryText};
  line-height: 1.6;
`;

const Icon = styled.span`
  margin-right: 10px;
  color: #0a66c2;
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 8px 15px;
  background-color: #0a66c2;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #084e8a;
  }
`;

const Certifications = ({ theme }) => {
  return (
    <Section theme={theme}>
      <SectionTitle theme={theme}>Certifications</SectionTitle>
      <CardContainer>
        {certifications.map((certificate, index) => (
          <Card
            key={index}
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CardTitle theme={theme}>
              <Icon><FaTrophy /></Icon>
              {certificate.title}
            </CardTitle>
            <CardContent theme={theme}>{certificate.subtitle}</CardContent>
            <LinkButton href={certificate.link} target="_blank">View Certificate</LinkButton>
          </Card>
        ))}
      </CardContainer>
    </Section>
  );
};

export default Certifications;