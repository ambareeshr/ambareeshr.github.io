import React from "react";
import styled from 'styled-components';
import { Fade } from "react-reveal";
import SocialMedia from "../components/socialMedia/SocialMedia.js";
import { contactPageData } from "../myData.js";

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
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextContent = styled.div`
  width: 100%;

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
  margin-left: auto;
  margin-right: auto;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactContent = ({ theme }) => (
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
);

const Contact = ({ theme }) => {
  return (
    <ContactContainer theme={theme} id="contact">
      <Fade bottom duration={1000} distance="40px">
        <ContentWrapper>
          <ContactContent theme={theme} />
        </ContentWrapper>
      </Fade>
    </ContactContainer>
  );
};

export default Contact;