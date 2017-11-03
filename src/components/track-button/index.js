import { Component } from 'preact';

export default class TrackButton extends Component {
	state = { tracking: false };

	render({ }, { tracking }, { }) {
		return (
			<svg
				width="50px"
				height="50px"
				style="display:inline-block; margin:-.25em 0 0; vertical-align:middle;"
			>
				<circle cx="25" cy="25" r="25" fill="red" />
			</svg>
		);
	}
}
