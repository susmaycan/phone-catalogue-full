import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PhoneList from './PhoneList'
import {EMPTY_LIST, LIST} from '../../../../utils/constTest'
import List from '../List'
import {Loading, Message} from "../../../Common";

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        phones: LIST,
        isLoading: false,
        error: false,
        getPhones: jest.fn()
    }

    const enzymeWrapper = shallow(<PhoneList {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

function setupError() {
    const props = {
        phones: EMPTY_LIST,
        isLoading: false,
        error: true,
        getPhones: jest.fn()
    }

    const enzymeWrapper = shallow(<PhoneList {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

function setupEmptyList() {
    const props = {
        phones: EMPTY_LIST,
        isLoading: false,
        error: false,
        getPhones: jest.fn()
    }

    const enzymeWrapper = shallow(<PhoneList {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

function setupLoading() {
    const props = {
        phones: EMPTY_LIST,
        isLoading: true,
        error: false,
        getPhones: jest.fn()
    }

    const enzymeWrapper = shallow(<PhoneList {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('PhoneList component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup()

        expect(enzymeWrapper.find('div').hasClass('block app-body')).toBe(true)
        expect(enzymeWrapper.find(List).props().phones).toBe(LIST)
    })

    it('should render loading', () => {
        const {enzymeWrapper} = setupLoading()

        expect(enzymeWrapper.find('div').hasClass('block app-body')).toBe(true)
        expect(enzymeWrapper.find(Loading).exists()).toBe(true)
    })

    it('should render error', () => {
        const {enzymeWrapper} = setupError()

        expect(enzymeWrapper.find('div').hasClass('block app-body')).toBe(true)
        expect(enzymeWrapper.find(Message).props().children).toStrictEqual(["Sorry, there was a problem and we ", <strong>couldn't retrieve</strong>, " the phone list. Please, try again later."])
    })

    it('should render empty list', () => {
        const {enzymeWrapper} = setupEmptyList()

        expect(enzymeWrapper.find('div').hasClass('block app-body')).toBe(true)
        expect(enzymeWrapper.find(Message).props().children).toStrictEqual(["Sorry, we ", <strong>couldn't find</strong>, " phones that matches your query. Please, try again using different words."])
    })

    it('should request phone list', () => {
        const {props} = setup()
        expect(props.getPhones).toHaveBeenCalled()
    })
})
