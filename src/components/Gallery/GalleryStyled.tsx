import styled from "styled-components";

const GalleryStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 900px;
  color: ${(props) => props.theme.secondaryColor};
  height: 92.5%;
  position: relative;
  .gallery {
    &__filter {
      position: relative;
      background: ${(props) => props.theme.linearGradient};
      height: 7.5%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      button {
        font-size: 1rem;
        height: 80%;
      }
    }
    &__list {
      background-color: ${(props) => props.theme.primaryColor};
      border-top: 2px solid ${(props) => props.theme.thirdColor};
      border-bottom: 2px solid ${(props) => props.theme.thirdColor};
      box-shadow: inset 0px 8px 10px -6px #000, inset 0px -8px 10px -6px #000;
      height: 85%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      ul {
        max-width: 350px;
        background-color: ${(props) => props.theme.primaryColor};
        border-radius: 10px;
        margin: 0;
        padding: 0;
        align-content: center;
        list-style: none;
        color: ${(props) => props.theme.secondaryColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 95%;
        width: 100%;
        display: grid;
        grid-template-columns: 49% 49%;
        column-gap: 2%;
        grid-template-rows: 47% 47%;
        row-gap: 2%;

        li {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          margin: 0;
          align-self: center;
        }
      }
    }
    &__footer {
      position: absolute;
      bottom: 0;
      height: 7.5%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme.primaryColor};

      button {
        font-size: 1rem;
        height: 90%;
        margin: 0 5%;
        border: 5px solid ${(props) => props.theme.thirdColor};
      }
    }
  }

  @media (min-width: ${(props) => props.theme.smallBreakPoint}) {
    height: 100%;
    position: relative;
    .gallery {
      &__filter {
        max-width: 100%;
        position: static;
        height: 7.5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.theme.linearGradient};
      }
      &__filter-title {
        flex: 1;
        h3 {
          display: block;
          margin: 0;
          padding: 0;
        }
      }
      &__filter-categories {
        height: 100%;
        position: relative;
        flex: 1;

        button {
          border: 2px solid ${(props) => props.theme.thirdColor};
          height: 80%;
          padding: 0;
          margin: 0;
        }
      }
      &__list {
        background-color: ${(props) => props.theme.primaryColor};
        border-top: 2px solid ${(props) => props.theme.thirdColor};
        border-bottom: 2px solid ${(props) => props.theme.thirdColor};
        height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0;
        ul {
          list-style: none;
          color: ${(props) => props.theme.secondaryColor};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 90%;
          max-width: 1200px;
          margin: 0;
          display: grid;
          grid-template-columns: 23% 23% 23% 23%;
          grid-template-rows: 100%;
          grid-gap: 1%;
          li {
            width: 70%;
            border-radius: 10px;
            margin: 8% 0;
            display: flex;
            justify-content: center;
            height: 90%;
            width: 100%;
            margin: 0;
            align-self: center;
          }
        }
      }

      &__footer {
        position: static;

        height: 7.5%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: ${(props) => props.theme.linearGradient};

        button {
          height: 90%;
          margin: 0 5%;
          border: 5px solid ${(props) => props.theme.thirdColor};
        }
      }
    }
  }
`;

export default GalleryStyled;
