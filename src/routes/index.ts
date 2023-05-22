import * as express from "express";
import fs from "fs"
import path from "path"

export const register = (app: express.Application) => {
    // home page
    app.get("/", (req: any, res) => {
        var file = path.resolve(__dirname, "../public/assets/text/original.txt")

        fs.readFile(file, "utf8", (error,data) => {
            if (error) {
                res.render("index", { 'text': 'file not found...' });
            } else {
                res.render("index", { 'text': data.split('\n') });
            }
        });
    });

    // about page
    app.get("/about", (req: any, res) => {
        res.render("about");
    });
};