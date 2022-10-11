import styled from "styled-components";

const HeaderStyled = styled.header`
  position: relative;
  background-color: ${(props) => props.theme.primaryColor};
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  flex-wrap: wrap;
  .header {
    &__title {
      cursor: pointer;
      margin: 0;
      padding: 0;
      color: ${(props) => props.theme.secondaryColor};
      text-transform: uppercase;
      font-size: 1rem;
    }
    &__title:hover {
      @media (min-width: ${(props) => props.theme.breakPoint}) {
        color: white;
      }
    }
    &__title:active {
      color: white;
      -webkit-tap-highlight-color: transparent;
    }
    &__icon-wrap {
      display: flex;
      width: 20%;
      justify-content: flex-end;
      i {
        margin-right: 20%;
      }
      i:active {
        color: white;
        -webkit-tap-highlight-color: transparent;
      }

      i:last-child {
        margin-right: 0;
      }
    }
  }
  i {
    color: ${(props) => props.theme.secondaryColor};
    cursor: pointer;
  }
  @media (min-width: 599px) {
    .header {
      &__icon-wrap {
        display: none;
      }
    }
  }
`;

export default HeaderStyled;
