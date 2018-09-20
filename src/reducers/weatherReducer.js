import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from "../actions/ActionTypes";
import {SUCCESS,FAILURE} from "../constants/Constants";


const initialState = {  data: null,  status: null};
const actionHandlers={
  [FETCH_DATA_FULFILLED]: (state, action) =>{ return Object.assign({},state, {data:action.payload,status:SUCCESS})},
  [FETCH_DATA_REJECTED]: (state, action) => { return Object.assign({},state, {status:FAILURE})}
};

export default  function createReducer(state = initialState, action) {
    if (actionHandlers.hasOwnProperty(action.type))
      return actionHandlers[action.type](state, action);
    return state;
}

 