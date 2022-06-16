import { configureStore, combineReducers } from '@reduxjs/toolkit'
import jobsReducer from '../reducers/jobsReducer'
import searchReducer from '../reducers/searchReducer'
import userReducer from '../reducers/usersReducer'

const mainReducer = combineReducers({
  user: userReducer,
  jobs: jobsReducer,
  search: searchReducer
})

const store = configureStore({
  reducer: mainReducer
})

export default store
