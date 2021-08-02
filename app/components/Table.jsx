/**
 * 
 * Component wrapper for table 
 * 
 */
import React from "react";
import { autobind } from "react-decoration";
import noop from "lodash/noop";
import classnames from "utils/classnames";
import pagination from "utils/pagination";

class Table extends React.Component {

	constructor(props) {
		super(props);
		this.state = { offset: 0 };
	}

	@autobind
	onPageClick(offset) {
		return this.setState({ offset });
	}

	@autobind
	getHeaders() {
		let headers = this.props.headers;
		headers = headers.map(item => {
			if (typeof item !== "object")
				return {
					name: item
				};
			return item;
		});
		return headers;
	}

	render() {

		const {
			offset
		} = this.state;

		const {
			search, responsive, scrollable, striped, hover, size,
			limit
		} = this.props;

		const data = this.props.data;
		const headers = this.getHeaders();

		const containerClass = classnames(
			responsive && "table-responsive",
			scrollable && "pre-scrollable"
		);

		const tableClass = classnames(
			"table",
			striped && "table-striped",
			hover && "table-hover",
			size && `table-${size}`
		);

		const { start, end } = pagination.describe(offset, limit, data.length);
		const total = Math.ceil(data.length / limit);
		const pages = pagination.calculate(offset, limit, data.length);
		const rows = scrollable ? data : data.slice(offset * limit, offset * limit + limit);

		return (
			<div className={containerClass}>
				<table className={tableClass}>
					<thead>
						<tr>
							{
								headers.map((header, index) => (
									<th
										key={index}
										className={Number.isInteger(header.width)? `width${header.width}`: void 0}
									>
										{header.name}
									</th>
								))
							}
						</tr>
					</thead>
					<tbody>
						{
							rows.map((row, index) => (
								<tr key={index}>
									{
										row.map((item, index) => <td key={index}>{item}</td>)
									}
								</tr>
							))
						}
						{
							rows.length == 0 && <tr>
								<td className="text-center" colSpan={headers.length}>
									<span> No data available </span>
								</td>
							</tr>
						}
					</tbody>
					{
						!scrollable && <tfoot>
							<tr>
								<td colSpan="100">
									<div>
										<div className="info">
											<span> Showing <b>{start}</b> to <b>{end}</b> of {data.count} entries </span>
										</div>
										<div className="paginate">
											<ul>
												<li
													className={classnames(
														"prev",
														offset == 0 && "disabled"
													)}
													onClick={offset == 0 ? noop : () => this.onPageClick(offset - 1)}
												>
													<i className="fa fa-angle-left" />
												</li>
												{
													pages.map(page => (
														<li
															key={page}
															className={classnames(offset == page - 1 && "active")}
															onClick={offset != page - 1 ? () => this.onPageClick(page - 1) : noop}
														>
															{page}
														</li>
													))
												}
												<li
													className={classnames(
														"next",
														offset + 1 == total && "disabled"
													)}
													onClick={offset + 1 == total ? noop : () => this.onPageClick(offset + 1)}
												>
													<i className="fa fa-angle-right" />
												</li>
											</ul>
										</div>
									</div>
								</td>
							</tr>
						</tfoot>
					}
				</table>
			</div>
		);
	}

}


Table.defaultProps = {
	headers: [],
	data: [],
	limit: 15,
	search: false,
	responsive: true,
	scrollable: false,
	striped: false,
	hover: false,
	size: null
};

export default Table;
