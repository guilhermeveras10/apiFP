webpackJsonp([4],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosLojaPage; });
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
 * Generated class for the ProdutosLojaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutosLojaPage = (function () {
    function ProdutosLojaPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.produto = {};
        this.produtos = [];
    }
    ProdutosLojaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllProdutos();
    };
    ProdutosLojaPage.prototype.save = function () {
        var _this = this;
        this.upload();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('produtosLoja/').push().update(this.produto).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    ProdutosLojaPage.prototype.chooseFile = function () { document.getElementById('imgProduto').click(); };
    ProdutosLojaPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgProduto').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/produtosLoja/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.produto.url = snapshot.downloadURL;
                _this.produto.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
                _this.produto.status = 'SUCESSO';
            });
        }
    };
    ProdutosLojaPage.prototype.getAllProdutos = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('produtosLoja').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.produtos = tmp;
        });
    };
    ProdutosLojaPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    ProdutosLojaPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('produtosLoja/' + id).remove();
    };
    ProdutosLojaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produtos-loja',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/produtos-loja/produtos-loja.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Produtos da loja</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="text-align: center;">\n    <h1>Escolher imagem</h1>\n    <img *ngIf="produto.url" src="{{ produto.url }}" style="width:100px;height:100px;" (click)="chooseFile()">\n    <form ngNoForm>\n      <input id="imgProduto" name="file" type="file" (change)="upload()">\n    </form>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Nome do produto</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Descrição do produto</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.descricao"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Valor do produto</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.valor"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Pontos que o produto vale</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.pontos"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n  <table>\n    <thead>\n      <th>Foto</th>\n      <th>Nome</th>\n      <th>Descrição</th>\n      <th>Valor</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let produto of produtos">\n        <td>\n          <img [src]="produto.url">\n        </td>\n        <td>{{produto.nome}}</td>\n        <td>{{produto.descricao}}</td>\n        <td>{{produto.valor}}</td>\n        <td>\n          <a href="#" *ngIf="produto.status==\'SUCESSO\'" (click)="delete(produto.key)">Deletar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/produtos-loja/produtos-loja.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProdutosLojaPage);
    return ProdutosLojaPage;
}());

//# sourceMappingURL=produtos-loja.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosLojaPageModule", function() { return ProdutosLojaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produtos_loja__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProdutosLojaPageModule = (function () {
    function ProdutosLojaPageModule() {
    }
    ProdutosLojaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__produtos_loja__["a" /* ProdutosLojaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produtos_loja__["a" /* ProdutosLojaPage */]),
            ],
        })
    ], ProdutosLojaPageModule);
    return ProdutosLojaPageModule;
}());

//# sourceMappingURL=produtos-loja.module.js.map

/***/ })

});
//# sourceMappingURL=4.js.map