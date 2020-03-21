import React from 'react'
import {
    Alert
} from "react-bootstrap"

class Error extends React.Component {
    render() {
        return (
           <div className="body-container">
                <Alert variant="danger"><b>Error 404</b> This route couldn't be found. <i className="far fa-frown-open"></i></Alert>
           </div>
        );
    }
}
export default Error