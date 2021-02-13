import { FeedActions } from '../actions/feedActions'
import { SendState } from '../enums/sendstate';

const initialState = {
    comments: [],
    feeds: [],
    myFeeds: [],
    getFeedsState: SendState.UNKNOWN,
    addFeedState: SendState.UNKNOWN,
    getMyFeedsState: SendState.UNKNOWN
};

export const feedReducer = (state = initialState, action) => {
    switch (action.type) {
      case FeedActions.GET_FEEDS: {
        return {
            ...state,
            getFeedsState: SendState.PENDING
        };
      }
      case FeedActions.GET_FEEDS_SUCCESSFUL: {
        return {
            ...state,
            feeds: action.payload.data,
            getFeedsState: SendState.SUCCESS
        };
      }
      case FeedActions.GET_FEEDS_FAILED: {
        return {
            ...state,
            getFeedsState: SendState.FAILED
        };
      }
      case FeedActions.GET_MY_FEEDS: {
        return {
            ...state,
            getMyFeedsState: SendState.PENDING,
            myFeeds: []
        };
      }
      case FeedActions.GET_MY_FEEDS_SUCCESSFUL: {
        return {
            ...state,
            getMyFeedsState: SendState.SUCCESS,
            myFeeds: action.payload.data
        };
      }
      case FeedActions.GET_MY_FEEDS_FAILED: {
        return {
            ...state,
            getMyFeedsState: SendState.FAILED,
            myFeeds: []
        };
      }
      case FeedActions.ADD_FEED: {
        return {
            ...state,
            addFeedState: SendState.PENDING
        };
      }
      case FeedActions.ADD_FEED_SUCCESSFUL: {
        return {
            ...state,
            addFeedState: SendState.SUCCESS,
            feeds: state.feeds.concat(action.payload.data)
        };
      }
      case FeedActions.ADD_FEED_FAILED: {
        return {
            ...state,
            addFeedState: SendState.FAILED
        };
      }
      default:
        return state;
    }
  };