/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf..MVP
   R - getSmurfs..MVP
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((response) => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: FETCHING_SMURF_FAILURE, payload: error });
    });
};

export const addNewSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((response) => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: error });
    });
};
