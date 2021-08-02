import React from "react";
import classnames from "utils/classnames";
import isComponentType from "utils/isComponentType";
import noop from "lodash/noop";

class Button extends React.Component {
	render() {
		const {
			type,
			disabled,
			onClick,
			title,
			children,
			icon,
			className,
			size,
			width,
			fontSize
		} = this.props;

		const buttonClass = classnames(
			"btn",
			`btn-${size}`,
			`btn-${isComponentType(type) ? type : "default"}`,
			className,
		);

		return (
			<button
				className={buttonClass}
				disabled={disabled}
				onClick={disabled ? noop : onClick}
				style={{ width: `${width}`, fontSize: `${fontSize}`}}
  			>
				{icon && !children && <i className={icon} />}
				<span>{title || children}</span>
 			 </button>
		);
	}
}

Button.defaultProps = {
	type: "default",
	size: "md",
	disabled: false,
};

export default Button;
