import styled from "styled-components";

const GuestPageStyled = styled.div`
  width: 100%;
  height: 100%;
  .guest-page {
    &__menu-container {
      width: 200px;
      height: 250px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export default GuestPageStyled;
