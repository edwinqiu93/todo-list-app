/* eslint-disable */

import React from "react";
import { autobind } from "react-decoration";
// import * as api from "api";
import Modal from "components/Modal/Content";

class DefaultModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			loading: true
		};
	}

	
	submit = async () => {
		this.setState({ loading: true });
		try {
			await (() => { });
			this.setState({ loading: false, loaded: true });
			if (this.props.callback) {
				this.props.callback();
			}
			return this.props.close();
		} catch (error) {
			console.error(error);
			window.alert("Unexpected Error");
			this.setState({ loading: false });
		}
		return true;
	}

	render() {
		return (
			<Modal
				size="lg"
				header="Default Modal"
				icon="wb-cloud"
				buttons={[{ title: "Submit", type: "success" }]}
			>
				It is the default modal
			</Modal>
		);
	}

}

export default DefaultModal;
