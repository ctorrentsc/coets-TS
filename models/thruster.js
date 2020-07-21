"use strict";
var Thruster = /** @class */ (function () {
    function Thruster(power) {
        this._power = power;
    }
    Object.defineProperty(Thruster.prototype, "power", {
        get: function () {
            return this._power;
        },
        set: function (power) {
            this._power = power;
        },
        enumerable: false,
        configurable: true
    });
    return Thruster;
}());
