"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var appdata_1 = require("../appdata");
exports.defaultRoutes = express.Router();
var apd = new appdata_1.PageData();
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
exports.defaultRoutes.get('/', function (req, res) {
    setPage('Dashboard', '/');
    res.render('pages/index', {
        data: apd
    });
});
exports.defaultRoutes.get('/miners', function (req, res) {
    setPage('Miners', '/miners');
    res.render('pages/miners', {
        data: apd
    });
});
exports.defaultRoutes.get('/stats', function (req, res) {
    setPage('Stats', '/stats');
    res.render('pages/stats', {
        data: apd
    });
});
exports.defaultRoutes.get('/settings', function (req, res) {
    setPage('Settings', '/settings');
    res.render('pages/settings', {
        data: apd
    });
});
