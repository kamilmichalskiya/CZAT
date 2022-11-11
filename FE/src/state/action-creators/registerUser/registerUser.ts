// import axios from 'axios'; TODO
import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { RegisterAction } from '../../actions';

export const registerUser = (credentials: any, url: string | undefined) => {
  return async (dispatch: Dispatch<RegisterAction>) => {
    dispatch({
      type: ActionType.REGISTER_USER,
    });
    if (typeof url !== 'string') {
      dispatch({
        type: ActionType.REGISTER_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (CODE: REGISTER_WRONG_LINK)',
      });
      return;
    }

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: new Headers({ 'content-type': 'application/json' }),
    };
    const response = await fetch(url, requestOptions);
    if (response.status !== 301) {
      dispatch({
        type: ActionType.REGISTER_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie.',
      });
      return;
    }
    dispatch({
      type: ActionType.REGISTER_USER_SUCCESS,
      payload: { login: credentials.login, password: credentials.password, loggedIn: true },
    });
  };
};
