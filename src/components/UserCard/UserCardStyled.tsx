import styled from "styled-components";

const UserCardStyled = styled.article`
  display: flex;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.thirdColor} 0%,
    ${(props) => props.theme.primaryColor} 100%
  );
  img {
    width: 64px;
    height: 64px;
    margin: 5%;
    border: 2px solid ${(props) => props.theme.secondaryColor};
    border-radius: 10px;
    @media (min-width: 600px) {
      width: 96px;
      height: 96px;
    }
  }
`;
export default UserCardStyled;
