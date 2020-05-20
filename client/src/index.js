import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import configureStore from './utils/configureStore'
import components from './components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/index.scss'

const store = configureStore()

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={components.NavigationBar} />
            <Switch>
                <Route exact path="/" component={components.PhoneList} />
                <Route component={components.Error} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
