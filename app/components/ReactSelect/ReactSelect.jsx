import React from "react";
import { autobind } from "react-decoration";
import Select from "react-select";
import Creatable from "react-select/creatable";
import classnames from "utils/classnames";
import css from "./ReactSelect.module.scss";
const OPTION_LIMIT = 100;

// class ReactSelect extends React.Component {

// 	@autobind
// 	getFilterOption() {
// 		const OPTION_LIMIT = 15;
// 		const { filterOption } = this.props;
// 		if (filterOption)
// 			return filterOption;
// 		return function (option, query) {
// 			let index = 0;
// 			const label = option.data.query || option.label;
// 			return label.toString().trim().toLowerCase().includes(query.toLowerCase()) && index++ < OPTION_LIMIT;
// 		};
// 	}

// 	@autobind
// 	getComponent() {
// 		let component = Select;
// 		if (this.props.creatable)
// 			component = Creatable;
// 		return component;
// 	}

// 	@autobind
// 	getComponents() {
// 		let components = {};
// 		if (this.props.components)
// 			return this.props.components;
// 		if (this.props.clearable)
// 			components.ClearIndicator = null;
// 		return components;
// 	}

// 	@autobind
// 	getFormatOptionLabel() {
// 		let formatOptionLabel = this.props.formatOptionLabel;
// 		if (!formatOptionLabel && this.props.withMeta)
// 			return function (option) {
// 				return (
// 					<div>
// 						<span>{option.label}</span>
// 						<span className="meta block">{option.meta}</span>
// 					</div>
// 				);
// 			}
// 	}

// 	@autobind
// 	onChange(selectedOption, actionMeta) {
// 		if (this.props.onChange)
// 			this.props.onChange(
// 				selectedOption ?
// 					this.props.isMulti ? selectedOption.map(item => item.value) : selectedOption.value : null,
// 				actionMeta
// 			);
// 		if (actionMeta.action == "create-option") {
// 			if (this.props.onCreate)
// 				this.props.onCreate(this.props.isMulti ? last(selectedOption)?.label : selectedOption.label);
// 		}
// 	}

// 	render() {

// 		const { options } = this.props;

// 		const Component = this.getComponent();
// 		const filterOption = this.getFilterOption();
// 		const components = this.getComponents();
// 		const formatOptionLabel = this.getFormatOptionLabel();

// 		return (
// 			<Component
// 				defaultMenuIsOpen={this.props.defaultMenuIsOpen}
// 				options={options || []}
// 				onInputChange={() => { index = 0; }}
// 				filterOption={filterOption}
// 				components={components}
// 				isDisabled={this.props.disabled}
// 				formatOptionLabel={formatOptionLabel}
// 				{...this.props}
// 				isClearable={this.props.isClearable === void 0 ? true : this.props.isClearable}
// 				onChange={this.onChange}
// 				value={this.props.value && (this.props.options || []).find((option) => this.props.value == option.value)}
// 			/>
// 		);
// 	}

// }

// export default ReactSelect;

class ReactSelect extends React.Component {

	constructor(props) {
		super(props);
	}

	index = 0;

	@autobind
	getFilterOption() {
		const { filterOption } = this.props;
		if (filterOption)
			return filterOption;
		return (option, query) => {
			// console.log("option", option);
			// console.log("query", query);
			const label = (option.data.q || option.data.query || option.label || "").toString();
			// console.log("label", label);
			return label.toString().trim().toLowerCase().includes(query.toString().toLowerCase()) && this.index++ < OPTION_LIMIT;
		};
	}

	@autobind
	getComponent() {
		let component = Select;
		if (this.props.creatable)
			component = Creatable;
		return component;
	}

	@autobind
	getComponents() {
		let components = {};
		if (this.props.components)
			return this.props.components;
		if (this.props.clearable)
			components.ClearIndicator = null;
		return components;
	}

	@autobind
	getFormatOptionLabel() {
		let formatOptionLabel = this.props.formatOptionLabel;

		if (formatOptionLabel)
			return formatOptionLabel;

		if (!formatOptionLabel && this.props.withMeta) {
			return function (option) {

				if (option.logo) {
					return (
						<div className="description-group">
							<img 
								className="logo"
								src={option.logo} 	
							/>
							<div className="info">
								<span>{option.label}</span>
								<span className="meta">{option.meta}</span>
							</div>
						</div>
					);
				}

				if (option.customLogo) {
					// console.log("custom", option.customLogo);
					return (
						<div className="description-group">
							<i className={`${option.customLogo} customLogo`}></i>
							<div className="info">
								<span>{option.label}</span>
								<span className="meta">{option.meta}</span>
							</div>
						</div>
					);
				}

				return (
					<div>
						<span>{option.label}</span>
						<span className="meta display-block overflow-hidden">{option.meta}</span>
					</div>
				);
			}
		}

	}

	@autobind
	onChange(selectedOption, actionMeta) {
		// console.log("SELECTED", selectedOption)
		if (this.props.onChange)
			this.props.onChange(
				selectedOption ?
					this.props.isMulti ? selectedOption.map(item => item.value) : selectedOption.value : null,
				actionMeta
			);
		if (actionMeta.action == "create-option") {
			if (this.props.onCreate)
				this.props.onCreate(this.props.isMulti ? last(selectedOption)?.label : selectedOption.label);
		}
	}

	@autobind
	findValue() {
		if (this.props.isMulti) {
			return (this.props.options || []).filter((option) => (this.props.value || []).find((item) => option.value == item) != null);
		} else {
			return this.props.value && (this.props.options || []).find((option) => this.props.value == option.value)
		}
	}

	render() {

		const { options } = this.props;
		// console.log("OPTIONS", options);
		// console.log("PROPS", this.props);

		const Component = this.getComponent();
		// console.log("component", Component);
		const filterOption = this.getFilterOption();
		const components = this.getComponents();
		const formatOptionLabel = this.getFormatOptionLabel();
		const findValue = this.findValue();

		// options && options[0]?.value === 1 ? console.log("props", this.props) : null

		return (
			<Component
				className={css["react-select"]}
				classNamePrefix="react-select"
				defaultMenuIsOpen={this.props.defaultMenuIsOpen}
				options={options || []}
				onInputChange={() => { this.index = 0 }}
				filterOption={filterOption}
				components={components}
				isDisabled={this.props.disabled}
				formatOptionLabel={formatOptionLabel}
				{...this.props}
				isClearable={this.props.isClearable === void 0 ? true : this.props.isClearable}
				onChange={this.onChange}
				value={findValue}
				// value={this.props.value && (this.props.options || []).find((option) => this.props.value == option.value)}
				// value={(this.props.options || []).filter((option) => (this.props.value || []).find((item) => option.value == item) != null)}
			/>
		);
	}

}

export default ReactSelect;

// import React from "react";
// import Select from "react-select";
// import Creatable from "react-select/creatable";
// import classnames from "utils/classnames";
// import last from "lodash/last";

// export default props => {

// 	const OPTION_LIMIT = 15;

// 	let index = 0;
// 	const filterOption = props.filterOption || ((option, query) => {
// 		const label = option.data.query || option.label;
// 		return label.toLowerCase().includes(query.toLowerCase());
// 	});
// 	// const filterOption = props.filterOption || ((option, query) => {
// 	// 		console.log("option", option);
// 	// 		console.log("query", query);
// 	// 		const label = (option.data.q || option.data.query || option.label || "").toString();
// 	// 		console.log("label", label);
// 	// 		return label.toString().trim().toLowerCase().includes(query.toString().toLowerCase()) && this.index++ < OPTION_LIMIT;
// 	// 	;
// 	// });

// 	const options = props.options || [];
// 	const Component = props.creatable ? Creatable : Select;

// 	let components = null;
// 	if (props.clearable)
// 		components = { ClearIndicator: null };

// 	let formatOptionLabel = void 0;

// 	if (props.withMeta) {
// 		formatOptionLabel = option => (
// 			<div>
// 				<span>{option.label}</span>
// 				<span className="meta block">{option.meta}</span>
// 			</div>
// 		);
// 	}

// 	return (
// 		<Component
// 			defaultMenuIsOpen={false}
// 			classNamePrefix="selector"
// 			options={options}
// 			onInputChange={() => { index = 0; }}
// 			// filterOption={filterOption}
// 			components={components}
// 			isDisabled={props.disabled}
// 			formatOptionLabel={formatOptionLabel}
// 			{...props}
// 			className={classnames("selector-container", props.className)}
// 			isClearable={props.isClearable === void 0 ? true : props.isClearable}
// 			onChange={
// 				(selectedOption, actionMeta) => {
// 					if (props.onChange)
// 						props.onChange(
// 							selectedOption ?
// 								props.isMulti ? selectedOption.map(item => item.value) : selectedOption.value : null,
// 							actionMeta
// 						);
// 					if (actionMeta.action == "create-option") {
// 						if (props.onCreate)
// 							props.onCreate(props.isMulti ? (last(selectedOption) || {}).label : selectedOption.label);
// 					}
// 				}
// 			}
// 			value={
// 				props.value && (props.options || []).find((option) => props.value == option.value)
// 			}
// 		/>
// 	);
// };
