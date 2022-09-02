import styled from "styled-components";

const HeaderStyled = styled.header`
  position: relative;
  background-color: ${(props) => props.theme.primaryColor};
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  i {
    color: ${(props) => props.theme.secondaryColor};
  }
  @media (min-width: 599px) {
    i {
      display: none;
    }
  }
`;

export default HeaderStyled;
