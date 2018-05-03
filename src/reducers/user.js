import {
  REGISTER,
  REGISTER_USER,
  GET_USER
} from '../constants/actionTypes';

const initialState = {
  user: {}
}

 export default function reducer(state = initialState, action) {
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
      case GET_USER:
        console.log(GET_USER, action)
        return { ...state, user: action.payload.data, fromObjID: action.payload.fromObjID}
      default:
      return state   
    }
  };
