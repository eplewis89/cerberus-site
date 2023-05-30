import * as express from "express";
import mysql from "mysql";
import fs from "fs";
import path from "path";

export const register = (app: express.Application, db: mysql.Connection) => {
    // home page
    app.get("/", (req: any, res) => {
        var targetChars: string[][] = [];

        var rowColData = {
            'minRow': 2,
            'maxRow': 5,
            'minCol': 9,
            'maxCol': 50
        };

        var originalFile = path.resolve(__dirname, "../public/assets/text/original.txt")
        var targetFile = path.resolve(__dirname, "../public/assets/text/final.txt")

        fs.readFile(targetFile, "utf8", (error, target) => {
            target.split('\n').forEach(element => {
                targetChars.push(element.split(''));
            });

            fs.readFile(originalFile, "utf8", (error,data) => {
                if (error) {
                    res.render("index", { 'text': 'file not found...' });
                } else {
                    res.render("index", { 'text': data.split('\n'), 'target': targetChars, 'rules': rowColData });
                }
            });
        });
    });

    // about page
    app.get("/about", (req: any, res) => {
        res.render("about");
    });

    // blog posts
    app.get("/thoughts", (req: any, res) => {
        db.query('SELECT * FROM thoughts WHERE id = 1', (err, rows, fields) => {
            if (err) throw err
        
            res.render("thoughts", { 'data': rows });
        });
    });

    // specific post
    app.get("/thoughts/:id", (req: any, res) => {
        db.query('SELECT * FROM thoughts WHERE id = 1', (err, rows, fields) => {
            if (err) throw err
        
            res.render("thoughts", { 'data': rows[0] });
        });
    });
};