import React from 'react'
import './Message.scss'
import {
    Alert
} from "react-bootstrap"

class Loading extends React.Component {
    render() {
        return (
           <div className="body-container">
                <Alert variant="danger">Sorry there was an error processing your request.</Alert>
           </div>
        );
    }
}
export default Loading