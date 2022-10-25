import { combineReducers } from 'redux';
import userSessionReducer from './userSessionReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  userSession: userSessionReducer,
  users: usersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
