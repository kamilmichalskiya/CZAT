// import axios from 'axios'; TODO
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { LinksAction, LoginAction, RegisterAction } from '../actions';

export const getLinks = () => {
  return async (dispatch: Dispatch<LinksAction>) => {
    dispatch({
      type: ActionType.GET_LINKS,
    });

    const requestOptions = {
      method: 'GET',
    };
    if (!process.env.REACT_APP_CZAT_API_MAIN_LINK) {
      dispatch({
        type: ActionType.GET_LINKS_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: GET_LINKS - ENV)',
      });
      return;
    }
    const { protocol } = window.location;
    const response = await fetch(`${protocol}//${process.env.REACT_APP_CZAT_API_MAIN_LINK}`, requestOptions);
    if (!response.ok) {
      dispatch({
        type: ActionType.GET_LINKS_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: GET_LINKS)',
      });
      return;
    }
    const data = await response.json();
    dispatch({
      type: ActionType.GET_LINKS_SUCCESS,
      payload: data,
    });
  };
};

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
    dispatch({
      type: ActionType.REGISTER_USER_SUCCESS,
      payload: { login: credentials.login, password: credentials.password, loggedIn: true },
    });
  };
};

// export const searchUsers = (term: string) => {
//   return async (dispatch: Dispatch<UsersAction>) => {
//     dispatch({
//       type: ActionType.SEARCH_USERS,
//     });

//     try {
//       const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
//         params: {
//           text: term,
//         },
//       });

//       const names = data.objects.map((result: any) => {
//         return result.package.name;
//       });

//       dispatch({
//         type: ActionType.SEARCH_USERS_SUCCESS,
//         payload: names,
//       });
//     } catch (err) {
//       if (err instanceof Error) {
//         dispatch({
//           type: ActionType.SEARCH_USERS_ERROR,
//           payload: err.message,
//         });
//       }
//     }
//   };
// };
