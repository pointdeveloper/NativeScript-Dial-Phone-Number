"use strict";
var core_1 = require("@angular/core");
var permissions = require("nativescript-permissions");
var TNSPhone = require('nativescript-phone');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.dialNumber = function () {
        var _this = this;
        permissions.requestPermission(android.Manifest.permission.CALL_PHONE, "App Needs This Permission To Make Phone Calls")
            .then(function () {
            console.log("Got Permission!");
            console.log(_this.enteredNumber);
            TNSPhone.dial(String(_this.enteredNumber), false);
        })
            .catch(function () {
            console.log("Permission Denied!");
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map