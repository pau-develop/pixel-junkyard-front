import styled from "styled-components";

const FilterStyled = styled.div`
  height: 200%;
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 100%;
  left: 0%;
  border: 2px solid ${(props) => props.theme.primaryColor};
  .filter {
    &__list {
      padding: 0;
      margin: 0;
      height: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      li {
        list-style: none;
        width: 100%;
        height: 100%;
        margin: 0;
        button {
          cursor: pointer;
          color: ${(props) => props.theme.secondaryColor};
          height: 100%;
          flex: 1;
          width: 100%;
          background: linear-gradient(
            90deg,
            #17232e 0%,
            #144573 50%,
            #17232e 100%
          );
        }
      }
    }
  }
`;

export default FilterStyled;
