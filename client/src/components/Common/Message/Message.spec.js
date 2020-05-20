import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Message from './Message'
import {MESSAGE} from '../../../utils/constTest'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        children: MESSAGE
    }

    const enzymeWrapper = shallow(<Message {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
describe('Message component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup()

        expect(enzymeWrapper.find('div.container-message').exists()).toBe(true)

        expect(enzymeWrapper.find('Alert').exists()).toBe(true)
        const alertProps = enzymeWrapper.find('Alert').props()
        expect(alertProps.variant).toBe('danger')
        expect(alertProps.children).toBe(MESSAGE)
    })
})
