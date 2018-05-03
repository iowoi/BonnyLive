import { createAction } from 'redux-actions';
import { user, token, fetchObject } from './fetchModule'
import {
    GET_ALL_COMMENTS,
    POST_COMMENT
} from '../constants/actionTypes';

export const getAllComments = createAction('GET_ALL_COMMENTS');
export const postComment = createAction('POST_COMMENT');

export const fetchAllComments = (id = 0) => {
    console.log('fetchAllComments....')
    return (dispatch, getState) => {
        //let { user, token } = getState()
        fetchObject(`chatroom/${id}`) 
        .then(function (response) { 
            return response.json() 
        }) 
        .then(function (json) { 
          console.log('parsed json', json) 
          let data = json;           dispatch(getAllComments(data));
        }) 
        .catch(function (ex) { 
            console.log('parsing failed', ex) 
        }) 
        
    }
}

export const fetchPostComment = (id, type, message) => {
  console.log('fetchPostComment....')
    return (dispatch, getState) => {
      console.log(getState())
      let hash = {message, [type]: id}
      let chatroom_id = getState().commentReducer.chatroom_data.id;
        //let { user, token } = getState()
        fetchObject("reply", "", {method: 'POST', body: JSON.stringify(hash)}) 
        .then(function (response) { 
            return response.json() 
        }) 
        .then(function (json) { 
          console.log('parsed json', json) 
            dispatch(fetchAllComments(chatroom_id));
        }) 
        .catch(function (ex) { 
            dispatch(fetchAllComments(chatroom_id));
            console.log('parsing failed', ex) 
        }) 
        
    }
}

