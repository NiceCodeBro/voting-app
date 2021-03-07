import { combineEpics } from 'redux-observable';
import { commentEpics } from './comments';
import { loginEpics } from './login';
import { feedEpics } from './feed';

export const rootEpic = combineEpics(
    ...commentEpics,
    ...loginEpics,
    ...feedEpics
  );