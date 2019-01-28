"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PiClient = /** @class */ (function () {
    function PiClient(name, ip, created, color) {
        if (name === void 0) { name = ''; }
        if (ip === void 0) { ip = ''; }
        if (created === void 0) { created = new Date().getTime(); }
        if (color === void 0) { color = ''; }
        this.name = name;
        this.ip = ip;
        this.created = created;
        this.color = color;
        this.hashRate10s = 0;
        this.hashRate1m = 0;
        this.hashRate10m = 0;
        this.hashRate10m = Math.floor(Math.random() * 10 + 1);
        this.hashRate10s = Math.floor(Math.random() * 10 + 1);
        this.hashRate1m = Math.floor(Math.random() * 10 + 1);
    }
    return PiClient;
}());
exports.PiClient = PiClient;
exports.PiClients = [];
