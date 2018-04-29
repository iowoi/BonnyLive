// @flow

import {REGISTER,REGISTER_USER} from '../constants/actionTypes';
//匯入Props靜態類型的定義
import type { RegisterProp } from '../definitions/TodoTypeDefinition.js';
  



 export default function RegisterPost(state: Array<RegisterProp> = [], action) {
  switch (action.type) {
      case REGISTER:
      console.log("A",action);
        return Object.assign({}, state, {
          value: state + action.payload
      })
      case REGISTER_USER:
      console.log("B",action);
        return Object.assign({}, state, {
          value: state + action.payload
      });
      default:
      return state   
    }
  };
