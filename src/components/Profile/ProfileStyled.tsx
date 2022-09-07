import styled from "styled-components";

const ProfileStyled = styled.article`
  border-style: border-box;

  height: 90%;
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  color: ${(props) => props.theme.secondaryColor};
  background: ${(props) => props.theme.primaryColor};
  .profile {
    &__info {
      margin: 0 5%;
      background-color: ${(props) => props.theme.thirdColor};
      border-radius: 40px;
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 5%;
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
        object-fit: fill;
      }
    }
    &__info-props {
      height: 90%;
      width: 50%;
      padding-left: 10%;
      font-size: 1.3rem;
      @media (max-width: 450px) {
        font-size: 1rem;
      }
      h2 {
        margin: 0;
      }
      ul {
        height: 100%;
        list-style: none;
        padding: 0;
      }
    }
    &__settings-mobile {
      margin: 0 5%;
      background-color: ${(props) => props.theme.thirdColor};
      border-radius: 40px;
      width: 90%;
      height: 10%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 5%;
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
      margin: 5% 5%;
      background-color: ${(props) => props.theme.thirdColor};
      border-radius: 40px;
      width: 90%;
      height: 67%;
      @media (min-width: 450px) {
        height: 57%;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        margin-top: 1%;
      }
    }
    &__gallery-display {
      justify-content: flex-start;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      height: 90%;
      width: 90%;
      margin: 0 5%;
      display: flex;
      flex-direction: column;

      color: ${(props) => props.theme.secondaryColor};

      ul {
        justify-content: flex-start;
        height: 100%;
        list-style: none;
        padding: 0;
        color: ${(props) => props.theme.secondaryColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
          border-radius: 10px;
          margin-top: 5%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
  @media (min-width: 700px) {
    .profile {
      &__gallery-display {
        height: 100%;
        ul {
          justify-content: flex-start;
          display: grid;
          grid-template-columns: 48% 48%;
          grid-gap: 2%;
        }
      }
    }
  }
  @media (min-width: 1100px) {
    max-width: 100%;
    flex-direction: row;
    height: 90%;
    .profile {
      &__info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 40%;
        max-width: 300px;
        margin: 3%;
        padding: 3%;
        height: 90%;
      }
      &__info-avatar {
        height: 40%;
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
        height: 40%;
        width: 100%;
        padding: 0;
        font-size: 1.3rem;
        @media (max-width: 450px) {
          font-size: 1rem;
        }
        h2 {
          margin-top: 5%;
          text-align: center;
        }
        ul {
          justify-content: flex-start;
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
        height: 10%;
        display: flex;
        flex-direction: column;
        button {
          width: 90%;
          margin: 5%;
        }
      }
      &__gallery {
        margin: 3% 3% 3% 0;
        padding: 3%;
        background-color: ${(props) => props.theme.thirdColor};
        border-radius: 40px;
        height: 90%;
        display: flex;
        flex-direction: column;

        justify-content: flex-start;
        h3 {
          margin: 0;
        }
      }
      &__gallery-display {
        ul {
          height: 100%;
          display: grid;
          grid-template-columns: 30% 30% 30%;
          grid-gap: 5%;
        }
      }
    }
  }
`;

export default ProfileStyled;
