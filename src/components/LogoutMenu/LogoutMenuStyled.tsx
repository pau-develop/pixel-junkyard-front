import styled from "styled-components";

const LogoutMenuStyled = styled.div`
  &.phone-logout-menu {
    padding: 0 5%;
    background-color: ${(props) => props.theme.primaryColor};
    border-top: 2px solid ${(props) => props.theme.thirdColor};
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    color: ${(props) => props.theme.secondaryColor};
    span {
      font-size: 1.3rem;
    }
    button {
      background-color: ${(props) => props.theme.thirdColor};
    }
  }
`;

export default LogoutMenuStyled;
