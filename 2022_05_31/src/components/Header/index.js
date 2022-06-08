import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrap>
      <Link to='/'>Counter</Link>
      <Link to='/selection'>Selection</Link>
      <Link to='/poke'>Pokemon</Link>
      <Link to='/error'>Error Boundaries</Link>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  a {
    color: #000;
    margin-right: 10px;
    text-decoration: none;

    :hover {
      font-weight: 500;

      cursor: pointer;
    }
  }
`;
