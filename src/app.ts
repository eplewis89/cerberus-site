import express, { Application } from "express";
import expressLayouts from 'express-ejs-layouts';
import favicon from "serve-favicon"
import path from "path";
import dotenv from "dotenv";

// import routes table
import * as routes from "./routes";

// get config vals of .env
dotenv.config();

// setup the app
const app: Application = express();

// set port
const port = process.env.SERVER_PORT || 8080;

// EJS setup
app.use(expressLayouts);
app.use(express.json());

// set root path for views directory
app.set('views', path.join(__dirname, 'views'));

// set view engine
app.set('view engine', 'ejs');

// set static path
app.use(express.static(path.join(__dirname, "public")));

// set favico
app.use(favicon(path.join(__dirname,'public','assets','images','favicon.ico')));

// register routes
routes.register(app);

// Starting the server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    return console.log( `server started at http://localhost:${port}`);
});