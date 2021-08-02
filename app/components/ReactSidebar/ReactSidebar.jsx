import React from "react";
import { autobind } from "react-decoration";
import Sidebar from "react-sidebar";
import { connect } from "react-redux";
import { action } from "modules";
import "./ReactSidebar.module.scss";

@connect(
	// mapStateToProps
	state => ({
		show: state.sidebar.show,
		payload: state.sidebar.payload
	}),
	// mapDispatchToProps
	(dispatch, ownProps) => ({
		open: () => dispatch(action.sidebar.open(ownProps.payload)),
		close: () => dispatch(action.sidebar.close())
	})
)
class ReactSidebar extends React.Component {

	@autobind
	renderSidebar() {
		return (
			<b> Sidebar Content </b>
		);
	}

	render() {
		const { show, close, open } = this.props;
		return (
			<Sidebar
				sidebar={<this.renderSidebar />}
				open={show}
				onSetOpen={() => show ? close() : open()}
			>
				{this.props.children}
			</Sidebar>
		)
	}

}

export default ReactSidebar;
