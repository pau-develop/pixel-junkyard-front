import styled from "styled-components";

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.thirdColor};
  .app-container {
    &__main {
      height: 93%;
    }
  }
`;

export default AppStyled;
