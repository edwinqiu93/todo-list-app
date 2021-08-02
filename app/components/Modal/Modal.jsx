import React from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import { action } from "modules";
ReactModal.setAppElement("body");

@connect(
	// mapStateToProps
	state => ({
		show: state.modal.show,
		tag: state.modal.tag,
		payload: state.modal.payload
	}),
	// mapDispatchToProps
	dispatch => ({
		close: () => dispatch(action.modal.close())
	})
)
class Modal extends React.Component {

	constructor(props) {
		super(props);
		this.state = { modals: {} };
	}

	async componentDidMount() {
		const modals = await import("../../modal");
		this.setState({ modals: modals });
	}

	render() {
		const { modals } = this.state;
		const { show, tag, payload, close } = this.props;
		let Modal = modals[tag];
		if (!Modal)
			return (<></>);
		return (
			<ReactModal
				isOpen={show}
				className="modal-container"
				overlayClassName="modal-backdrop"
				closeTimeoutMS={200}
			>
				<Modal {...payload} close={close} />
			</ReactModal>
		);
	}
}

export default Modal;
