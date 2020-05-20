import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Color from './Color'
import {COLOR} from '../../../utils/constTest'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        color: COLOR
    }

    const enzymeWrapper = shallow(<Color {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
describe('Color component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup()

        expect(enzymeWrapper.find('div.container-color').exists()).toBe(true)
        expect(enzymeWrapper.find('Row').hasClass('justify-content-center')).toBe(true)
        expect(enzymeWrapper.find('p').hasClass('m-1')).toBe(true)
        expect(enzymeWrapper.find('p').text()).toBe('Avariable in: ')
        expect(enzymeWrapper.find('div.square').exists()).toBe(true)
        expect(enzymeWrapper.find('div.square').props().style).toStrictEqual({"backgroundColor": COLOR }
        )
    })
})
