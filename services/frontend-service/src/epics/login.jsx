import { LoginActions } from '../actions/loginActions'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import axios from 'axios';


function getHost() {
  if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'http://localhost:8080/api/v0/users/auth/';
  } else {
    return `${window.location.protocol}//${window.location.hostname}/api/v0/users/auth`;
  }
}

const login = action$ => action$.pipe(
  ofType(LoginActions.LOGIN),
  mergeMap(action =>
    from(axios.post(`${getHost()}/login`, {
      email: action.payload.email,
      password: action.payload.password
    }))
    .pipe(
      map(response => LoginActions.login_successful(response.data)),
      catchError(error => LoginActions.login_successful(error))
    )
  )
);

const register = action$ => action$.pipe(
  ofType(LoginActions.REGISTER),
  mergeMap(action =>
    from(axios.post(`${getHost()}/`, {
      email: action.payload.email,
      password: action.payload.password
    }))
    .pipe(
      map(response => LoginActions.registerSuccessful(response.data)),
      catchError(error => LoginActions.registerFailed(error))
    )
  )
);


export const loginEpics = [
  login,
  register
]