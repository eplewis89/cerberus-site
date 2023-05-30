"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const register = (app, db) => {
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
    // about page
    app.get("/about", (req, res) => {
        res.render("about");
    });
    // blog posts
    app.get("/thoughts", (req, res) => {
        db.query('SELECT * FROM thoughts WHERE id = 1', (err, rows, fields) => {
            if (err)
                res.render("error", { 'error': "application error occurred" });
            res.render("thoughts", { 'data': rows });
        });
    });
    // specific post
    app.get("/thoughts/:id", (req, res) => {
        db.query(`SELECT * FROM thoughts WHERE id = ${req.params.id}`, (err, rows, fields) => {
            if (err)
                res.render("error", { 'error': "post not found" });
            res.render("thoughts", { 'data': rows[0] });
        });
    });
};
exports.register = register;
