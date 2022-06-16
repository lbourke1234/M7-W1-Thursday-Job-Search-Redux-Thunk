import SingleJob from './SingleJob'
import { connect } from 'react-redux'
import { Alert, Spinner } from 'react-bootstrap'

const mapDispatchToProps = (dispatch) => ({})
const mapStateToProps = (state) => ({
  fetchingError: state.jobs.error,
  finishedLoading: state.jobs.finishedLoading
})

const JobsList = ({ jobs, fetchingError, finishedLoading }) => {
  return (
    <>
      {!finishedLoading && (
        <div className="text-center">
          <Spinner variant="danger" animation="border"></Spinner>
        </div>
      )}
      {fetchingError && <Alert variant="danger">error while fetching</Alert>}
      {finishedLoading &&
        !fetchingError &&
        jobs.map((job) => <SingleJob job={job} key={job._id} />)}
    </>
  )
}
//   !finishedLoading &&
//   (<Spinner variant="danger" animation="border"></Spinner>)
//   fetchingError ? (
//     <Alert variant="danger">error while fetching</Alert>
//   ) : (
//     jobs.map((job) => <SingleJob job={job} key={job._id} />)
//   )

export default connect(mapStateToProps, mapDispatchToProps)(JobsList)
