import styled from "styled-components";

const CommunityStyled = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0 5%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  ::-webkit-scrollbar {
    display: none;
  }
  ul {
    list-style: none;
    padding: 0;
    color: ${(props) => props.theme.secondaryColor};
    display: flex;
    flex-direction: column;
    li {
      max-width: 350px;
      max-height: 350px;
      border-radius: 10px;
      margin-top: 5%;
    }
  }
  @media (min-width: 800px) {
    ul {
      height: 0%;
      display: grid;
      grid-template-columns: 49% 49%;
      grid-gap: 2%;
    }
  }
  @media (min-width: 1200px) {
    ul {
      display: grid;
      grid-template-columns: 32% 32% 32%;
      grid-gap: 2%;
    }
  }
  @media (min-width: 1400px) {
    ul {
      display: grid;
      grid-template-columns: 24% 24% 24% 24%;
      grid-gap: 1.5%;
    }
  }
`;

export default CommunityStyled;
