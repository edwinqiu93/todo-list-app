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
import IdleService from "../../services/idle-service";
import TokenService from "../../services/token-service";

@connect()
class Login extends React.Component {

	state = {
        payload: {
            password: "",
            user_id: ""
        },
        loading: false
    }

	handleChange = path => value => {
		const state = { ... this.state };
		objectPath.set(state, path, value);
		this.setState(state);
	};

	handleSubmit = async (event) => {
        event.preventDefault();

        const { user_id, password } = this.state.payload;

        if (user_id.trim() === "" || password.trim() === "") {
            return window.alert("User ID and Password can't be empty");
		}
		
		let loginUser = {
			user_id,
			password
		}

        try {
            this.setState({ loading: true });
			let respJson = await api.user.login(loginUser);
			if (respJson) {
				TokenService.saveAuthToken(respJson.authToken);
				IdleService.registerIdleTimerResets();
				TokenService.queueCallbackBeforeExpiry(async () => {
				  await api.user.postRefreshToken();
				})
				this.setState({ loading: false });
				return Router.push("/dashboard");
			}
     
        } catch (error) {
            console.error(error);
			window.alert(error.response?.data ?? error.message);
			return this.setState({ loading: false });
        }
    }

	render() {
		const { payload, loading } = this.state;
		console.log("state", this.state);
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
									<label htmlFor="user_id">
										User ID    
									</label>
									<span className="astrik">
										*
									</span>
									<input 
										id="user_id" 
										name="user_id" 
										// type="text" 
										value={payload.user_id} 
										onChange={event => this.handleChange("payload.user_id")(event.target.value)}
										required
										placeholder="demo"
                                    />
								</div> 
							</div>
							<div className="LoginForm__signupElement">
								<div className="LoginForm__signupLabel">
									<label htmlFor="password">
										Password    
									</label>
									<span className="astrik">*</span>
									<input 
										id="password" 
										name="password" 
										type="password" 
										value={payload.password} 
										onChange={event => this.handleChange("payload.password")(event.target.value)}
										required
										placeholder="Testing123"
									/>
								</div>
							</div>
							<div className="signin-button">
								<button className="btn btn_signIn" type="submit">
									Sign In 
								</button>
							</div>
							<div className="LoginForm__loginDemo">
								<h4>Demo Account</h4>
								<p>User ID: demo</p>
								<p>Password: Testing123</p>
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
