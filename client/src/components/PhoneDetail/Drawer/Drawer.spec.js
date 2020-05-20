import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Drawer from './Drawer'
import {PHONE, TABLE_ELEMENTS, TABLE_TITLE} from '../../../utils/constTest'
import MaterialDrawer from '@material-ui/core/Drawer'
import {Image, Rating, Price} from '../../Common'
import {BackArrow, Color, Table} from '../../PhoneDetail'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        phone: PHONE,
        show: true,
        toggleDrawer: jest.fn()
    }

    const enzymeWrapper = shallow(<Drawer {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('Drawer component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup()

        const drawer = enzymeWrapper.find(MaterialDrawer)
        expect(drawer.exists()).toBe(true)
        expect(drawer.props().anchor).toBe('right')
        expect(drawer.props().open).toBe(true)

        expect(enzymeWrapper.find('div.container-drawer').exists()).toBe(true)

        expect(enzymeWrapper.find(BackArrow).exists()).toBe(true)
        expect(enzymeWrapper.find('h2.phone-title').text()).toBe(PHONE.name)
        expect(enzymeWrapper.find(Rating).exists()).toBe(true)
        expect(enzymeWrapper.find('hr').exists()).toBe(true)
        expect(enzymeWrapper.find(Image).props().imageFileName).toBe(PHONE.imageFileName)
        expect(enzymeWrapper.find(Color).props().color).toBe(PHONE.color)
        expect(enzymeWrapper.find(Price).props().value).toBe(PHONE.price)
        expect(enzymeWrapper.find(Table).props().elements).toStrictEqual(TABLE_ELEMENTS)
        expect(enzymeWrapper.find(Table).props().title).toBe(TABLE_TITLE)
    })
})
