import { handleActions } from "redux-actions";
import {
	GET_GROUP_DETAIL,
} from "../constants/actionTypes";

const initialState = {
	information: {}
};

const groupDetailReducer = handleActions(
	{
		GET_GROUP_DETAIL: (state, { payload }) => {
			return { ...state, information: payload };
		},
	},
	initialState
);

export default groupDetailReducer;
