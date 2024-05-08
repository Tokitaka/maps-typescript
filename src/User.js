"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var faker_1 = require("@faker-js/faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1.faker.person.firstName();
        this.content = faker_1.faker.lorem.lines({ min: 1, max: 10 });
        this.location = {
            lat: faker_1.faker.location.latitude(),
            lng: faker_1.faker.location.longitude(),
        };
    }
    return User;
}());
exports.User = User;
