import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import {
  LoginWrapper,
  LoginTitle,
  LoginDescription,
  GreenTextWrapper,
  UserInputWrapper,
  UserInput,
  DarkIconStyleWrapper,
  DarkEyeStyleWrapper,
  PrimaryButton,
} from './Login-styled';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { Lock } from '@styled-icons/fa-solid/Lock';
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';
// import '@fontsource/montserrat';

const Login: React.FC = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const { loginUser } = useActions();
  const { error, loading } = useTypedSelector((state) => state.login);

  useEffect(() => {
    const { search: queryParams } = window.location;
    if (queryParams === '?error=true') {
      toast.error('Podane dane logowania są nieprawidłowe.', { toastId: 'toast-id-error' });
    }
  }, []);

  useEffect(() => {
    if (typeof error === 'string') {
      toast.error(error, { toastId: 'toast-id-login-error' });
    }
  }, [error]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser({ login: userLogin, password: userPassword });
  };

  return (
    <LoginWrapper>
      <Loader isLoading={loading} />
      <LoginTitle>
        Witaj w <GreenTextWrapper>CZAT</GreenTextWrapper>!
      </LoginTitle>
      <LoginDescription>Zaloguj się, aby uzyskać dostęp do rozmów.</LoginDescription>
      <form onSubmit={(e) => onSubmit(e)}>
        <UserInputWrapper>
          <DarkIconStyleWrapper>
            <PersonFill size="18" />
          </DarkIconStyleWrapper>
          <UserInput
            type="email"
            name="username"
            autoComplete="username"
            placeholder="Login"
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
          />
        </UserInputWrapper>
        <UserInputWrapper>
          <DarkIconStyleWrapper>
            <Lock size="18" />
          </DarkIconStyleWrapper>
          <UserInput
            type={passwordShown ? 'text' : 'password'}
            name="password"
            autoComplete="password"
            placeholder="Hasło"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <DarkEyeStyleWrapper onClick={togglePassword}>
            <EyeOutline size="24" />
          </DarkEyeStyleWrapper>
        </UserInputWrapper>
        <PrimaryButton type="submit" name="submit">
          Zaloguj się
        </PrimaryButton>
      </form>
    </LoginWrapper>
  );
};

export default Login;
