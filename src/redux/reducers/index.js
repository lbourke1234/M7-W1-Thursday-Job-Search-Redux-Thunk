import {
  SET_CATEGORY,
  SET_SEARCH_TEXT,
  SET_JOBS_LIST,
  ADD_COMPANY_TO_FAVOURITES
} from '../actions'

const initialState = {
  jobs: {
    jobsList: []
  },
  search: {
    category: '',
    searchText: ''
  },
  user: {
    favouritesList: []
  }
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        search: {
          ...state.search,
          category: action.payload
        }
      }
    case SET_SEARCH_TEXT:
      return {
        ...state,
        search: {
          ...state.search,
          searchText: action.payload
        }
      }
    case SET_JOBS_LIST:
      return {
        ...state,
        jobs: {
          jobsList: action.payload
        }
      }
    case ADD_COMPANY_TO_FAVOURITES:
      return {
        ...state,
        user: {
          favouritesList: [...state.user.favouritesList, action.payload]
        }
      }
    default:
      return state
  }
}

export default mainReducer
