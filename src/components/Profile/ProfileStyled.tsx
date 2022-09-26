import styled from "styled-components";

const ProfileStyled = styled.article`
  box-sizing: content-box;
  height: 92.5%;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;

  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.secondaryColor};
  .profile {
    &__gallery-wrap {
      background-color: ${(props) => props.theme.primaryColor};
      box-shadow: inset 0px 8px 10px -6px #000, inset 0px -8px 10px -6px #000;
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
    }
    &__info-wrap {
      max-width: 350px;
      width: 90%;
      margin: auto;
      border: 2px solid ${(props) => props.theme.thirdColor};
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
      align-items: center;
    }
    &__info {
      height: 94%;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
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
      font-size: 0.75rem;
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
      margin-bottom: 20px;

      width: 100%;
      height: 10%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      button {
        border: 2px solid ${(props) => props.theme.thirdColor};
        font-size: 0.6rem;
        margin: 6% 0;
        width: 100%;
        height: 100%;
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
      max-width: 350px;
      margin: 0 auto;

      width: 90%;
      height: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__gallery-title {
      border-top: 2px solid ${(props) => props.theme.thirdColor};
      border-bottom: 2px solid ${(props) => props.theme.thirdColor};
      background: ${(props) => props.theme.linearGradient};
      width: 100%;
      border-radius: 10px 10px 0 0;
      h3 {
        padding: 1% 0;
        border-radius: 10px 10px 0 0;
        background: transparent;
        height: 100%;
        width: 100%;
        font-size: 1rem;
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
      background: linear-gradient(
        0deg,
        ${(props) => props.theme.thirdColor} 0%,
        ${(props) => props.theme.primaryColor} 100%
      );
      border-left: 2px solid ${(props) => props.theme.thirdColor};
      border-right: 2px solid ${(props) => props.theme.thirdColor};
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;

      span {
        align-self: center;
      }
      ul {
        border-radius: 10px;
        width: 80%;
        height: 90%;
        margin-top: auto;
        margin-bottom: auto;
        max-height: 100%;
        list-style: none;
        padding: 0;

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
    &__footer {
      bottom: 0;
      height: 7.5%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme.linearGradient};
    }
  }

  @media (min-width: ${(props) => props.theme.smallBreakPoint}) {
    max-width: 100%;
    height: 92.5%;
    flex-direction: column;
    .profile {
      &__gallery-wrap {
        max-width: 100%;
        box-shadow: inset 0px 8px 10px -6px #000, inset 0px -8px 10px -6px #000;
        background-color: ${(props) => props.theme.primaryColor};
        display: flex;
        justify-content: center;
        width: 100%;
        height: 92.5%;
        flex-direction: row;
      }

      &__info-wrap {
        border: 2px solid ${(props) => props.theme.thirdColor};
        background: linear-gradient(
          0deg,
          ${(props) => props.theme.thirdColor} -10%,
          ${(props) => props.theme.primaryColor} 100%
        );
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;
        width: 40%;
        height: 90%;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 2%;
        max-width: 300px;

        @media (max-height: 750px) {
          max-width: 200px;
        }

        margin-left: 5%;
      }
      &__info {
        width: 100%;
        height: 94%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &__info-title {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 10px 0 0;
        height: 6%;
        background: ${(props) => props.theme.linearGradient};
        width: 101%;
        text-align: center;
        margin: 0;
        border-bottom: 2px solid ${(props) => props.theme.thirdColor};
      }
      &__info-avatar {
        height: 30%;
        width: 90%;
        display: flex;
        justify-content: space-around;
        width: 90%;
        padding: 20px;
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
        width: 90%;
        padding: 0 20px;
        font-size: 0.75rem;
        @media (max-width: 450px) {
          font-size: 0.75rem;
        }
        h2 {
          text-align: center;
          background-color: ${(props) => props.theme.thirdColor};
          border-radius: 10px;
        }
        ul {
          background-color: ${(props) => props.theme.thirdColor};
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 20px 0;
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
        width: 90%;
        height: 30%;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        button {
          width: 100%;
          margin: 10px 0;
        }
      }
      &__gallery {
        max-width: 1100px;
        border-radius: 10px;
        margin-top: auto;
        margin-bottom: auto;
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
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        height: 6%;
        border-top: 2px solid ${(props) => props.theme.thirdColor};

        width: 90%;
        text-align: center;
        h3 {
          width: 100%;
          background: ${(props) => props.theme.linearGradient};
        }
      }
      &__gallery-display {
        border-radius: 0 0 10px 10px;
        background: linear-gradient(
          0deg,
          ${(props) => props.theme.thirdColor} 0%,
          ${(props) => props.theme.primaryColor} 100%
        );

        height: 94%;
        ul {
          background-color: transparent;
          margin-top: auto;
          margin-bottom: auto;
          height: 90%;
          width: 100%;
          display: grid;
          grid-template-columns: 32.5% 32.5% 32.5%;
          column-gap: 1.25%;
          li {
            width: 100%;
            height: 100%;
            align-self: center;
            justify-self: center;
          }
        }
      }
      &__footer {
        bottom: 0;
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

export default ProfileStyled;
