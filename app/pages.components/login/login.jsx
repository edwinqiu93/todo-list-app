import React from "react";
import objectPath from "object-path";
import { connect } from "react-redux";
import { autobind } from "react-decoration";
import * as api from "api";
import Button from "components/Button";
import Router from "next/router";
import { action } from "modules";
import css from "./login.module.scss";
import Link from "next/link";
import classnames from "classnames";
// import { withRouter } from "next/router";

@connect()
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
		// const { username, password } = this.state.credential;
		return (
			<>
				<div className={classnames(css.bg)} />
				<div className={classnames(css.overlay)} />
				<div className={classnames(css.container)}>
					<div className={classnames(css["left-portal"])}>
						<h2>Login</h2>
						<form className="LoginForm" onSubmit={this.handleSubmit}>
							<div className="LoginForm__signupElement">
								<div className="LoginForm__signupLabel">
									<label htmlFor="username">
										Username    
									</label>
									<span className="astrik">
										*
									</span>
									<input id="username" name="username" type="text" placeholder="demo" required/> 
								</div> 
							</div>
							<div className="LoginForm__signupElement">
								<div className="LoginForm__signupLabel">
									<label htmlFor="password">
										Password    
									</label>
									<span className="astrik">*</span>
									<input id="password" name="password" type="password" placeholder="Testing123!"  required/> 
								</div>
							</div>
							<div className="signin-button">
								<button className="btn btn_signIn" type="submit">
									Sign In 
								</button>
							</div>
							<div className="LoginForm__loginDemo">
								<h4>Demo Account</h4>
								<p>Username: demo</p>
								<p>Password: Testing123!</p>
							</div>
							<div className="LoginForm__redirect">
								<Link href="/register"><a>Don"t have an account? Create one.</a></Link>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	}
}

export default Login;
