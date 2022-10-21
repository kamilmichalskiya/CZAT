import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  repositories: usersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
