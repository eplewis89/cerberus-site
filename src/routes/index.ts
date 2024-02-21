import * as express from "express";
import fs from "fs";
import path from "path";

export const register = (app: express.Application) => {
    var examplePost = {
        date_posted: new Date(),
        id: 0,
        title: "Example Title",
        subtitle: "Example Subtitle",
        content: "Example Content"
    }

    // home page
    app.get("/", (req: any, res) => {
        var targetChars: string[][] = [];

        var originalFile = path.resolve(__dirname, "../public/assets/text/original.txt");
        var targetFile = path.resolve(__dirname, "../public/assets/text/final.txt");

        fs.readFile(targetFile, "utf8", (error, target) => {
            target.split('\n').forEach((element) => {
                targetChars.push(element.replace(/[\n\r]/g, '').split(''));
            });

            fs.readFile(originalFile, "utf8", (error,data) => {
                if (error) {
                    res.render("index", { 'original': 'file not found...' });
                } else {
                    res.render("index", { 'original': data.split('\n'), 'final': targetChars });
                }
            });
        });
    });

    // blog posts
    app.get("/thoughts", (req: any, res) => {
        res.render("thoughts");
    });

    // about page
    app.get("/about", (req: any, res) => {
        res.render("about");
    });
};