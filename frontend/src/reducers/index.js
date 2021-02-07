import { combineReducers } from 'redux';
import { counterReducer } from './counter'
import { voteReducer } from './vote'
import { loginReducer } from './login'

export const rootReducer = combineReducers({
    counterReducer,
    voteReducer,
    loginReducer
  });