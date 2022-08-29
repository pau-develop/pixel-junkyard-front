import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.primaryColor};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 5%;
  .header {
    &__title {
      margin: 0;
      padding: 0;
      color: ${(props) => props.theme.secondaryColor};
      text-transform: uppercase;
    }
  }
`;

export default HeaderStyled;
