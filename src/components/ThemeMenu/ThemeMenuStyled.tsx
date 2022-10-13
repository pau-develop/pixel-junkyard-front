import styled from "styled-components";
import { motion } from "framer-motion";

const ThemeMenuStyled = styled(motion.div)`
  &.phone-theme-menu {
    flex-wrap: nowrap;
    border-bottom: 2px solid ${(props) => props.theme.thirdColor};
    margin: 0;
    padding: 0 5%;
    background-color: ${(props) => props.theme.primaryColor};
    border-top: 2px solid ${(props) => props.theme.thirdColor};
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.secondaryColor};
    span {
      font-size: 0.6rem;
    }
    ul {
      list-style: none;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-evenly;
      align-items: center;
      margin: 0;
    }
    li {
      border: 2px solid ${(props) => props.theme.secondaryColor};
      border-radius: 5px;
      cursor: pointer;
      margin: 10px;
      width: 30px;
      height: 30px;
    }
    li:hover {
      border: 2px solid white;
    }
    li:active {
      border: 2px solid white;
    }

    li:nth-child(1) {
      background-color: #144573;
    }
    li:nth-child(2) {
      background-color: #993d00;
    }
    li:nth-child(3) {
      background-color: #999900;
    }
    li:nth-child(4) {
      background-color: #01711d;
    }
    li:nth-child(5) {
      background-color: #35077b;
    }

    @media (min-width: 600px) {
      flex-wrap: nowrap;
      width: 40%;
      justify-content: flex-end;
      background: linear-gradient(
        90deg,
        transparent 0%,
        ${(props) => props.theme.primaryColor} 100%
      );
      button {
        height: 40px;
      }
    }
  }
`;

export default ThemeMenuStyled;
