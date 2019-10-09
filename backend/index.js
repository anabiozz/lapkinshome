import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import config from './config/config';
import logger from 'morgan';
import routes from '../frontend/routes';
import { matchRoutes } from 'react-router-config';
import render from './render';
import configureStore from '../frontend/_flax/store';
import setBundleHeaders from './middleware/setBundleHeaders';

var app = new express();

const host = process.env.NODE_ENV == 'development' ? config.server.develope : config.server.production;
const port = config.server.port;

let root = process.env.CORE_URL;
if (!root) {
	root = '/';
	process.env['CORE_URL'] = root;
}

var webpackConfig = null;
if (process.env.NODE_ENV == 'development') {
	webpackConfig = require('../webpack.dev');
} else {
	webpackConfig = require('../webpack.prod');
}
var compiler = webpack(webpackConfig);

if (process.env.NODE_ENV == 'production') {
	app.use('*.js', setBundleHeaders); // USE GZIP COMPRESSION FOR PRODUCTION BUNDLE
	app.use(root + 'dist', express.static(__dirname + '/../dist'));
} else {
	app.use(require('webpack-dev-middleware')(compiler, {
		publicPath: webpackConfig.output.publicPath,
		serverSideRender: true
	}));
	app.use(require("webpack-hot-middleware")(compiler));
}

// TO DELETE IN PRODUCTION!!!
app.use(function (req, res, next) {
	console.log('TRY ADD HEADERS FOR REQUEST ' + req.url);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(root + "css", express.static(__dirname + '/static'));
app.use(root + "static/images", express.static(__dirname + '/static/images'));
app.use(root + 'favicon.ico', express.static(__dirname + '/static/images/favicon.ico'));

app.get('*', async (req, res) => {
	const initialState = JSON.parse(JSON.stringify(config.initialState));
	const store = configureStore(initialState);
	// initialState.path = req.path.split("/")[3].split("-")[0]
	const actions = matchRoutes(routes, req.path)
	.map(({route}) => route.component.fetching ? route.component.fetching({...store, path: req.path}) : null)
	.map(async actions => await Promise.all(
		(actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
	));
	await Promise.all(actions);
	const context = {};
	const content = render(req.path, store, context, routes);

	if(context.status === 404) {
			res.status(404);
	}

	res.send(content);
});

const server = app.listen(port, host, function (error) {
	server.keepAliveTimeout = 0;
	if (error) {
			console.error('APP ERROR:');
			console.error(error);
	} else {
			console.info('==> 🌎 Web APP listening on port %s. Open up http://%s:%s in your browser.', port, host, port);
	}
});