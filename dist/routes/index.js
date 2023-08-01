"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const mysql_1 = __importDefault(require("mysql"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const functions_1 = require("../utils/functions");
const register = (app) => {
    // setup database - fix!
    const db = mysql_1.default.createConnection(process.env.DATABASE_URL);
    db.connect();
    var functions = new functions_1.Functions();
    var examplePost = {
        date_posted: new Date(),
        id: 0,
        title: "Example Title",
        subtitle: "Example Subtitle",
        content: "Example Content"
    };
    // home page
    app.get("/", (req, res) => {
        var targetChars = [];
        var originalFile = path_1.default.resolve(__dirname, "../public/assets/text/original.txt");
        var targetFile = path_1.default.resolve(__dirname, "../public/assets/text/final.txt");
        fs_1.default.readFile(targetFile, "utf8", (error, target) => {
            target.split('\n').forEach((element) => {
                targetChars.push(element.replace(/[\n\r]/g, '').split(''));
            });
            fs_1.default.readFile(originalFile, "utf8", (error, data) => {
                if (error) {
                    res.render("index", { 'original': 'file not found...' });
                }
                else {
                    res.render("index", { 'original': data.split('\n'), 'final': targetChars });
                }
            });
        });
    });
    // blog posts
    app.get("/thoughts", (req, res) => {
        if (db != null) {
            db.query('SELECT * FROM thoughts WHERE id = 1', (err, rows, fields) => {
                if (err)
                    res.render("error", { 'error': "application error occurred" });
                res.render("thoughts", { isBlog: true, posts: rows, f: functions });
            });
        }
        else {
            res.render("thoughts", { isBlog: true, posts: [examplePost], f: functions });
        }
    });
    // specific post
    app.get("/thoughts/:id", (req, res) => {
        if (db != null) {
            db.query(`SELECT * FROM thoughts WHERE id = ${req.params.id}`, (err, rows, fields) => {
                if (err)
                    res.render("error", { 'error': "post not found" });
                res.render("thoughts", { isBlog: false, post: rows[0], f: functions });
            });
        }
        else {
            res.render("thoughts", { isBlog: false, posts: examplePost, f: functions });
        }
    });
    // about page
    app.get("/about", (req, res) => {
        res.render("about");
    });
};
exports.register = register;
