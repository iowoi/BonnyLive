import { createAction } from "redux-actions";
import { FETCH_ACTIVITY_DATA } from "../constants/actionTypes";

export const fetchActivityData = createAction("FETCH_ACTIVITY_DATA");

var _Token =
    "eyJhbGdvcml0aG0iOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJ1c2VyIjo0NywibmFtZSI6Im1hcnRpbmEiLCJ2YWxpZCI6MTUyNDkwOTMyNDIxNH0.M6mqUFPNQwqHSUrDTXk_vLY5SPJ4ZPO0xN0HkMiQTr0";
const Header = {
    headers: new Headers({
        token: _Token
    })
};
// var myRequest = new Request("flowers.jpg", myInit);

export const fetchActivity = () => {
    console.log("fetchActivity");
    return dispatch => {
        fetch("http://bonnylive.biz:1337/api/v1/activity/list", Header)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                dispatch(fetchActivityData(json.data));
                console.log("parsed json", json);
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
};
