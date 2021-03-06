var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PasswordModelService } from '../../services/password-model.service';
var InitPage = (function () {
    function InitPage(navCtrl, pwdModel) {
        this.navCtrl = navCtrl;
        this.pwdModel = pwdModel;
    }
    InitPage.prototype.ngAfterViewInit = function () {
        if (this.pwdModel.isTherePWFile()) {
        }
        else {
        }
    };
    return InitPage;
}());
InitPage = __decorate([
    Component({
        selector: 'page-init',
        templateUrl: 'init.html'
    }),
    __metadata("design:paramtypes", [NavController, PasswordModelService])
], InitPage);
export { InitPage };
var InitPasswordPage = (function () {
    function InitPasswordPage() {
    }
    return InitPasswordPage;
}());
InitPasswordPage = __decorate([
    Component({
        templateUrl: 'page-init-password.html'
    })
], InitPasswordPage);
export { InitPasswordPage };
//# sourceMappingURL=init.js.map