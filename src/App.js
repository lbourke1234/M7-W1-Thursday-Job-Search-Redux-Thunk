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

import { getBooksAction } from './redux/actions'

const mapStateToProps = (state) => ({
  searchText: state.search.searchText,
  jobs: state.jobs.jobsList,
  selectValue: state.search.category
})

const mapDispatchToProps = (dispatch) => ({
  setJobs: (text) => {
    dispatch(getBooksAction(text))
  }
})

const App = ({ searchText, jobs, selectValue, setJobs }) => {
  const fetchCategory = async (selectValue) => {
    // const response = await fetch(
    //   `https://strive-jobs-api.herokuapp.com/jobs?category=${selectValue}&limit=10`
    // )
    // if (response.ok) {
    //   const body = await response.json()
    //   setJobs(body.data)
    // }
  }
  useEffect(
    (searchText) => {
      setJobs(searchText)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  // useEffect(() => {
  //   fetchSearchApi(searchText)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchText])

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
            <Link to={'/'}>
              <h1 className="text-center">Job Search</h1>
            </Link>
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
