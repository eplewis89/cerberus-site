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
        var rowColData = {
            'minRow': 2,
            'maxRow': 5,
            'minCol': 9,
            'maxCol': 50
        };
        var originalFile = path_1.default.resolve(__dirname, "../public/assets/text/original.txt");
        var targetFile = path_1.default.resolve(__dirname, "../public/assets/text/final.txt");
        fs_1.default.readFile(targetFile, "utf8", (error, target) => {
            target.split('\n').forEach(element => {
                targetChars.push(element.split(''));
            });
            fs_1.default.readFile(originalFile, "utf8", (error, data) => {
                if (error) {
                    res.render("index", { 'text': 'file not found...' });
                }
                else {
                    res.render("index", { 'text': data.split('\n'), 'target': targetChars, 'rules': rowColData });
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
                throw err;
            res.render("thoughts", { 'data': rows });
        });
    });
    // specific post
    app.get("/thoughts/:id", (req, res) => {
        db.query('SELECT * FROM thoughts WHERE id = 1', (err, rows, fields) => {
            if (err)
                throw err;
            res.render("thoughts", { 'data': rows[0] });
        });
    });
};
exports.register = register;
