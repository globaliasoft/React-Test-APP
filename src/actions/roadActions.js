import * as types from "./actionTypes";
import bucketApi from "../api/bucketApi";

const requestInit =  () => ({type: types.REQUEST_FETCH_INROAD});
const requestSuccess =  (payload) => ({type: types.REQUEST_FETCH_INROAD_SUCCESS, payload});
const requestFailer =  (error) => ({type: types.REQUEST_FETCH_INROAD_FAILER, error});

export function fetchRequest(dispatch) {
    return function(dispatch) {
        dispatch(requestInit);
        return bucketApi.fetchBuckets().then(response => {
            dispatch(requestSuccess(response));
        }).catch(error => {
            dispatch(requestFailer(error))
        })
    }
}