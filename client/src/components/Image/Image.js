import React from 'react'
import './Image.scss'
import PropTypes from 'prop-types'
import {
    Image
} from 'react-bootstrap'

const PhoneImage = ({ imageFileName }) => (
    <div className="container-image">
        <Image className="phone-image" fluid src={`./images/${imageFileName}`} />
    </div>
);

PhoneImage.propTypes = {
    imageFileName: PropTypes.string.isRequired
}
export default PhoneImage