import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import usersReducer from './chatsReducer/chatsReducer';
import linksReducer from './linksReducer/linksReducer';

const reducers = combineReducers({
  links: linksReducer,
  user: userReducer,
  chats: usersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
