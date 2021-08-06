import React from "react";
import objectPath from "object-path";
import { connect } from "react-redux";
import * as api from "api";
import Button from "components/Button";
import Router from "next/router";
import { action } from "modules";
import css from "./register.module.scss";
import Link from "next/link";
import classnames from "classnames";
import IdleService from "../../services/idle-service";
import TokenService from "../../services/token-service";

@connect()
class Register extends React.Component {
    
	state = {
        payload: {
            password: "",
            user_id: "",
            confirmPassword: "",
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

        const { user_id, password, confirmPassword } = this.state.payload;

        if (user_id.trim() === "" || password.trim() === "") {
            return window.alert("User ID and Password can't be empty");
        }

        if (password !== confirmPassword) {
            return window.alert("Passwords don't match. Please try again.");
        }

        let newUser = {
            user_id,
            password
        }

        try {
            this.setState({ loading: true });
            let respJson = await api.user.registerAccount(newUser);
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
        const { loading, payload } = this.state
		return (
            <>
                <div className={classnames(css.bg)} />
                <div className={classnames(css.overlay)} />
                <div className={classnames(css.container)}>
                    <div className={classnames(css["left-portal"])}>
                        <section className="CreateAccount">
                            <h2>
                                Create an Account
                            </h2>
                            <form className="login-form" onSubmit={this.handleSubmit}>
                                <div className="signup-element">
                                    <div className="signup-label">
                                        <label htmlFor="user_id">
                                            User ID    
                                        </label>
                                        <span className="astrik">
                                            *
                                        </span>
                                        <div className="signup-input">
                                            <input 
                                                id="user_id" 
                                                name="user_id" 
                                                value={payload.user_id} 
                                                onChange={event => this.handleChange("payload.user_id")(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="signup-element">
                                    <div className="signup-label"> 
                                        <label htmlFor="password">
                                            Password    
                                        </label>
                                        <span className="astrik">*</span>
                                        <div className="signup-input">
                                            <input 
                                                id="password" 
                                                name="password" 
                                                type="password" 
                                                value={payload.password} 
                                                onChange={event => this.handleChange("payload.password")(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="signup-element">
                                    <div className="signup-label">
                                        <label htmlFor="confirmPassword">
                                            Confirm Password    
                                        </label>
                                        <span className="astrik">*</span>
                                        <div className="signup-input">
                                            <input 
                                                id="confirmPassword" 
                                                name="confirmPassword" 
                                                type="password" 
                                                value={payload.confirmPassword} 
                                                onChange={event => this.handleChange("payload.confirmPassword")(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="signin-button">
                                    <button className="btn btn-login" type="submit" disabled={loading}> 
                                        Create Account
                                    </button>
                                </div>
                                <div className="login-demo">
                                    <p>Password must be longer than 8 characters and contain one upper case, lower case, and number.</p>
                                </div>
                                <div className="login-form-redirect">
                                    <Link href="/"><a>Already Have an Account?</a></Link>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </>
		);
	}
}

export default Register;
