import React from 'react'
import './Discount.scss'

class Discount extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: Math.floor((Math.random() * 80) + 1)
        }
    }
    render() {
        return (
            <span className="discount">- {this.state.value} %</span>
        )
    }
}
export default Discount
