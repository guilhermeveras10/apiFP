webpackJsonp([2],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SorteiosPage; });
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
 * Generated class for the SorteiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SorteiosPage = (function () {
    function SorteiosPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.sorteio = {};
        this.sorteios = [];
    }
    SorteiosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllJogadores();
    };
    SorteiosPage.prototype.save = function () {
        var _this = this;
        this.upload();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('sorteios/').push().update(this.sorteio).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    SorteiosPage.prototype.chooseFile = function () { document.getElementById('imgSorteio').click(); };
    SorteiosPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgSorteio').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/sorteios/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.sorteio.url = snapshot.downloadURL;
                _this.sorteio.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
                _this.sorteio.status = 'SUCESSO';
            });
        }
    };
    SorteiosPage.prototype.getAllJogadores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('sorteios').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.sorteios = tmp;
        });
    };
    SorteiosPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    SorteiosPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('sorteios/' + id).remove();
    };
    SorteiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sorteios',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/sorteios/sorteios.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sorteios</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="text-align: center;">\n    <h1>Escolher imagem</h1>\n    <img *ngIf="sorteio.url" src="{{ sorteio.url }}" style="width:100px;height:100px;" (click)="chooseFile()">\n    <form ngNoForm>\n      <input id="imgSorteio" name="file" type="file" (change)="upload()">\n    </form>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Nome do sorteio</ion-label>\n      <ion-input type="text" [(ngModel)]="sorteio.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Número de pontos</ion-label>\n      <ion-input type="text" [(ngModel)]="sorteio.pontos"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Descrição</ion-label>\n      <ion-input type="text" [(ngModel)]="sorteio.descricao"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n  <table>\n    <thead>\n      <th>Foto</th>\n      <th>Nome</th>\n      <th>Número de pontos</th>\n      <th>Descrição</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let sorteio of sorteios">\n        <td>\n          <img [src]="sorteio.url">\n        </td>\n        <td>{{sorteio.nome}}</td>\n        <td>{{sorteio.pontos}}</td>\n        <td>{{sorteio.descricao}}</td>\n        <td>\n          <a href="#" *ngIf="sorteio.status==\'SUCESSO\'" (click)="delete(sorteio.key)">Deletar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/sorteios/sorteios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], SorteiosPage);
    return SorteiosPage;
}());

//# sourceMappingURL=sorteios.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorteiosPageModule", function() { return SorteiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sorteios__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SorteiosPageModule = (function () {
    function SorteiosPageModule() {
    }
    SorteiosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sorteios__["a" /* SorteiosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sorteios__["a" /* SorteiosPage */]),
            ],
        })
    ], SorteiosPageModule);
    return SorteiosPageModule;
}());

//# sourceMappingURL=sorteios.module.js.map

/***/ })

});
//# sourceMappingURL=2.js.map