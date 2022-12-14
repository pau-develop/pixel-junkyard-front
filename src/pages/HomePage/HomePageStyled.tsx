import styled from "styled-components";
import { motion } from "framer-motion";

const GuestPageStyled = styled(motion.div)`
  width: 100%;
  height: 100%;
  .guest-page {
    &__menu-container {
      color: ${(props) => props.theme.secondaryColor};
      width: 50%;
      height: 30%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export default GuestPageStyled;
