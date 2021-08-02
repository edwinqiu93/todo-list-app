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
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";


const ignorePaths = ["/demo", "/register"];

@withRouter
@connect()
class Main extends React.Component {

	state = {
		loaded: false,
		sidebar: false
	}


	logout = () =>  {
		TokenService.clearAuthToken();
		TokenService.clearCallbackBeforeExpiry();
		IdleService.unRegisterIdleResets();
		return Router.replace("/");
	}

	isCurrentDirectory = (page) => {
		const pathname = this.props.router.pathname;
		return (page.page && pathToRegexp(page.page).exec(pathname));
	}

	getCurrentPage = () => {
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

	getSidebar = () => {
		console.log("in sidebar")

		let sidebar = JSON.parse(JSON.stringify(pages.sidebar));
		// if (process.env.NEXT_PUBLIC_PERMISSION_ENABLED !== "true")
		// 	return sidebar;

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

		console.log("sidebar", sidebar);
		return sidebar;
	}

	renderSidebar = () => {
		return (
			<>
				<ul className={css["sidebar-list-narrow"]}>
					{
						this.getSidebar().map((item, index) => {
							console.log("sidebar item", item);
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

	renderFullSidebar = () => {
		return (
			<>
				<ul className={css["sidebar-list"]}>
					{
						this.getSidebar().map((item, index) => {
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

	
	renderContent = () => {

		const { sidebar } = this.state;
		const { pathname } = this.props.router;

		if (["/", "/login", "/demo", "/register"].includes(pathname)) {
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
							sidebar ? this.renderFullSidebar() : this.renderSidebar()
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
				this.renderContent()
			);

		return (
			<>
				<Sidebar>
					{this.renderContent()}
				</Sidebar>
				<Modal />
				<ReactImages />
			</>
		);
	}

}

export default Main;
