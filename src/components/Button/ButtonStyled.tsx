import styled from "styled-components";

const ButtonStyled = styled.button`
  &.button {
    background-color: ${(props) => props.theme.primaryColor};
    border: none;
    border-radius: 50px;
    color: ${(props) => props.theme.secondaryColor};
    font-size: 1.5rem;
    height: 60px;
    width: 120px;
    cursor: pointer;
    @media (max-width: 599px) {
      height: 40px;
      width: 110px;
    }
  }
  &.button-navigation {
    border: none;
    background-color: ${(props) => props.theme.primaryColor};
    padding: 0;
    color: ${(props) => props.theme.secondaryColor};
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
    @media (min-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

export default ButtonStyled;
