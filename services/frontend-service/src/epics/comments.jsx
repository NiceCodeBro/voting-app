import { CommentActions } from '../actions/commentActions'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {from} from 'rxjs';
import axios from 'axios';


function getHost() {
  if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'http://localhost:8081/api/v0/comment';
  } else {
    return `${window.location.protocol}//${window.location.hostname}/api/v0/comment`;
  }
}


const getComments = action$ => action$.pipe(
  ofType(CommentActions.GET_COMMENT),
  mergeMap(action =>
    from(axios.get(`${getHost()}/${action.payload}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }))
    .pipe(
      map(response => CommentActions.getCommentsSuccessful(response)),
      catchError(error => CommentActions.getCommentsFailed(error))
    )
  )
);

export const commentEpics = [
    getComments
]