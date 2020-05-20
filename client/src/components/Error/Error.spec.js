import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Error from './Error'

Enzyme.configure({adapter: new Adapter()})

describe('Error component', () => {
    it('should render self and subcomponents', () => {
        const enzymeWrapper = shallow(<Error />)

        expect(enzymeWrapper.find('div.container-message').exists()).toBe(true)

        expect(enzymeWrapper.find('h1').exists()).toBe(true)
        expect(enzymeWrapper.find('h1').text()).toBe('Error 404')

        expect(enzymeWrapper.find('span').hasClass('code-error')).toBe(true)
        expect(enzymeWrapper.find('span').text()).toBe('404')

        expect(enzymeWrapper.find('p').text()).toBe('Oops! Whatever you were looking for... it\'s not here. Please Go home!')



    })
})
