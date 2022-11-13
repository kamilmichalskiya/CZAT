import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import usersReducer from './chatsReducer/chatsReducer';
import linksReducer from './linksReducer/linksReducer';
import advancedLinksReducer from './advancedLinksReducer/advancedLinksReducer';

const reducers = combineReducers({
  links: linksReducer,
  advancedLinks: advancedLinksReducer,
  user: userReducer,
  chats: usersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
