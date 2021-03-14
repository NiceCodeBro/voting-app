import { FeedActions } from '../actions/feedActions'
import { SendState } from '../enums/sendstate';

const initialState = {
    feeds: [],
    myFeeds: [],
    feed: {},
    getFeedsState: SendState.UNKNOWN,
    getFeedState: SendState.UNKNOWN,
    addFeedState: SendState.UNKNOWN,
    getMyFeedsState: SendState.UNKNOWN,
    deleteFeedState: SendState.UNKNOWN,
    updateFeedState: SendState.UNKNOWN
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
      case FeedActions.GET_FEED: {
        return {
            ...state,
            getFeedState: SendState.PENDING
        };
      }
      case FeedActions.GET_FEED_SUCCESSFUL: {
        return {
            ...state,
            getFeedState: SendState.SUCCESS,
            feed: action.payload.data.Item
        };
      }
      case FeedActions.GET_FEED_FAILED: {
        return {
            ...state,
            getFeedState: SendState.FAILED
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
      case FeedActions.UPDATE_FEED: {
        return {
            ...state,
            updateFeedState: SendState.PENDING
        };
      }
      case FeedActions.UPDATE_FEED_SUCCESSFUL: {
        return {
            ...state,
            updateFeedState: SendState.SUCCESS
        };
      }
      case FeedActions.UPDATE_FEED_FAILED: {
        return {
            ...state,
            updateFeedState: SendState.FAILED
        };
      }
      case FeedActions.DELETE_FEED: {
        return {
            ...state,
            deleteFeedState: SendState.PENDING
        };
      }
      case FeedActions.DELETE_FEED_SUCCESSFUL: {
        return {
            ...state,
            deleteFeedState: SendState.SUCCESS,
            myFeeds: state.myFeeds.filter((feed) => feed.id !== action.payload.data),
            feeds: state.myFeeds.filter((feed) => feed.id !== action.payload.data)
        };
      }
      case FeedActions.DELETE_FEED_FAILED: {
        return {
            ...state,
            deleteFeedState: SendState.FAILED
        };
      }
      case FeedActions.GET_FEED_FROM_MY_FEED_REDUCER: {
        return {
          ...state,
          myFeedToEdit: state.myFeeds.find((f) => f.id === action.payload)
        };
      }
      default:
        return state;
    }
  };