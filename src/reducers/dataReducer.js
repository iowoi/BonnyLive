import { handleActions } from "redux-actions";
import { FETCH_ACTIVITY_DATA, GET_BANNER_LIST, UPDATE_SEARCH_QUERY } from "../constants/actionTypes";

const initialState = {
    activity: [],
    loading: false
};
const dataReducer = handleActions(
    {
        FETCH_ACTIVITY_DATA: (state, { payload }) => {
            return { ...state, activity: payload };
        },
        GET_BANNER_LIST: (state, { payload }) => {
            return { ...state, banner: payload };
        },
        UPDATE_SEARCH_QUERY: (state, { payload }) => {
            console.log('UPDATE_SEARCH_QUERY')
            return { ...state, query: payload };
        }
    },
    initialState
);

export default dataReducer;
