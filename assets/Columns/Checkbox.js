import React from 'react';

export default class Checkbox extends React.Component {
	render() {
		return <th className="check-column" scope="row">
			<input type="checkbox" />
		</th>;
	}
}