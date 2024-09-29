import React, { useState } from "react";
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { socialMediaLinks } from "../../myData";

const SocialMediaContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SocialMediaItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;

  @media (max-width: 768px) {
    margin: 5px;
  }
`;

const SocialMediaLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  position: relative;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
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
              backgroundColor={media.backgroundColor}
              onMouseEnter={() => setHoveredIcon(media.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
                mass: 0.1,
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