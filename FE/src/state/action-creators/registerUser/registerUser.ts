// import axios from 'axios'; TODO
import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { RegisterAction } from '../../actions';

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
    dispatch({
      type: ActionType.REGISTER_USER_SUCCESS,
      payload: { login: credentials.login, password: credentials.password, loggedIn: true },
    });
  };
};
