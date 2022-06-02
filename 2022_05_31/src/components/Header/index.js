import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/'>Counter</Link>
      <Link to='/selection'>Selection</Link>
      <Link to='/poke'>Pokemon</Link>
    </div>
  );
};

export default Header;
