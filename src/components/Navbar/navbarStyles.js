import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100vw;
  height: 10vh;
  position: absolute;
  top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// --------NavLogo

export const LogoContainer = styled.div`
    display: flex;
    margin-left: 100px;
`

export const Logo1 = styled.h2`
  font-family: "Rationale", sans-serif;
  color: ${(props) => props.theme.text};
  font-size: 100px;
  font-weight: 100;
`;

export const Logo2 = styled.h2`
  font-family: "Rationale", sans-serif;
  color: ${(props) => props.theme.text};
  font-size: 100px;
  font-weight: 100;
`;

// ------NavLinks

export const LinksContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    margin-right: 40px;
`;

export const NavLinks = styled(Link)`
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.fontFamily};
    font-size: 30px;
    text-decoration: none;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
`;

