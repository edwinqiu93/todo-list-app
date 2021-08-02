import Head from "next/head";
import moment from "moment";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import NextApp from "next/app";
import Main from "components/Main";
import Router from "next/router";
import store from "../store";
import webConfig from "../web.config";
import "../styles/index.scss";
import 'react-day-picker/lib/style.css';
import IdleService from "../services/idle-service";
import TokenService from "../services/token-service";
import UsersService from "../services/user-api-service";

moment.prototype.standard = function () {
	return this.format("Do MMMM, YYYY hh:mm a");
};

moment.prototype.shortStandard = function () {
	return this.format("Do MMM, hh:mm a");
};

Router.events.on(
	"routeChangeComplete",
	url => {
		if (window && window._paq) {
			window._paq.push(["setCustomUrl", url]);
			window._paq.push(["setDocumentTitle", document.title]);
			window._paq.push(["trackPageView"]);
		}
		// $("#main").animate({ scrollTop: 0 }, 200);
	}
);

@withRedux(store)
class App extends NextApp {

	componentDidMount() {
		IdleService.setIdleCallback(this.logoutFromIdle);
		if (TokenService.hasAuthToken()) {
		  IdleService.registerIdleTimerResets();
		  TokenService.queueCallbackBeforeExpiry(() => {
			console.log("token service que called");
			UsersService.postRefreshToken();
		  })
		} 
	}
	
	componentWillUnmount() {
		IdleService.unRegisterIdleResets();
		TokenService.clearCallbackBeforeExpiry();
	}
	
	logoutFromIdle = () => {
		TokenService.clearAuthToken();
		TokenService.clearCallbackBeforeExpiry();
		IdleService.unRegisterIdleResets();
	
		this.props.history.push('/');
		// this.forceUpdate()
	}

	renderScreen = () => {
		const { Component, pageProps } = this.props;
		if (Component.displayName == "Connect(Register)") {
			return (
				<Component {...pageProps} />
			)
		} else {
			return (
				<Main {...pageProps}>
					<Component {...pageProps} />
				</Main>
			)
		}
	}

	render() {
		const { Component, pageProps, store } = this.props;
		console.log("Component", Component);
		// console.log("pageProps", pageProps);
		// console.log("store", store);
		return (
			<>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				</Head>
				<DefaultSeo
					title="Home"
					titleTemplate={"%s | " + webConfig.title}
					description={webConfig.description}
					canonical={webConfig.canonical}
					additionalMetaTags={[{
						name: "keywords",
						content: webConfig.keywords
					}]}
				/>
				<Provider store={store}>
					{this.renderScreen()}
				</Provider>
			</>
		);
	}

}

export default App;
