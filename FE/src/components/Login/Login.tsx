import { useState } from 'react';
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
// import '@fontsource/montserrat';

const Login = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const { data, error, loading } = useTypedSelector((state) => state.login);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestBody = new FormData(event.currentTarget);
    const requestOptions = {
      method: 'POST',
      body: requestBody,
    };
    const response = await fetch('api/login', requestOptions);
    if (response.redirected) {
      window.location.href = response.url;
    }
  };

  return (
    <LoginWrapper>
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
