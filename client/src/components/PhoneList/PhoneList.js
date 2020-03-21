import React from 'react'
import PropTypes from 'prop-types'
import PhoneCard from '../PhoneCard'

import {
    Row,
    Col,
    Container
} from "react-bootstrap";

const PhoneList = ({ phones }) => (
    <Container>
        <Row className="justify-content-md-center">
            {phones.map(phone =>
                <Col key={phone.id} xs="12" md="6" lg="4">
                    <PhoneCard key={phone.id} phone={phone} />
                </Col>
            )} 
        </Row>
    </Container>
)

PhoneList.propTypes = {
    phones: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imageFileName: PropTypes.string.isRequired,
        screen: PropTypes.string.isRequired,
        processor: PropTypes.string.isRequired,
        ram: PropTypes.number.isRequired,
    }).isRequired).isRequired
}

export default PhoneList
