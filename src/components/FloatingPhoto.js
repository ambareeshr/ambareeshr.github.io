import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profilePic from '../android-chrome-512x512.png';

const PhotoContainer = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 80px;
  height: 80px;
  z-index: 999;
  border: 2px solid ${props => props.theme.divider};
  background: ${props => props.theme.cardBg};
  overflow: hidden;
  transition: ${props => props.theme.transition};

  &:hover {
    border-color: ${props => props.theme.text};
    transform: scale(1.05);
    box-shadow: ${props => props.theme.cardHoverShadow};
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    bottom: 1.5rem;
    right: 1.5rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  ${PhotoContainer}:hover & {
    filter: grayscale(0%);
  }
`;

const FloatingPhoto = ({ theme }) => {
  return (
    <PhotoContainer
      theme={theme}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 1,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <ProfileImage src={profilePic} alt="Profile" />
    </PhotoContainer>
  );
};

export default FloatingPhoto;
