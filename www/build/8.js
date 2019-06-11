webpackJsonp([8],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogadoresPage; });
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
 * Generated class for the JogadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JogadoresPage = (function () {
    function JogadoresPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.jogador = {};
        this.jogadores = [];
    }
    JogadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllJogadores();
    };
    JogadoresPage.prototype.save = function () {
        var _this = this;
        this.upload();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('jogadores/').push().update(this.jogador).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    JogadoresPage.prototype.chooseFile = function () { document.getElementById('imgJogador').click(); };
    JogadoresPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgJogador').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/jogadores/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.jogador.url = snapshot.downloadURL;
                _this.jogador.status = 'SUCESSO';
            });
        }
    };
    JogadoresPage.prototype.getAllJogadores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('jogadores').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.jogadores = tmp;
        });
    };
    JogadoresPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    JogadoresPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('artilheiros/' + id).remove();
    };
    JogadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jogadores',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/jogadores/jogadores.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Jogadores</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <div style="text-align: center;">\n      <h1>Escolher imagem</h1>\n      <img *ngIf="jogador.url" src="{{ jogador.url }}" style="width:100px;height:100px;" (click)="chooseFile()">\n      <form ngNoForm>\n        <input id="imgJogador" name="file" type="file" (change)="upload()">\n      </form>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input type="text" [(ngModel)]="jogador.nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Sobrenome</ion-label>\n        <ion-input type="text" [(ngModel)]="jogador.sobrenome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Posição do jogador</ion-label>\n        <ion-input type="text" [(ngModel)]="jogador.posicao"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Nascimento</ion-label>\n        <ion-input type="text" [(ngModel)]="jogador.nascimento"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Nacionalidade</ion-label>\n        <ion-input type="text" [(ngModel)]="jogador.nacionalidade"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label stacked>Local de nascimento</ion-label>\n        <ion-input type="text" [(ngModel)]="jogador.localdenascimento"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Idade</ion-label>\n        <ion-input type="text" [(ngModel)]="jogador.idade"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button block (click)="save()">Salvar</button>\n      </ion-item>\n    </ion-list>\n    <table>\n      <thead>\n        <th>Foto</th>\n        <th>Nome</th>\n        <th>Sobrenome</th>\n        <th>Posição</th>\n        <th>Nascimento</th>\n        <th>Nacionalidade</th>\n        <th>Local de nascimento</th>\n        <th>Idade</th>\n        <th>Ações</th>\n      </thead>\n      <tbody>\n        <tr *ngFor="let jogador of jogadores">\n          <td>\n            <img [src]="jogador.url">\n          </td>\n          <td>{{jogador.nome}}</td>\n          <td>{{jogador.sobrenome}}</td>\n          <td>{{jogador.posicao}}</td>\n          <td>{{jogador.nascimento}}</td>\n          <td>{{jogador.nacionalidade}}</td>\n          <td>{{jogador.localdenascimento}}</td>\n          <td>{{jogador.idade}}</td>\n          <td>\n            <a href="#" *ngIf="jogador.status==\'SUCESSO\'" (click)="delete(jogador.key)">Deletar</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/jogadores/jogadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], JogadoresPage);
    return JogadoresPage;
}());

//# sourceMappingURL=jogadores.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogadoresPageModule", function() { return JogadoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jogadores__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JogadoresPageModule = (function () {
    function JogadoresPageModule() {
    }
    JogadoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jogadores__["a" /* JogadoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jogadores__["a" /* JogadoresPage */]),
            ],
        })
    ], JogadoresPageModule);
    return JogadoresPageModule;
}());

//# sourceMappingURL=jogadores.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map