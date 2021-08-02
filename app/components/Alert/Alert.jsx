import React from "react";
import classnames from "utils/classnames";
import isComponentType from "utils/isComponentType";

class Alert extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: true };
	}

	render() {
		const {
			type,
			className,
			title,
			dismissible,
		} = this.props;

		const {
			show,
		} = this.state;

		if (!show) return <></>;

		const alertClass = classnames(
			"alert",
			isComponentType(type) && (`alert-${type}`),
			className,
		);

		return (
			<div className={alertClass}>
				{title && <span className="text-semibold">{title}</span>}
				{this.props.children}
				{
					dismissible && (
						<a
							className="close"
							aria-label="close"
							onClick={() => this.setState({ show: !show })}
						>
							<i className="icon-cross" />
						</a>
					)
				}
  			</div>
		);
	}
}

Alert.defaultProps = {
	type: "info",
	dismissible: false,
};

export default Alert;
