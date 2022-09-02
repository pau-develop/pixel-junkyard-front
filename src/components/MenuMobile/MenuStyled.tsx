import styled from "styled-components";

const MenuStyled = styled.div`
  display: inline;
  background-color: ${(props) => props.theme.thirdColor};
  height: 110%;
  position: absolute;
  right: 0;
  top: 110%;
  width: 100%;
  z-index: 1;
  display: flex;
  button {
    flex: 1;
  }
  @media (min-width: 600px) {
    position: static;
  }
`;

export default MenuStyled;
