import React from 'react'
import './BackArrow.scss'
import PropTypes from 'prop-types'

const BackArrow = ({ toggleDrawer }) => (
    <div className="container-back-arrow">
        <span onClick={toggleDrawer(false)} className="back-arrow">
            <i className="fas fa-arrow-left"></i>
        </span>
    </div>
);

BackArrow.propTypes = {
    toggleDrawer: PropTypes.func.isRequired
}
export default BackArrow