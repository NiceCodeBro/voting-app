import { LoginActions } from '../actions/loginActions'
import { SendState } from '../enums/sendstate';

const initialState = {
  loginState: SendState.UNKNOWN,
  registerState: SendState.UNKNOWN,
  userCredentials: undefined
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LoginActions.LOGIN: {
        return {
            ...state,
            loginState: SendState.PENDING,
            userCredentials: undefined
        };
      }
      case LoginActions.LOGIN_SUCCESS: {
        return {
            ...state,
            loginState: SendState.SUCCESS,
            userCredentials: action.payload
        };
      }
      case LoginActions.LOGIN_FAILED: {
        return {
            ...state,
            loginState: SendState.FAILED,
            userCredentials: undefined
        };
      }
      case LoginActions.LOGOUT: {
        return {
            ...state,
            userCredentials: undefined
        };
      }
      case LoginActions.REGISTER: {
        return {
            ...state,
            registerState: SendState.PENDING
        };
      }
      case LoginActions.REGISTER_SUCCESS: {
        return {
            ...state,
            registerState: SendState.SUCCESS,
            userCredentials: action.payload
        };
      }
      case LoginActions.REGISTER_FAILED: {
        return {
            ...state,
            registerState: SendState.FAILED,
        };
      }
      default:
        return state;
    }
  };