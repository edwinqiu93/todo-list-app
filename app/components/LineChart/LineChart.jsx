import _ from "lodash";
import React from "react";
import { Line } from "react-chartjs-2";
import { autobind } from "react-decoration";
import "chartjs-plugin-datalabels";
import LineChartLegend from "../LineChartLegend";
import LineChartController from "../LineChartController";

class LineChart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedOptions: [],
			digit: false,
		};
	}

	@autobind
	setSelectedOptions(selectedOptions) {
		this.setState({ selectedOptions: selectedOptions });
	}

	@autobind
	setDigit() {
		const digit = this.state.digit;
		this.setState({ digit: !digit });
	}

	render() {

		let {

			data,
			type,
			name,
			yLabel,
			title,
			dollarSign,
			className,
			fill,
			backgroundColor,
			borderWidth,
			pointHoverRadius,
			tooltipsMode,
			hoverMode,
			colors,
			reverse,
			legendBottom,
			groupByOthers,
			titlePadding,

		} = this.props;

		data = JSON.parse(JSON.stringify(data));

		data.forEach(shipMethod => {
			let deliveredArr = [];
			for (let item of shipMethod.data) {
				// console.log("item", item);
				if (item.ShipStatusId === "DV") {
					deliveredArr.push(item);
				}
			}
			shipMethod.deliveredArr = deliveredArr;
			shipMethod.deliveredTransitBus = _.meanBy(deliveredArr, "TransitTimeBus");
			shipMethod.deliveredTransitBus = typeof shipMethod.deliveredTransitBus == "number" ? _.round(shipMethod.deliveredTransitBus, 2) : shipMethod.deliveredTransitBus;
			shipMethod.deliveredTransitReg = _.meanBy(deliveredArr, "TransitTimeReg");
			shipMethod.deliveredTransitReg = typeof shipMethod.deliveredTransitReg == "number" ? _.round(shipMethod.deliveredTransitReg, 2) : shipMethod.deliveredTransitReg
		});

		// if (groupByOthers && data.length > 3) {
		// 	const threshold = _.sumBy(data, "sum") / 20;
		// 	data = data.reduce((array, current) => {
		// 		if (current.sum > threshold) {
		// 			array.push(current);
		// 		} else {
		// 			const others = array.find(item => item[name] === "Others");
		// 			if (others) {
		// 				others.data.forEach((cur, index) => cur[type] += current.data[index][type]);
		// 			} else {
		// 				current[name] = "Others";
		// 				array.push(current);
		// 			};
		// 		};
		// 		return array;
		// 	}, [])
		// };

		if (!reverse) {
			data = _.sortBy(data, "sum").reverse();
		};

		// console.log("INITIAL LINE DATA", data);

		const xAxesLabel = data[0].data.map(data => data.date);

		const legendNames = data.map((data => data[name]));

		let dataSets = data.map((currentData, index) => {
			const dataObject = {
				label: currentData[name],
				data: currentData.data.map(curr => curr[type]),
				fill: fill,
				pointRadius: 0,
				borderColor: colors[index],
				borderWidth: borderWidth,
				backgroundColor: backgroundColor[index],
				pointBackgroundColor: colors[index],
				pointHoverRadius: pointHoverRadius,
				pointHoverBackgroundColor: colors[index],
				hidden: this.state.selectedOptions.includes(currentData[name]),
			};
			if (dataObject.data.length > 150) {
				dataObject.pointRadius = 0;
				dataObject.pointHoverRadius = 2;
			};
			return dataObject;
		});

		const days = dataSets[0].data.length;
		let xAxesStepSize;

		if (days > 0 && days < 21) {
			xAxesStepSize = "day";
		} else if (days > 21 && days < 100) {
			xAxesStepSize = "week";
		} else if (days >= 100 && days < 361) {
			xAxesStepSize = "month";
		} else if (days >= 361 && days < 1080) {
			xAxesStepSize = "quarter";
		} else {
			xAxesStepSize = "year";
		};

		const lineData = {
			labels: xAxesLabel,
			datasets: dataSets,
		};

		let digitFontSize = "11";
		if (this.state.digit) {
			digitFontSize = "0";
		};

		const signDivider = dollarSign ? ": $" : ": ";

		const options = {
			responsive: true,
			maintainAspectRatio: false,
			layout: {
				padding: {
					left: 20,
					right: 20,
					top: 0,
					bottom: 20,
				},
			},

			title: {
				display: true,
				text: title,
				padding: titlePadding,
			},

			legend: {
				display: false,
			},

			scales: {
				xAxes: [{
					type: "time",
					time: {
						unit: xAxesStepSize,
						stepSize: 1,
						displayFormats: {
							day: "MMM DD, YYYY",
							week: "MMM DD, YYYY",
							month: "MMM DD, YYYY",
							quarter: "MMM DD, YYYY",
							year: "MMM DD, YYYY",
						}
					},
					scaleLabel: {
						display: true,
						labelString: "Date",
						fontSize: 12,
					},
					ticks: {
						fontSize: 12,
						padding: 0,
						autoSkip: true,
						maxRotation: 0,
						autoSkipPadding: 20,
					}
				}],
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: yLabel,
						fontSize: 12,
					},
					ticks: {
						callback: value => {
							if (dollarSign) {
								return "$" + (value).toLocaleString("en");
							} else {
								return (value).toLocaleString("en");
							}
						},
						fontSize: 12,
						padding: 12
					}
				}]
			},

			tooltips: {
				mode: tooltipsMode,
				position: "nearest",
				bodySpacing: 10,
				xPadding: 15,
				yPadding: 15,
				callbacks: {
					label: function (tooltipItem, data) {
						return data.datasets[tooltipItem.datasetIndex].label + signDivider + (Math.round(tooltipItem.yLabel)).toLocaleString("en");
					},
				},
			},

			hover: {
				mode: hoverMode,
				animationDuration: 0,
			},

			animation: {
				show: {
					x: {
						from: 0
					},
					y: {
						from: 0
					}
				},
				hide: {
					x: {
						to: 0
					},
					y: {
						to: 0
					}
				}
			},

			responsiveAnimationDuration: 1,

			plugins: {
				datalabels: {
					// backgroundColor: function (context) {
					// 	return context.dataset.backgroundColor;
					// },
					// borderRadius: 4,
					// display: function(context) {
					// 	return context.dataIndex % 2 && context.datasetIndex < 3; 
					// },
					color: "black",
					font: {
						// weight: "bold",
						size: digitFontSize,
					},
					formatter: Math.round,
					align: "end",
					display: "auto"
				}
			}
		};

		return (
			// <div className={legendBottom ? "chart-legend-bottom" : "chart-legend-right"}>
			// 	<div className={className}>
			// 		<LineChartController
			// 			names={legendNames}
			// 			selectedOptions={this.state.selectedOptions}
			// 			setSelectedOptions={selectedOptions => this.setSelectedOptions(selectedOptions)}
			// 			digit={this.state.digit}
			// 			setDigit={this.setDigit}
			// 		/>
			// 		<Line
			// 			data={lineData}
			// 			options={options}
			// 		/>
			// 	</div>
			// 	<LineChartLegend
			// 		names={legendNames}
			// 		colors={colors}
			// 		selectedOptions={this.state.selectedOptions}
			// 		setSelectedOptions={selectedOptions => this.setSelectedOptions(selectedOptions)}
			// 		legendBottom={legendBottom}
			// 		digit={this.state.digit}
			// 		setDigit={this.setDigit}
			// 	/>
			// </div>
			<div>

			</div>
		);
	}
}

export default LineChart;