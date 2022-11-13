// import axios from 'axios'; TODO
import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { RegisterAction } from '../../actions';

interface registerCredencials {
  username: string;
  password: string;
}

export const registerUser = (credentials: registerCredencials, url?: string) => {
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
    if (response.status !== 301 && response.status !== 200) {
      dispatch({
        type: ActionType.REGISTER_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: REGISTER_WRONG_STATUS)',
      });
      return;
    }
    dispatch({
      type: ActionType.REGISTER_USER_SUCCESS,
      payload: { username: credentials.username, password: credentials.password, isRegistered: true, isLoggedIn: false },
    });
  };
};
