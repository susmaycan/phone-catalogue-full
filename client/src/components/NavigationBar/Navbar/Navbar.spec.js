import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from './Navbar'
import SearchInput from '../SearchInput/'

Enzyme.configure({adapter: new Adapter()})

describe('Navbar component', () => {
    it('should render self and subcomponents', () => {
        const enzymeWrapper = shallow(<Navbar/>)

        expect(enzymeWrapper.find('Navbar').exists()).toBe(true)
        const navbarProps = enzymeWrapper.find('Navbar').props()
        expect(navbarProps.className).toBe('navigation-bar')
        expect(navbarProps.sticky).toBe('top')
        expect(navbarProps.bg).toBe('dark')
        expect(navbarProps.expand).toBe('lg')
        expect(navbarProps.variant).toBe('dark')

        expect(enzymeWrapper.find('Link').exists()).toBe(true)
        expect(enzymeWrapper.find('Link').text()).toBe(' Phone-shop')
        expect(enzymeWrapper.find('i').hasClass('fas fa-mobile-alt')).toBe(true)
        expect(enzymeWrapper.find('Link').props().to).toBe('/')

        expect(enzymeWrapper.find('Nav').exists()).toBe(true)
        expect(enzymeWrapper.find('Nav').hasClass('ml-auto align-items-center')).toBe(true)

        expect(enzymeWrapper.find(SearchInput).exists()).toBe(true)
    })
})
