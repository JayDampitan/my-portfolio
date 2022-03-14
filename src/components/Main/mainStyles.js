import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.body};
  flex-direction: column ;
`;

export const NameHeader = styled.h2`
  font-size: 50px;
  font-weight: 100;
  color: ${(props) => props.theme.text};
  font-family: "Rationale", sans-serif;
  word-spacing: 10px;
  letter-spacing: 4px;
`;

export const NameTitle = styled.h3`
  font-size: 30px;
  font-weight: 100;
  color: ${(props) => props.theme.text};
  font-family: "Rationale", sans-serif;
`;

export const MediaContainer = styled.div`
  display: flex;
`

export const IconContainer = styled.div`
  width: 40px;
  color: ${props => props.theme.text};
  display: flex;
  margin: 10px 10px;
  justify-content: space-evenly;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.text};
  padding: 5px;
  cursor: pointer;
`;
