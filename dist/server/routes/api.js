"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var appdata_1 = require("../appdata");
var PiClient_1 = require("../../shared/PiClient");
var PiClient_2 = require("../../shared/PiClient");
exports.defaultApiRoutes = express.Router();
var apd = new appdata_1.PageData();
var clients = [{
        name: 'client 1',
        ip: '192.1.0.1',
        created: 1234
    }];
function setPage(name, url, breadcrumb) {
    if (name === void 0) { name = ''; }
    if (url === void 0) { url = ''; }
    if (breadcrumb === void 0) { breadcrumb = 'Overview'; }
    apd.menuitems.forEach(function (m) {
        m.selected = m.url === url;
    });
    apd.breadcrumbs[0].title = name;
    apd.breadcrumbs[0].url = url;
    apd.breadcrumbs[1].title = breadcrumb;
    apd.page = name;
}
exports.defaultApiRoutes.get('/clients', function (req, res) {
    var cnt = PiClient_1.PiClients.length + 1;
    PiClient_1.PiClients.forEach(function (c) {
        c.hashRate10m = Math.floor(Math.random() * 10 + 1);
        c.hashRate10s = Math.floor(Math.random() * 10 + 1);
        c.hashRate1m = Math.floor(Math.random() * 10 + 1);
    });
    PiClient_1.PiClients.push(new PiClient_2.PiClient('Client ' + cnt, '192.1.0.' + cnt, new Date().getTime(), 'green'));
    res.send({ data: PiClient_1.PiClients });
});
