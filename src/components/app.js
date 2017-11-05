import Header from './header';
import TrackButton from './track-button';
import Dates from './dates';

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

const App = () => (
	<div id="app">
		<Header />
		<Dates />
		<TrackButton />
	</div>
);

export default App;
