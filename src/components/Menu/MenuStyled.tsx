import styled from "styled-components";
import { motion } from "framer-motion";

const MenuStyled = styled(motion.div)`
  &.phone-menu {
    padding: 0 5%;
    background-color: ${(props) => props.theme.primaryColor};
    border-top: 2px solid ${(props) => props.theme.thirdColor};
    border-bottom: 2px solid ${(props) => props.theme.thirdColor};
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    button {
      flex: 1;
    }
    button:nth-child(1) {
      text-align: left;
    }
    button:nth-child(2) {
      text-align: left;
    }
    button:nth-child(3) {
      text-align: right;
    }
    button:nth-child(4) {
      text-align: right;
    }
    i {
      display: none;
    }

    @media (min-width: 599px) {
    }
  }
  &.desk-menu {
    display: inline;
    background-color: ${(props) => props.theme.primaryColor};
    width: 300px;

    height: 100%;
    position: static;
    display: flex;
    align-items: center;
    i {
      cursor: pointer;
    }

    button {
      flex: 3;
      font-size: 0.5rem;
    }
    i {
      flex: 1;
      text-align: center;
    }
    i:hover {
      color: white;
    }
    @media (max-width: 599px) {
      display: none;
      width: 50%;
    }
    @media (min-width: 1000px) {
      width: 500px;
      button {
        flex: 3;
        font-size: 0.75rem;
      }
    }
  }
`;

export default MenuStyled;
