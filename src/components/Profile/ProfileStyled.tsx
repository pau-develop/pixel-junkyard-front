import styled from "styled-components";

const ProfileStyled = styled.article`
  margin-top: 5%;
  height: 90%;
  width: 90%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  color: ${(props) => props.theme.secondaryColor};
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.thirdColor} 0%,
    ${(props) => props.theme.primaryColor} 100%
  );
  .profile {
    &__info {
      background-color: ${(props) => props.theme.thirdColor};
      border-radius: 40px;
      width: 100%;
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
        list-style: none;
        padding: 0;
      }
    }
  }
`;

export default ProfileStyled;
