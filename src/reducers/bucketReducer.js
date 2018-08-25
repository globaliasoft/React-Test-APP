import * as types from "../actions/actionTypes";

export default function(state = {data: [], isFetching:false}, action) {
    switch(action.type){
        case types.REQUEST_FETCH_INROAD:
           return {
               ...state,
               isFetching: true
           }
        case types.REQUEST_FETCH_INROAD_SUCCESS:
           return {
               ...state,
               isFetching: false,
               data: action.payload
           }
        case types.REQUEST_FETCH_INROAD_FAILER:
            return {
                ...state,
                isFetching: false,
                isError: true,
                data: []
            }
        default:
           return {
               ...state
           }
    }
}