webpackJsonp([7],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogosPage; });
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
 * Generated class for the JogosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JogosPage = (function () {
    function JogosPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.jogo = {};
        this.jogos = [];
    }
    JogosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllVideos();
    };
    JogosPage.prototype.save = function () {
        var _this = this;
        // this.upload();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('jogos/').push().update(this.jogo).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    JogosPage.prototype.chooseFile = function () { document.getElementById('escudooponente').click(); };
    JogosPage.prototype.chooseFileOponente = function () { document.getElementById('meuescudo').click(); };
    JogosPage.prototype.chooseFileCampeonato = function () { document.getElementById('campeonato').click(); };
    JogosPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('escudooponente').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/jogos/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.jogo.escudooponente = snapshot.downloadURL;
                _this.jogo.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
                _this.jogo.status = 'SUCESSO';
                // this.uploadVideo();
            });
        }
    };
    JogosPage.prototype.uploadCampeonato = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('campeonato').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/jogos/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.jogo.campeonato = snapshot.downloadURL;
            });
        }
    };
    JogosPage.prototype.uploadVideo = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('meuescudo').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/jogos/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.jogo.meuescudo = snapshot.downloadURL;
            });
        }
    };
    JogosPage.prototype.getAllVideos = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('jogos').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.jogos = tmp;
        });
    };
    JogosPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    JogosPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('jogos/' + id).remove();
    };
    JogosPage.prototype.colocar = function (id, jogo) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('jogos/' + id).update(jogo);
    };
    JogosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jogos',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/jogos/jogos.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Jogos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="text-align: center;">\n    <h1>Escolher escudo do oponente</h1>\n    <img *ngIf="jogo.escudooponente" src="{{ jogo.escudooponente }}" style="width:100px;height:100px;" (click)="chooseFile()">\n    <form ngNoForm>\n      <input id="escudooponente" name="file" type="file" (change)="upload()">\n    </form>\n    <h1>Escolher meu escudo</h1>\n    <img *ngIf="jogo.meuescudo" src="{{ jogo.meuescudo }}" style="width:100px;height:100px;" (click)="chooseFileOponente()">\n    <form ngNoForm>\n      <input id="meuescudo" name="file" type="file" (change)="uploadVideo()">\n    </form>\n    <h1>Escolher foto do campeonato</h1>\n    <img *ngIf="jogo.campeonato" src="{{ jogo.campeonato }}" style="width:100px;height:100px;" (click)="chooseFileCampeonato()">\n    <form ngNoForm>\n      <input id="campeonato" name="file" type="file" (change)="uploadCampeonato()">\n    </form>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Nome do oponente</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.nomeDoOponente"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label stacked>Nome do campeonato</ion-label>\n        <ion-input type="text" [(ngModel)]="jogo.nomeDoCampeonato"></ion-input>\n      </ion-item>\n    <ion-item>\n      <ion-label stacked>Nome do meu time</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.nomeDoTime"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Data do jogo</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.dataDoJogo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Horário do jogo</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.horarioDoJogo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Quantidade de gols do oponente</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.quantidadeDeGolsDoOponente"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Sua quantidade de gols</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.suaQuantidadeDeGols"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Valor do ingresso sessao A</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.valorDoIngressoA"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Valor do ingresso sessao B</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.valorDoIngressoB"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Valor do ingresso sessao C</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.valorDoIngressoC"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Pontos do ingresso sessao A</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.pontosDoIngressoA"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Pontos do ingresso sessao B</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.pontosDoIngressoB"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Pontos do ingresso sessao C</ion-label>\n      <ion-input type="text" [(ngModel)]="jogo.pontosDoIngressoC"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n  <table>\n    <thead>\n      <th>Escudo do oponente</th>\n      <th>Nome do oponente</th>\n      <th>Sua quantidade de gols</th>\n      <th>Quantidade de gols do oponente</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let jogo of jogos">\n        <td>\n          <img [src]="jogo.escudooponente">\n        </td>\n        <td>{{jogo.nomeDoOponente}}</td>\n        <td><ion-input type="text" [(ngModel)]="jogo.suaQuantidadeDeGols"></ion-input></td>\n        <td><ion-input type="text" [(ngModel)]="jogo.quantidadeDeGolsDoOponente"></ion-input></td>\n        <td>\n          <a href="#" (click)="colocar(jogo.key,jogo)">Alterar dados</a>\n          <a href="#" *ngIf="jogo.status==\'SUCESSO\'" (click)="delete(jogo.key)">Deletar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/jogos/jogos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], JogosPage);
    return JogosPage;
}());

//# sourceMappingURL=jogos.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogosPageModule", function() { return JogosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jogos__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JogosPageModule = (function () {
    function JogosPageModule() {
    }
    JogosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jogos__["a" /* JogosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jogos__["a" /* JogosPage */]),
            ],
        })
    ], JogosPageModule);
    return JogosPageModule;
}());

//# sourceMappingURL=jogos.module.js.map

/***/ })

});
//# sourceMappingURL=7.js.map