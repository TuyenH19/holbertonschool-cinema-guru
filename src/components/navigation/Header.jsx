import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Header({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('accessToken');
  };

  return (
    <nav>
      <img src="https://picsum.photos/100/100" alt="Avatars" />
      <p>Welcome, {userUsername}</p>
      <span 
        onClick={logout}
        style={{ color: 'red', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'}}
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
        Logout
      </span>
    </nav>
  );
}

export default Header;
