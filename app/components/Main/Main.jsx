import React from "react";
import qs from "querystring";
import { connect } from "react-redux";
import { autobind } from "react-decoration";
import Link from "next/link";
import Router from "next/router";
import { withRouter } from "next/router";
import Modal from "components/Modal";
import ReactImages from "components/ReactImages";
import Sidebar from "components/ReactSidebar";
import { pathToRegexp } from "path-to-regexp";
import pages from "constants/pages";
import { action } from "modules";
import * as api from "api";
import css from "./Main.module.scss";

const ignorePaths = ["/demo"];

@withRouter
@connect(
	state => ({
		user: state.base.user
	}),
	dispatch => ({
		setUser: (user, access_token) =>
			dispatch(action.base.setUser(user, access_token))
	})
)
class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			sidebar: false
		};
	}

	@autobind
	logout() {
		this.props.setUser();
		localStorage.removeItem(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY);
		return Router.replace("/");
	}

	@autobind
	async redirectIfLoggedIn() {
		const pathname = this.props.router.pathname;
		if (pathname == "/")
			await Router.push("/dashboard");
		return this.setState({ loaded: true });
	}

	async componentDidMount() {

		const pathname = this.props.router.pathname;

		/**
		 * 
		 * Ignore the default path name
		 * 
		 */
		if (ignorePaths.includes(pathname))
			return;

		/**
		 * 
		 * If user already been setted
		 * 
		 */
		if (this.props.user)
			return this.redirectIfLoggedIn();

		/**
		 * 
		 * Check if access token is stored in local storage
		 * If Exist, try to login 
		 * 
		 */
		let access_token = localStorage.getItem(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY);
		const queries = qs.parse(this.props.router.asPath.replace(/^\/\#/, ""));

		if (!access_token)
			access_token = queries.access_token;

		if (access_token) {
			try {
				const response = await api.user.me(access_token);
				// console.log("response", response);
				this.props.setUser(response.user, response.access_token);
				localStorage.setItem(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY, response.access_token);
				return this.redirectIfLoggedIn();
			} catch (error) {
				console.error(error);
				/**
				 * 
				 * Remove the local storage access token
				 * 
				 */
				localStorage.removeItem("access_token");
			}
		}

		/**
		 * 
		 * All else failed
		 * 
		 */
		localStorage.removeItem("access_token");

		if (pathname != "/") 
			await Router.replace("/");

		return this.setState({ loaded: true });
	}

	@autobind
	isCurrentDirectory(page) {
		const pathname = this.props.router.pathname;
		return (page.page && pathToRegexp(page.page).exec(pathname));
	}

	@autobind
	getCurrentPage() {
		const _pages = pages.sidebar;
		const pathname = this.props.router.pathname;

		for (const page of _pages.filter(item => typeof item !== "string")) {
			if (page.page && pathToRegexp(page.page).exec(pathname))
				return page;
			if (page.menu) {
				for (const item of page.menu) {
					if (pathToRegexp(item.page).exec(pathname))
						return item;
				}
			}
			if (page.sub_pages) {
				for (const item of page.sub_pages) {
					if (pathToRegexp(item.page).exec(pathname))
						return item;
				}
			}
		}
	}

	@autobind
	getSidebar() {

		let sidebar = JSON.parse(JSON.stringify(pages.sidebar));

		if (process.env.NEXT_PUBLIC_PERMISSION_ENABLED !== "true")
			return sidebar;

		const user = this.props.user;
		const polices = user?.permissions || [];

		sidebar = sidebar
			.map(page => {
				if (page.type == "dropdown") {
					page.menu = page.menu.filter(page => {
						if (page.permissions && page.permissions.length > 0) {
							return page.permissions.every(permission => polices.includes(permission));
						}
						return true;
					});
				}
				return page;
			})
			.filter(page => {
				if (page.type == "dropdown") {
					return page.menu.length > 0;
				} else if (page.permissions && page.permissions.length > 0) {
					return page.permissions.every(permission => polices.includes(permission));
				}
				return true;
			});

		return sidebar;
	}

	@autobind
	renderSidebar() {
		return (
			<>
				<ul className={css["sidebar-list-narrow"]}>
					{
						["eqiu", "croques"].includes(this.props?.user?.id) ? ( this.getSidebar().map((item, index) => {
							if (typeof item == "string")
								return (
									<React.Fragment key={index} />
								);
							if (item.type == "dropdown") {
								return (
									<li key={index} className={css["dropdown-narrow"]}>
										<a>
											<i className={item.icon} />
										</a>
										<ul className={css["sidebar-list"]}>
											{
												(item.menu ?? []).map((item, index) => (
													<li key={index} className={this.isCurrentDirectory(item) ? css["active-item"] : void 0}>
														<Link href={item.page}>
															<a>
																<i className={item.icon} />
																<span>{item.name}</span>
															</a>
														</Link>
													</li>
												))
											}
										</ul>
									</li>
								);
							}
							return (
								<li key={index} className={this.isCurrentDirectory(item) ? css["active-item"] : void 0}>
									<Link href={item.page}>
										<a>
											<i className={item.icon} />
										</a>
									</Link>
								</li>
							);
						})
						) : (
							this.getSidebar().filter(row => ["/dashboard", "/locations", "/picking"].includes(row.page)).map((item, index) => {
								// console.log("ITEM", item);
								if (typeof item == "string")
									return (
										<React.Fragment key={index} />
									);
								if (item.type == "dropdown") {
									return (
										<li key={index} className={css["dropdown-narrow"]}>
											<a>
												<i className={item.icon} />
											</a>
											<ul className={css["sidebar-list"]}>
												{
													(item.menu ?? []).map((item, index) => (
														<li key={index} className={this.isCurrentDirectory(item) ? css["active-item"] : void 0}>
															<Link href={item.page}>
																<a>
																	<i className={item.icon} />
																	<span>{item.name}</span>
																</a>
															</Link>
														</li>
													))
												}
											</ul>
										</li>
									);
								}
								return (
									<li key={index} className={this.isCurrentDirectory(item) ? css["active-item"] : void 0}>
										<Link href={item.page}>
											<a>
												<i className={item.icon} />
											</a>
										</Link>
									</li>
								);
							})
						)
					}
				</ul>
				<ul className={css["sidebar-list-narrow"]}>
					<li onClick={this.logout}>
						<a>
							<i className="fa fa-sign-out" />
						</a>
					</li>
				</ul>
			</>
		);
	}

	@autobind
	renderFullSidebar() {
		return (
			<>
				<ul className={css["sidebar-list"]}>
					{
						["eqiu", "croques"].includes(this.props.user.id) ? ( this.getSidebar().map((item, index) => {
							if (typeof item == "string")
								return (
									<li key={index} className={css.catalog}>
										<span>{item}</span>
									</li>
								);

							if (item.type == "dropdown") {
								return (
									<li key={index} className={css.dropdown}>
										<a>
											<span>
												<i className={item.icon} />
												<span>{item.name}</span>
											</span>
											<i className="fa fa-angle-right" />
										</a>
										<ul className={css["sidebar-list"]}>
											{
												(item.menu ?? []).map((item, index) => (
													<li key={index} className={this.isCurrentDirectory(item) ? css["active-item"] : void 0}>
														<Link href={item.page}>
															<a>
																<i className={item.icon} />
																<span>{item.name}</span>
															</a>
														</Link>
													</li>
												))
											}
										</ul>
									</li>
								)
							}

							return (
								<li key={index} className={this.isCurrentDirectory(item) ? css["active-item"] : void 0}>
									<Link href={item.page}>
										<a>
											<i className={item.icon} />
											<span>{item.name}</span>
										</a>
									</Link>
								</li>
							);
						})
						) : (
							this.getSidebar().filter(row => ["/dashboard", "/locations", "/picking"].includes(row.page)).map((item, index) => {
								if (typeof item == "string")
									return (
										<li key={index} className={css.catalog}>
											<span>{item}</span>
										</li>
									);
	
								if (item.type == "dropdown") {
									return (
										<li key={index} className={css.dropdown}>
											<a>
												<span>
													<i className={item.icon} />
													<span>{item.name}</span>
												</span>
												<i className="fa fa-angle-right" />
											</a>
											<ul className={css["sidebar-list"]}>
												{
													(item.menu ?? []).map((item, index) => (
														<li key={index} className={this.isCurrentDirectory(item) ? css["active-item"] : void 0}>
															<Link href={item.page}>
																<a>
																	<i className={item.icon} />
																	<span>{item.name}</span>
																</a>
															</Link>
														</li>
													))
												}
											</ul>
										</li>
									)
								}
	
								return (
									<li key={index} className={this.isCurrentDirectory(item) ? css["active-item"] : void 0}>
										<Link href={item.page}>
											<a>
												<i className={item.icon} />
												<span>{item.name}</span>
											</a>
										</Link>
									</li>
								);
							})
						)
					}
				</ul>
				<ul className={css["sidebar-list"]}>
					<li onClick={this.logout}>
						<a>
							<i className="fa fa-sign-out" />
							<span>Sign out</span>
						</a>
					</li>
				</ul>
			</>
		)
	}

	@autobind
	renderContent() {

		const sidebar = this.state.sidebar;
		const pathname = this.props.router.pathname;

		if (["/", "/login", "/demo"].includes(pathname)) {
			return this.props.children;
		}

		const currentPage = this.getCurrentPage();

		return (
			<>
				<nav className={css.navbar}>
					<div className={css[sidebar ? "navbar-header" : "navbar-header-narrow"]} />
					<div
						className={css["navbar-main"]}
						onClick={() => this.setState({ sidebar: !sidebar })}
					>
						<i className="fa fa-align-left pointer" />
						<h3>{currentPage?.name}</h3>
					</div>
				</nav>
				<div className={css[sidebar ? "page-container" : "page-container-narrow"] + " error-page"}>
					<aside className={sidebar ? css.sidebar : css["sidebar-narrow"]}>
						{
							sidebar ? <this.renderFullSidebar /> : <this.renderSidebar />
						}
					</aside>
					<div className={css["page-content"]}>
						{
							this.props.children
						}
					</div>
				</div>
			</>
		);
	}

	render() {

		const { loaded } = this.state;
		const pathname = this.props.router.pathname;
		// console.log("PROPS", this.props);

		if (ignorePaths.includes(pathname))
			return (
				<this.renderContent />
			);

		if (loaded)
			return (
				<>
					<Sidebar>
						<this.renderContent />
					</Sidebar>
					<Modal />
					<ReactImages />
				</>
			);
		return (
			<div className={css.loading}>
				<img src="/loading.svg" />
			</div>
		);
	}

}

export default Main;
