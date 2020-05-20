import React from 'react'
import './Color.scss'
import PropTypes from 'prop-types'
import {
    Row
} from 'react-bootstrap'

const Color = ({ color }) => (
    <div className="container-color">
        <Row className="justify-content-center">
            <p className="m-1">Avariable in: </p>
            <div className="square m-1" style={{ backgroundColor: color }}></div>
        </Row>
    </div>
)

Color.propTypes = {
    color: PropTypes.string.isRequired
}
export default Color
