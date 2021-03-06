import { FeedActions } from '../actions/feedActions'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {from} from 'rxjs';
import axios from 'axios';


function getHost() {
  if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'http://localhost:8081/api/v0/feed';
  } else {
    return `${window.location.protocol}//${window.location.hostname}/api/v0/feed`;
  }
}


const getFeeds = action$ => action$.pipe(
  ofType(FeedActions.GET_FEEDS),
  mergeMap(action =>
    from(axios.get(`${getHost()}/`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }))
    .pipe(
      map(response => FeedActions.getFeedsSuccessful(response)),
      catchError(error => FeedActions.getFeedsFailed(error))
    )
  )
);

const getFeed = action$ => action$.pipe(
  ofType(FeedActions.GET_FEED),
  mergeMap(action =>
    from(axios.get(`${getHost()}/${action.payload.feedId}`, {
      headers: {
        'Authorization': `Barrier ${action.payload.token}` ,
        'Content-Type': 'application/json'
      }
    }))
    .pipe(
      map(response => FeedActions.getFeedSuccessful(response)),
      catchError(error => FeedActions.getFeedFailed(error))
    )
  )
);


const getMyFeeds = action$ => action$.pipe(
  ofType(FeedActions.GET_MY_FEEDS),
  mergeMap(action =>
    from(axios.get(`${getHost()}/belongTo/${action.payload.email}`, {
      headers: {
        'Authorization': `Barrier ${action.payload.token}` ,
        'Content-Type': 'text/plain'
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
    from(axios.post(`${getHost()}/`, {
      item: action.payload.item
    }, {
      headers: {
        'Authorization': `Barrier ${action.payload.token}`,
        'Content-Type': 'application/json'
      }
    }))
    .pipe(
      map(response => FeedActions.addFeedSuccessful(response)),
      catchError(error => FeedActions.addFeedFailed(error))
    )
  )
);

const updateFeed = action$ => action$.pipe(
  ofType(FeedActions.UPDATE_FEED),
  mergeMap(action =>
    from(axios.patch(`${getHost()}/${action.payload.feed.id}`, {
      item: action.payload.feed.item
    }, {
      headers: {
        'Authorization': `Barrier ${action.payload.token}`,
        'Content-Type': 'application/json'
      }
    }))
    .pipe(
      map(response => FeedActions.updateFeedSuccessful(response)),
      catchError(error => FeedActions.updateFeedFailed(error))
    )
  )
);


const deleteFeed = action$ => action$.pipe(
  ofType(FeedActions.DELETE_FEED),
  mergeMap(action =>
    from(axios.delete(`${getHost()}/${action.payload.feedId}`, {
      headers: {
        'Authorization': `Barrier ${action.payload.token}`,
        'Content-Type': 'application/json'
      }
    }))
    .pipe(
      map(response => FeedActions.deleteFeedSuccessful(response)),
      catchError(error => FeedActions.deleteFeedFailed(error))
    )
  )
);

export const feedEpics = [
    getFeeds,
    getFeed,
    getMyFeeds,
    addFeed,
    updateFeed,
    deleteFeed
]