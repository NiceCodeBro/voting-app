import { combineReducers } from 'redux';
import { counterReducer } from './counter'
import { voteReducer } from './vote'

export const rootReducer = combineReducers({
    counterReducer,
    voteReducer
  });