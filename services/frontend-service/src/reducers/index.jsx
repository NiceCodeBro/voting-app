import { combineReducers } from 'redux';

import { commentReducer } from './comment';
import { feedReducer } from './feed';
import { loginReducer } from './login';

export const rootReducer = combineReducers({
    commentReducer,  
    feedReducer,
    loginReducer
  });