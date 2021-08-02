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

@connect()
class Register extends React.Component {

    
	state = {
        payload: {
            password: "",
            username: "",
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

        const { username, password, confirmPassword } = this.state.payload;

        if (username.trim() === "" || password.trim() === "") {
            return window.alert("Username and password can't be empty");
        }

        if (password !== confirmPassword) {
            return window.alert("Passwords don't match. Please try again.");
        }

        let newUser = {
            username,
            password
        }

        try {
            this.setState({ loading: true });
            let data = await api.user.registerAccount(newUser);
            console.log("data", data);
            this.setState({ loading: false });
            return Router.push("/dashboard");
        } catch (error) {
            console.error(error);
			window.alert(error.response?.data ?? error.message);
			return this.setState({ loading: false });
        }
    }

	render() {
        const { loading, payload } = this.state
        console.log("state", this.state);
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
                                        <input 
                                            id="username" 
                                            name="username" 
                                            // type="text" 
                                            value={payload.username} 
                                            onChange={event => this.handleChange("payload.username")(event.target.value)}
                                        />
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
                                        <input 
                                            id="password" 
                                            name="password" 
                                            type="password" 
                                            value={payload.password} 
                                            onChange={event => this.handleChange("payload.password")(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="LoginForm__signupElement">
                                    <div className="LoginForm__signupLabel">
                                        <label htmlFor="confirmPassword">
                                            Confirm Password    
                                        </label>
                                        <span className="astrik">*</span>
                                    </div>
                                    <div className="LoginForm__signupLabel">
                                        <input 
                                            id="confirmPassword" 
                                            name="confirmPassword" 
                                            type="password" 
                                            value={payload.confirmPassword} 
                                            onChange={event => this.handleChange("payload.confirmPassword")(event.target.value)}
                                        />
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
