import React from "react";
import Select from "react-select";

// {
//     options: [{ value, label }],
//     onChange: function(){},
//     placeholder: "something"
// }

export default (props) => {
	const OPTION_LIMIT = 15;
	let index = 0;
	// const filterOption = props.filterOption || ((option, query) => {
	// 	const label = option.data.query || option.label;
	// 	return label.toLowerCase().includes(query.toLowerCase()) && index++ < OPTION_LIMIT;
    // });
    
    const filterOption = props.filterOption || ((option, query) => {
			console.log("option", option);
			console.log("query", query);
			const label = (option.data.q || option.data.query || option.label || "").toString();
			console.log("label", label);
			return label.toString().trim().toLowerCase().includes(query.toString().toLowerCase()) && index++ < OPTION_LIMIT;
		;
	});
	const options = props.options || [];

	return (
		<Select
			isMulti
			defaultMenuIsOpen={false}
			className="selector-container"
			classNamePrefix="selector"
			options={options}
			onInputChange={() => { index = 0; }}
			onChange={
				(selectedOption) => {
					if (props.onChange) props.onChange(selectedOption ? selectedOption.map((item) => item.value) : []);
				}
			}
			value={
				(props.options || []).filter((option) => (props.value || []).find((item) => option.value == item) != null)
			}
			formatOptionLabel={props.formatOptionLabel}
			placeholder={props.placeholder}
			getOptionLabel={props.getOptionLabel}
			filterOption={filterOption}
			isDisabled={props.disabled}
			loadOptions={props.loadOptions}
			autoBlur={props.autoBlur}
		/>
	);
};
