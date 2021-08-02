import React from "react";

class LineChartController extends React.Component {

	render() {

		const {

			names,
			selectedOptions,
			setSelectedOptions,
			digit,
			setDigit

		} = this.props;

		return (
			<div className="legend-toggle-button">
				<ul>
					<li
						onClick={() => {
							if (selectedOptions.length != names.length) {
								setSelectedOptions(names);
							} else {
								setSelectedOptions([]);
							};
						}}>
						{
							selectedOptions.length == names.length ?
								<>
									<i className="fa fa-expand" style={{ color: "#4a87b8" }} />
									<span style={{ color: "#4a87b8" }} > All </span>
								</>
								: <>
									<i className="fa fa-compress" style={{ color: "#4a87b8" }} />
									<span style={{ color: "#4a87b8" }} > Hide </span>
								</>
						}
					</li>
					<li onClick={() => {
						if (digit) {
							setDigit();
						} else {
							setDigit();
						};
					}}>
						{
							digit ?
								<>
									<i className="icon-price-tags" style={{ color: "#4a87b8" }} />
									<span style={{ color: "#4a87b8" }} > On </span>
								</>
								: <>
									<i className="icon-price-tags2" style={{ color: "#4a87b8" }} />
									<span style={{ color: "#4a87b8" }} > Off </span>
								</>
						}
					</li>
				</ul>
			</div>
		);
	}
}

export default LineChartController;