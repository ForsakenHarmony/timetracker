import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<div class={style.left} />
				<h1 class={style.center}>Timetracker</h1>
				<div class={style.right}>
					<button>+</button>
				</div>
			</header>
		);
	}
}
