import { ERROR_WHILE_FETCHING, SET_JOBS_LIST, FINISHED_LOADING } from '../actions'

const initialState = {
  jobsList: [],
  error: false,
  finishedLoading: false
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS_LIST:
      return {
        ...state,
        jobsList: action.payload
      }
    case ERROR_WHILE_FETCHING:
      return {
        ...state,
        error: !state.error
      }
    case FINISHED_LOADING:
      return {
        ...state,
        finishedLoading: true
      }
    default:
      return state
  }
}

export default jobsReducer
