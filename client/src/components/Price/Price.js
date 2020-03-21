import React from 'react'
import './Price.scss'
import PropTypes from 'prop-types'
import Discount from '../Discount'

const Price = ({ value }) => (
    <div className="price--container">
        <p>From <span className="price">{value}.99 €</span><Discount /></p>
    </div>
)
Price.propTypes = {
    value: PropTypes.number.isRequired,
}

export default Price