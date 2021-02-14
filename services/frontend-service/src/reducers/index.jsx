import { combineReducers } from 'redux';
import { feedReducer } from './feed'
import { loginReducer } from './login'

export const rootReducer = combineReducers({
    feedReducer,
    loginReducer
  });