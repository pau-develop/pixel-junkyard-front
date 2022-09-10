import styled from "styled-components";

const ReactCanvasToolsStyled = styled.section`
  margin: 0;
  height: 10%;
  width: 90%;
  list-style: none;
  display: flex;
  background-color: ${(props) => props.theme.thirdColor};
  .toolbar {
    &__color {
      flex: 1;
      width: 100%;
      input {
        background-color: ${(props) => props.theme.thirdColor};
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default ReactCanvasToolsStyled;
