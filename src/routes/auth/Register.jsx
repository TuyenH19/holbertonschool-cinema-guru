import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';


export default function Register({ username, password, setUsername, setPassword }) {
  return (
    <div>
      <h2>Create a new account</h2>
      <Input
        icon={<FontAwesomeIcon icon={faUser} />}
        label="Username:"
        type="text"
        value={username}
        setValue={setUsername}
      />
      <Input
        icon={<FontAwesomeIcon icon={faKey} />}
        label="Password:"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <Button
        type="submit"
        icon={<FontAwesomeIcon icon={faPlus} />}
        label="Sign Up"
      />
    </div>
  )
}
