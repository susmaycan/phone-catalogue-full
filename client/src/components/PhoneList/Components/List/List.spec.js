import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from './List'
import {LIST} from '../../../../utils/constTest'
import {Container, Row, Col} from 'react-bootstrap'
import Card from '../PhoneCard'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        phones: LIST,
    }

    const enzymeWrapper = shallow(<List {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('List component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup()

        expect(enzymeWrapper.find(Container).exists()).toBe(true)
        expect(enzymeWrapper.find(Row).hasClass('justify-content-md-center')).toBe(true)
        const col = enzymeWrapper.find(Col)
        expect(col.length).toBe(1)
        expect(col.key()).toEqual(LIST[0].id.toString())
        expect(col.props().xs).toBe("12")
        expect(col.props().md).toBe("6")
        expect(col.props().lg).toBe("4")

        const card = enzymeWrapper.find(Card)
        expect(card.key()).toEqual(LIST[0].id.toString())
        expect(card.props().phone).toBe(LIST[0])

    })
})
