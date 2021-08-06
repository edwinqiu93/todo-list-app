import React from "react";
import * as api from "api";
import objectPath from "object-path";
import Modal from "components/Modal/Alert";

class DeleteTask extends React.Component {

	state = {
        loading: true,
        loaded: false
    }

	handleChange = path => value => {
		const state = { ... this.state };
		objectPath.set(state, path, value);
		this.setState(state);
	};

	submit = async () => {
        let { task_id } = this.props;
		try {
            this.setState({ loading: true });
            await api.tasks.deleteTask(task_id);
            this.setState({ loading: false, loaded: true });
            this.props.update(task_id);
			return this.props.close();
		} catch (error) {
			console.error(error);
			window.alert("Unexpected Error");
			this.setState({ loading: false });
		}
    }
    
    close = async () => {
        return this.props.close();
    }

	render() {
		return (
			<Modal
				size="sm"
				icon="wb-cloud"
				buttons={[{ title: "Yes", type: "danger", onClick: this.submit }, { title: "No", type: "success", onClick: this.close }]}
			>
				Are you sure you want to delete this?
			</Modal>
		);
	}

}

export default DeleteTask;
