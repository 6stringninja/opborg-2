"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
var path = require("path");
var cookieParser = require("cookie-parser");
var api_1 = require("./routes/api");
function loggerMiddleware(request, response, next) {
    console.log(request.method + " " + request.path);
    next();
}
var app = express();
app.use(loggerMiddleware);
app.use('/api', api_1.defaultApiRoutes);
app.use('/', routes_1.defaultRoutes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*
console.log(__dirname);
app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(__dirname + '/public'))*/
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
