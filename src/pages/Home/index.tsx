import React from 'react';
import Feed from '../../components/Feed';
import Form from '../../components/Form';
import Header from '../../components/Header';
import { Main } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Form />
        <Feed />
      </Main>
    </>
  );
}

export default Home;    