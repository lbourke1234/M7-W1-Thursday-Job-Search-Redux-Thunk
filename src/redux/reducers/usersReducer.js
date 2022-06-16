import { ADD_COMPANY_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions'

const initialState = {
  favouritesList: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY_TO_FAVOURITES:
      return {
        favouritesList: [...state.favouritesList, action.payload]
      }
    case REMOVE_FROM_FAVOURITES:
      return {
        favouritesList: [
          state.favouritesList.slice(0, action.payload),
          ...state.favouritesList.slice(action.payload + 1)
        ]
      }
    default:
      return state
  }
}

export default userReducer
