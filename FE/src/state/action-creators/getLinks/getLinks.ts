// import axios from 'axios'; TODO
import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { LinksAction } from '../../actions';

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
