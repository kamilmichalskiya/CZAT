// import axios from 'axios'; TODO
import { Dispatch } from 'redux';
import { ActionType } from '../../action-types';
import { ChatsAction } from '../../actions';

export const getAllChats = (url?: string) => {
  return async (dispatch: Dispatch<ChatsAction>) => {
    dispatch({
      type: ActionType.GET_ALL_CHATS,
    });

    if (!url || typeof url !== 'string') {
      dispatch({
        type: ActionType.GET_ALL_CHATS_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: GET_ALL_CHATS - LINK)',
      });
      return;
    }
    if (!process.env.REACT_APP_CZAT_API_MAIN_LINK) {
      dispatch({
        type: ActionType.GET_ALL_CHATS_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: GET_ALL_CHATS - ENV)',
      });
      return;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        dispatch({
          type: ActionType.GET_ALL_CHATS_ERROR,
          payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: GET_ALL_CHATS_LINKS)',
        });
        return;
      }
      const data = await response.json();
      dispatch({
        type: ActionType.GET_ALL_CHATS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.GET_ALL_CHATS_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie. (Code: GET_ALL_CHATS_LINKS)',
      });
    }
  };
};
