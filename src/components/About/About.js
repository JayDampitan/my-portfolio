import React from "react";
import JD from "../../assets/portfolio.jpg";
import {
  JavaScript,
  CSS,
  HTML,
  ReactIcon,
  ReduxIcon,
  StyledComponents,
  Framer,
} from "../../AllSvgs";

import {
  AboutContainer,
  ImageContainer,
  AboutImage,
  AboutContentContainer,
  AboutContent,
  IconWrapper,
  IconContainer,
  Divider,
} from "./aboutStyles";

import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <AboutContainer>
        <Divider />
        <ImageContainer>
          <AboutImage src={JD} />
        </ImageContainer>

        <AboutContentContainer>
          <AboutContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            placeat, animi quo sapiente impedit deleniti velit repudiandae,
            assumenda iste inventore corrupti explicabo quidem quisquam
            doloribus quam optio neque iusto ratione ad labore, praesentium quia
            voluptas illum consequuntur. Incidunt, harum ipsa? Commodi minima
            alias totam laborum dolores debitis delectus quam nisi reiciendis,
            earum repellat consectetur architecto. Quas porro dolore
            consequatur?
          </AboutContent>

          <IconContainer>
            <IconWrapper>
              <JavaScript />
            </IconWrapper>
            <IconWrapper>
              <HTML />
            </IconWrapper>
            <IconWrapper>
              <CSS />
            </IconWrapper>
            <IconWrapper>
              <ReduxIcon />
            </IconWrapper>
            <IconWrapper>
              <ReactIcon />
            </IconWrapper>
            <IconWrapper>
              <Framer />
            </IconWrapper>
            <IconWrapper>
              <StyledComponents />
            </IconWrapper>
          </IconContainer>
        </AboutContentContainer>
      </AboutContainer>
    </>
  );
};

export default About;
