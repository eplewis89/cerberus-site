import express, { Application, Request, Response } from "express";
import expressLayouts from 'express-ejs-layouts';
import http from "http";
import path from "path"
import dotenv from "dotenv";

// import routes table
import * as routes from "./routes";

// get config vals of .env
dotenv.config();

// setup the app
const app: Application = express();
const server: http.Server = http.createServer(app);

// set port
const port = process.env.SERVER_PORT;

// EJS setup
app.use(expressLayouts);
app.use(express.json());

// set root path for views directory
app.set('views', path.join(__dirname, 'views'));

// set view engine
app.set('view engine', 'ejs');

// set static path
app.use(express.static(path.join(__dirname, "public")));

routes.register(app);

// Starting the server
server.listen(port, () => {
    // tslint:disable-next-line:no-console    
    console.log( `server started at http://localhost:${port}`);
});