import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CustomTable from './Table'
import {TABLE_ELEMENTS, TABLE_TITLE} from '../../../utils/constTest'
import {Table} from "react-bootstrap";

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        title: TABLE_TITLE,
        elements: TABLE_ELEMENTS
    }

    const enzymeWrapper = shallow(<CustomTable {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
describe('Table component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup()

        expect(enzymeWrapper.find('h3').exists()).toBe(true)
        expect(enzymeWrapper.find('h3').text()).toBe(TABLE_TITLE)
        expect(enzymeWrapper.find(Table).props().responsive).toBe(true)
        expect(enzymeWrapper.find('tbody').exists()).toBe(true)
        expect(enzymeWrapper.find('tr').length).toBe(4)
        expect(enzymeWrapper.find('tr').at(0).key()).toBe(TABLE_ELEMENTS[0].name)
        expect(enzymeWrapper.find('td').length).toBe(8)
        expect(enzymeWrapper.find('td').at(0).hasClass("row-bold")).toBe(true)
        expect(enzymeWrapper.find('td').at(0).text()).toBe(TABLE_ELEMENTS[0].name)
        expect(enzymeWrapper.find('td').at(1).text()).toBe(TABLE_ELEMENTS[0].value)
    })
})
