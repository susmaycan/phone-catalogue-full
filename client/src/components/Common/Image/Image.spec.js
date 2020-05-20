import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Image from './Image'
import {IMAGE_FILENAME} from '../../../utils/constTest'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        imageFileName: IMAGE_FILENAME
    }

    const enzymeWrapper = shallow(<Image {...props} />)

    return {
        props,
        enzymeWrapper
    }
}
describe('Image component', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup()

        expect(enzymeWrapper.find('div.container-image').exists()).toBe(true)
        expect(enzymeWrapper.find('Image').exists()).toBe(true)
        const imageProps = enzymeWrapper.find('Image').props()
        expect(imageProps.src).toBe('./images/'+IMAGE_FILENAME)
        expect(imageProps.fluid).toBe(true)
        expect(imageProps.className).toBe('phone-image')
    })
})
