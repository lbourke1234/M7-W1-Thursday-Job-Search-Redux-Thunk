import { Form, Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setSearchTextActionAndFetch } from '../redux/actions'

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  setSearchText: (text) => {
    dispatch(setSearchTextActionAndFetch(text))
  }
})

const SearchBar = ({ setSearchText }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Form.Label className="text-center">Search</Form.Label>
          <Form.Control
            type="text"
            id="search-bar"
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          <Form.Text muted>Search for a job here</Form.Text>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
