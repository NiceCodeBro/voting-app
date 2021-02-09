import { FeedActions } from '../actions/feedActions'
import { SendState } from '../enums/sendstate';

const initialState = {
    comments: [],
    feeds: [],
    getAllFeedsState: SendState.UNKNOWN,
    addFeedState: SendState.UNKNOWN
};

export const feedReducer = (state = initialState, action) => {
    switch (action.type) {
      case FeedActions.GET_ALL_FEEDS: {
        return {
            ...state,
            getAllFeedsState: SendState.PENDING
        };
      }
      case FeedActions.GET_ALL_FEEDS_SUCCESSFUL: {
        return {
            ...state,
            feeds: action.payload.data,
            getAllFeedsState: SendState.SUCCESS
        };
      }
      case FeedActions.GET_ALL_FEEDS_FAILED: {
        return {
            ...state,
            getAllFeedsState: SendState.FAILED
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