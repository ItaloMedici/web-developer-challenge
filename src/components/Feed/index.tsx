import React from 'react';
import { useIntl } from "react-intl";
import Card from '../Card';

import { Title, Wrapper } from './styles';

const Feed: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Wrapper>
      <Title>{formatMessage({ id: "feed" })}</Title>
      <Card />
      <Card />
      <Card />
    </Wrapper>
  );
}

export default Feed;