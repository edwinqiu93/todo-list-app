import React from "react";
import css from "./Spinner.module.scss";

class Spinner extends React.Component {
	componentDidMount() {
		document.body.style.overflowY = "hidden";
	}

	componentWillUnmount() {
		document.body.style.overflowY = "auto";
	}

	render() {
		return (
			<div className={css.rolling}>
				<div className={css.spinner}>
					<i className="fa fa-spinner" />
				</div>
			</div>
		);
	}
}

export default Spinner;
