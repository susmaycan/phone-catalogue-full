import React from 'react'
import PropTypes from 'prop-types'
import './Drawer.scss'
import MaterialDrawer from '@material-ui/core/Drawer'
import Rating from '../Rating'
import Price from '../Price'
import Table from '../Table'
import Color from '../Color'
import Image from '../Image'

const Drawer = ({ phone, show, toggleDrawer }) => (
    <MaterialDrawer anchor='right' open={show} onClose={toggleDrawer(false)}>
        <div className="drawer-container">
            <div className="back-arrow-container">
                <span onClick={toggleDrawer(false)} className="back-arrow">
                    <i className="fas fa-arrow-left"></i>
                </span>
            </div>
            <h2 className="text-center phone-title">{phone.name}</h2>
            <Rating />
            <hr width='50%' />
            <Image imageFileName={phone.imageFileName} />
            <Color color={phone.color} />
            <Price value={phone.price} />
            <Table
                elements={[
                    { name: 'Manufacturer', value: phone.manufacturer },
                    { name: 'Description', value: phone.description },
                    { name: 'Screen', value: phone.screen },
                    { name: 'RAM', value: phone.ram + ' GB' },
                ]}
                title='Specifications'
            />
        </div>
    </MaterialDrawer>
)
Drawer.propTypes = {
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

export default Drawer

