import SingleJob from './SingleJob'
import { connect } from 'react-redux'
import { Alert, Spinner } from 'react-bootstrap'

const mapDispatchToProps = (dispatch) => ({})
const mapStateToProps = (state) => ({
  fetchingError: state.jobs.error,
  finishedLoading: state.jobs.finishedLoading
})

const JobsList = ({ jobs, fetchingError, finishedLoading }) =>
  !finishedLoading && <Spinner variant="danger" animation="border"></Spinner>
fetchingError && (
  <Alert variant="danger">error while fetching</Alert>
) : (
  jobs.map((job) => <SingleJob job={job} key={job._id} />)
)

export default connect(mapStateToProps, mapDispatchToProps)(JobsList)
