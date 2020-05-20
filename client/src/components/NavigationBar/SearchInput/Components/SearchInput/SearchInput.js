import React from 'react'
import {
    Form
} from 'react-bootstrap'
import PropTypes from 'prop-types'

const SearchInput = ({ setFilter, error }) => (
    <Form inline>
        <input disabled={error} onChange={event => setFilter(event.target.value)} type="text" placeholder="Search..." className="form-control mr-sm-2" />
    </Form>
)

SearchInput.propTypes = {
    setFilter: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired
}

export default SearchInput
