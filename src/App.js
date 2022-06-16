import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from './components/SearchBar'
import { useEffect } from 'react'
import JobsList from './components/JobsList'
import FullJob from './components/FullJob'
import SelectCategory from './components/SelectCategory'

import { connect } from 'react-redux'
import { setJobsListAction } from './redux/actions'
import Favourites from './components/Favourites'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => ({
  searchText: state.search.searchText,
  jobs: state.jobs.jobsList,
  selectValue: state.search.category
})

const mapDispatchToProps = (dispatch) => ({
  setJobs: (jobs) => {
    dispatch(setJobsListAction(jobs))
  }
})

const App = ({ searchText, jobs, selectValue, setJobs }) => {
  const fetchSearchApi = async (searchText) => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=${searchText}&limit=10`
    )
    if (response.ok) {
      const body = await response.json()

      const titleSearchResults = body.data.filter(
        (job) =>
          job.title.toLowerCase().includes(searchText.toLowerCase()) ||
          job.company_name.toLowerCase().includes(searchText.toLowerCase())
      )

      setJobs(titleSearchResults)
    }
  }

  const fetchCategory = async (selectValue) => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?category=${selectValue}&limit=10`
    )

    if (response.ok) {
      const body = await response.json()
      setJobs(body.data)
    }
  }

  useEffect(() => {
    fetchSearchApi(searchText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText])

  useEffect(
    () => {
      if (selectValue !== '') {
        fetchCategory(selectValue)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectValue]
  )

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Job Search</h1>
          </Col>
          <SearchBar />
          <SelectCategory />
          <Link to={'/favourites'}>
            <Button className="ml-5" variant="outline-success">
              Go To Favourites
            </Button>{' '}
          </Link>
        </Row>
        <Row></Row>
        <hr />
        <Routes>
          <Route path={'/'} element={<JobsList jobs={jobs} />} />
          <Route path={'/:company'} element={<FullJob />} />
          <Route path={'/favourites'} element={<Favourites />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
