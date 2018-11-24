import axios from "axios";
import { API_URL } from "react-native-dotenv";

// Not being able to append query parameters via axios dumbest thing I've ever heard
function appendQueryParameters(path, queryParams) {
  const e = encodeURIComponent;
  const paramStr = Object.keys(queryParams)
    .map(key => `${e(key)}=${e(queryParams[key])}`)
    .join("&");

  const joinedBy = path.indexOf("?") > -1 ? "&" : "?";
  return `${path}${joinedBy}${paramStr}`;
}

function getPatientData(firstName, lastName, startTimestamp, endTimestamp) {
  let queryParams = { start: startTimestamp, end: endTimestamp };
  const url = appendQueryParameters(
    `${API_URL}/patient/${lastName}/${firstName}`,
    queryParams
  );
  return axios.post(url);
}

module.exports = {
  getPatientData
};
