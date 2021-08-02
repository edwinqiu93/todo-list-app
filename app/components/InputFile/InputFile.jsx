import React from "react";
import css from "./InputFile.module.scss";

class InputFile extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	render() {
		const { multiple } = this.props;
		const children = React.Children.map(
			this.props.children,
			(child) => React.cloneElement(
				child,
				{
					onClick: () => {
						if (child.props.onClick) child.props.onClick();
						this.inputRef.current.click();
					},
				},
			),
		);
		return (
			<>
				<input
					className={css.input}
					type="file"
					multiple={multiple}
					ref={this.inputRef}
					onChange={(event) => {
					  if (this.props.onChange) this.props.onChange(event);
					  this.inputRef.current.value = null;
					}}
  				/>
				{children}
  			</>
		);
	}
}

InputFile.defaultProps = {
	multiple: false,
};

export default InputFile;
