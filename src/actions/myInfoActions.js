import { createAction } from 'redux-actions';
import { user, token, fetchObject } from './fetchModule'
import {
    GET_MY_INFO_ACTIVITY_DATA,
    GET_ALL_HOST_ACTIVITY_DATA,
    UPDATE_ACTIVITY_STATUS
} from '../constants/actionTypes';


export const getMyInfoActivityData = createAction(GET_MY_INFO_ACTIVITY_DATA);
export const getAllHostActivityData = createAction(GET_ALL_HOST_ACTIVITY_DATA);
export const updateActivityStatus = createAction(UPDATE_ACTIVITY_STATUS);

export const fetchAllHostActivityData = () => {
    console.log('fetchAllHostActivityData....')
    return (dispatch, getState) => {
        //let { user, token } = getState()
        fetchObject("activity/list", `user=${user}`) 
        .then(function (response) { 
            return response.json() 
        }) 
        .then(function (json) { 
          console.log('parsed json', json) 
          let {total, data} = json
          if (total > 0) {
            return dispatch(fetchMyInfoActivityData(json.data[0].id));
          }
            dispatch(getAllHostActivityData({total, data}));
        })   
        .catch(function (ex) { 
            console.log('parsing failed', ex) 
        }) 
        
    }
}
export const fetchMyInfoActivityData = (id) => {
    console.log('fetchMyInfoActivityData....')
    return (dispatch, getState) => {
        //let { user, token } = getState()
        fetchObject(`activity/${id}`) 
        .then(function (response) { 
            return response.json() 
        }) 
        .then(function (json) { 
          console.log('parsed json', json) 
          let data = json
            dispatch(getMyInfoActivityData(data));
        }) 
        .catch(function (ex) { 
            console.log('parsing failed', ex) 
        }) 
        
    }
}

export const fetchUpdateActivityData = (id = 0, hash = {}) => {
    console.log('fetchUpdateActivityData....')
    return (dispatch, getState) => {
        //let { user, token } = getState()
        fetchObject(`activity/${id}`, "", {method: 'PUT', body: JSON.stringify(hash)}) 
        .then(function (response) { 
            return response.json() 
        }) 
        .then(function (json) { 
          console.log('parsed json', json) 
            dispatch(getMyInfoActivityData(id));
        }) 
        .catch(function (ex) { 
            console.log('parsing failed', ex) 
        }) 
        
    }
}

