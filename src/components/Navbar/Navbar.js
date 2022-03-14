import React from "react";

import { 
    NavContainer, 
    LogoContainer, 
    Logo1, 
    Logo2,
    LinksContainer,
    NavLinks,
} from "./navbarStyles";
import { 
    logo1Variants,
    logo2Variants,
    linkVariants
} from "./navVariants";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <NavContainer>
      {/*-----Logo */}
      <LogoContainer>
        <Logo1
          as={motion.div}
          variants={logo1Variants}
          initial="hidden"
          animate="visible"
        >
          J
        </Logo1>
        <Logo2
          as={motion.div}
          variants={logo2Variants}
          initial="hidden"
          animate="visible"
        >
          D
        </Logo2>
      </LogoContainer>

      {/*-----Links */}
        <LinksContainer
            as = {motion.div}
            variants = {linkVariants}
            initial = 'hidden'
            animate = 'visible'
        >
            <NavLinks to='/'
                as = {motion.div}
                variants = {linkVariants}
                whileHover = "hover"
            >Home</NavLinks>
            <NavLinks to='/about'
                as = {motion.div}
                variants = {linkVariants}
                whileHover = "hover"
            >About</NavLinks>
            <NavLinks to='/'
                as = {motion.div}
                variants = {linkVariants}
                whileHover = "hover"
            >Work</NavLinks>
            <NavLinks to='/'
                as = {motion.div}
                variants = {linkVariants}
                whileHover = "hover"
            >Experience</NavLinks>
            <NavLinks to='/'
                as = {motion.div}
                variants = {linkVariants}
                whileHover = "hover"
            >Contact</NavLinks>
        </LinksContainer>


    </NavContainer>
  );
};

export default Navbar;
