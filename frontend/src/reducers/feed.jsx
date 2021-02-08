import { FeedActions } from '../actions/feedActions'
import { SendState } from '../enums/sendstate';

const initialState = {
    comments: [],
    feeds: [],
    getAllFeedsState: SendState.UNKNOWN
};

export const feedReducer = (state = initialState, action) => {
    switch (action.type) {
      case FeedActions.ADD_COMMENT: {
        return {
            ...state,
            comments: state.comments.concat(action.payload)
        };
      }
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
      default:
        return state;
    }
  };