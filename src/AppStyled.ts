import styled from "styled-components";

const AppStyled = styled.div`
  position: relative;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  min-width: 400px;
  background-color: ${(props) => props.theme.thirdColor};
  .app-container {
    &__main {
      height: 93%;
    }
  }
`;

export default AppStyled;
