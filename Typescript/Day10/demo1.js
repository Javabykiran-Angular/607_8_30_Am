"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(id, l, f) {
        this.id = id;
        this.lname = l;
        this.fname = f;
    }
    Myclass.prototype.display = function () {
        console.log("\n            ID         :: ".concat(this.id, "\n            First Name :: ").concat(this.fname, "\n            Last Name  :: ").concat(this.lname, "\n        "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// let obj=new Myclass(9,'Raokhande','Sumit');
// obj.display();
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
