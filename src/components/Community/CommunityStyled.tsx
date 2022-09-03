import styled from "styled-components";

const CommunityStyled = styled.div`
  width: 100%;
  padding: 0 5%;
  ul {
    list-style: none;
    padding: 0;
    color: ${(props) => props.theme.secondaryColor};
    li {
      background-color: ${(props) => props.theme.primaryColor};
      border: 2px solid ${(props) => props.theme.secondaryColor};
    }
  }
`;

export default CommunityStyled;
