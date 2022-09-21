import styled from "styled-components";

const GalleryStyled = styled.section`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.secondaryColor};
  height: 92.5%;
  position: relative;
  .gallery {
    &__filter {
      position: relative;
      background: ${(props) => props.theme.linearGradient};
      height: 5%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 80%;
      button {
        font-size: 1rem;
        height: 80%;
      }
    }
    &__list {
      margin: 2% 0;
      height: 88%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      ul {
        margin: 0;
        padding: 0;
        align-content: center;
        list-style: none;
        color: ${(props) => props.theme.secondaryColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 47% 47%;
        column-gap: 5%;
        grid-template-rows: 47% 47%;
        row-gap: 3%;

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
      height: 5%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme.linearGradient};

      button {
        font-size: 1rem;
        height: 90%;
        margin: 0 5%;
        border: 5px solid ${(props) => props.theme.thirdColor};
      }
    }
  }

  @media (min-width: 600px) {
    height: 100%;
    position: relative;
    .gallery {
      &__filter {
        position: static;
        height: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      &__list {
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        ul {
          list-style: none;
          padding: 0;
          margin: 15% 0;
          color: ${(props) => props.theme.secondaryColor};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 90%;
          width: 100%;
          margin: 0;
          display: grid;
          grid-template-columns: 22% 22% 22% 22%;
          grid-template-rows: 100%;
          grid-gap: 1%;
          li {
            width: 70%;
            border-radius: 10px;
            margin: 8% 0;
            display: flex;
            justify-content: center;
            height: 80%;
            width: 100%;
            margin: 0;
            align-self: center;
          }
        }
      }
      &__filter {
        height: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
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
      &__footer {
        position: static;

        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
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
