import React from "react";
import AsyncSelect from "react-select/lib/Async";

// {
//     options: [{ value, label }],
//     onChange: function(){},
//     placeholder: "something"
// }
export default (props) => (
	<AsyncSelect
		isMulti
		classNamePrefix="selector"
		options={props.options}
		onChange={
			(selectedOption) => {
				if (props.onChange) props.onChange(selectedOption.map((item) => item.value));
			}
		}
		value={
			(props.options || []).filter((option) => props.value.find((item) => option.value == item) != null)
		}
		formatOptionLabel={props.formatOptionLabel}
		placeholder={props.placeholder || "Click to select"}
		getOptionLabel={props.getOptionLabel}
		filterOption={props.filterOption}
		isDisabled={props.disabled}
		loadOptions={props.loadOptions}
	/>
);
