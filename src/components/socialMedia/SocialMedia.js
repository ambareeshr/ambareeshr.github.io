import React, { useState } from "react";
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { socialMediaLinks } from "../../myData";

const SocialMediaContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

const SocialMediaItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const SocialMediaLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 0;
  background-color: transparent;
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.text};
  font-size: 1.1rem;
  text-decoration: none;
  position: relative;
  transition: ${props => props.theme.transition};

  &:hover {
    border-color: ${props => props.theme.text};
    background: ${props => props.theme.cardBgHover};
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.border};
  padding: 0.4rem 0.8rem;
  font-family: ${props => props.theme.fontMono};
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1000;
`;

const Label = styled(motion.span)`
  display: none;
  font-size: 0.8rem;
  margin-top: 5px;
  text-align: center;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

const SocialMedia = ({ theme }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <SocialMediaContainer layout>
      {socialMediaLinks.map((media, index) => {
        const IconComponent = media.icon;
        const isHovered = hoveredIcon === media.name;

        return (
          <SocialMediaItem
            key={media.name}
            layout
          >
            <SocialMediaLink
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
              onMouseEnter={() => setHoveredIcon(media.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              whileHover={{ y: -3 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              <IconComponent />
              <AnimatePresence>
                {isHovered && (
                  <Tooltip
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.1 }}
                    theme={theme}
                  >
                    {media.tooltipContent}
                  </Tooltip>
                )}
              </AnimatePresence>
            </SocialMediaLink>
            <Label theme={theme}>{media.name}</Label>
          </SocialMediaItem>
        );
      })}
    </SocialMediaContainer>
  );
};

export default SocialMedia;