import styled from "styled-components";

const DrawingDetailStyled = styled.section`
  border-style: border-box;
  width: 100%;
  height: 92.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.primaryColor};
  box-shadow: inset 0px 8px 10px -6px #000;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  .drawing-details {
    &__wrap {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__display-mobile {
      max-width: 350px;
      margin-top: 20px;
      width: 90%;
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      object-fit: scale-down;
      border-radius: 0 0 25px 25px;
      background-color: ${(props) => props.theme.thirdColor};
      img {
        width: 100%;
        height: 100%;
        padding: 5px 5px 0 5px;
        object-fit: stretch;
      }
    }
    &__display-desktop {
      display: none;
    }
    &__likes-mobile {
      display: flex;
      width: 100%;
      height: 100px;
      background-color: ${(props) => props.theme.thirdColor};
      border-radius: 0 0 25px 25px;
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      div {
        cursor: pointer;
        border: 2px solid ${(props) => props.theme.primaryColor};
        width: 47%;
        height: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: ${(props) => props.theme.thirdColor};
      }
      div:first-child {
        color: green;
        border-radius: 0 0 0 20px;
      }
      div:last-child {
        color: red;
        border-radius: 0 0 20px 0;
      }
    }
    &__info {
      border: 2px solid ${(props) => props.theme.thirdColor};
      padding: 0 10px 20px 10px;
      margin: 0 5%;
      background: linear-gradient(
        0deg,
        ${(props) => props.theme.thirdColor} 0%,
        ${(props) => props.theme.primaryColor} 100%
      );
      border-radius: 25px;
      width: 90%;
      max-width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      background-color: ${(props) => props.theme.primaryColor};
    }
    &__info-section {
      width: 100%;
      h2 {
        font-size: 1rem;
        text-align: center;
        margin: 0;
        margin: 3%;

        padding: 2%;
        border-radius: 25px;
      }
      p {
        font-size: 0.8rem;
        text-align: center;
        margin: 0 3%;
        padding: 2%;

        background-color: ${(props) => props.theme.thirdColor};
        border-radius: 25px;
      }
      span {
        display: block;
        text-align: center;
        margin: 0 3%;
        padding: 2%;

        background-color: ${(props) => props.theme.thirdColor};
        border-radius: 25px;
      }
    }
    &__user-mobile {
      display: flex;
      flex-direction: column;

      background: linear-gradient(
        0deg,
        ${(props) => props.theme.thirdColor} 0%,
        ${(props) => props.theme.primaryColor} 100%
      );
      border: 2px solid ${(props) => props.theme.thirdColor};
      border-radius: 25px;
      width: 90%;
      max-width: 350px;
      padding: 3%;
      margin: 30px 10px 30px 10px;
      article {
        margin-top: 10px;
        background: ${(props) => props.theme.thirdColor};
      }
    }
    &__user-mobile > span {
      width: 100%;
      text-align: center;
    }
    &__user-desktop {
      display: none;
    }
  }
  @media (min-width: ${(props) => props.theme.smallBreakPoint}) {
    box-shadow: inset 0px 8px 10px -6px #000, inset 0px -8px 10px -6px #000;
    display: flex;
    flex-direction: column;
    height: 85%;
    width: 100%;

    .drawing-details {
      &__wrap {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
      }
      &__info {
        min-width: 350px;
        max-width: 350px;
        width: 30%;
        height: 90%;
        margin: auto 0;
        margin-right: 5px;
      }
      &__display-mobile {
        display: none;
      }
      &__display-desktop {
        display: flex;
        flex-direction: column;
        height: 90%;
        min-width: 350px;
        max-width: 350px;
        margin-left: 5px;
      }
      &__display-desktop-container {
        border-radius: 25px 25px 0 0;
        display: flex;
        height: 90%;
        background-color: ${(props) => props.theme.thirdColor};
        justify-content: center;
        align-items: center;
        img {
          border-radius: 25px 25px 0 0;
          background-color: black;
          object-fit: stretch;
          width: 100%;
          height: 100%;
          padding: 10px;
        }
      }
      &__likes-desktop {
        border-radius: 0 0 25px 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10%;
        background-color: ${(props) => props.theme.thirdColor};
        width: 100%;
        div {
          cursor: pointer;
          border: 2px solid ${(props) => props.theme.primaryColor};
          width: 47%;
          height: 80%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background: ${(props) => props.theme.thirdColor};
        }
        div:first-child {
          color: green;
          border-radius: 0 0 0 20px;
        }
        div:last-child {
          color: red;
          border-radius: 0 0 20px 0;
        }
      }
      &__likes-mobile {
        display: none;
      }
      &__user-mobile {
        display: none;
      }
      &__user-desktop {
        margin-top: auto;
        justify-self: flex-end;

        height: 25%;
        width: 90%;
        flex-direction: column;
        display: flex;
        article {
          background: ${(props) => props.theme.thirdColor};
        }
        span {
          width: 100%;
          background-color: transparent;
        }
        h2 {
          background-color: transparent;
        }
      }

      &__user-desktop > span {
        width: 90%;
      }
      &__footer {
        bottom: 0;
        position: absolute;
        height: 7.5%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.theme.linearGradient};
      }
    }
  }
`;

export default DrawingDetailStyled;
