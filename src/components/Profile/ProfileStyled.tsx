import styled from "styled-components";

const ProfileStyled = styled.article`
  box-sizing: content-box;
  height: 92.5%;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.secondaryColor};
  background: ${(props) => props.theme.primaryColor};
  /* border-bottom:2px solid  ${(props) => props.theme.thirdColor}; */

  .profile {
    &__info {
      height: 20%;
      margin: 0 5%;
      padding: 2%;
      background-color: ${(props) => props.theme.thirdColor};
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
    &__info-avatar {
      height: 80%;
      width: 40%;
      display: flex;
      justify-content: space-around;

      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: contain;
        image-rendering: pixelated;
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
      margin: 0 5%;
      margin-top: 20px;
      background-color: ${(props) => props.theme.thirdColor};
      width: 90%;
      height: 10%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      justify-content: space-around;
      button {
        font-size: 1rem;
        margin: 6% 0;
        width: 100%;
        height: 70%;
      }
      button:first-child {
        margin-left: 6%;
        margin-right: 3%;
      }
      button:last-child {
        margin-right: 6%;
        margin-left: 3%;
      }
    }
    &__settings-desktop {
      display: none;
    }

    &__gallery {
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      margin: 0 5%;
      margin-top: 20px;
      margin-bottom: 20px;
      padding-bottom: 20px;
      background-color: ${(props) => props.theme.thirdColor};
      width: 90%;
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        margin: 0;
        margin-top: 1%;
      }
    }
    &__gallery-display {
      height: 100%;
      max-height: 100%;
      width: 100%;
      margin: 0 5%;

      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.secondaryColor};
      ul {
        height: 100%;
        max-height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        color: ${(props) => props.theme.secondaryColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
          margin-top: 5%;
          width: 50%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  @media (min-width: 800px) {
    background: ${(props) => props.theme.linearGradient};
    max-width: 1400px;
    flex-direction: row;
    .profile {
      &__info {
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
          max-width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 48% 48%;
          grid-template-rows: 50%;
          grid-gap: 1%;
          li {
            width: 50%;

            align-self: center;
            justify-self: center;
          }
        }
        @media (min-width: 1000px) {
          ul {
            max-width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 32% 32% 32%;
            grid-template-rows: 50%;
            grid-gap: 1%;
            li {
              width: 60%;
              align-self: center;
              justify-self: center;
            }
          }
        }
        @media (min-width: 1200px) {
          ul {
            max-width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 23% 23% 23% 23%;
            grid-template-rows: 50%;
            grid-gap: 2%;
            li {
              width: 60%;
              align-self: center;
              justify-self: center;
            }
          }
        }
      }
    }
  }
`;

export default ProfileStyled;
