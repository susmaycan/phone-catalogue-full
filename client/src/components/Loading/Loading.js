import React from 'react'
import './Loading.scss'
import {
    Spinner
} from "react-bootstrap"

class Loading extends React.Component {
    render() {
        return (
           <div className="body-container">
                  <Spinner animation="grow" variant="dark" /><span> Loading...</span>
           </div>
        );
    }
}
export default Loading