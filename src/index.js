"use strict";

// const { config } = require("dotenv");
const server = require( "./server" );

const startServer = async () => {
	try {
		const config = {
			host: "localHost",
			port: 8080,
		};

		const app = await server( config );
		await app.start();

		console.log( `Server runing at http://${ config.host }:${ config.port }` );
	} catch ( err ){
		console.log( "startup error", err );
	}
};

startServer();