"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(rocketCode) {
        this.thrusters = new Array();
        this._rocketCode = rocketCode;
    }
    Object.defineProperty(Rocket.prototype, "rocketCode", {
        get: function () {
            return this._rocketCode;
        },
        enumerable: false,
        configurable: true
    });
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    return Rocket;
}());
