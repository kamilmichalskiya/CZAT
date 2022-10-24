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
  InfoSpan,
  SwitchViewAnchor,
  Footer,
  CopyrightSpan,
} from './Login-styled';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { Lock } from '@styled-icons/fa-solid/Lock';
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';
// import '@fontsource/montserrat';

interface FormData {
  login: string;
  password: string;
  confirmPassword?: string;
}

const initialFormData = {
  login: '',
  password: '',
  confirmPassword: '',
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);
  // toggle login/register view
  const [isLoginView, setIsLoginView] = useState(true);

  const { loginUser } = useActions();
  const { error, loading } = useTypedSelector((state) => state.login);

  useEffect(() => {
    const { search: queryParams } = window.location;
    if (queryParams === '?error=true') {
      toast.error('Podane dane logowania są nieprawidłowe.', { toastId: 'toast-id-error' });
    }
  }, []);

  useEffect(() => {
    setFormData(initialFormData);
    setPasswordShown(false);
    setPasswordConfirmShown(false);
  }, [isLoginView]);

  useEffect(() => {
    if (typeof error === 'string') {
      toast.error(error, { toastId: 'toast-id-login-error' });
    }
  }, [error]);

  const onValueChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginUser({ login: formData.login, password: formData.password });
  };

  return (
    <LoginWrapper>
      <Loader isLoading={loading} />
      <LoginTitle>
        Witaj w <GreenTextWrapper>CZAT</GreenTextWrapper>!
      </LoginTitle>
      <LoginDescription>{isLoginView ? 'Zaloguj się, aby uzyskać dostęp do rozmów.' : 'Zarejestruj się, aby rozpocząć rozmowy!'}</LoginDescription>
      <form onSubmit={(e) => onSubmit(e)}>
        <UserInputWrapper>
          <DarkIconStyleWrapper>
            <PersonFill size="18" />
          </DarkIconStyleWrapper>
          <UserInput
            type="email"
            name="login"
            autoComplete="login"
            placeholder="Login"
            value={formData.login}
            onChange={(e) => onValueChangedHandler(e)}
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
            value={formData.password}
            onChange={(e) => onValueChangedHandler(e)}
          />
          <DarkEyeStyleWrapper onClick={() => setPasswordShown(!passwordShown)} title={passwordShown ? 'Ukryj hasło' : 'Pokaż hasło'}>
            <EyeOutline size="24" />
          </DarkEyeStyleWrapper>
        </UserInputWrapper>
        {isLoginView ? (
          ''
        ) : (
          <UserInputWrapper>
            <DarkIconStyleWrapper>
              <Lock size="18" />
            </DarkIconStyleWrapper>
            <UserInput
              type={passwordConfirmShown ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Potwierdź hasło"
              value={formData.confirmPassword}
              onChange={(e) => onValueChangedHandler(e)}
            />
            <DarkEyeStyleWrapper onClick={() => setPasswordConfirmShown(!passwordConfirmShown)} title={passwordShown ? 'Ukryj hasło' : 'Pokaż hasło'}>
              <EyeOutline size="24" />
            </DarkEyeStyleWrapper>
          </UserInputWrapper>
        )}
        <PrimaryButton type="submit" name="submit">
          {isLoginView ? 'Zaloguj się' : 'Zarejestruj się'}
        </PrimaryButton>
        <InfoSpan>{isLoginView ? 'Nie masz konta?' : 'Masz już konto?'}</InfoSpan>
        <Footer>
          <SwitchViewAnchor onClick={() => setIsLoginView(!isLoginView)}>{isLoginView ? 'Zarejestruj się' : 'Zaloguj się'}</SwitchViewAnchor>
          <CopyrightSpan>© 2022 Czat</CopyrightSpan>
        </Footer>
      </form>
    </LoginWrapper>
  );
};

export default Login;
