import React from "react";
import styled from 'styled-components';
import { Fade } from "react-reveal";
import { motion } from 'framer-motion';
import SocialMedia from "../components/socialMedia/SocialMedia.js";
import { contactPageData } from "../myData.js";
import profilePic from '../android-chrome-512x512.png';

const ContactContainer = styled.div`
  background: ${props => props.theme.body};
  padding: 8rem 10%;
  min-height: 60vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 6rem 5%;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 0;
  }
`;

const SectionNumber = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => props.theme.tertiaryText};
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  color: ${props => props.theme.text};
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.03em;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 3rem;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ProfilePhotoContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.divider};
  background: ${props => props.theme.cardBg};
  overflow: hidden;
  flex-shrink: 0;
  transition: ${props => props.theme.transition};

  &:hover {
    border-color: ${props => props.theme.text};
    transform: scale(1.05);
    box-shadow: ${props => props.theme.cardHoverShadow};
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  ${ProfilePhotoContainer}:hover & {
    filter: grayscale(0%);
  }
`;

const Contact = ({ theme }) => {
  return (
    <ContactContainer theme={theme} id="contact">
      <Fade bottom duration={1000} distance="40px">
        <ContentWrapper>
          <TextContent>
            <SectionNumber theme={theme}>09 — Contact</SectionNumber>
            <Title theme={theme}>Let's Connect</Title>
            <Description theme={theme}>
              Open to discussing innovative projects, collaboration opportunities, or just connecting with fellow tech enthusiasts.
            </Description>
            <SocialMediaWrapper>
              <SocialMedia theme={theme} />
            </SocialMediaWrapper>
          </TextContent>
          <ProfilePhotoContainer
            theme={theme}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <ProfileImage src={profilePic} alt="Profile" />
          </ProfilePhotoContainer>
        </ContentWrapper>
      </Fade>
    </ContactContainer>
  );
};

export default Contact;