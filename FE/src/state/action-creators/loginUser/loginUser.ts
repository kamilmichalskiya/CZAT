// import axios from 'axios'; TODO
import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { LoginAction } from '../../actions';

export const loginUser = (credentials: FormData, url: string | undefined) => {
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
      body: new URLSearchParams(credentials as URLSearchParams),
    };
    const response = await fetch(url, requestOptions);
    if (response.status === 403 || (response.status !== 200 && response.status !== 301)) {
      dispatch({
        type: ActionType.LOGIN_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (CODE: LOGIN_STATUS)',
      });
      return;
    }
    dispatch({
      type: ActionType.LOGIN_USER_SUCCESS,
      payload: {
        username: credentials.get('username') as string,
        password: credentials.get('password') as string,
        isRegistered: true,
        isLoggedIn: true,
      },
    });
  };
};
