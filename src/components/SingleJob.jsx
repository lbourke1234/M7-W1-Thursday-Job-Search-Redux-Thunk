import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { addCompanyToFavouritesAction } from '../redux/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  addCompanyToFavourites: (company) => {
    dispatch(addCompanyToFavouritesAction(company))
  }
})

const SingleJob = ({ job, addCompanyToFavourites }) => (
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
    </Card.Body>
  </Card>
)

export default connect(mapStateToProps, mapDispatchToProps)(SingleJob)
