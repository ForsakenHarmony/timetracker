import styled, { css } from 'preact-emotion';

const Header = styled.header`
	display: flex;
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	padding: 0;
	z-index: 50;
	text-align: center;
	align-items: center;
	height: 50px;

	h1 {
		text-transform: uppercase;
		font-size: 24px;
		font-weight: 600;
		margin: 0;
	}
`;

const flex = css`
	flex: 1;
	display: flex;
`;

const Side = styled.div`
	${flex}
	padding: 5px;
	flex-direction: ${props => props.right ? 'row-reverse' : 'row'};
`;

const Add = styled.button`
	width: 30px;
	height: 30px;
	float: right;
	font-weight: 600;
	background-color: transparent;
	align-self: center;
	border-radius: 15px;

	border-color: black;
`;

const Head = () => (
	<Header>
		<Side left />
		<h1>Timetracker</h1>
		<Side right >
			<Add>+</Add>
		</Side>
	</Header>
);

export default Head;
