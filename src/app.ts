import express, { Application, Request, Response } from "express";
import expressLayouts from 'express-ejs-layouts';
import http from "http";
import path from "path"

import debug from "./config/debug"

const app: Application = express();
const server: http.Server = http.createServer(app);

// Setting the port
const port = debug.PORT;

// EJS setup
app.use(expressLayouts);

// Setting the root path for views directory
app.set('views', path.join(__dirname, 'views'));

// Setting the view engine
app.set('view engine', 'ejs');

/* Home route */
app.get("/", (req: Request, res: Response) => {
	res.render("index")
});

// Starting the server
server.listen(port, () => {
    console.log(`SERVER RUNNING ON ${port}`);
});