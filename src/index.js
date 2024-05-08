"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Company_1 = require("./Company");
var CustomMap_1 = require("./CustomMap");
//Show the location of user and company as markers on Google Map
var user = new User_1.User();
var company = new Company_1.Company();
var customMap = new CustomMap_1.CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
