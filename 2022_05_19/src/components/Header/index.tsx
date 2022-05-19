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
    </HeaderWrap>
  );
};

export default Header;
