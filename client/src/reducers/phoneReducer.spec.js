import reducer from './phoneReducer'
import {PHONE_LIST, SEARCH_TEXT} from '../utils/constTest'
import actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    isLoading: false,
    error: false,
    phones: [],
    searchTerm: ''
}

describe('Phone reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual(INITIAL_STATE)
    })

    it('should handle set input text', () => {
        expect(
            reducer(INITIAL_STATE, {
                type: actionTypes.SET_FILTER,
                text: SEARCH_TEXT
            })
        ).toEqual({
                ...INITIAL_STATE,
                searchTerm: SEARCH_TEXT
            }
        )
    })

    it('should handle request phones', () => {
        expect(
            reducer(INITIAL_STATE, {
                type: actionTypes.FETCH_REQUEST
            })
        ).toEqual({
                ...INITIAL_STATE,
                isLoading: true
            }
        )
    })

    it('should handle fetch phones successfully', () => {
        expect(
            reducer(INITIAL_STATE, {
                type: actionTypes.FETCH_SUCCESS,
                payload: PHONE_LIST
            })
        ).toEqual({
                ...INITIAL_STATE,
                isLoading: false,
                phones: PHONE_LIST
            }
        )
    })

    it('should handle fetch phones error', () => {
        expect(
            reducer(INITIAL_STATE, {
                type: actionTypes.FETCH_ERROR
            })
        ).toEqual({
                ...INITIAL_STATE,
                isLoading: false,
                error: true
            }
        )
    })
})
