import React from 'react'
import {
    Spinner
} from "react-bootstrap"

class Loading extends React.Component {
    render() {
        return (
           <div className="block container-message">
                  <Spinner animation="grow" variant="dark" /><span> Loading...</span>
           </div>
        );
    }
}
export default Loading