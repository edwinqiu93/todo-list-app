import React from "react";

class LineChartLegend extends React.Component {

	render() {

		const {

			names,
			colors,
			selectedOptions,
			setSelectedOptions,
			legendBottom,

		} = this.props;

		return (
			<div>
				<ul style={!legendBottom ? (names.length > 8 ? { width: "240px" } : { width: "120px" }) : { width: "100%" }}>
					{
						names.map((data, index) => {
							return (
								<li
									key={index}
									onClick={() => {
										let selected = selectedOptions;
										if (selected.includes(data)) {
											selected = selected.filter(name => name != data);
											setSelectedOptions(selected);
										} else {
											selected.push(data);
											setSelectedOptions(selected);
										};
									}}
								>
									<i className="fa fa-circle" style={{ color: colors[index] }} />
									<span className={(selectedOptions.includes(data) ? "strikeout" : undefined)}>{data}</span>
								</li>
							);
						})
					}
				</ul >
			</div>
		);
	}
}

export default LineChartLegend;