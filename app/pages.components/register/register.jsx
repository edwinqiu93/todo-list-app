import React from "react";
import objectPath from "object-path";
import { connect } from "react-redux";
import { autobind } from "react-decoration";
import * as api from "api";
import Button from "components/Button";
import Router from "next/router";
import { action } from "modules";
import css from "./register.module.scss";
import Link from "next/link";
import classnames from "classnames";
// import { withRouter } from "next/router";


class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			credential: {
                loading: false,
                username: "", 
                password: ""
			},
			loading: false, loaded: true
		};
	}

	handleChange = path => value => {
		const state = { ... this.state };
		objectPath.set(state, path, value);
		this.setState(state);
    };
    
    handleSubmit = async () => {
        e.preventDefault();

        const { username, password, confirm_pw } = e.target;

        if (password.value !== confirm_pw.value) {
            return window.alert("Passwords don't match. Please try again.");
        }

        const registeredUser = {
            username: username.value.toLowerCase(),
            password: password.value
        }

        try {
            this.setState({ loading: true });
            await api.user.registerAccount(registeredUser);
            return Router.replace("/dashboard");
        } catch (error) {
            console.error(error);
			window.alert(error.response?.data ?? error.message);
			this.setState({ loading: false });
        }
    }

	render() {
		const { loading } = this.state;
		const { username, password } = this.state.credential;
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
                            <form className="LoginForm" onSubmit={this.handleSubmit}>
                                <div className="LoginForm__signupElement">
                                    <div className="LoginForm__signupLabel">
                                        <label htmlFor="username">
                                            Username    
                                        </label>
                                        <span className="astrik">
                                            *
                                        </span>
                                    </div>
                                    <div className="LoginForm__signupLabel">
                                        <input id="username" name="username" type="text" />
                                    </div>
                                </div>
                                <div className="LoginForm__signupElement">
                                    <div className="LoginForm__signupLabel"> 
                                        <label htmlFor="password">
                                            Password    
                                        </label>
                                        <span className="astrik">*</span>
                                    </div>
                                    <div className="LoginForm__signupLabel">
                                        <input id="password" name="password" type="password" />
                                    </div>
                                </div>
                                <div className="LoginForm__signupElement">
                                    <div className="LoginForm__signupLabel">
                                        <label htmlFor="confirm_pw">
                                            Confirm Password    
                                        </label>
                                        <span className="astrik">*</span>
                                    </div>
                                    <div className="LoginForm__signupLabel">
                                        <input id="confirm_pw" name="confirm_pw" type="password" />
                                    </div>
                                </div>
                                <div className="signin-button">
                                    <button className="btn btn_signIn" type="submit" disabled={loading}> 
                                        Create Account
                                    </button>
                                </div>
                                <div className="LoginForm__signupDemo">
                                    <p>Password must be longer than 8 characters and contain one upper case, lower case, and number.</p>
                                </div>
                                <div className="LoginForm__redirect">
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
