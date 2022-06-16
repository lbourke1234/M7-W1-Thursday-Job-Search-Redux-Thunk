import SingleJob from './SingleJob'

const JobsList = ({ jobs }) => jobs.map((job) => <SingleJob job={job} key={job._id} />)

export default JobsList
