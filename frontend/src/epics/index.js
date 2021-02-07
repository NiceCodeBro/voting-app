import { combineEpics } from 'redux-observable';
import { counterEpic } from './counter' 
import { loginEpics } from './login' 

export const rootEpic = combineEpics(
    counterEpic,
    ...loginEpics
  );
  