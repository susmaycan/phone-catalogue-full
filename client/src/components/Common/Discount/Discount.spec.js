import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Discount from './Discount'

Enzyme.configure({adapter: new Adapter()})

describe('Discount component', () => {
    it('should render self', () => {
        const enzymeWrapper = shallow(<Discount />)

        expect(enzymeWrapper.find('span').exists()).toBe(true)
        expect(enzymeWrapper.find('span').hasClass('discount')).toBe(true)
    })
})
