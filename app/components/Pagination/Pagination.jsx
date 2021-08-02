import React from "react";
import buildFooter from "./buildFooter";
import "./Pagination.module.scss";

export default props => {

	const { offset, limit, count, onClick } = props;
	const pages = buildFooter(offset, limit, count);
	const totalPages = Math.ceil(count / limit);

	return (
		<div
			style={props.style || {}}
			className={"table-pagination " + props.className}
		>
			<a
				className="prev"
				className={offset == 0 ? "disabled" : ""}
				onClick={_ => offset == 0 ? _ : onClick(offset - 1)}
			>
				<i className="icon-arrow-left7" />
			</a>
			{
				pages.map(page => <a
					key={page}
					className={offset == page - 1 ? "active" : ""}
					onClick={_ => offset != page - 1 ? onClick(page - 1) : _}
				>
					{page}
				</a>
				)
			}
			<a
				className="next"
				className={offset + 1 == totalPages ? "disabled" : ""}
				onClick={_ => offset + 1 == totalPages ? _ : onClick(offset + 1)}
			>
				<i className="icon-arrow-right7" />
			</a>
		</div>
	);
};
