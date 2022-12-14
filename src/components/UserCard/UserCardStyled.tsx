import styled from "styled-components";

const UserCardStyled = styled.article`
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.thirdColor} 0%,
    ${(props) => props.theme.primaryColor} 100%
  );
  .image-container {
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
  div {
    padding: 5% 0;
    display: flex;
    flex-wrap: wrap;
    width: 70%;

    h2 {
      margin: 0;
      width: 100%;
    }
    span {
      width: 100%;
    }
  }
`;
export default UserCardStyled;
