import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  border-radius: 50px;
  color: ${(props) => props.theme.secondaryColor};
  font-size: 1.5rem;
  height: 60px;
  width: 120px;
`;

export default ButtonStyled;