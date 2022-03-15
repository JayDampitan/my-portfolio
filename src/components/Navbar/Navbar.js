import React from "react";

import { 
    NavContainer, 
    LogoContainer, 
    Logo1, 
    Logo2,
    LinksContainer,
    NavLinks,
} from "./navbarStyles";

import { motion } from "framer-motion";

const Navbar = ({switchActive, setSwitchActive}) => {
  // -----Logo animations
const logo1Variants = {
  hidden: {
      x: -200
  },
  visible: {
      x: 0,
      textShadow: '0px 0px 5px rgb(255, 255, 255)',
      transition: {
          stiffness: 50,
          duration: 1
      }
  }
};

const logo2Variants = {
  hidden: {
      y: -150
  },
  visible: {
      y: 0,
      textShadow: '0px 0px 5px rgb(255, 255, 255)',
      transition: {
          stiffness: 50,
          duration: 1
      }
  }
};

// -----Links Animation


const linkVariants = {
  hidden: {
      opacity: 0  
  },
  visible: {
      opacity: 1,
      transition: {
          duration: 2,      
      }
  },
  hover: {
      scale: 1.2,
      textShadow: '0px 0px 8px rgb(255, 255, 255)',
  }
}

  return (
    <NavContainer>
      {/*-----Logo */}
      <LogoContainer 
      onClick={() => setSwitchActive(!switchActive)}
      >
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
