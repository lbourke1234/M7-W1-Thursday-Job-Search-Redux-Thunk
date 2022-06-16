export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_JOBS_LIST = 'SET_JOBS_LIST'
export const ADD_COMPANY_TO_FAVOURITES = 'ADD_COMPANY_TO_FAVOURITES'
export const FETCH_FAVOURITES = 'FETCH_FAVOURITES'

export const setSearchTextAction = (text) => ({
  type: SET_SEARCH_TEXT,
  payload: text
})

export const setCategoryAction = (category) => ({
  type: SET_CATEGORY,
  payload: category
})

export const setJobsListAction = (jobs) => ({
  type: SET_JOBS_LIST,
  payload: jobs
})

export const addCompanyToFavouritesAction = (company) => ({
  type: ADD_COMPANY_TO_FAVOURITES,
  payload: company
})

export const fetchFavouritesAction = (favouritesList) => ({
  type: FETCH_FAVOURITES,
  payload: favouritesList
})
