"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const register = (app) => {
    // home page
    app.get("/", (req, res) => {
        var file = path_1.default.resolve(__dirname, "../public/assets/text/original.txt");
        fs_1.default.readFile(file, "utf8", (error, data) => {
            if (error) {
                res.render("index", { 'text': 'file not found...' });
            }
            else {
                res.render("index", { 'text': data.split('\n') });
            }
        });
    });
    // about page
    app.get("/about", (req, res) => {
        res.render("about");
    });
};
exports.register = register;
