import { useState, useEffect, useRef } from 'react';
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
  ErrorText,
} from './Login-styled';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { Lock } from '@styled-icons/fa-solid/Lock';
import { EyeOutline } from '@styled-icons/evaicons-outline/EyeOutline';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';

interface FormData {
  username: string;
  password: string;
  confirmPassword?: string;
}

const initialFormData = {
  username: '',
  password: '',
  confirmPassword: '',
};

// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormData>(initialFormData);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const formFieldEventData = useRef<globalThis.FormData | null>(null); // Saved FormData state from register action
  // TODO create custom useRegisterUser hook
  const { loginUser, registerUser, getAdvancedLinks } = useActions();
  const { error, loading, userData } = useTypedSelector((state) => state.user);
  const { data: linksData } = useTypedSelector((state) => state.links);

  useEffect(() => {
    const { search: queryParams } = window.location;
    if (queryParams === '?error=true') {
      toast.error('Podane dane logowania są nieprawidłowe. Spróbuj ponownie!', { toastId: 'toast-id-error' });
    }
  }, []);

  useEffect(() => {
    setFormData({ ...initialFormData });
    setFormErrors({ ...initialFormData });
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
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const onLoginSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validationErrors = getValidationErrors('login');

    let error: keyof typeof validationErrors;
    for (error in validationErrors) {
      if (validationErrors[error]) {
        setFormErrors({ ...validationErrors });
        return;
      }
    }

    if (event.target) {
      const loginRequestBody = new FormData(event.target as HTMLFormElement);
      loginUser(loginRequestBody, linksData?.LOGIN);
      getAdvancedLinks(linksData?.ADVANCED_LINKS);
    }
  };

  const onRegisterSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validationErrors = getValidationErrors('register');

    let error: keyof typeof validationErrors;
    for (error in validationErrors) {
      if (validationErrors[error]) {
        setFormErrors({ ...validationErrors });
        return;
      }
    }

    if (event.target) {
      const loginRequestBody = new FormData(event.target as HTMLFormElement);
      loginRequestBody.delete('confirmPassword');
      formFieldEventData.current = loginRequestBody;
      registerUser({ username: formData.username, password: formData.password }, linksData?.REGISTER);
    }
  };

  const getValidationErrors = (type: 'login' | 'register' = 'login'): FormData => {
    const validationErrors = { ...initialFormData };

    if (!formData.username) {
      validationErrors.username = 'Adres e-mail jest wymagany!';
    } else if (formData.username.length < 4) {
      validationErrors.username = 'Adres e-mail jest zbyt krótki!';
    }
    // else if (!formData.username.match(emailRegex)) {
    //   validationErrors.username = 'Adres e-mail ma niepoprawny format!';
    // }

    if (!formData.password) {
      validationErrors.password = 'Hasło jest wymagane!';
    } else if (formData.password.length < 4) {
      validationErrors.password = 'Hasło jest zbyt krótkie!';
    }

    if (type === 'register') {
      if (!formData.confirmPassword) {
        validationErrors.confirmPassword = 'Hasło jest wymagane!';
      } else if (formData.confirmPassword.length < 4) {
        validationErrors.confirmPassword = 'Hasło jest zbyt krótkie!';
      } else if (formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = 'Hasła muszą być identyczne!';
      }
    }

    return validationErrors;
  };

  useEffect(() => {
    if (userData.isRegistered && formFieldEventData.current) {
      loginUser(formFieldEventData.current, linksData?.LOGIN);
      getAdvancedLinks(linksData?.ADVANCED_LINKS);
    }
  }, [getAdvancedLinks, linksData?.ADVANCED_LINKS, linksData?.LOGIN, loginUser, userData.isRegistered]);

  return (
    <LoginWrapper>
      <Loader isLoading={loading} />
      <LoginTitle>
        Witaj w <GreenTextWrapper>CZAT</GreenTextWrapper>!
      </LoginTitle>
      <LoginDescription>{isLoginView ? 'Zaloguj się, aby uzyskać dostęp do rozmów.' : 'Zarejestruj się, aby rozpocząć rozmowy!'}</LoginDescription>
      <form onSubmit={isLoginView ? (e) => onLoginSubmit(e) : (e) => onRegisterSubmit(e)}>
        <UserInputWrapper hasError={!!formErrors.username}>
          <DarkIconStyleWrapper>
            <PersonFill size="18" />
          </DarkIconStyleWrapper>
          <UserInput
            type="text"
            name="username"
            autoComplete="username"
            placeholder="Adres e-mail"
            value={formData.username}
            onChange={(e) => onValueChangedHandler(e)}
          />
        </UserInputWrapper>
        <ErrorText>{formErrors.username}</ErrorText>
        <UserInputWrapper hasError={!!formErrors.password}>
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
        <ErrorText>{formErrors.password}</ErrorText>
        {isLoginView ? (
          ''
        ) : (
          <>
            <UserInputWrapper hasError={!!formErrors.confirmPassword}>
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
              <DarkEyeStyleWrapper
                onClick={() => setPasswordConfirmShown(!passwordConfirmShown)}
                title={passwordShown ? 'Ukryj hasło' : 'Pokaż hasło'}
              >
                <EyeOutline size="24" />
              </DarkEyeStyleWrapper>
            </UserInputWrapper>
            <ErrorText>{formErrors.confirmPassword}</ErrorText>
          </>
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
