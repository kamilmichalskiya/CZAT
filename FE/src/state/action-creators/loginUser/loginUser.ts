// import axios from 'axios'; TODO
import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { LoginAction } from '../../actions';

export const loginUser = (credentials: any, url: string | undefined) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    dispatch({
      type: ActionType.LOGIN_USER,
    });
    if (typeof url !== 'string') {
      dispatch({
        type: ActionType.LOGIN_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (CODE: LOGIN_WRONG_LINK)',
      });
      return;
    }

    const requestOptions = {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify(credentials),
      headers: new Headers({ 'content-type': 'application/json' }),
    };
    const response = await fetch(url, requestOptions);
    if (response.status === 403 || response.status !== 301) {
      dispatch({
        type: ActionType.LOGIN_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (CODE: LOGIN_STATUS)',
      });
      return;
    }
    dispatch({
      type: ActionType.LOGIN_USER_SUCCESS,
      payload: { login: credentials.login, password: credentials.password, loggedIn: true },
    });
  };
};
