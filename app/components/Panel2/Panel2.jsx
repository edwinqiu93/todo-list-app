import React from "react";
import classnames from "utils/classnames";
import isComponentType from "utils/isComponentType";
import { Spring, animated, config } from "react-spring/renderprops.cjs";
import css from "./Panel.module.scss";

// panel-[primary, success, info, warning, danger]
// panel-group (remove )

class Panel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
			collapsed: false,
		};
	}

	render() {
		const {
			show, collapsed,
		} = this.state;

		if (!show) return (<></>);

		const {
			type,
			icon, title, subtitle, inlineSubtitle,
			loading,
			className,
			control, onRefresh,
			border, borderPos,
			padding,
			footer,
			headerClassName,
			bodyClassName,
			footerClassName
		} = this.props;

		const panelClass = classnames(
			"panel2",
			// control && collapsed && "panel-collapsed",
			isComponentType(type) && (`panel-${type}`),
			isComponentType(border) && (`border-${borderPos}-${border}`),
			className,
		);
		const subtitleClass = classnames(
			"meta",
			inlineSubtitle ? css["inline-meta"] : "display-block",
		);
		const bodyClass = classnames(
			"panel-body",
			!padding && "no-padding",
			bodyClassName
		);

		const headerClass = classnames(
			"panel-heading",
			headerClassName
		)

		const footerClass = classnames(
			"panel-footer",
			footerClassName
		)

		// console.log("props", this.props.headerClassName);

		return (
			<div className={panelClass}>
				<header className={headerClass}>
					{icon && <i className={classnames("icon", icon)} />}
					{title}
					{subtitle && (
  						<span className={subtitleClass}>
							{" "}
							{subtitle}
							{" "}
						</span>
					)}
					{
						control && (
							<ul className={css.control}>
								<li>
									<i
										className={`icon-arrow-${collapsed ? "up" : "down"}12`}
										onClick={() => this.setState({ collapsed: !collapsed })}
									/>
								</li>
																{
									onRefresh && (
										<li>
											<i
												className="icon-sync"
												onClick={onRefresh}
 											 />
										</li>
									)
								}
								<li>
									<i
										className="icon-cross3"
										onClick={() => this.setState({ show: !show })}
									/>
								</li>
							</ul>
						)
					}
  				</header>
				{
					loading && (
						<div className="panel-body panel-body-loading">
							<img src="/loading.svg" />
						</div>
					)
				}
				{
					!loading && (
						<>
							<Spring
								from={{ display: "block", opacity: 1 }}
								to={{ display: collapsed ? "none" : "block", opacity: collapsed ? 0 : 1 }}
								config={{ ...config.default, duration: 250 }}
  							>
								{
									(style) => (
										<animated.div style={style} className={bodyClass}>
											{this.props.children}
  										</animated.div>
									)
								}
 							 </Spring>
							{
								!collapsed && footer && (
									<div className={footerClass}>
										{ footer }
									</div>
								)
							}
						</>
					)
				}
  			</div>
		);
	}
}

Panel.defaultProps = {
	borderPos: "top",
	padding: true,
	loading: false,
};

export default Panel;
