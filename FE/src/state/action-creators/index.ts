import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { LoginAction, RegisterAction, UsersAction } from '../actions';

export const loginUser = (credentials: any) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    dispatch({
      type: ActionType.LOGIN_USER,
    });

    const requestOptions = {
      method: 'POST',
      body: credentials,
    };
    const response = await fetch('api/login', requestOptions);
    if (response.status === 403 || response.status !== 301) {
      dispatch({
        type: ActionType.LOGIN_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie.',
      });
      return;
    }
    dispatch({
      type: ActionType.LOGIN_USER_SUCCESS,
      payload: { login: credentials.login, password: credentials.password, loggedIn: true },
    });
  };
};

export const registerUser = (credentials: any) => {
  return async (dispatch: Dispatch<RegisterAction>) => {
    dispatch({
      type: ActionType.REGISTER_USER,
    });

    const requestOptions = {
      method: 'POST',
      body: credentials,
    };
    const response = await fetch('api/register', requestOptions);
    if (response.status !== 301) {
      dispatch({
        type: ActionType.REGISTER_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie.',
      });
      return;
    }
    // TODO check location override after BE integration
    // window.location.href = response.url;
    dispatch({
      type: ActionType.REGISTER_USER_SUCCESS,
      payload: { login: credentials.login, password: credentials.password, loggedIn: true },
    });
  };
};

export const searchUsers = (term: string) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch({
      type: ActionType.SEARCH_USERS,
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term,
        },
      });

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_USERS_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_USERS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
