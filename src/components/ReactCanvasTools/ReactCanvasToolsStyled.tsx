import styled from "styled-components";

const ReactCanvasToolsStyled = styled.section`
  margin: 0;
  height: 10%;
  width: 90%;
  list-style: none;
  display: flex;
  background-color: ${(props) => props.theme.thirdColor};
  .toolbar {
    &__scale-value {
      color: ${(props) => props.theme.secondaryColor};
      font-size: 1rem;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        background-color: ${(props) => props.theme.primaryColor};
        border-radius: 0;
        margin: 5%;
        width: 90%;
        height: 90%;
      }
      span {
        border-radius: 0;
        margin: 4% 2%;
        width: 90%;
        text-align: center;
      }
    }
    &__color {
      flex: 1;
      input {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4% 2%;
        width: 90%;
        height: 90%;
        border-color: transparent;
        background-color: ${(props) => props.theme.primaryColor};
      }
    }
    &__floppy {
      cursor: pointer;
      flex: 1;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4% 2%;
        width: 90%;
        height: 90%;
        background-color: ${(props) => props.theme.primaryColor};
        i {
          color: ${(props) => props.theme.secondaryColor};
        }
      }
    }
    &__eye-dropper {
      cursor: pointer;
      flex: 1;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4% 2%;
        width: 90%;
        height: 90%;
        background-color: ${(props) => props.theme.primaryColor};
        i {
          color: ${(props) => props.theme.secondaryColor};
        }
      }
    }
    &__pencil {
      cursor: pointer;
      flex: 1;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4% 2%;
        width: 90%;
        height: 90%;
        background-color: ${(props) => props.theme.primaryColor};
        i {
          color: ${(props) => props.theme.secondaryColor};
        }
      }
    }
  }
`;
export default ReactCanvasToolsStyled;
