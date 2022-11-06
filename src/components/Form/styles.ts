import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const FormStyled = styled.form`
  border: 1px solid ${theme.color("gray400")};
  background-color: ${theme.color("gray500")};

  padding: 24px;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageInput = styled.input`
  display: none;
`

export const Image = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 36px;

  border: 1px solid ${theme.color("gray400")};
  object-fit: scale-down;

  margin-bottom: 16px;

  cursor: pointer;
`

const inputCss = css`
  all: unset none;
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: ${theme.color("gray300")};
  color: ${theme.color("textColor")};
`

export const InputName = styled.input`
  ${inputCss}
  margin-bottom: 8px;
`

export const InputMesage = styled.textarea`
  ${inputCss}
  resize: none;
`

export const Footer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`

export const PublishButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  background-color: ${theme.color("gray200")};
  color: ${theme.color("gray500")};

  :hover {
    background-color: ${theme.color("gray100")};
  }
`

export const DiscardButton = styled.button`
  all: none;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  background-color: transparent;
  color: ${theme.color("gray200")};
  text-decoration: underline;

  :hover {
    background-color: ${theme.color("gray400")};
  }
`;

export const Portrait = styled.div`
  position: relative;
`

export const DeleteImageButton = styled.button`
  position: absolute;
  left:104px;
  top: 32px;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`