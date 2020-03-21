import React from 'react'
import PropTypes from 'prop-types'
import './PhoneCard.scss'
import CustomDrawer from '../Drawer'
import Rating from '../Rating'
import Price from '../Price'
import Image from '../Image'

function PhoneCard(props) {

    const phone = props.phone

    const [show, setShow] = React.useState(false)

    const toggleDrawer = (actionOpen) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setShow(actionOpen);
    };
    return (
        <div>
            <div onClick={toggleDrawer(true)} className={`card-container ${show ? "selected" : "arroz con cosas"}`}>
                <Image imageFileName={phone.imageFileName} />
                <h2 className="text-center">{phone.name}</h2>
                <p>{phone.manufacturer}</p>
                <Rating />
                <Price value={phone.price} />
            </div>
            <CustomDrawer
                phone={phone}
                show={show}
                toggleDrawer={toggleDrawer}
            />
        </div>
    )
}

PhoneCard.propTypes = {
    phone: PropTypes.shape({
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
    }).isRequired
}

export default PhoneCard
