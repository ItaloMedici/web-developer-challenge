import React from 'react';
import { useIntl } from "react-intl";
import { usePost } from '../../context/posts';
import Card from '../Card';

import { Title, Wrapper } from './styles';

const Feed: React.FC = () => {
  const { formatMessage } = useIntl();
  const { posts } = usePost();
  return (
    <Wrapper>
      <Title>{formatMessage({ id: "feed" })}</Title>
      {posts.reverse().map(p => (
        <Card key={p.id} post={p}/>
      ))}
    </Wrapper>
  );
}

export default Feed;