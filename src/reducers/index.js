import { combineReducers } from "redux";
import bucketReducer from "../reducers/bucketReducer";
const rootReducers = combineReducers({
   buckets: bucketReducer
});

export default rootReducers;