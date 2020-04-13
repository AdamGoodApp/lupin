"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./logger"));
dotenv_1.default.config();
var app = express_1.default();
var port = process.env.SERVER_PORT;
var handler = function (func) { return function (req, res) {
    try {
        logger_1.default.info('server.handler.begun');
        func(req, res, logger_1.default);
    }
    catch (e) {
        logger_1.default.info('server.handler.failed');
        res.send('Oh no, something did not go well!');
    }
}; };
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.get('/success', handler(function (_req, res) {
    res.send('Yay!');
}));
app.get('/error', handler(function (_req) {
    throw new Error('Doh!');
}));
app.listen(port, function () {
    return console.log("App listening at http://localhost:" + port);
});
