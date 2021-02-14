import { combineEpics } from 'redux-observable';
import { loginEpics } from './login';
import { feedEpics } from './feed';

export const rootEpic = combineEpics(
    ...loginEpics,
    ...feedEpics
  );