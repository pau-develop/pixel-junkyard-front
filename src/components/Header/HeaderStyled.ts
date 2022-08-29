import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.primaryColor};
  height: 7%;
  display: flex;
  align-items: center;
  padding: 0 5%;
  .header {
    &__title {
      margin: 0;
      padding: 0;
      color: ${(props) => props.theme.secondaryColor};
      text-transform: uppercase;
      font-size: 1.5rem;
    }
  }
`;

export default HeaderStyled;
