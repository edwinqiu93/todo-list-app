import React from "react";
import Panel from "components/Panel";
import Button from "components/Button";
import objectPath from "object-path";
import * as api from "api";
import _ from "lodash";
import noop from "lodash/noop";
import { connect } from "react-redux";
import { action } from "../../modules";
import moment from "moment";
import "moment-timezone";


const mapDispatchToProps = dispatch => ({
	openDelete: (payload) => dispatch(action.modal.open("DELETETASK", payload)),
});

@connect(null, mapDispatchToProps)
class Dashboard extends React.Component { 

	state = {
		loaded: false, 
		loading: false,
		data: [],
		payload: this.getInitialPayload(),
	}

	getInitialPayload() {
		return {
			task_title: "",
			task_description: "",
			due_date: "",
			completed: "N"
		};	
	}

	handleChange = path => value => {
		const state = { ... this.state };
		objectPath.set(state, path, value);
		this.setState(state);
	};


	componentDidMount = async () => {
		try {
			this.setState({ loading: true });
			let data = await api.tasks.getAllTasks();
			this.setState({ loaded: true, loading: false, data })
		} catch (error) {
            console.error(error);
            window.alert(error.response?.data ?? error.message);
            this.setState({ loading: false });
        }
	}

	createTask = async () => {
		let { task_title } = this.state.payload;
		
		if (!task_title) {
			return window.alert("Please fill in a Task Title and Resubmit.");
		}

		try {
			this.setState({ loading: true });
			let returnedItem = await api.tasks.createTask(this.state.payload);
			this.setState({ 
				loading: false,
				data: [
					...this.state.data,
					returnedItem
				],
				payload: this.getInitialPayload()
			})
		} catch (error) {
            console.error(error);
            window.alert(error.response?.data ?? error.message);
            this.setState({ loading: false });
        }
	}

	updateComplete = async (id) => {
		try {
			this.setState({ loading: true });
			let returnedItem = await api.tasks.updateTask(id);
			this.setState({ 
				loading: false,
				data: this.state.data.map(task => (task.task_id == returnedItem.task_id) ? returnedItem : task)
			})
		} catch (error) {
            console.error(error);
            window.alert(error.response?.data ?? error.message);
            this.setState({ loading: false });
        }
	}

	render() {
		const { loading, loaded, payload, data } = this.state;

		return (
			<div className="container-fluid" id="dashboard_top" style={{ paddingBottom: "2rem", maxWidth: "1300px" }}>
				<Panel
                    border="primary"
                    loading={loading}
                    title="Create Task"
					className="panel__Centered"
					icon="fa fa-plus-circle"
                    footer={
                        <div className="text-right">
                            <Button
                                type="default"
                                icon="fa fa-trash"
                                title="Clear"
                                onClick={() => this.setState({ payload: this.getInitialPayload() })}
								disabled={loading}
								size="sm"
                            />
                            <Button
                                type="success"
                                icon="fa fa-search"
                                className="margin-left-12"
                                title="Create Task"
                                onClick={this.createTask}
								disabled={loading}
								size="sm"
                            />
                        </div>
                    }
                >
                    <div className="row">
						<div className="col-sm-6">
							<div className="form-group">
								<label> Task Title <span className="meta-red">Required</span></label>
								<input
									className="form-control"
									placeholder=""
									value={payload.task_title}
									onChange={event => this.handleChange("payload.task_title")(event.target.value)}
									required
								/>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="form-group">
								<label> Due Date </label>
								<input
									className="form-control"
									type="datetime-local"
									value={payload.due_date}
									onChange={event => this.handleChange("payload.due_date")(event.target.value)}
								/>
							</div>
						</div>
                    </div>
					<div className="row">
						<div className="col-sm-12">
							<div className="form-group">
								<label>Description</label>
								<textarea
									className="form-control"
									placeholder=""
									rows="2"
									value={payload.task_description}
									onChange={event => this.handleChange("payload.task_description")(event.target.value)}
								/>
							</div>
						</div>
					</div>
                </Panel>
				<div className="panel-flex-container">
					<Panel
                        icon="icon-history"
                        border="primary"
                        title="Task List"
						loading={loading}
						icon="icon-list2"
                    >
						<ul className="task-ul">
							{
								loaded && !loading && !!data.length && data.map((task, i) => {
									if (task.completed == "N") {
										let deletePayload = {
											task_id: task.task_id,
											update: (id) => {
												this.setState({
													data: this.state.data.filter(task => task.task_id !== id)
												})
											}
										}

										return (
											<div className="task-section" key={i}>
												<div style={{ display: "flex", justifyContent: "space-between" }}>
													<li className="task-results-list">
														<strong> {task.task_title}</strong> 
													</li>
													<div className="btn-div">
														<i 
															className="btn-icons icon-circle"
															onClick={() => this.updateComplete(task.task_id)}
														>
														</i>														
														<i 
															onClick={this.handleDeleteForm} 
															className="btn-icons fa fa-trash"
															disabled={loading}
															onClick={loading ? noop : () => this.props.openDelete(deletePayload)}
														>
														</i>				
													</div>
												</div>
												<div className={"task-info-div " +  (!task.due_date ? "hidden" : "") }>
													<span className="task-details-title">
														Due Date
													</span>
													<i className="fa fa-caret-right"></i>
													<span className="task-details">
														{task.due_date}
													</span> 
												</div>
												<div className={"task-info-div " +  (!task.task_description ? "hidden" : "") }>
													<span className="task-details-title">
														Description
													</span>
													<i className="fa fa-caret-right"></i>
													<span className="task-details">
														{task.task_description}
													</span>
												</div>
											</div>
										)
									}	
								})
							}
						</ul>
					</Panel>
					<Panel
                        icon="icon-history"
                        border="primary"
                        title="Completed"
						loading={loading}
						icon="fa fa-check-square-o"
                    >
						<ul className="task-ul">
							{
								loaded && !loading && !!data.length && data.map((task, i) => {
									if (task.completed == "Y") {
										return (
											<div className="task-section" key={i}>
												<div style={{ display: "flex", justifyContent: "space-between" }}>
													<li className="task-results-list line-through">
														<strong> {task.task_title}</strong> 
													</li>
													<div className="btn-div">
														<i className="icon-checkmark-circle"></i>														
													</div>
												</div>
												<div className={"task-info-div " +  (!task.due_date ? "hidden" : "") }>
													<span className="task-details-title line-through">
														Due Date
													</span>
													<i className="fa fa-caret-right"></i>
													<span className="task-details">
														{task.due_date}
													</span> 
												</div>
												<div className={"task-info-div " +  (!task.task_description ? "hidden" : "") }>
													<span className="task-details-title line-through">
														Description
													</span>
													<i className="fa fa-caret-right"></i>
													<span className="task-details">
														{task.task_description}
													</span>
												</div>
											</div>
										)
									}	
								})
							}
						</ul>
					</Panel>
				</div>
			</div>
		);
	}
}

export default Dashboard;
