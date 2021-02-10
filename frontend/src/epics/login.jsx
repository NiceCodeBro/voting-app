import {LoginActions} from '../actions/loginActions'
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {from} from 'rxjs';
import axios from 'axios';

const feedServiceHost = 'http://localhost:8080/api/v0/users/auth/';


const login = action$ => action$.pipe(
  ofType(LoginActions.LOGIN),
  mergeMap(action =>
    from(axios.post(`${feedServiceHost}/login`, {
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
    from(axios.post(`${feedServiceHost}/`, {
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