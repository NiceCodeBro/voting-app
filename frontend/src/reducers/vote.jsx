import {ADD_COMMENT} from '../actions/voteActions'

const initialState = {
    comments: []
};

export const voteReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_COMMENT: {
        return {
            ...state,
            comments: state.comments.concat(action.payload)
        };
      }
      default:
        return state;
    }
  };