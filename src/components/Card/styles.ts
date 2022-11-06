import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  background-color: ${theme.color("gray500")};
  border: 1px solid ${theme.color("gray400")};
  position: relative;
  height: fit-content;
  border-radius: 3px;
`;

export const Content = styled.div`
  margin: 36px 12px 12px 12px;
  display: flex;
  padding: 12px;
`

export const PostImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 36px;
  object-fit: scale-down;
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 32px;
  flex: 1;
`

export const Message = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.25;
  color: ${theme.color("textColor")};
`

export const SentBy = styled.span`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: ${theme.color("gray200")};
  margin-bottom: 2px;
`

export const Author = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${theme.color("gray100")};
`

export const DeleteButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 12px;
  cursor: pointer;
  border-radius: 16px;
  :hover {
    background-color: ${theme.color("gray400")};
  }
`