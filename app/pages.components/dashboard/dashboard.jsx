import React from "react";
import Panel from "components/Panel";
import Button from "components/Button";
import { autobind } from "react-decoration";
import objectPath from "object-path";
import * as api from "api";
import _ from "lodash";
import noop from "lodash/noop";
import { connect } from "react-redux";
import { action } from "../../modules";
import ReactSelect from "components/ReactSelect";


const mapDispatchToProps = dispatch => ({
	openModal: (payload) => dispatch(action.modal.open("UPDATESKU", payload)),
	openDelete: (payload) => dispatch(action.modal.open("DELETESKU", payload)),
});

@connect(null, mapDispatchToProps)
class Dashboard extends React.Component { 

	state = {
		loaded: false, 
		loading: false,
		data: []
	}

	getInitialPayload() {
		return {
			
		};
	}

	handleChange = path => value => {
		const state = { ... this.state };
		objectPath.set(state, path, value);
		this.setState(state);
	};


	componentDidMount = async () => {
		
	}

	render(){
		const { loading, loaded } = this.state;
		console.log("state", this.state);

		return (
			<div className="container-fluid" id="dashboard_top">

			</div>
		);
	}

}

export default Dashboard;
