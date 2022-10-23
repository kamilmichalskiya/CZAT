import { useState } from 'react';
import {
  LoginWrapper,
  LoginTitle,
  TextSpan,
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
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const requestBody = new FormData(event.target);
  //   const requestOptions = {
  //     method: 'POST',
  //     body: new URLSearchParams(requestBody),
  //   };
  //   const authUrl = LinksCtx.login;
  //   const response = await fetch(authUrl, requestOptions);
  //   if (response.redirected) {
  //     window.location = response.url;
  //   }
  // };

  return (
    <LoginWrapper>
      <LoginTitle>
        Witaj w <GreenTextWrapper>CZAT</GreenTextWrapper>!
      </LoginTitle>
      <TextSpan>Zaloguj się, aby uzyskać dostęp do rozmów.</TextSpan>
      <form>
        <UserInputWrapper>
          <DarkIconStyleWrapper>
            <PersonFill size="18" />
          </DarkIconStyleWrapper>
          <UserInput type="email" name="username" autoComplete="username" placeholder="Adres email" />
        </UserInputWrapper>
        <UserInputWrapper>
          <DarkIconStyleWrapper>
            <Lock size="18" />
          </DarkIconStyleWrapper>
          <UserInput type={passwordShown ? 'text' : 'password'} name="password" autoComplete="password" placeholder="Hasło" />
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
