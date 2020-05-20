import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PhoneCard from './PhoneCard'
import {PHONE} from '../../../../utils/constTest'
import {Rating, Price} from '../../../Common'
import {Drawer} from '../../../PhoneDetail'


Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        phone: PHONE,
    }

    const enzymeWrapper = shallow(<PhoneCard {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
describe('PhoneCard component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup()

        expect(enzymeWrapper.find('div.card-container').exists()).toBe(true)
        expect(enzymeWrapper.find('h2.text-center').text()).toBe(PHONE.name)
        expect(enzymeWrapper.find('p').text()).toBe(PHONE.manufacturer)
        expect(enzymeWrapper.find(Rating).exists()).toBe(true)
        expect(enzymeWrapper.find(Price).props().value).toBe(PHONE.price)
        const drawerProps = enzymeWrapper.find(Drawer).props()
        expect(drawerProps.phone).toBe(PHONE)
        expect(drawerProps.show).toBe(false)
        expect(drawerProps.toggleDrawer).toBeInstanceOf(Function)

    })
})
