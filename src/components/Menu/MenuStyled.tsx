import styled from "styled-components";

const MenuStyled = styled.div`
  &.phone-menu {
    background-color: ${(props) => props.theme.primaryColor};
    border-top: 2px solid ${(props) => props.theme.thirdColor};
    height: 100%;
    position: absolute;
    right: 0;
    top: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    button {
      flex: 1;
    }
    @media (min-width: 599px) {
      display: none;
    }
  }
  &.desk-menu {
    display: inline;
    background-color: ${(props) => props.theme.primaryColor};
    border-top: 2px solid ${(props) => props.theme.thirdColor};
    height: 100%;
    position: static;
    display: flex;
    align-items: center;

    button {
      flex: 1;
    }
    @media (max-width: 599px) {
      display: none;
    }
  }
`;

export default MenuStyled;
