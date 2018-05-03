import { combineReducers } from "redux";
import activity from "./activityReducer";
import myInfo from "./myInfo";
import NewGroup from "./NewGroup";
import groupDetailReducer from "./groupDetailReducer";
import comment from './comment';
import user from './user';

export default combineReducers({
    activity: activity,
    myInfoReducer: myInfo,
    newGorupReducer: NewGroup,
    groupDetailReducer: groupDetailReducer,
    commentReducer: comment,
  userReducer: user
});
