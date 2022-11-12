// import axios from 'axios'; TODO
import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { LogoutAction } from '../../actions';

export const loginUser = (url?: string) => {
  return async (dispatch: Dispatch<LogoutAction>) => {
    dispatch({
      type: ActionType.LOGOUT_USER,
    });
    if (typeof url !== 'string') {
      dispatch({
        type: ActionType.LOGOUT_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (CODE: LOGOUT_WRONG_LINK)',
      });
      return;
    }

    const response = await fetch(url);
    if (response.status === 403 || response.status !== 301) {
      dispatch({
        type: ActionType.LOGOUT_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (CODE: LOGIN_STATUS)',
      });
      return;
    }
    dispatch({
      type: ActionType.LOGOUT_USER_SUCCESS,
      payload: { loggedIn: false },
    });
  };
};
