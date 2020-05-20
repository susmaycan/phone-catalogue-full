import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BackArrow from './BackArrow'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        toggleDrawer: jest.fn()
    }

    const enzymeWrapper = shallow(<BackArrow {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
describe('BackArrow component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup()

        expect(enzymeWrapper.find('div.container-back-arrow').exists()).toBe(true)
        expect(enzymeWrapper.find('span').hasClass('back-arrow')).toBe(true)
        expect(enzymeWrapper.find('i').hasClass('fas fa-arrow-left')).toBe(true)
    })

    it('should handle click', () => {
        const {enzymeWrapper, props} = setup()

        const span = enzymeWrapper.find('span')
        span.simulate('click')
        enzymeWrapper.update()
        expect(props.toggleDrawer.mock.calls.length).toBe(1)
    })
})
