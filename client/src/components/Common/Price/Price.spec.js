import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Price from './Price'
import {PRICE} from '../../../utils/constTest'
import Discount from "../Discount";

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        value: PRICE
    }

    const enzymeWrapper = shallow(<Price {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
describe('Price component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup()

        expect(enzymeWrapper.find('div.container-price').exists()).toBe(true)

        expect(enzymeWrapper.find('p').exists()).toBe(true)
        expect(enzymeWrapper.find('p').text()).toBe('From '+ PRICE +'.99 €<Discount />')

        expect(enzymeWrapper.find('span').exists()).toBe(true)
        expect(enzymeWrapper.find(Discount).exists()).toBe(true)
        expect(enzymeWrapper.find('span').hasClass('price')).toBe(true)
        expect(enzymeWrapper.find('span').text()).toBe(PRICE + '.99 €')

    })
})
