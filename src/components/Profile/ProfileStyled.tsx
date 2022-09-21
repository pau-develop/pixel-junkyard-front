import styled from "styled-components";

const ProfileStyled = styled.article`
  box-sizing: content-box;
  height: 92.5%;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  max-width: 450px;
  max-height: 900px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.secondaryColor};
  .profile {
    &__info {
      align-items: center;
      border-radius: 10px;
      background: linear-gradient(
        0deg,
        ${(props) => props.theme.thirdColor} 0%,
        ${(props) => props.theme.primaryColor} 100%
      );
      display: flex;
      height: 20%;
      justify-content: center;
      margin: 0 5%;
      margin-top: 20px;
      padding: 2%;
    }
    &__info-avatar {
      width: 35%;
      padding: 5%;
      object-fit: contain;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;

        border: 2px solid ${(props) => props.theme.secondaryColor};
        border-radius: 10px;
      }
    }
    &__info-props {
      height: 90%;
      width: 60%;
      padding-left: 10%;
      font-size: 1rem;
      h2 {
        margin: 0;
      }
      ul {
        margin: 0;
        height: 100%;
        list-style: none;
        padding: 0;
      }
    }

    &__settings-mobile {
      margin-bottom: 10px;
      background-color: ${(props) => props.theme.thirdColor};
      width: 100%;
      height: 10%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      button {
        font-size: 1rem;
        margin: 6% 0;
        width: 100%;
        height: 70%;
        border-radius: 10px;
        background: linear-gradient(
          0deg,
          ${(props) => props.theme.thirdColor} -10%,
          ${(props) => props.theme.primaryColor} 100%
        );
      }
      button:first-child {
        margin-right: 3%;
      }
      button:last-child {
        margin-left: 3%;
      }
    }
    &__settings-desktop {
      display: none;
    }

    &__gallery {
      margin: 0 5%;
      margin-top: 10px;
      margin-bottom: 20px;

      background-color: ${(props) => props.theme.thirdColor};
      width: 90%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__gallery-title {
      width: 100%;
      h3 {
        background: ${(props) => props.theme.linearGradient};
        height: 100%;
        font-size: 1.5rem;
        text-align: center;
        margin: 0;
      }
    }
    &__nav-button--hidden {
      visibility: hidden;
      width: 10%;
      align-self: center;
      button {
        width: 100%;
      }
    }
    &__nav-button {
      visibility: visible;
      width: 10%;
      align-self: center;
      button {
        padding: 0;
        background: transparent;
        width: 100%;
      }
    }
    &__gallery-display {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;

      span {
        align-self: center;
      }
      ul {
        width: 80%;
        height: 100%;
        max-height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        color: ${(props) => props.theme.secondaryColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        li {
          width: 60%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  @media (min-width: ${(props) => props.theme.smallBreakPoint}) {
    background: ${(props) => props.theme.linearGradient};
    max-width: 1400px;
    max-height: 900px;
    flex-direction: row;
    .profile {
      &__info {
        border: 5px solid ${(props) => props.theme.thirdColor};
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 40%;
        height: 90%;
        max-width: 300px;
        margin: 40px;
        margin-left: 5%;
      }
      &__info-avatar {
        height: 30%;
        width: 90%;
        display: flex;
        justify-content: space-around;
        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: fill;
        }
      }
      &__info-props {
        display: flex;
        flex-direction: column;

        height: 40%;
        width: 100%;
        padding: 0;
        font-size: 1.3rem;
        @media (max-width: 450px) {
          font-size: 1rem;
        }
        h2 {
          margin-top: 10%;
          text-align: center;
        }
        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 0;
          margin-top: 5%;
          text-align: center;
          li {
            margin-top: 2%;
          }
        }
      }
      &__settings-mobile {
        display: none;
      }
      &__settings-desktop {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: column;
        button {
          width: 90%;
          margin: 5%;
        }
      }
      &__gallery {
        margin-top: 40px;
        margin-bottom: 40px;
        margin-right: 5%;
        margin-left: 0;
        background-color: ${(props) => props.theme.thirdColor};
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        h3 {
          margin: 0;
        }
      }
      &__gallery-title {
        height: 6%;
        border-top: 2px solid ${(props) => props.theme.thirdColor};
        background: ${(props) => props.theme.linearGradient};
        width: 100%;
        text-align: center;
      }
      &__gallery-display {
        overflow: scroll;
        ::-webkit-scrollbar {
          display: none;
        }
        height: 94%;
        ul {
          height: 100%;
          width: 100%;
          display: grid;
          grid-template-columns: 32.5% 32.5% 32.5%;
          column-gap: 1.25%;
          li {
            width: 100%;

            align-self: center;
            justify-self: center;
          }
        }
      }
    }
  }
  @media (min-width: ${(props) => props.theme.bigBreakPoint}) {
    max-width: 1900px;
    max-height: 1100px;
    .profile {
      &__info {
        max-width:400px;
      }
  }
`;

export default ProfileStyled;
