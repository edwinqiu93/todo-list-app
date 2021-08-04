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
import moment from "moment";
import "moment-timezone";

@connect()
class Dashboard extends React.Component { 

	state = {
		loaded: false, 
		loading: false,
		data: [],
		payload: this.getInitialPayload()
	}

	componentDidMount() {
		console.log("in dashboard mount");
	}

	getInitialPayload() {
		return {
			taskTitle: "",
			taskDescription: "",
			dueDate: "",
			completed: "N"
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
		const { loading, loaded, payload } = this.state;
		console.log("state", this.state);

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
                            />
                            <Button
                                type="success"
                                icon="fa fa-search"
                                className="margin-left-12"
                                title="Create Task"
                                onClick={this.createTask}
                                disabled={loading}
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
										value={payload.taskTitle}
										onChange={event => this.handleChange("payload.taskTitle")(event.target.value)}
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
										value={payload.dueDate}
										onChange={event => this.handleChange("payload.dueDate")(event.target.value)}
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
									rows="3"
									value={payload.taskDescription}
									onChange={event => this.handleChange("payload.taskDescription")(event.target.value)}
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


					</Panel>
					<Panel
                        icon="icon-history"
                        border="primary"
                        title="Completed"
						loading={loading}
						icon="fa fa-check-square-o"
                    >

					</Panel>
				</div>
			</div>
		);
	}

}

export default Dashboard;
