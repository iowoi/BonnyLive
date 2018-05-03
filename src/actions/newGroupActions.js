import { createAction } from 'redux-actions';
import {
    CREATE_GROUP,
    GET_LEVELS
} from '../constants/actionTypes';

const API_URL = "http://bonnylive.biz:1337/api/v1";
var _Token =
    "eyJhbGdvcml0aG0iOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJ1c2VyIjo0NywibmFtZSI6Im1hcnRpbmEiLCJ2YWxpZCI6MTUyNDkwOTMyNDIxNH0.M6mqUFPNQwqHSUrDTXk_vLY5SPJ4ZPO0xN0HkMiQTr0";
const header = {
    headers: new Headers({
        token: _Token
    })
};

export const getLevelsData = createAction("GET_LEVELS");
export const createGroupData = createAction("GET_LEVELS");

const queryString = params =>
    Object.keys(params)
        .map(key => key + "=" + params[key])
        .join("&");

export const createGroup = (data) => {
    return (dispatch) => {
        fetch(`${API_URL}/activity`, {
            headers: header,
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                dispatch(createGroupData(json.data));
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}

export const getLevels = () => {
    return (dispatch, getState) => {
        fetch(`${API_URL}/level/list`, {header: header})
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(getLevelsData(json.data));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
};