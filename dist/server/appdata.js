"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BreadCrumb = /** @class */ (function () {
    function BreadCrumb(title, url, selected) {
        if (title === void 0) { title = ''; }
        if (url === void 0) { url = ''; }
        if (selected === void 0) { selected = false; }
        this.title = title;
        this.url = url;
        this.selected = selected;
    }
    return BreadCrumb;
}());
exports.BreadCrumb = BreadCrumb;
var MenuItem = /** @class */ (function () {
    function MenuItem(title, url, icon, selected) {
        if (title === void 0) { title = ''; }
        if (url === void 0) { url = ''; }
        if (icon === void 0) { icon = ''; }
        if (selected === void 0) { selected = false; }
        this.title = title;
        this.url = url;
        this.icon = icon;
        this.selected = selected;
    }
    return MenuItem;
}());
exports.MenuItem = MenuItem;
var PageData = /** @class */ (function () {
    function PageData() {
        this.appName = 'OP-Borg';
        this.breadcrumbs = [];
        this.menuitems = [];
        this.page = 'Dashboard';
        this.title = 'OP-BORG Manager';
        this.breadcrumbs.push(new BreadCrumb("Dashboard", "#dashboard"));
        this.breadcrumbs.push(new BreadCrumb("Overview", '', true));
        this.menuitems.push(new MenuItem('Dashboard', '/', 'fa-tachometer-alt', true));
        this.menuitems.push(new MenuItem("Miners", '/miners', 'fa-folder', false));
        this.menuitems.push(new MenuItem("Stats", '/stats', 'fa-chart-area', false));
        this.menuitems.push(new MenuItem("Settings", '/settings', 'fa-cog', false));
    }
    return PageData;
}());
exports.PageData = PageData;
