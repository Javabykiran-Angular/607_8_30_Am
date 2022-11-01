"use strict";
exports.__esModule = true;
exports.Derpartment = void 0;
var Derpartment = /** @class */ (function () {
    function Derpartment(r) {
        this.role = r;
    }
    //getter & setter
    Derpartment.prototype.getRole = function () {
        return (this.role);
    };
    Derpartment.prototype.setRole = function (role) {
        this.role = role;
    };
    return Derpartment;
}());
exports.Derpartment = Derpartment;
