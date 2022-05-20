import { Link } from 'react-router-dom';
import { HeaderWrap } from './style';

const Header = () => {
  return (
    <HeaderWrap>
      <li>
        <Link to='/'>Home</Link>
      </li>

      <li>
        <Link to='/main'>Main</Link>
      </li>

      <li>
        <Link to='/main_custom'>Main Custom</Link>
      </li>
    </HeaderWrap>
  );
};

export default Header;
