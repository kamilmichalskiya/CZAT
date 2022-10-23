import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { LoginAction, UsersAction } from '../actions';

export const loginUser = (credentials: Object) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    dispatch({
      type: ActionType.LOGIN_USER,
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: credentials,
        },
      });

      dispatch({
        type: ActionType.LOGIN_USER_SUCCESS,
        payload: data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.LOGIN_USER_ERROR,
          payload: err.message,
        });
      }
    }
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
