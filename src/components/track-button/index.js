import { Component } from 'preact';
import smooth from './smooth-path';

import styled, { keyframes, css } from 'preact-emotion';

const Wrapper = styled.div`
	label: wrapper;
	width: calc(100% - 20px);
	display: flex;
	justify-content: center;
	padding: 20px 10px;
`;

const gradientAnim = keyframes`
	0% {
		background-position: 100% 0%
	}
	50% {
		background-position: 0% 100%
	}
	100% {
		background-position: 100% 0%
	}
`;

const Container = styled.div`
	label: container;
	border-radius: 35px;
	transition: .5s ease-in-out;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: ${props => (props.active ? '100%' : '70px')}
	height: ${props => (props.active ? '220px' : '70px')}
	padding: ${props => (props.active ? '10px' : '0px')}

	background: linear-gradient(225deg, #4de3c1, #7797ec, #ad88f4, #fe937f, #ff66b1);
	background-size: 1200% 1200%;
	animation: ${props => (props.active ? `${gradientAnim} 30s ease infinite`: 'none')}
`;

const anim = keyframes`
	0% {
		transfrom: scale(.4);
	}
	100% {
		transform: scale(1);
	}
`;

const Button = styled.button`
	label: button;
	display: flex;
	width: 70px;
	height: 70px;
	border-radius: 35px;
	border: none;
	justify-content: center;
	padding: 0;
	transition: margin .5s ease-in-out;
	background: ${props => (props.active ? '#fff' : '#4de3c1')};
	margin: ${props => (props.active ? '20px' : '0px')};
	transform: ${props => (props.active ? 'scale(0.4)' : 'scale(1)')};
	animation: ${props => (props.active ? `${anim} .5s ease-in-out 0s normal both` : 'none')};

	&:hover {
		border: none;
	}

	&:focus {
		outline: none;
	}
`;

const svgAnim = keyframes`
0% {
	transfrom: scale(0);
}
99% {
	transfrom: scale(0);
}
100% {
	transform: scale(1);
}
`;

const svgAnimCls = css`
	height: auto;
	line-height: 0;
	transform: scale(0);
	animation: ${svgAnim} .7s ease-in-out both;
`;

const Time = styled.div`
	overflow: hidden;
	transition: .5s ease-in-out;
	margin: ${props => (props.active ? '20px' : '0px')};
	max-height: ${props => (props.active ? 'auto' : '0px')};
`;

const Start = () => (
	<div className={svgAnimCls}>
		<svg width="30px" height="30px">
			<path d={smooth('7,3 26,15 7,27', 4)} fill="white" />
		</svg>
	</div>
);

const Stop = () => (
	<div className={svgAnimCls}>
		<svg width="30px" height="30px">
			<path d={smooth('4,4 26,4 26,26 4,26', 4)} fill="lightgray" />
		</svg>
	</div>
);

export default class TrackButton extends Component {
	state = { tracking: true };

	onClick = () => {
		console.log('click');
		this.setState({ tracking: !this.state.tracking });
	}

	render({ }, { tracking }, { }) {
		return (
			<Wrapper>
				<Container active={tracking}>
					<Time active={tracking}>
						00:00
					</Time>
					<Button active={tracking} onClick={this.onClick}>
						{tracking ? <Stop /> : <Start />}
					</Button>
				</Container>
			</Wrapper>
		);
	}
}
