import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { addCompanyToFavouritesAction } from '../redux/actions'
import { removeFromFavouritesAction } from '../redux/actions'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  addCompanyToFavourites: (company) => {
    dispatch(addCompanyToFavouritesAction(company))
  },
  removeFromFavourites: (job) => {
    dispatch(removeFromFavouritesAction(job))
  }
})

const SingleJob = ({ job, addCompanyToFavourites, removeFromFavourites, index }) => {
  // const search = useParams()
  // console.log(search.favourites)

  return (
    <Card>
      <Card.Body>
        <Link to={`/${job.company_name}`}>
          <Card.Title>{job.company_name}</Card.Title>
        </Link>
        <h4>Title</h4>
        <Card.Text>{job.title}</Card.Text>
        <h4>Category</h4>
        <Card.Text>{job.category}</Card.Text>
        <h4>Salary</h4>
        <Card.Text>{job.salary}</Card.Text>
        <h4>Type</h4>
        <Card.Text>{job.type}</Card.Text>
        <Button variant="outline-success" onClick={() => addCompanyToFavourites(job)}>
          Add Company To Favourites
        </Button>{' '}
        <Button variant="outline-success" onClick={() => removeFromFavourites(index)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJob)
