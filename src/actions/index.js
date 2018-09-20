import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from "./ActionTypes";
import {wheatherService} from "../services/wheatherService";

export const fetchData = (region) => (dispatch) => {
  const resultHandler=(response)=>{ dispatch({type: FETCH_DATA_FULFILLED, payload: response.data});}
  const errorHandler=(error)=>{dispatch({type: FETCH_DATA_REJECTED, payload: error});}
  return wheatherService(region).then(resultHandler).catch(errorHandler);
};