import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/interface'>Interface</Link>
      </li>
    </ul>
  );
};

export default Header;
