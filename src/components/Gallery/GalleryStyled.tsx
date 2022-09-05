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
  border-radius: 50px;
  color: ${(props) => props.theme.secondaryColor};

  ul {
    list-style: none;
    padding: 0;
    color: ${(props) => props.theme.secondaryColor};
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    justify-content: center;
    li {
      width: 100%;
      border-radius: 10px;
      margin-top: 5%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default GalleryStyled;
