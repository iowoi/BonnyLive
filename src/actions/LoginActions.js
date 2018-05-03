import { createAction } from "redux-actions";
import { hashHistory  } from 'react-router';  //引入路由函数

import {
    LOGIN,
} from "../constants/actionTypes";

export const userlogin = createAction("LOGIN");


const API_URL = "http://bonnylive.biz:1337/api/v1";

// const Body = {
//   email: 'max12345@gmail.com',
//   password:'1234'
//   };
  

export const fetchlogin = (Body) => {
    return (dispatch, getState) => {
        fetch(`${API_URL}/user/login`, {
            method: 'post',
            body: JSON.stringify(Body)
          })
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(userlogin(json.data));
                // setter
                localStorage.setItem('myData', JSON.stringify(json));
                console.log(json.data);
                alert(json.id);
                window.location.href= "NewGroup";
            })
            .catch(function(ex) {
                alert("Wrong");
                console.log("login failed", ex);
            });
    };
};
