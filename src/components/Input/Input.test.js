import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../../../test/testUtils'
import { Input } from './Input'

const setup = (initialState={}) => {
	const store = storeFactory(initialState)
	const wrapper = shallow(<Input store={store} />)
	return wrapper
}

describe('render', () => {
	let wrapper
	beforeEach(() => {
		const initialState = {success: true}
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
		test('render without error', () => {

		})
		test('not render input box', () => {
			
		})
		test('not render submit button', () => {
			
		})
	})
})

describe('update state', () => {
	
})