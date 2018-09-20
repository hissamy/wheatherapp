
import axios from "axios";
import { APP_ID,WHEATHER_API_URL } from "../constants/Constants";

export const wheatherService = (location) => {

    const { latitude, longitude } = location || {};
    
    let qs = {};
    if (typeof (location) === "object") {
        qs = {
            appid: APP_ID,
            lat: latitude,
            lon: longitude
        }
    } else {
        qs = {
            q: location,
            appid: APP_ID
        };
    }
    return axios.get(WHEATHER_API_URL, {params:qs});
};
