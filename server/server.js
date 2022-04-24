"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var cors_1 = require("cors");
var db_1 = require("./config/db");
var app = (0, express_1["default"])();
dotenv_1["default"].config();
(0, db_1["default"])();
var PORT = process.env.PORT;
app.use((0, cors_1["default"])());
app.get('/', function (req, res) {
    res.send('Salomlar hello!');
});
app.listen(PORT, function () {
    console.log("Server is listening on PORT ".concat(PORT));
});
console.log(process.env.MONGO_URL, 'rozgardi 222');
