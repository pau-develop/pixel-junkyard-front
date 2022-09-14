import styled from "styled-components";

const GalleryStyled = styled.section`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.secondaryColor};
  .gallery {
    &__filter {
      height: 10%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    color: ${(props) => props.theme.secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      border-radius: 10px;
      margin-top: 5%;
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: 600px) {
    .gallery {
      height: 100%;
      &__filter {
        height: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      &__list {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        ul {
          height: 90%;
          width: 100%;
          margin: 0;
          display: grid;

          grid-template-columns: 22% 22% 22% 22%;
          grid-gap: 3%;

          li {
            height: 80%;
            margin: 0;
            align-self: flex-start;
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
        background: linear-gradient(
          90deg,
          #17232e 0%,
          #144573 50%,
          #17232e 100%
        );
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
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        background: linear-gradient(
          90deg,
          #17232e 0%,
          #144573 50%,
          #17232e 100%
        );

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
