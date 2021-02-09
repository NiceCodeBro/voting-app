import { FeedActions } from '../actions/feedActions'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {from} from 'rxjs';
import axios from 'axios';

const feedServiceHost = 'http://localhost:8081/api/v0/feed';

const getAllFeeds = action$ => action$.pipe(
  ofType(FeedActions.GET_ALL_FEEDS),
  mergeMap(action =>
    from(axios.get(`${feedServiceHost}/`))
    .pipe(
      map(response => FeedActions.getAllFeedsSuccessful(response)),
      catchError(error => FeedActions.getAllFeedsFailed(error))
    )
  )
);

const addFeed = action$ => action$.pipe(
  ofType(FeedActions.ADD_FEED),
  mergeMap(action =>
    from(axios.post(`${feedServiceHost}/`, {
      item: action.payload.item
    }, {
      headers: {
        'Authorization': `Barrier ${action.payload.token}` 
      }
    }))
    .pipe(
      map(response => FeedActions.addFeedSuccessful(response)),
      catchError(error => FeedActions.addFeedFailed(error))
    )
  )
);

export const feedEpics = [
    getAllFeeds,
    addFeed
]