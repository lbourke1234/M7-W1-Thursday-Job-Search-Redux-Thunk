import { useEffect, useState } from 'react'
import SingleJob from './SingleJob'
import { useParams } from 'react-router-dom'

const FullJob = () => {
  const [jobs, setJobs] = useState([])

  const params = useParams()
  const company_name = params.company

  const fetchJobs = async (company_name) => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${company_name}`
    )
    if (response.ok) {
      const body = await response.json()
      console.log(body.data)
      setJobs(body.data)
    }
  }

  useEffect(() => {
    fetchJobs(company_name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [company_name])

  return jobs.map((job) => <SingleJob job={job} key={job._id} />)
}

export default FullJob
