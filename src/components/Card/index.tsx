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
import NonImageSVG from "../../assets/image.png";
import { Post } from "../../models/Post";
import { useIntl } from "react-intl";
import { usePost } from "../../context/posts";

const Card: React.FC<{ post: Post }> = ({ post }) => {
  const { formatMessage } = useIntl();
  const { deletePost } = usePost();

  return (
    <Container>
      <DeleteButton onClick={() => deletePost(post.id)}>
        <DeleteSVG />
      </DeleteButton>
      <Content>
        <PostImage src={post?.imgURL ?? NonImageSVG} />
        <PostInfo>
          <Message>
            {post.message}
          </Message>
          <div>
            <SentBy>{formatMessage({id: "sentBy"})}</SentBy>
            <Author>{post.author}</Author>
          </div>
        </PostInfo>
      </Content>
    </Container>
  );
};

export default Card;
