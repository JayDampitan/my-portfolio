import React from "react";
import { motion } from "framer-motion";

import {
  MainContainer,
  NameHeader,
  NameTitle,
  MediaContainer,
  IconContainer,
} from "./mainStyles";

import { Facebook, Github, Twitter } from "../../AllSvgs";

const Main = () => {
 const nameVariant = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  
const titleVariant = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };
  
const iconVariant1 = {
      hidden: {
          opacity: 0
      },
      visible: {
          opacity: 1,
          transition: {
              duration: 3
          }
      },
      hover: {
          scale: 1.2,
          boxShadow: '0px 0px 8px rgb(255, 255, 255)',
      }
  };
  
const iconVariant2 = {
      hidden: {
          opacity: 0
      },
      visible: {
          opacity: 1,
          transition: {
              duration: 4
          }
      },
      hover: {
          scale: 1.2,
          boxShadow: '0px 0px 8px rgb(255, 255, 255)',
      }
  };
  
const iconVariant3 = {
      hidden: {
          opacity: 0
      },
      visible: {
          opacity: 1,
          transition: {
              duration: 5
          }
      },
      hover: {
          scale: 1.2,
          boxShadow: '0px 0px 8px rgb(255, 255, 255)',
      }
  };
  

  return (
    <MainContainer>
      <NameHeader
        as = {motion.h2}
        variants = {nameVariant}
        initial = 'hidden'
        animate = 'visible'
      >Jay Dampitan</NameHeader>
      <NameTitle
        as = {motion.h3}
        variants = {titleVariant}
        initial = 'hidden'
        animate = 'visible'
      >Frontend Developer</NameTitle>

      {/* -----Media Links */}

      <MediaContainer>
        <IconContainer
          as = {motion.div}
          variants = {iconVariant1}
          initial = 'hidden'
          animate = 'visible'
          whileHover = 'hover'
        >
          <Facebook fill="#DBDAE7" />
        </IconContainer>
        <IconContainer
          as = {motion.div}
          variants = {iconVariant2}
          initial = 'hidden'
          animate = 'visible'
          whileHover = 'hover'
        >
          <Github fill="#DBDAE7"  />
        </IconContainer>
        <IconContainer
          as = {motion.div}
          variants = {iconVariant3}
          initial = 'hidden'
          animate = 'visible'
          whileHover = 'hover'
        >
          <Twitter fill="#DBDAE7" />
        </IconContainer>
      </MediaContainer>
    </MainContainer>
  );
};

export default Main;
