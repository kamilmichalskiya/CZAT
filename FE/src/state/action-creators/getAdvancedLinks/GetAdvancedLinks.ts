// import axios from 'axios'; TODO
import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { AdvancedLinksAction } from '../../actions';

export const getAdvancedLinks = (url?: string) => {
  return async (dispatch: Dispatch<AdvancedLinksAction>) => {
    dispatch({
      type: ActionType.GET_ADVANCED_LINKS,
    });

    if (!url || typeof url !== 'string') {
      dispatch({
        type: ActionType.GET_ADVANCED_LINKS_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: GET_ADVANCED_LINKS - LINK)',
      });
      return;
    }
    if (!process.env.REACT_APP_CZAT_API_MAIN_LINK) {
      dispatch({
        type: ActionType.GET_ADVANCED_LINKS_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: GET_ADVANCED_LINKS - ENV)',
      });
      return;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        dispatch({
          type: ActionType.GET_ADVANCED_LINKS_ERROR,
          payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: GET_ADVANCED_LINKS_STATUS)',
        });
        return;
      }
      const data = await response.json();
      dispatch({
        type: ActionType.GET_ADVANCED_LINKS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.GET_ADVANCED_LINKS_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: GET_ADVANCED_LINKS)',
      });
    }
  };
};
