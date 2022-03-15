import styled from "styled-components";

export const Divider = styled.div`
    height: 2px;
    width: 30vw;
    background-color: ${props => props.theme.text};
    position: absolute;
    top: 0;
    left: 50;    
`;

export const AboutContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  padding: 10%;
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  max-height: 300px;
  max-width: 300px;
  background-color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutImage = styled.img`
  background-color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.text};
  width: 100%;
  border-radius: 50%;
  margin: 2px;
  padding: 10px;
`;

export const AboutContentContainer = styled.div`
  width: 900px;
  height: auto;
`;

export const AboutContent = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 20px;
  font-family: ${(props) => props.theme.fontFamily};
  letter-spacing: 2px;
  word-spacing: 3px;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    border: 2px solid red;
    border-radius: 50%;
`;


