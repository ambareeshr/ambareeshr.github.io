import React from "react";
import styled from 'styled-components';
import { Fade } from "react-reveal";
import SocialMedia from "../components/socialMedia/SocialMedia.js";
import { contactPageData } from "../myData.js";

const ContactContainer = styled.div`
  background: ${props => `linear-gradient(135deg, ${props.theme.body} 0%, ${props.theme.highlightLight} 100%)`};
  padding: 5rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 3rem;
    height: 0.25rem;
    background-color: ${props => props.theme.highlight};

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 2rem;
`;

const EmailLink = styled.a`
  font-size: 1.2rem;
  color: ${props => props.theme.highlight};
  text-decoration: none;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.highlight};
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${props => props.theme.highlight};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: ${props => props.theme.highlightLight};
  opacity: 0.3;
  z-index: -1;
`;

const ContactContent = ({ theme }) => (
  <TextContent>
    <Title theme={theme}>Let's Connect!</Title>
    <Description theme={theme}>
      I'm always excited to collaborate on innovative projects, exchange creative ideas, or explore opportunities to contribute to your vision.
    </Description>
    <SocialMedia theme={theme} />
    {/*<div style={{ marginTop: '2rem' }}>
      <Description theme={theme}>Prefer email? Reach out at:</Description>
      <EmailLink href="mailto:xxxx@gmail.com" theme={theme}>
        xxxx@gmail.com
      </EmailLink>
    </div>*/}
  </TextContent>
);

const ContactImage = ({ theme }) => (
  <ImageContainer>
    <BackgroundCircle theme={theme} />
    <StyledImage 
      src={require(`../android-chrome-512x512.png`)}
      alt="Ambareesh R" 
      theme={theme}
    />
  </ImageContainer>
);

const Contact = ({ theme }) => {
  return (
    <ContactContainer theme={theme} id="contact">
      <Fade bottom duration={1000} distance="40px">
        <ContentWrapper>
          <ContactContent theme={theme} />
          <ContactImage theme={theme} />
        </ContentWrapper>
      </Fade>
    </ContactContainer>
  );
};

export default Contact;