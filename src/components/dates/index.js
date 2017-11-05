import styled from 'preact-emotion';
import { eachDay, addDays, subDays, startOfToday, format, isToday, isFuture } from 'date-fns';

const Dates = styled.div`
	display: block;
	white-space: nowrap;
	overflow-x: scroll;
	padding: 10px 0;
`;

const Container = styled.div`
	display: inline-flex;
	flex-direction: column;
	width: 40px;
	align-items: center;
`;

const Day = styled.span`
	font-size: 12px;
	text-transform: uppercase;
	color: gray;
`;

const Date = styled.span`
	font-size: 18px;
	font-weight: 600;
	color: ${props => {
		if (props.today) {
			return '#8355DC';
		}
		if (props.future) {
			return 'inherit';
		}
		return 'gray';
	}}
`;

const Days = () => {
	const today = startOfToday();
	const dates = eachDay(subDays(today, 7), addDays(today, 7));

	return (
		<Dates>
			{dates.map(d => (
				<Container>
					<Day>{format(d, 'ddd')}</Day>
					<Date today={isToday(d)} future={isFuture(d)}>{d.getDate()}</Date>
				</Container>
			))}
		</Dates>
	);
};

export default Days;
