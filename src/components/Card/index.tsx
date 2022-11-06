import React from "react";

import {
  Author,
  Container,
  Content,
  DeleteButton,
  Message,
  PostImage,
  PostInfo,
  SentBy,
} from "./styles";

import { ReactComponent as DeleteSVG } from "../../assets/delete.svg";

const Card: React.FC = () => {
  return (
    <Container>
      <DeleteButton>
        <DeleteSVG />
      </DeleteButton>
      <Content>
        <PostImage></PostImage>
        <PostInfo>
          <Message>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mattis ligula vel velit scelerisque iaculis. Nam mattis justo id
            orci commodo, eu tempus purus cursus.
          </Message>
          <div>
            <SentBy>Enviado Por</SentBy>
            <Author>Manuela Oliveira</Author>
          </div>
        </PostInfo>
      </Content>
    </Container>
  );
};

export default Card;
