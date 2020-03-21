import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import configureStore from './utils/configureStore'
import App from './containers/App'
import Navbar from './components/Navbar'
import Error from './components/Error'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/index.scss'

const store = configureStore()

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Navbar} />
            <Switch>
                <Route exact path="/" component={App} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)