import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Input extends Component {
	render() {
		const contents = this.props.success ?
			null
		: (
				<from className="form-inline">
					<input
						data-test="input-box"
						className="mb2-2 mx-xm-3"
						id="word-guess"
					 	type="text"
					 	placeholder="Enter guess"
					/>
					<button
						data-test="submit-button"
						type="submit"
						className="btn btn-primary mb-2"
					>
						Submit
					</button>
				</from>
			)
		
		return (
			<div data-test="component-input">
				{contents}
			</div>
		);
	}
}

const mapStateToProps = ({ success }) => {
	return { success }
}

export default connect(mapStateToProps)(Input)