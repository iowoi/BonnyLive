import { createAction } from 'redux-actions';
import {
    GET_GROUP_DETAIL,
} from '../constants/actionTypes';

const API_URL = "http://bonnylive.biz:1337/api/v1";
var _Token =
    "eyJhbGdvcml0aG0iOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJ1c2VyIjo0NywibmFtZSI6Im1hcnRpbmEiLCJ2YWxpZCI6MTUyNDkwOTMyNDIxNH0.M6mqUFPNQwqHSUrDTXk_vLY5SPJ4ZPO0xN0HkMiQTr0";
const header = {
    headers: new Headers({
        token: _Token
    })
};

export const getGroupDetailData = createAction("GET_GROUP_DETAIL");

const queryString = params =>
    Object.keys(params)
        .map(key => key + "=" + params[key])
        .join("&");

export const getGroupDetail = (data) => {
    return (dispatch) => {
        fetch(`${API_URL}/activity/13`, header)
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                dispatch(getGroupDetailData(json));
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}
