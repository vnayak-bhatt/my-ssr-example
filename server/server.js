import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';
import Routes from '../src/routes';



import App from '../src/App'

const PORT = 8000;
const app = express();


// ...other imports and Express config

app.use('^/$', (req, res, next) => {
    const currentRoute =
        Routes.find(route => matchPath(req.url, route)) || {};
    let promise;
    if (currentRoute.loadData) {
        promise = currentRoute.loadData();
    } else {
        promise = Promise.resolve(null);
    }
    promise.then(data => {
        const context = {};
        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        );
        const indexFile = path.resolve('./build/index.html');
        fs.readFile(indexFile, 'utf8', (err, indexData) => {
            try {
                if (context.status === 404) {
                    res.status(404);
                }
                if (context.url) {
                    return res.redirect(301, context.url);
                }

                return res.send(
                    indexData
                        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
                        .replace(
                            '</body>',
                            `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
                        )
                );
            }
            catch(err){
                if (err) {
                    console.error('Something went wrong:', err);
                    return res.status(500).send('Oops, better luck next time!');
                }
            }
        });
    });
});
app.use('^/logo', (req, res, next) => {
    const currentRoute =
        Routes.find(route => matchPath(req.url, route)) || {};
    let promise;
    if (currentRoute.loadData) {
        promise = currentRoute.loadData();
    } else {
        promise = Promise.resolve(null);
    }
    promise.then(data => {
        const context = {};
        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        );
        const indexFile = path.resolve('./build/index.html');
        fs.readFile(indexFile, 'utf8', (err, indexData) => {
            try {


                if (context.status === 404) {
                    res.status(404);
                }
                if (context.url) {
                    return res.redirect(301, context.url);
                }

                return res.send(
                    indexData
                        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
                        .replace(
                            '</body>',
                            `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
                        )
                );
            }
            catch(err){
                if (err) {
                    console.error('Something went wrong:', err);
                    return res.status(500).send('Oops, better luck next time!');
                }
            }
        });
    });
});
app.use('^/home', (req, res, next) => {
    const currentRoute =
        Routes.find(route => matchPath(req.url, route)) || {};
    let promise;
    if (currentRoute.loadData) {
        promise = currentRoute.loadData();
    } else {
        promise = Promise.resolve(null);
    }
    promise.then(data => {
        console.log({data});
        const context = {};
        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        );
        const indexFile = path.resolve('./build/index.html');
        fs.readFile(indexFile, 'utf8', (err, indexData) => {
            try {


                if (context.status === 404) {
                    res.status(404);
                }
                if (context.url) {
                    return res.redirect(301, context.url);
                }

                return res.send(
                    indexData
                        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
                        .replace(
                            '</body>',
                            `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
                        )
                );
            }
            catch(err){
                if (err) {
                    console.error('Something went wrong:', err);
                    return res.status(500).send('Oops, better luck next time!');
                }
            }
        });
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));
// app.use(express.static(__dirname , '..',  'build'));
console.log(__dirname, "((((",path.resolve(__dirname, '..', 'build'));
app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`)
});