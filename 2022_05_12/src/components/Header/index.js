import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrap>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/playground'>playground</Link>
      </li>
      <li>
        <Link to='typeground'>typeground</Link>
      </li>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  padding-left: 0;
  width: 100%;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 0;

  li {
    margin-right: 1%;
    margin-bottom: 1%;
  }

  a {
    text-decoration: none;
    color: #000;

    :hover {
      font-weight: bold;
    }
  }
`;
