import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';

const CertificationsSection = styled.div`
  padding: 40px 20px;
  background-color: ${props => props.theme.body};
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.text};
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;
`;

const CertificationsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const CertificationCard = styled(motion.div)`
  background: linear-gradient(145deg, #e6f3ed, #f0faf6);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    background: linear-gradient(145deg, #d9e8e0, #e3f2e9);
  }
`;

const CertificationTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const CertificationSubtitle = styled.p`
  font-size: 1rem;
  color: #34495e;
  margin-bottom: 1rem;
`;

const CertificationLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  color: #3498db;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Certifications = ({ theme }) => {
  const certifications = [
    {
      title: "Deep Learning Nanodegree",
      subtitle: "Udacity",
      link: "https://confirm.udacity.com/KGNC4KFP"
    },
    {
      title: "Data Engineering Nanodegree",
      subtitle: "Udacity",
      link: "#" // Replace with actual link
    },
    {
      title: "Natural Language Processing Specialization",
      subtitle: "Coursera",
      link: "#" // Replace with actual link
    },
    {
      title: "Recommender Systems and Deep Learning in Python",
      subtitle: "Udemy",
      link: "https://ude.my/UC-2c264bae-b840-4b28-afb3-db1c58761357/"
    },
    {
      title: "Cluster Analysis and Unsupervised Machine Learning in Python",
      subtitle: "Udemy",
      link: "https://ude.my/UC-854cf59e-757d-4612-badf-cbf00117cb32"
    }
  ];

  return (
    <CertificationsSection theme={theme}>
      <SectionTitle theme={theme}>Certifications</SectionTitle>
      <CertificationsGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
      >
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <IconWrapper>
              <FaGraduationCap />
            </IconWrapper>
            <div>
              <CertificationTitle>{cert.title}</CertificationTitle>
              <CertificationSubtitle>{cert.subtitle}</CertificationSubtitle>
            </div>
            <CertificationLink href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate <FaExternalLinkAlt />
            </CertificationLink>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </CertificationsSection>
  );
};

export default Certifications;