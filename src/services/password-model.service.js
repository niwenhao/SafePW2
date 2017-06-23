var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
/**
 * To access a crypto-safe password file.
 *
 * can encoding or decoding password map with same crypto method link AES.
 *
 * @description
 *    Password file format:
 *
 *
 * <h1/>
 *
 */
var PasswordModelService = (function () {
    /**
     * Constructor.
     * Crypto service should be injected in the future.
     */
    function PasswordModelService() {
    }
    /**
     * judge whether the password file exists.
     * @return true: exists false: not exists.
     */
    PasswordModelService.prototype.isTherePWFile = function () {
        return true;
    };
    /**
     * get password data after authorized the file.
     * @return PasswordModel
     */
    PasswordModelService.prototype.getPasswordModel = function () {
        return null;
    };
    /**
     * Authority the password file and decoding it to memory.
     */
    PasswordModelService.prototype.authorityPWFile = function (uid, pwd) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * encode password data and save it as file.
     */
    PasswordModelService.prototype.savePWFile = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    return PasswordModelService;
}());
PasswordModelService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], PasswordModelService);
export { PasswordModelService };
//# sourceMappingURL=password-model.service.js.map