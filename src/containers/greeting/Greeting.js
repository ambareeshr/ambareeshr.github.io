import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import { greeting, proudAchievements } from "../../myData";
import SocialMedia from "../../components/socialMedia/SocialMedia";
//import SocialMedia from "../../sections/socialMedia";
import FeelingProud from "./FeelingProud";
import { FaTimes, FaEgg, FaCode, FaDatabase, FaUsers } from 'react-icons/fa';

const GreetingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 6%;
  background-color: ${props => props.theme.body};
  overflow: hidden;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 6px 5%;
  }
`;

const TextContainer = styled(motion.div)`
  flex: 1;
  max-width: 600px;
  margin-right: 40px;
  @media (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: ${props => props.theme.text};
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubtitleContainer = styled(motion.div)`
  background: linear-gradient(120deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  padding: 3px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 20px;
  border-radius: 10px;
  margin: 0;
`;

const HighlightSpan = styled.span`
  color: ${props => props.theme.primary};
  font-weight: 600;
  white-space: nowrap;
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  cursor: pointer;
  position: relative;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const PulsingDot = styled(motion.div)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.primary};
  border-radius: 50%;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #f0f8ff, #e6f3ff);
  padding: 30px;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

const EasterEggBanner = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  overflow: hidden;
`;
const BannerText = styled(motion.span)`
  margin-right: 8px;
  white-space: nowrap;
`;

const EggIcon = styled(FaEgg)`
  min-width: 16px;
`;

const ModalTitle = styled.h2`
  color: ${props => props.theme.text};
  margin-bottom: 10px;
  font-size: 2rem;
  text-align: center;
`;

const ModalSubtitle = styled.p`
  color: ${props => props.theme.secondaryText};
  text-align: center;
  margin-bottom: 30px;
  font-size: 1rem;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 30px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.text};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 1.4rem;

  svg {
    color: gold;
    margin-right: 10px;
  }
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.secondaryText};
  font-size: 1rem;
  line-height: 1.6;
`;

const EasterEggBadge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #8e44ad;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;



const bannerVariants = {
  expanded: { width: 'auto' },
  collapsed: { width: 40 }
};

const textVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -20 }
};

const getProjectIcon = (title) => {
  if (title.includes('Code')) return <FaCode />;
  if (title.includes('Data')) return <FaDatabase />;
  return <FaUsers />;
};

const Greeting = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFullBanner, setShowFullBanner] = useState(true);

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => setShowFullBanner(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);
  const handleModalOpen = () => {
    setIsModalOpen(true);
    setShowFullBanner(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <GreetingContainer>
        <TextContainer
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Title>
            Hi, I'm <br />
            <HighlightSpan>{greeting.title}</HighlightSpan>
          </Title>
          <SubtitleContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Subtitle theme={theme}>
              {greeting.subTitle.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </Subtitle>
          </SubtitleContainer>
          <SocialMedia theme={theme} />
        </TextContainer>
        <ImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          onClick={() => setIsModalOpen(true)}
        >
          <FeelingProud theme={theme} />
          <PulsingDot
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </ImageContainer>
      </GreetingContainer>

      <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <FaTimes />
              </CloseButton>
              <EasterEggBanner
                  layout
                  initial="expanded"
                  animate={showFullBanner ? "expanded" : "collapsed"}
                  variants={bannerVariants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <AnimatePresence>
                    {showFullBanner && (
                      <BannerText
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={textVariants}
                        transition={{ duration: 0.2 }}
                      >
                        Easter egg!
                      </BannerText>
                    )}
                  </AnimatePresence>
                  <EggIcon />
                </EasterEggBanner>
              <ModalTitle>Projects I'm Proud Of</ModalTitle>
              <ModalSubtitle>
                These are the tech products I've built that have made significant impacts and bring me personal satisfaction.
              </ModalSubtitle>
              <ProjectList>
                {proudAchievements.map((project, index) => (
                  <ProjectItem key={index}>
                    <ProjectTitle>
                      {getProjectIcon(project.title)}
                      {project.title}
                    </ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                  </ProjectItem>
                ))}
              </ProjectList>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Greeting;