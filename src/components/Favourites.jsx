import { connect } from 'react-redux'
import SingleJob from './SingleJob'
import { fetchFavouritesAction } from '../redux/actions'
import { useEffect, useState } from 'react'

const mapStateToProps = (state) => ({
  favourites: state.user.favouritesList
})
const mapDispatchToProps = (dispatch) => ({
  fetchFavourites: (list) => {
    dispatch(fetchFavouritesAction(list))
  }
})

const Favourites = ({ favourites }) => {
  const [faves, setFaves] = useState([])
  const fetchFavourites = async () => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=pureintegration&limit=10`
    )
    if (response.ok) {
      const body = await response.json()
      setFaves(body.data)
    }
  }

  useEffect(() => {
    fetchFavourites()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faves])
  return favourites.map((job, i) => <SingleJob job={job} key={job._id} index={i} />)
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
