import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Loading from './Loading'

Enzyme.configure({adapter: new Adapter()})

describe('Loading component', () => {
    it('should render self', () => {
        const enzymeWrapper = shallow(<Loading />)

        expect(enzymeWrapper.find('div.container-message').exists()).toBe(true
        )
        expect(enzymeWrapper.find('Spinner').exists()).toBe(true)
        const spinnerProps = enzymeWrapper.find('Spinner').props()
        expect(spinnerProps.animation).toBe('grow')
        expect(spinnerProps.variant).toBe('dark')

        expect(enzymeWrapper.find('span').exists()).toBe(true)
        expect(enzymeWrapper.find('span').text()).toBe(' Loading...')


    })
})
