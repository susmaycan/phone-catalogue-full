import React from 'react'
import './Error.scss'
import {
    Link
} from 'react-router-dom'

class Error extends React.Component {

    render() {
        return (
            <div className="block container-message">
                <h1>Error <span className="code-error">404</span></h1>
                <p>Oops! Whatever you were looking for... it's not here. Please <strong><Link to='/'>Go home!</Link></strong></p>
            </div>
        );
    }
}
export default Error