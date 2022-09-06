import styled from "styled-components";

const GalleryStyled = styled.section`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 90%;
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.secondaryColor};

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
    ul {
      display: grid;
      grid-template-columns: 48% 48%;
      grid-gap: 4%;
    }
  }
  @media (min-width: 1000px) {
    ul {
      display: grid;
      grid-template-columns: 30% 30% 30%;
      grid-gap: 5%;
    }
  }
  @media (min-width: 1400px) {
    ul {
      display: grid;
      grid-template-columns: 22% 22% 22% 22%;
      grid-gap: 3%;
    }
  }
`;

export default GalleryStyled;
