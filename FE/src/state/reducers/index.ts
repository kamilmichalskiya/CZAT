import { combineReducers } from 'redux';
import userReducer from './userReducer';
import usersReducer from './chatsReducer';
import linksReducer from './linksReducer';

const reducers = combineReducers({
  links: linksReducer,
  user: userReducer,
  chats: usersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
