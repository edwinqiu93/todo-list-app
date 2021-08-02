import React from "react";
import objectPath from "object-path";
import { connect } from "react-redux";
import { autobind } from "react-decoration";
import * as api from "api";
import Button from "components/Button";
import Router from "next/router";
import { action } from "modules";
import css from "./login.module.scss";

@connect(
	state => ({
		user: state.base.user
	}),
	dispatch => ({
		setUser: (user, access_token) => dispatch(action.base.setUser(user, access_token))
	})
)
class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			credential: {
				username: "", password: "",
			},
			loading: false, loaded: true
		};
	}

	handleChange = path => value => {
		const state = { ... this.state };
		objectPath.set(state, path, value);
		this.setState(state);
	};

	render() {
		const { loading } = this.state;
		const { username, password } = this.state.credential;
		return (
			<div
				className={css.container}
				style={{ backgroundImage: "url(/bg.jpg)" }}
			>
			</div>
		);
	}

}

export default Login;
