import styled from "styled-components";

const ButtonStyled = styled.button`
  &.button {
    background-color: ${(props) => props.theme.primaryColor};
    border: none;
    border-radius: 50px;
    color: ${(props) => props.theme.secondaryColor};
    font-size: 0.75rem;
    height: 60px;
    width: 120px;
    cursor: pointer;
    @media (max-width: 599px) {
      height: 40px;
      width: 110px;
    }
  }
  &.button:hover {
    @media (min-width: ${(props) => props.theme.smallBreakPoint}) {
      color: white;
    }
  }
  &.button:active {
    color: white;
    -webkit-tap-highlight-color: transparent;
  }
  &.button-navigation {
    border: none;
    background-color: ${(props) => props.theme.primaryColor};
    padding: 0;
    color: ${(props) => props.theme.secondaryColor};
    width: 100%;
    font-size: 0.5rem;
    cursor: pointer;
    @media (min-width: 600px) {
      font-size: 0.5rem;
    }
  }
  &.button-navigation:hover {
    @media (min-width: ${(props) => props.theme.smallBreakPoint}) {
      color: white;
    }
  }
  &.button-navigation:active {
    color: white;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default ButtonStyled;
