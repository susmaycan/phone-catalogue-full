import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchInput from './SearchInput'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        setFilter: jest.fn(),
        error: false
    }

    const enzymeWrapper = shallow(<SearchInput {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
describe('SearchInput component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper, props} = setup()

        expect(enzymeWrapper.find('Form').exists()).toBe(true)
        expect(enzymeWrapper.find('Form').props().inline).toBe(true)
        expect(enzymeWrapper.find('input').exists()).toBe(true)
        const formControlProps = enzymeWrapper.find('input').props()
        expect(formControlProps.disabled).toBe(props.error)
        expect(formControlProps.type).toBe('text')
        expect(formControlProps.className).toBe('form-control mr-sm-2')
        expect(formControlProps.placeholder).toBe('Search...')
    })

    it('should handle onChange', () => {
        const {enzymeWrapper, props} = setup()
        expect(props.setFilter).toHaveBeenCalledTimes(0)
        const input = enzymeWrapper.find('input')
        input.simulate('change', { target: { value: 'Test' } })
        enzymeWrapper.update()
        expect(props.setFilter).toHaveBeenCalledTimes(1)

    })
})
