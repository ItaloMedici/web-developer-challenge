import React from 'react';

import logo from "../../assets/bx-logo.png"
import { HeaderStyled } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo" />
    </HeaderStyled>
  );
}

export default Header;