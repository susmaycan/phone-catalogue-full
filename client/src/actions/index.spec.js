import * as actions from './index'
import actionTypes from './actionTypes'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {PHONE_LIST, SEARCH_TEXT, INITIAL_PHONE_LIST} from '../utils/constTest'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)
const store = mockStore(INITIAL_PHONE_LIST)

let mockAxios = new MockAdapter(axios)

describe('recording actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions()
    })

    it('setFilterSearch should create SET_FILTER action', () => {
        expect(actions.setFilterSearch(SEARCH_TEXT)).toEqual({
            type: actionTypes.SET_FILTER,
            text: SEARCH_TEXT
        })
    })

    it('creates FETCH_SUCCESS when fetching phones has been done', () => {
        mockAxios.onGet('http://localhost:3001/phones').reply(200, PHONE_LIST)

        const expectedActions = [
            {type: actionTypes.FETCH_REQUEST},
            {type: actionTypes.FETCH_SUCCESS, payload: PHONE_LIST}
        ]

        return store.dispatch(actions.fetchPhones())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })

    })

    it('creates FETCH_ERROR when fetching phones has errors', () => {
        mockAxios.onGet('http://localhost:3001/phones').reply(404)

        const expectedActions = [
            {type: actionTypes.FETCH_REQUEST},
            {type: actionTypes.FETCH_ERROR}
        ]

        return store.dispatch(actions.fetchPhones())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })

    })
})
