// import { h, Component } from 'preact';
// import { Router } from 'preact-router';

import style from './style';

import Header from './header';
import TrackButton from './track-button';

// import Home from '../routes/home';
// export default class App extends Component {
// 	/** Gets fired when the route changes.
// 	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
// 	 *	@param {string} event.url	The newly routed URL
// 	 */
// 	handleRoute = e => {
// 		this.currentUrl = e.url;
// 	};
// 	render() {
// 		return (
// 			<div id="app">
// 				<Header />
// 				<Router onChange={this.handleRoute}>
// 					<Home path="/" />
// 				</Router>
// 			</div>
// 		);
// 	}
// }

const Days = () => {
	const days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

	const dates = Array.from(Array(14).keys()).map(d => d + 10).map(d => (
		<div class={style.date_container}>
			<span class={style.day}>{days[d % days.length]}</span>
			<span class={style.date}>{d}</span>
		</div>
	));

	return (
		<div class={style.dates}>
			{dates}
		</div>
	);
};

const App = () => (
	<div id="app">
		<Header />
		<Days />
		<div class={style.container}>
			<TrackButton />
		</div>
	</div>
);

export default App;
