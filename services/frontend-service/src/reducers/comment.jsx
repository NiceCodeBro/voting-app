import { CommentActions } from '../actions/commentActions'
import { SendState } from '../enums/sendstate';

const initialState = {
    comments: [],
    getCommentsState: SendState.UNKNOWN,
    addCommentState: SendState.UNKNOWN
};

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case CommentActions.GET_COMMENT: {
        return {
            ...state,
            getCommentsState: SendState.PENDING
        };
      }
      case CommentActions.GET_COMMENT_SUCCESSFUL: {
        return {
            ...state,
            comments: action.payload.data,
            getCommentsState: SendState.SUCCESS
        };
      }
      case CommentActions.GET_COMMENT_FAILED: {
        return {
            ...state,
            getCommentsState: SendState.FAILED
        };
      }
      case CommentActions.ADD_COMMENT: {
        return {
            ...state,
            addCommentState: SendState.PENDING
        };
      }
      case CommentActions.ADD_COMMENT_SUCCESSFUL: {
        return {
            ...state,
            comments: state.comments.concat(action.payload.data),
            addCommentState: SendState.SUCCESS
        };
      }
      case CommentActions.ADD_COMMENT_FAILED: {
        return {
            ...state,
            addCommentState: SendState.FAILED
        };
      }
      default:
        return state;
    }
  };