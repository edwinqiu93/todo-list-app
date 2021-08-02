import React from "react";
import NextDocument, {
	Html, Head, Main, NextScript,
} from "next/document";

class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<link href="/icomoon.min.css" rel="stylesheet" />
					<link href="/fontawesome.min.css" rel="stylesheet" />
  				</Head>
				<body>
					<Main />
					<NextScript />
  				</body>
  			</Html>
		);
	}
}

export default Document;
