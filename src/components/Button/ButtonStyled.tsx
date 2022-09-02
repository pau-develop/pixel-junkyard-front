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
  }
  &.button-navigation {
    border-right: 2px solid ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.thirdColor};
    padding: 0;
    color: ${(props) => props.theme.secondaryColor};
    font-size: 1.5rem;
    height: 40px;
    width: 120px;
    cursor: pointer;
  }
`;

export default ButtonStyled;
