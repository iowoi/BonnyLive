import { createAction } from "redux-actions";
import {
    FETCH_ACTIVITY_DATA,
    GET_BANNER_LIST,
    UPDATE_SEARCH_QUERY
} from "../constants/actionTypes";

export const fetchActivityData = createAction("FETCH_ACTIVITY_DATA");
export const getBannerListData = createAction("GET_BANNER_LIST");
export const updateSearchQuery = createAction("UPDATE_SEARCH_QUERY");

const API_URL = "http://bonnylive.biz:1337/api/v1";
var _Token =
    "eyJhbGdvcml0aG0iOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJ1c2VyIjo0NywibmFtZSI6Im1hcnRpbmEiLCJ2YWxpZCI6MTUyNDkwOTMyNDIxNH0.M6mqUFPNQwqHSUrDTXk_vLY5SPJ4ZPO0xN0HkMiQTr0";
const header = {
    headers: new Headers({
        token: _Token
    })
};
// var myRequest = new Request("flowers.jpg", myInit);
const queryString = params =>
    Object.keys(params)
        .map(key => key + "=" + params[key])
        .join("&");

export const fetchActivity = () => {
    return (dispatch, getState) => {
        const query = queryString(getState().activity.query);
        fetch(`${API_URL}/activity/list?${query}`, header)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(fetchActivityData(json.data));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
};

export const getBannerList = () => {
    return dispatch => {
        fetch(`${API_URL}/landingbanner/list`, header)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(getBannerListData(json.data));
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
};

export const updateSearch = data => {
    return (dispatch, getState) => {
        const query = getState().activity.query;
        const result = Object.assign(query, data);
        dispatch(updateSearchQuery(result));
    };
};
