import { handleActions } from "redux-actions";
import { FETCH_ACTIVITY_DATA } from "../constants/actionTypes";

const initialState = {
    activity: [],
    loading: false
};
const dataReducer = handleActions(
    {
        FETCH_ACTIVITY_DATA: (state, { payload }) => {
            console.log(payload);
            return { ...state, activity: payload };
        }
    },
    initialState
);

export default dataReducer;
