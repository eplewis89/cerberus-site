"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
// import routes table
const routes = __importStar(require("./routes"));
// get config vals of .env
dotenv_1.default.config();
// setup the app
const app = (0, express_1.default)();
// set port
const port = process.env.SERVER_PORT || 8080;
// EJS setup
app.use(express_ejs_layouts_1.default);
app.use(express_1.default.json());
// set root path for views directory
app.set('views', path_1.default.join(__dirname, 'views'));
// set view engine
app.set('view engine', 'ejs');
// set static path
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// register routes
routes.register(app);
// Starting the server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    return console.log(`server started at http://localhost:${port}`);
});
