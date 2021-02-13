import { FeedActions } from '../actions/feedActions'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {from} from 'rxjs';
import axios from 'axios';

const feedServiceHost = 'http://localhost:8081/api/v0/feed';

const getFeeds = action$ => action$.pipe(
  ofType(FeedActions.GET_FEEDS),
  mergeMap(action =>
    from(axios.get(`${feedServiceHost}/`))
    .pipe(
      map(response => FeedActions.getFeedsSuccessful(response)),
      catchError(error => FeedActions.getFeedsFailed(error))
    )
  )
);


const getMyFeeds = action$ => action$.pipe(
  ofType(FeedActions.GET_MY_FEEDS),
  mergeMap(action =>
    from(axios.get(`${feedServiceHost}/${action.payload.email}`, {
      headers: {
        'Authorization': `Barrier ${action.payload.token}` 
      }
    }))
    .pipe(
      map(response => FeedActions.getMyFeedsSuccessful(response)),
      catchError(error => FeedActions.getMyFeedsFailed(error))
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
    getFeeds,
    getMyFeeds,
    addFeed
]