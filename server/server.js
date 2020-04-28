import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';


import App from '../src/App'

const PORT = 8000;
const app = express();


// ...other imports and Express config

app.get('/*', (req, res) => {
    const context = {};
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
app.use('^/$', (req, res, next)=>{
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
            return res.status(500).send("Error Occured");
        }
        if (context.status === 404) {
            res.status(404);
        }
        if (context.url) {
            return res.redirect(301, context.url);
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        )
    })
});
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.listen(PORT, ()=>{
    console.log(`App launched on ${PORT}`)
});