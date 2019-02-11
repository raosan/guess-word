import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../../../test/testUtils'
import { Input } from './Input'

// const setup = (initialState={}) => {
// 	const store = storeFactory(initialState)
// 	const wrapper = shallow(<Input {...store} />)
// 	console.log(wrapper.debug())
// 	return wrapper
// }

const defaultProps = { success: false }

const setup = (props={}) => {
	const setupProps = { ...defaultProps, ...props }
	return shallow (<Input {...setupProps} />)
}

describe('render', () => {
	let wrapper
	beforeEach(() => {
		const initialState = {success: false}
		wrapper = setup(initialState)
	})

	describe('word has not been guessed', () => {
		test('render without error', () => {
			const component = findByTestAttr(wrapper, 'component-input')
			expect(component.length).toBe(1)
		})
		test('render input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box')
			expect(inputBox.length).toBe(1)
		})
		test('render submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button')
			expect(submitButton.length).toBe(1)
		})
	})

	describe('word has been guessed', () => {
		let wrapper
		beforeEach(() => {
			const initialState = {success: true}
			wrapper = setup(initialState)
		})

		test('render without error', () => {
			const component = findByTestAttr(wrapper, 'component-input')
			expect(component.length).toBe(1)
		})
		test('not render input box', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box')
			expect(inputBox.length).toBe(0)
		})
		test('not render submit button', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button')
			expect(submitButton.length).toBe(0)
		})
	})
})

describe('update state', () => {
	
})