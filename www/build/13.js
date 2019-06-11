webpackJsonp([13],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquetesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EnquetesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnquetesPage = (function () {
    function EnquetesPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.enquete = {};
        this.enquetes = [];
    }
    EnquetesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllenquetes();
    };
    EnquetesPage.prototype.save = function () {
        var _this = this;
        this.enquete.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
        this.enquete.status = 'SUCESSO';
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('enquetes/').push().update(this.enquete).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    EnquetesPage.prototype.getAllenquetes = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('enquetes').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.enquetes = tmp;
        });
    };
    EnquetesPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    EnquetesPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('enquetes/' + id).remove();
    };
    EnquetesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enquetes',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/enquetes/enquetes.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Enquetes</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Título</ion-label>\n      <ion-input type="text" [(ngModel)]="enquete.titulo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Opção 1</ion-label>\n      <ion-input type="text" [(ngModel)]="enquete.opcao1"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Opção 2</ion-label>\n      <ion-input type="text" [(ngModel)]="enquete.opcao2"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Opção 3</ion-label>\n      <ion-input type="text" [(ngModel)]="enquete.opcao3"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Opção 4</ion-label>\n      <ion-input type="text" [(ngModel)]="enquete.opcao4"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n  <table>\n    <thead>\n      <th>Título</th>\n      <th>Opção 1</th>\n      <th>Opção 2</th>\n      <th>Opção 3</th>\n      <th>Opção 4</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let enquete of enquetes">\n        <td>{{enquete.titulo}}</td>\n        <td>{{enquete.opcao1}}</td>\n        <td>{{enquete.opcao2}}</td>\n        <td>{{enquete.opcao3}}</td>\n        <td>{{enquete.opcao4}}</td>\n        <td>\n          <a href="#" *ngIf="enquete.status==\'SUCESSO\'" (click)="delete(enquete.key)">Deletar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/enquetes/enquetes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], EnquetesPage);
    return EnquetesPage;
}());

//# sourceMappingURL=enquetes.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquetesPageModule", function() { return EnquetesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enquetes__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EnquetesPageModule = (function () {
    function EnquetesPageModule() {
    }
    EnquetesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__enquetes__["a" /* EnquetesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__enquetes__["a" /* EnquetesPage */]),
            ],
        })
    ], EnquetesPageModule);
    return EnquetesPageModule;
}());

//# sourceMappingURL=enquetes.module.js.map

/***/ })

});
//# sourceMappingURL=13.js.map