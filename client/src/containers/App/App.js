import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    fetchPhones
} from '../../actions'
import PhoneList from "../../components/PhoneList"
import Loading from '../../components/Loading'
import Message from '../../components/Message'

const mapStateToProps = state => ({
    phoneList: state.phoneReducer.phones || [],
    isLoading: state.phoneReducer.isLoading,
    error: state.phoneReducer.error
})

const mapDispatchToProps = (dispatch) => ({
    getPhones: () => dispatch(fetchPhones())
})

class App extends Component {

    componentDidMount() {
        this.props.getPhones()
    }

    renderBody() {
        if (this.props.isLoading) {
            return (
                <Loading />
            )
        } else if (this.props.error) {
            return (
                <Message />
            )
        } else {
            return (
                <PhoneList phones={this.props.phoneList} />
            )
        }
    }
    render() {
        return (
            <div className="app-body">
                {this.renderBody()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);