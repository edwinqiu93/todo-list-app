import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { connect } from "react-redux";
import { action } from "modules";

@connect(
	// mapStateToProps
	state => ({
		images: state.images.images,
		show: state.images.show,
		index: state.images.index
	}),
	// mapDispatchToProps
	dispatch => ({
		close: () => dispatch(action.images.close())
	})
)
class ReactImages extends React.Component {
	render() {
		const { images, show, index, close } = this.props;
		return (
			<ModalGateway>
				{
					show && <Modal onClose={close}>
						<Carousel 
							views={images} 
							currentIndex={index}
						/>
					</Modal>
				}
			</ModalGateway>
		);
	}
}

export default ReactImages;
