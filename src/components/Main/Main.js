import React from "react";
import { motion } from "framer-motion";

import {
  MainContainer,
  NameHeader,
  NameTitle,
  MediaContainer,
  IconContainer,
} from "./mainStyles";

import { 
  iconVariant1,
  iconVariant2,
  iconVariant3,
  nameVariant,
  titleVariant
}
from "./mainVariants"

import { Facebook, Github, Twitter } from "../../AllSvgs";

const Main = () => {
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
      >Frontend Developer UI/UX Designer</NameTitle>

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
