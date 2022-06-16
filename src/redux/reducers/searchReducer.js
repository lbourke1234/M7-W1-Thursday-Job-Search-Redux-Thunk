import { SET_CATEGORY, SET_SEARCH_TEXT } from '../actions'

const initialState = {
  category: '',
  searchText: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      }
    default:
      return state
  }
}

export default searchReducer
