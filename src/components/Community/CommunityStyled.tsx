import styled from "styled-components";

const CommunityStyled = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0 5%;
  overflow: scroll;
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
      background-color: ${(props) => props.theme.primaryColor};

      border-radius: 10px;
      margin-top: 5%;
    }
  }
  @media (min-width: 600px) {
    width: 100%;
    padding: 0 5%;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    ul {
      list-style: none;
      padding: 0;
      color: ${(props) => props.theme.secondaryColor};
      display: grid;
      grid-template-columns: 48% 48%;
      grid-gap: 4%;

      li {
        width: 100%;
        background-color: ${(props) => props.theme.primaryColor};

        border-radius: 10px;
        margin-top: 5%;
      }
    }
    @media (min-width: 1000px) {
      width: 100%;
      padding: 0 5%;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      ul {
        list-style: none;
        padding: 0;
        color: ${(props) => props.theme.secondaryColor};
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-gap: 5%;

        li {
          width: 100%;
          background-color: ${(props) => props.theme.primaryColor};

          border-radius: 10px;
          margin-top: 5%;
        }
      }
    }
  }
`;

export default CommunityStyled;
