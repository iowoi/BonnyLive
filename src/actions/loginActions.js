import { createAction } from 'redux-actions';
import WebAPI from '../utils/WebAPI';

import {
  LOGIN_START,
  LOGIN_COMPLETE,
  LOGIN_ERROR,
  START_LOGOUT,
  CHECK_LOGIN,
  SET_USER
} from '../constants/actionTypes';

export const loginStart = createAction('LOGIN_START', WebAPI.login);
export const loginComplete = createAction('LOGIN_COMPLETE');
export const loginError = createAction('LOGIN_ERROR');
export const startLogout = createAction('START_LOGOUT', WebAPI.logout);
export const checkLogin = createAction('CHECK_LOGIN');
export const setUser = createAction('SET_USER');