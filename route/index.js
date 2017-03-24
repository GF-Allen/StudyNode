/// <reference path="typings/node/node.d.ts"/>

var route = require("./route");
var server = require("./server");

server.start(route.route);