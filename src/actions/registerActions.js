import { createAction } from 'redux-actions';
import { user, token, fetchObject } from './fetchModule'
import fetch from 'isomorphic-fetch';
import {
  REGISTER,
  REGISTER_USER,
  GET_USER
} from '../constants/actionTypes';

//匯入Props靜態類型的定義
import type { RegisterProp } from '../definitions/TypeDefinition.js';


export const register = createAction('REGISTER');
export const getUser = createAction('GET_USER');

export const FecthRegister = () => {

  const payload = {
    name: "max",
    email: "Max010@gmail.com",
    password: "1234",
    country_code: "886",
    phone: "0934123456",
    badminton_level: 1,
    occupation: "pm",
    hobby: [2, 3, 4],
  };
  console.log(payload);
  //作Register POST
  fetch(`http://bonnylive.biz:1337/api/v1/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
      })
  .then((response) => {
    //ok 代表狀態碼在範圍 200-299
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
    alert('FecthRegisterQQQ')
  })      .then(function (json) { 
    // dispatch(register(json));
    alert('FecthRegisterQQ')
    console.log('parsed json', json) 
  }) 
  .catch((error) => {
    //這裡可以顯示一些訊息
    console.error(error)
  })

}

export const fetchUser = (id, fromObjID) => {
    console.log('fetchUser....')

    return (dispatch, getState) => {
      fetchObject(`user/${id}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          console.log('parsed json', json)
          dispatch(getUser({data: json, fromObjID}))
        })
        .catch(function (ex) { 
            console.log('parsing failed', ex) 
        }) 
    }
}
