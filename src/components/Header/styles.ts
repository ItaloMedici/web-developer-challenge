import styled from "styled-components";
import { theme } from "../../theme";

export const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 93px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${theme.color("gray600")};
  border-bottom: 1px solid ${theme.color("gray700")};
`