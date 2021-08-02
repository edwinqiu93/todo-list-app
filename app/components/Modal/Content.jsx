import React from "react";
import { connect } from "react-redux";
import Button from "components/Button";
import { action } from "modules";
import classnames from "utils/classnames";

@connect(
	null,
	dispatch => ({
		close: () => dispatch(action.modal.close())
	})
)
class Modal extends React.Component {
	render() {
		const { size, header, icon, buttons, loading, children, indentedBody, headerBold } = this.props;
		return (
			<div className={classnames("modal-dialog", "modal-" + size)}>
				<div className="modal-content">
					<header className="modal-header">
						<div className="modal-title">
							{
								icon && <i className={classnames("modal-icon", icon)} />
							}
							<span> 
								{
									headerBold ? (
										<strong>{header}</strong>
									) : (
										{header}
									)
								}
							</span>
						</div>
						<button
							type="button"
							className="close"
							aria-label="Close"
							onClick={this.props.close}
						>
							<span aria-hidden="true">
								<i className="icon-cross3" />
							</span>
						</button>
					</header>
					<div className={classnames("modal-body", loading && "text-center", indentedBody && "modal-indented")}>
						{
							loading && <img src="/loading.svg" />
						}
						{
							!loading && children
						}
					</div>
					{
						buttons.length > 0 && <footer className="modal-footer buttons">
							{
								buttons.map(
									(button, index) => <Button
										key={index}
										disabled={loading}
										{...button}
									/>
								)
							}
						</footer>
					}
				</div>
			</div>
		);
	}
}

Modal.defaultProps = {
	buttons: [],
	loading: false
};

export default Modal;
