import * as express from "express";
import mysql from "mysql";
import fs from "fs";
import path from "path";

export const register = (app: express.Application) => {
    // setup database
    const db = mysql.createConnection(process.env.DATABASE_URL);

    db.connect()

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
        if (db != null) {
            db.query('SELECT * FROM thoughts WHERE id = 1', (err, rows, fields) => {
                if (err) res.render("error", { 'error': "application error occurred" });
            
                res.render("thoughts", { 'isBlog': true, 'posts': rows });
            });
        } else {
            res.render("thoughts", { 'isBlog': true, 'posts': [examplePost] });
        }
    });

    // specific post
    app.get("/thoughts/:id", (req: any, res) => {
        if (db != null) {
            db.query(`SELECT * FROM thoughts WHERE id = ${ req.params.id }`, (err, rows, fields) => {
                if (err) res.render("error", { 'error': "post not found" });
            
                res.render("thoughts", { 'isBlog': false, 'post': rows[0] });
            });
        } else {
            res.render("thoughts", { 'isBlog': false, 'post': examplePost });
        }
    });

    // about page
    app.get("/about", (req: any, res) => {
        res.render("about");
    });
};