import styled from "styled-components";

const DrawingDetailStyled = styled.section`
  border-style: border-box;
  margin-top: 5%;
  width: 100%;
  height: 90%;
  max-width: 500px;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.secondaryColor};
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  .drawing-details {
    &__display-mobile {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      object-fit: scale-down;
      border-radius: 0 0 25px 25px;
      background-color: ${(props) => props.theme.primaryColor};
      img {
        width: 100%;
        padding: 1%;
        object-fit: contain;
      }
    }
    &__display-desktop {
      display: none;
    }
    &__likes-mobile {
      display: flex;
      width: 100%;
      height: 40px;
      background-color: ${(props) => props.theme.primaryColor};
      border-radius: 0 0 25px 25px;
      align-items: center;
      span {
        text-align: center;
        width: 100%;
      }
    }
    &__info {
      margin: 0 5%;
      background-color: ${(props) => props.theme.thirdColor};
      border-radius: 25px;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5%;
      background-color: ${(props) => props.theme.primaryColor};
      h2 {
        font-size: 1rem;
        text-align: center;
        margin: 0;
        margin: 3%;
        width: 90%;
        padding: 2%;
        background-color: ${(props) => props.theme.thirdColor};
        border-radius: 25px;
      }
      p {
        font-size: 0.8rem;
        text-align: center;
        margin: 0 0 3% 0;
        padding: 2%;
        width: 90%;
        background-color: ${(props) => props.theme.thirdColor};
        border-radius: 25px;
      }
      span {
        text-align: center;
        margin: 0 0 3% 0;
        padding: 2%;
        width: 90%;
        background-color: ${(props) => props.theme.thirdColor};
        border-radius: 25px;
      }
    }
    &__user-mobile {
      display: flex;
      flex-direction: column;
      background: linear-gradient(0deg, #17232e 0%, #144573 100%);
      border-radius: 25px;
      width: 90%;
      padding: 3% 3% 10% 3%;
      margin: 5% 5% 0 5%;
      article {
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
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    max-width: 100%;
    .drawing-details {
      &__info {
        min-width: 240px;
        width: 30%;
        height: 90%;
        margin-top: 0;
      }
      &__display-mobile {
        display: none;
      }
      &__display-desktop {
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 90%;
      }
      &__display-desktop-container {
        border-radius: 25px 25px 0 0;
        display: flex;
        height: 90%;
        img {
          border-radius: 25px 25px 0 0;
          background-color: black;
          object-fit: contain;
          width: 100%;
        }
      }
      &__likes-desktop {
        border-radius: 0 0 25px 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10%;
        background-color: ${(props) => props.theme.primaryColor};
        width: 100%;
      }
      &__likes-mobile {
        display: none;
      }
      &__user-mobile {
        display: none;
      }
      &__user-desktop {
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
    }
  }
`;

export default DrawingDetailStyled;
