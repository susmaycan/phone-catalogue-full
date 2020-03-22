import React from 'react'
import {
    Form,
    FormControl
} from 'react-bootstrap'
import PropTypes from 'prop-types'

const Search = ({ setFilter, error }) => (
    <Form inline>
        <FormControl disabled={error} onChange={event => setFilter(event.target.value)} type="text" placeholder="Search..." className="mr-sm-2" />
    </Form>
)

Search.propTypes = {
    setFilter: PropTypes.func.isRequired,
}

export default Search