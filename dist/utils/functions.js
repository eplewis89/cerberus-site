"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Functions = void 0;
const moment_1 = __importDefault(require("moment"));
class Functions {
    getPosts(posts) {
        var postList = "";
        posts.forEach(function (p) {
            var datetime = (0, moment_1.default)(p.date_posted).format('YYYY-MM-DD');
            postList += "<p><a href='/thoughts/" + p.id + "'>" + p.title + "</a> - " + datetime + "</p>";
        });
        if (postList == "") {
            return "<p>nothing found</p>";
        }
        return postList;
    }
    getPost(post) {
        var subtitle = "";
        if (post.subtitle + undefined) {
            subtitle = "<p><i>" + post.subtitle + "</i></p>";
        }
        return "<h2>" + post.title + "</h2>" +
            "<h3><i>" + (0, moment_1.default)(post.date_posted).format('YYYY-MM-DD') + "</i></h3>" +
            "<p><i>" + subtitle + "</i></p>" +
            "<p>" + post.content + "</p>" +
            "<p><a href='/thoughts'>< back</a></p>";
    }
}
exports.Functions = Functions;
