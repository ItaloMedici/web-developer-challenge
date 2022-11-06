import styled from 'styled-components';
import { theme } from '../../theme';

export const Title = styled.h1`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${theme.color("gray100")};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`