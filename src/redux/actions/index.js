export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_JOBS_LIST = 'SET_JOBS_LIST'
export const ADD_COMPANY_TO_FAVOURITES = 'ADD_COMPANY_TO_FAVOURITES'
export const FETCH_FAVOURITES = 'FETCH_FAVOURITES'
export const GET_BOOKS = 'GET_BOOKS'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const ERROR_WHILE_FETCHING = 'ERROR_WHILE_FETCHING'
export const FINISHED_LOADING = 'FINISHED_LOADING'

export const setSearchTextActionAndFetch = (text) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=${text}&limit=10`
    )
    if (response.ok) {
      const body = await response.json()

      const titleSearchResults = body.data.filter(
        (job) =>
          job.title.toLowerCase().includes(text.toLowerCase()) ||
          job.company_name.toLowerCase().includes(text.toLowerCase())
      )
      dispatch({
        type: SET_JOBS_LIST,
        payload: titleSearchResults
      })
    }
  }
}

export const setCategoryAction = (category) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?category=${category}&limit=10`
    )

    if (response.ok) {
      const body = await response.json()
      dispatch({
        type: SET_CATEGORY,
        payload: body.data
      })
      dispatch({
        type: SET_JOBS_LIST,
        payload: body.data
      })
    }
  }
}

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

export const getBooksAction = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?&limit=10')
      if (response.ok) {
        const body = await response.json()
        dispatch({
          type: SET_JOBS_LIST,
          payload: body.data
        })
        dispatch({
          type: FINISHED_LOADING
        })
      } else {
        dispatch({
          type: ERROR_WHILE_FETCHING
        })
        console.log('not ok')
      }
    } catch (error) {
      dispatch({
        type: ERROR_WHILE_FETCHING
      })
      console.log(error)
    }
  }
}

export const removeFromFavouritesAction = (job) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: job
})

export const errorWhileFetchingAction = () => ({
  type: ERROR_WHILE_FETCHING
})

export const finishedLoadingAction = () => ({
  type: FINISHED_LOADING
})
