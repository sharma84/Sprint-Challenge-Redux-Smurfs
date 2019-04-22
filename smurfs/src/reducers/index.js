/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS
  //ADD_SMURF_FAILURE
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  //updatingSmurf: false,
  //deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return { ...state, fetchingSmurfs: true };

    // case FETCHING_SMURF_SUCCESS:
    //   return {
    //     ...state,
    //     fetchingSmurfs: false,
    //     smurfs: [...state.smurfs, ...action.payload]
    //   };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingSmurfs: false,
        smurfs: action.payload
      };

    case FETCHING_SMURF_FAILURE:
      return { ...state, fetchingSmurfs: false, error: action.payload };

    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true
      };

    // case ADD_SMURF_SUCCESS:
    //   return { ...state, smurfs: [...action.payload] };

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: ""
      };

    default:
      return state;
  }
};

export default reducer;
