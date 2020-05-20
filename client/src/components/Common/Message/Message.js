import React from 'react'
import './Message.scss'
import {
    Alert
} from "react-bootstrap"

class Message extends React.Component {
    render() {
        return (
            <div className="block container-message">
                <Alert variant="danger">{this.props.children}</Alert>
            </div>
        );
    }
}
export default Message