import React, {Component} from 'react'
import List from '../List'
import {Loading, Message} from '../../../Common'
import './PhoneList.scss'

class PhoneList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneList: this.props.phones
        }
    }

    componentDidMount() {
        this.props.getPhones()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            phoneList: nextProps.phones.filter(phone => {
                return (phone.manufacturer.toUpperCase() + ' ' + phone.name.toUpperCase()).includes(nextProps.text.toUpperCase())
            })
        })
    }

    renderBody() {

        const {isLoading, error} = this.props
        const {phoneList} = this.state

        if (isLoading) {
            return (
                <Loading/>
            )
        }

        if (error) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the phone list. Please,
                    try again later.</Message>
            )
        }

        if (phoneList.length === 0) {
            return (
                <Message>Sorry, we <strong>couldn't find</strong> phones that matches your query. Please, try again
                    using different words.</Message>
            )
        }

        return (
            <List phones={phoneList}/>
        )


    }

    render() {
        return (
            <div className="block app-body">
                {this.renderBody()}
            </div>
        )
    }
}

export default PhoneList
