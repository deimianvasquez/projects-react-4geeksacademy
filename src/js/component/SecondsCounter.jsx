import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

const SecondsCounter = props => {
	return (
		<div className="counter">
			<div className="col">
				<i className="far fa-clock" />
			</div>
			<div className="col">{props.numberFour % 10}</div>
			<div className="col">{props.numberThree % 10}</div>
			<div className="col">{props.numberTwo % 10}</div>
			<div className="col">{props.numberOne % 10}</div>
		</div>
	);
};
export default SecondsCounter;

SecondsCounter.propTypes = {
	numberOne: PropTypes.number,
	numberTwo: PropTypes.number,
	numberThree: PropTypes.number,
	numberFour: PropTypes.number
};
