import React, { Component } from 'react'
import PhoneList from "../../components/PhoneList"
import Loading from '../../components/Loading'
import Message from '../../components/Message'

class Layout extends Component {

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
        if (this.props.isLoading) {
            return (
                <Loading />
            )
        } else if (this.props.error) {
            return (
                <Message>Sorry, there was a problem and we <strong>couldn't retrieve</strong> the phone list. Please, try again later.</Message>
            )
        } else {
            if (this.state.phoneList.length === 0) {
                return (
                    <Message>Sorry, we <strong>couldn't find</strong> phones that matches your query. Please, try again using different words.</Message>
                )
            } else {
                return (
                    <PhoneList phones={this.state.phoneList} />
                )
            }

        }
    }
    render() {
        return (
            <div className="block app-body">
                {this.renderBody()}
            </div>
        )
    }
}

export default Layout