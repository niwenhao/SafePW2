var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
var WIDTH = 6000;
var HEIGHT = 6000;
var PatternGustureInput = (function () {
    function PatternGustureInput() {
        this.gusturePath = [];
        this.stillIndexes = [];
        this.timerId = 0;
    }
    PatternGustureInput.prototype.drawBasePoint = function () {
        var wd = WIDTH / this.columnCount;
        var hd = HEIGHT / this.rowCount;
        var d = (wd > hd ? hd : wd) / 6;
        var ct = this.context;
        ct.beginPath();
        for (var r = 0; r < this.rowCount; r++) {
            for (var c = 0; c < this.columnCount; c++) {
                var x = WIDTH * (c + 0.5) / this.columnCount;
                var y = HEIGHT * (r + 0.5) / this.rowCount;
                var path = new Path2D();
                ct.arc(x, y, d, 0, 2 * Math.PI);
            }
        }
        ct.fill();
    };
    PatternGustureInput.prototype.drawPath = function () {
        var f = this.stillIndexes[0];
        var t = this.stillIndexes[this.stillIndexes.length - 1];
        if (f < t) {
            this.context.beginPath();
            for (var i = f; i <= t; i++) {
                var p = this.gusturePath[i];
                this.context.lineTo(p.x, p.y);
            }
            this.context.stroke();
        }
    };
    PatternGustureInput.prototype.shinkGusturePath = function () {
    };
    PatternGustureInput.prototype.refreshByTimer = function () {
        var idx = this.gusturePath.length - 1;
        this.stillIndexes.push(idx);
        if (this.stillIndexes.length > this.stillRefreshTimes) {
            this.stillIndexes.shift();
        }
        this.shinkGusturePath();
        this.context.clearRect(0, 0, WIDTH, HEIGHT);
        this.drawBasePoint();
        this.drawPath();
    };
    PatternGustureInput.prototype.ngAfterViewInit = function () {
        this.context = this.patternInput.getContext("2d");
    };
    PatternGustureInput.prototype.startDraw = function () {
        if (this.gusturePath.length) {
            this.gusturePath = [];
        }
        if (this.stillIndexes.length) {
            this.stillIndexes = [];
        }
        if (this.timerId) {
            window.clearInterval(this.timerId);
            this.timerId = 0;
        }
    };
    PatternGustureInput.prototype.on_mousedown = function (event) {
        var _this = this;
        this.startDraw();
        this.timerId = window.setInterval(function () {
            _this.refreshByTimer();
        }, this.refreshMS);
    };
    return PatternGustureInput;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], PatternGustureInput.prototype, "dataserial", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PatternGustureInput.prototype, "rowCount", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PatternGustureInput.prototype, "columnCount", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PatternGustureInput.prototype, "refreshMS", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PatternGustureInput.prototype, "stillRefreshTimes", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PatternGustureInput.prototype, "decided", void 0);
__decorate([
    ViewChild("sp_pattern_input"),
    __metadata("design:type", HTMLCanvasElement)
], PatternGustureInput.prototype, "patternInput", void 0);
PatternGustureInput = __decorate([
    Component({
        selector: 'sp-pattern-input',
        templateUrl: 'pattern-gusture-input.html',
        styleUrls: ['pattern-gusture-input.scss']
    })
], PatternGustureInput);
export { PatternGustureInput };
{ }
{ }
ddiioo: v: vtnneevvee;
()();
ppaatt__nnoo;
//# sourceMappingURL=pattern-gusture.js.map