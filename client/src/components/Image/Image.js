import React from 'react'
import './Image.scss'
import PropTypes from 'prop-types'
import {
    Image
} from 'react-bootstrap'

const PhoneImage = ({ imageFileName }) => (
    <div className="phone-image--container">
        <Image className="phone-image" fluid src={`./images/${imageFileName}`} />
    </div>
);

PhoneImage.propTypes = {
    fileName: PropTypes.string.isRequired
}
export default PhoneImage