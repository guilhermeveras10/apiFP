webpackJsonp([17],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulasCursoComplementarPage; });
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
 * Generated class for the AulasCursoComplementarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulasCursoComplementarPage = (function () {
    function AulasCursoComplementarPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedores = [];
    }
    AulasCursoComplementarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllTorcedores();
    };
    AulasCursoComplementarPage.prototype.getAllTorcedores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulaCursoComplementar').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    AulasCursoComplementarPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulasCursoComplementar/' + id).remove();
    };
    AulasCursoComplementarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aulas-curso-complementar',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/aulas-curso-complementar/aulas-curso-complementar.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Aulas curso complementar</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <table>\n      <thead>\n        <th>Título</th>\n        <th>Descrição</th>\n        <th>Ações</th>\n      </thead>\n      <tbody>\n        <tr *ngFor="let torcedor of torcedores">\n          <td>{{torcedor.titulo}}</td>\n          <td>{{torcedor.descricao}}</td>\n          <td>\n            <a href="#" (click)="delete(torcedor.key)">Deletar</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </ion-content>\n  '/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/aulas-curso-complementar/aulas-curso-complementar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AulasCursoComplementarPage);
    return AulasCursoComplementarPage;
}());

//# sourceMappingURL=aulas-curso-complementar.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulasPage; });
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
 * Generated class for the AulasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulasPage = (function () {
    function AulasPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedores = [];
    }
    AulasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllTorcedores();
    };
    AulasPage.prototype.getAllTorcedores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulasCursoPrincipal').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    AulasPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulasCursoPrincipal/' + id).remove();
    };
    AulasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aulas',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/aulas/aulas.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Aulas</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <table>\n      <thead>\n        <th>Título</th>\n        <th>Subtitulo</th>\n        <th>Descrição</th>\n        <th>Ações</th>\n      </thead>\n      <tbody>\n        <tr *ngFor="let torcedor of torcedores">\n          <td>{{torcedor.titulo}}</td>\n          <td>{{torcedor.subtitulo}}</td>\n          <td>{{torcedor.descricao}}</td>\n          <td>\n            <a href="#" (click)="delete(torcedor.key)">Deletar</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </ion-content>\n  '/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/aulas/aulas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AulasPage);
    return AulasPage;
}());

//# sourceMappingURL=aulas.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoComplementarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incluir_aula_curso_complementar_incluir_aula_curso_complementar__ = __webpack_require__(145);
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
 * Generated class for the CursoComplementarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CursoComplementarPage = (function () {
    function CursoComplementarPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.noticia = {};
        this.noticias = [];
    }
    CursoComplementarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllNoticias();
    };
    CursoComplementarPage.prototype.save = function () {
        var _this = this;
        this.upload();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('cursoComplementar/').push().update(this.noticia).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    CursoComplementarPage.prototype.chooseFile = function () { document.getElementById('imgNoticia').click(); };
    CursoComplementarPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgNoticia').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/aulaCursoComplementar/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url = snapshot.downloadURL;
                _this.noticia.status = 'SUCESSO';
                _this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
            });
        }
    };
    CursoComplementarPage.prototype.getAllNoticias = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('cursoComplementar').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.noticias = tmp;
        });
    };
    CursoComplementarPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    CursoComplementarPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('cursoComplementar/' + id).remove();
    };
    CursoComplementarPage.prototype.incluir = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__incluir_aula_curso_complementar_incluir_aula_curso_complementar__["a" /* IncluirAulaCursoComplementarPage */], { key: key }).present();
    };
    CursoComplementarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-curso-complementar',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/curso-complementar/curso-complementar.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Curso complementar</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <div style="text-align: center;">\n      <h1>Escolher imagem</h1>\n      <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:100px;height:100px;" (click)="chooseFile()">\n      <form ngNoForm>\n        <input id="imgNoticia" name="file" type="file" (change)="upload()">\n      </form>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Titulo do curso</ion-label>\n        <ion-input type="text" [(ngModel)]="noticia.nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Descrição do curso</ion-label>\n        <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <button ion-button block (click)="save()">Salvar</button>\n      </ion-item>\n    </ion-list>\n    <table>\n      <thead>\n        <th>Foto</th>\n        <th>Título</th>\n        <th>Descrição</th>\n        <th>Ações</th>\n      </thead>\n      <tbody>\n        <tr *ngFor="let noticia of noticias">\n          <td>\n            <img [src]="noticia.url">\n          </td>\n          <td>{{noticia.nome}}</td>\n          <td>{{noticia.descricao}}</td>\n          <td>\n              <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="incluir(noticia.key)">Incluir aula complementar</a>\n          <br>\n            <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="delete(noticia.key)">Deletar</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/curso-complementar/curso-complementar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], CursoComplementarPage);
    return CursoComplementarPage;
}());

//# sourceMappingURL=curso-complementar.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncluirAulaCursoComplementarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
 * Generated class for the IncluirAulaCursoComplementarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncluirAulaCursoComplementarPage = (function () {
    function IncluirAulaCursoComplementarPage(viewCtrl, nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedor = {};
        this.noticia = {};
        this.torcedorKey = navParams.get('key');
    }
    IncluirAulaCursoComplementarPage.prototype.ionViewDidLoad = function () {
        this.getTorcedorInfo();
    };
    IncluirAulaCursoComplementarPage.prototype.getTorcedorInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('cursoComplementar/' + this.torcedorKey).on('value', function (snapshot) {
            _this.torcedor = snapshot.val();
        });
    };
    IncluirAulaCursoComplementarPage.prototype.chooseFile = function () { document.getElementById('imgAula').click(); };
    IncluirAulaCursoComplementarPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgAula').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/aulascomplementar/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url = snapshot.downloadURL;
            });
        }
    };
    IncluirAulaCursoComplementarPage.prototype.save = function () {
        var _this = this;
        this.upload();
        this.noticia.status = 'SUCESSO';
        this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
        this.noticia.id_do_curso = this.torcedorKey;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulaCursoComplementar/' + this.torcedorKey).update(this.noticia).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    IncluirAulaCursoComplementarPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    IncluirAulaCursoComplementarPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    IncluirAulaCursoComplementarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incluir-aula-curso-complementar',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{torcedor.nome}}</ion-title>\n      <ion-buttons end>\n        <button ion-button clear (click)="close()">Fechar</button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n\n  <div style="text-align: center;">\n      <h1>Escolher imagem</h1>\n      <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:50px;height:50px;" (click)="chooseFile()">\n      <form ngNoForm>\n        <input id="imgAula" name="file" type="file" (change)="upload()">\n      </form>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Url da aula</ion-label>\n        <ion-input type="text" [(ngModel)]="noticia.urlDaAula"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Título da aula</ion-label>\n        <ion-input type="text" [(ngModel)]="noticia.titulo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Descrição da aula</ion-label>\n        <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <button ion-button block (click)="save()">Salvar</button>\n      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], IncluirAulaCursoComplementarPage);
    return IncluirAulaCursoComplementarPage;
}());

//# sourceMappingURL=incluir-aula-curso-complementar.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncluirAulaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
 * Generated class for the IncluirAulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncluirAulaPage = (function () {
    function IncluirAulaPage(viewCtrl, nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedor = {};
        this.noticia = {};
        this.torcedorKey = navParams.get('key');
    }
    IncluirAulaPage.prototype.ionViewDidLoad = function () {
        this.getTorcedorInfo();
    };
    IncluirAulaPage.prototype.getTorcedorInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulosCursoPrincipal/' + this.torcedorKey).on('value', function (snapshot) {
            _this.torcedor = snapshot.val();
        });
    };
    IncluirAulaPage.prototype.save = function () {
        var _this = this;
        this.noticia.status = 'SUCESSO';
        this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
        this.noticia.id_do_modulo = this.torcedorKey;
        this.noticia.etapa = this.torcedor.etapa;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulasCursoPrincipal/' + this.torcedor.etapa).update(this.noticia).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    IncluirAulaPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    IncluirAulaPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    IncluirAulaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incluir-aula',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/incluir-aula/incluir-aula.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{torcedor.titulo}}</ion-title>\n    <ion-buttons end>\n      <button ion-button clear (click)="close()">Fechar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Url do conteúdo da aula</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.urlDoConteudo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Url da aula</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.urlDaAula"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Título da aula</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.titulo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Subtitulo da aula</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.subtitulo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Descrição da aula</ion-label>\n      <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/incluir-aula/incluir-aula.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], IncluirAulaPage);
    return IncluirAulaPage;
}());

//# sourceMappingURL=incluir-aula.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncluirCursoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
 * Generated class for the IncluirCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncluirCursoPage = (function () {
    function IncluirCursoPage(viewCtrl, nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedor = {};
        this.noticia = {};
        this.torcedorKey = navParams.get('key');
    }
    IncluirCursoPage.prototype.ionViewDidLoad = function () {
        this.getTorcedorInfo();
    };
    IncluirCursoPage.prototype.getTorcedorInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('cursoPrincipal/' + this.torcedorKey).on('value', function (snapshot) {
            _this.torcedor = snapshot.val();
        });
    };
    IncluirCursoPage.prototype.save = function () {
        var _this = this;
        this.upload();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulosCursoPrincipal/' + this.torcedorKey).update(this.noticia).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    IncluirCursoPage.prototype.chooseFile = function () { document.getElementById('imgModulo').click(); };
    IncluirCursoPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgModulo').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/modulos/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url = snapshot.downloadURL;
                _this.noticia.status = 'SUCESSO';
                _this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
                _this.noticia.id_do_curso = _this.torcedorKey;
            });
        }
    };
    IncluirCursoPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    IncluirCursoPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    IncluirCursoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incluir-curso',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/incluir-curso/incluir-curso.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{torcedor.nome}}</ion-title>\n    <ion-buttons end>\n      <button ion-button clear (click)="close()">Fechar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style="text-align: center;">\n    <h1>Escolher imagem</h1>\n    <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:50px;height:50px;" (click)="chooseFile()">\n    <form ngNoForm>\n      <input id="imgModulo" name="file" type="file" (change)="upload()">\n    </form>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Nome do módulo </ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.titulo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Qual etapa ?</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.etapa"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Descrição do módulo</ion-label>\n      <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/incluir-curso/incluir-curso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], IncluirCursoPage);
    return IncluirCursoPage;
}());

//# sourceMappingURL=incluir-curso.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incluir_aula_incluir_aula__ = __webpack_require__(146);
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
 * Generated class for the ModulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModulosPage = (function () {
    function ModulosPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedores = [];
    }
    ModulosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllTorcedores();
    };
    ModulosPage.prototype.getAllTorcedores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulosCursoPrincipal').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    ModulosPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulosCursoPrincipal/' + id).remove();
    };
    ModulosPage.prototype.incluir = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__incluir_aula_incluir_aula__["a" /* IncluirAulaPage */], { key: key }).present();
    };
    ModulosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modulos',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/modulos/modulos.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Módulo</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <table>\n    <thead>\n      <th>Foto</th>\n      <th>Título</th>\n      <th>Etapa</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let torcedor of torcedores">\n        <td>\n          <img [src]="torcedor.url">\n        </td>\n        <td>{{torcedor.titulo}}</td>\n        <td>{{torcedor.etapa}}</td>\n        <td>\n          <a href="#" (click)="incluir(torcedor.key)">Incluir aula</a>\n          <br>\n          <a href="#" (click)="delete(torcedor.key)">Deletar modulo</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/modulos/modulos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ModulosPage);
    return ModulosPage;
}());

//# sourceMappingURL=modulos.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorcedoresInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
 * Generated class for the TorcedoresInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TorcedoresInfoPage = (function () {
    function TorcedoresInfoPage(navCtrl, navParams, viewCtrl, loadCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.torcedor = {};
        this.torcedorKey = navParams.get('key');
    }
    TorcedoresInfoPage.prototype.ionViewDidLoad = function () {
        this.getTorcedorInfo();
    };
    TorcedoresInfoPage.prototype.getTorcedorInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usuarios/' + this.torcedorKey).on('value', function (snapshot) {
            _this.torcedor = snapshot.val();
        });
    };
    TorcedoresInfoPage.prototype.updateUserInfo = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usuarios/' + this.torcedorKey).update(this.torcedor).then(function (data) {
            _this.displayToast("Upado com sucesso");
        }).catch(function (err) { return console.log(err); });
    };
    TorcedoresInfoPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ message: message, duration: 2000 }).present();
    };
    TorcedoresInfoPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TorcedoresInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-torcedores-info',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/torcedores-info/torcedores-info.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{torcedor.nome}}</ion-title>\n    <ion-buttons end>\n      <button ion-button clear (click)="close()">Fechar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n      <ion-item>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input type="text" [(ngModel)]="torcedor.nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>CPF</ion-label>\n        <ion-input type="text" [(ngModel)]="torcedor.cpf"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Endereço</ion-label>\n        <ion-input type="text" [(ngModel)]="torcedor.endereco"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Número</ion-label>\n        <ion-input type="text" [(ngModel)]="torcedor.numero"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Número de recados</ion-label>\n        <ion-input type="text" [(ngModel)]="torcedor.recados"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Telefone</ion-label>\n        <ion-input type="text" [(ngModel)]="torcedor.telefone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button block (click)="updateUserInfo()">Update</button>\n      </ion-item>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/torcedores-info/torcedores-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], TorcedoresInfoPage);
    return TorcedoresInfoPage;
}());

//# sourceMappingURL=torcedores-info.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorcedoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__torcedores_info_torcedores_info__ = __webpack_require__(149);
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
 * Generated class for the TorcedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TorcedoresPage = (function () {
    function TorcedoresPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.torcedores = [];
    }
    TorcedoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllTorcedores();
    };
    TorcedoresPage.prototype.getAllTorcedores = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usuarios').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    TorcedoresPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usuarios/' + id).remove();
    };
    TorcedoresPage.prototype.showPassengerInfo = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__torcedores_info_torcedores_info__["a" /* TorcedoresInfoPage */], { key: key }).present();
    };
    TorcedoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-torcedores',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/torcedores/torcedores.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Usuários</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <table>\n    <thead>\n      <th>E-mail</th>\n      <th>Senha</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let torcedor of torcedores">\n        <td>{{torcedor.email}}</td>\n        <td>{{torcedor.password}}</td>\n        <td>\n          <a href="#" (click)="delete(torcedor.key)">Deletar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/torcedores/torcedores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], TorcedoresPage);
    return TorcedoresPage;
}());

//# sourceMappingURL=torcedores.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incluir_curso_incluir_curso__ = __webpack_require__(147);
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
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiasPage = (function () {
    function NoticiasPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl, modalCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.noticia = {};
        this.noticias = [];
    }
    NoticiasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllNoticias();
    };
    NoticiasPage.prototype.save = function () {
        var _this = this;
        this.upload();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('cursoPrincipal/').push().update(this.noticia).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    NoticiasPage.prototype.chooseFile = function () { document.getElementById('imgNoticia').click(); };
    NoticiasPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgNoticia').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/cursoPrincipal/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url = snapshot.downloadURL;
                _this.noticia.status = 'SUCESSO';
                _this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
            });
        }
    };
    NoticiasPage.prototype.getAllNoticias = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('cursoPrincipal').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.noticias = tmp;
        });
    };
    NoticiasPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    NoticiasPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('cursoPrincipal/' + id).remove();
    };
    NoticiasPage.prototype.incluir = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__incluir_curso_incluir_curso__["a" /* IncluirCursoPage */], { key: key }).present();
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/noticias/noticias.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Curso principal</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="text-align: center;">\n    <h1>Escolher imagem</h1>\n    <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:100px;height:100px;" (click)="chooseFile()">\n    <form ngNoForm>\n      <input id="imgNoticia" name="file" type="file" (change)="upload()">\n    </form>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Nome do curso</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Destinado á qual tipo de usuário</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.tipoDeUsuario"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Descrição do curso</ion-label>\n      <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n  <table>\n    <thead>\n      <th>Foto</th>\n      <th>Nome</th>\n      <th>Descrição</th>\n      <th>Destinado</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let noticia of noticias">\n        <td>\n          <img [src]="noticia.url">\n        </td>\n        <td>{{noticia.nome}}</td>\n        <td>{{noticia.descricao}}</td>\n        <td>{{noticia.tipoDeUsuario}}</td>\n        <td>\n            <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="incluir(noticia.key)">Incluir Módulo</a>\n        <br>\n          <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="delete(noticia.key)">Deletar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/noticias/noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aulas-curso-complementar/aulas-curso-complementar.module": [
		452,
		16
	],
	"../pages/aulas/aulas.module": [
		453,
		15
	],
	"../pages/curso-complementar/curso-complementar.module": [
		454,
		14
	],
	"../pages/enquetes/enquetes.module": [
		455,
		13
	],
	"../pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar.module": [
		456,
		12
	],
	"../pages/incluir-aula/incluir-aula.module": [
		457,
		11
	],
	"../pages/incluir-curso/incluir-curso.module": [
		458,
		10
	],
	"../pages/jogadores/jogadores.module": [
		459,
		9
	],
	"../pages/jogos/jogos.module": [
		460,
		8
	],
	"../pages/modulos/modulos.module": [
		461,
		7
	],
	"../pages/noticias/noticias.module": [
		468,
		6
	],
	"../pages/produtos-loja/produtos-loja.module": [
		462,
		5
	],
	"../pages/produtos-pontos/produtos-pontos.module": [
		463,
		4
	],
	"../pages/sorteios/sorteios.module": [
		464,
		3
	],
	"../pages/torcedores-info/torcedores-info.module": [
		465,
		2
	],
	"../pages/torcedores/torcedores.module": [
		466,
		1
	],
	"../pages/videos/videos.module": [
		467,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 201;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 286:
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

/***/ 287:
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

/***/ 288:
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

/***/ 289:
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosPontosPage; });
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
 * Generated class for the ProdutosPontosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutosPontosPage = (function () {
    function ProdutosPontosPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.produto = {};
        this.produtos = [];
    }
    ProdutosPontosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllProdutos();
    };
    ProdutosPontosPage.prototype.save = function () {
        var _this = this;
        this.upload();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('produtosPontos/').push().update(this.produto).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    ProdutosPontosPage.prototype.chooseFile = function () { document.getElementById('imgProduto').click(); };
    ProdutosPontosPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgProduto').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/produtosPontos/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.produto.url = snapshot.downloadURL;
                _this.produto.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
                _this.produto.status = 'SUCESSO';
            });
        }
    };
    ProdutosPontosPage.prototype.getAllProdutos = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('produtosPontos').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.produtos = tmp;
        });
    };
    ProdutosPontosPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    ProdutosPontosPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('produtosPontos/' + id).remove();
    };
    ProdutosPontosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produtos-pontos',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/produtos-pontos/produtos-pontos.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Produtos de pontos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="text-align: center;">\n    <h1>Escolher imagem</h1>\n    <img *ngIf="produto.url" src="{{ produto.url }}" style="width:100px;height:100px;" (click)="chooseFile()">\n    <form ngNoForm>\n      <input id="imgProduto" name="file" type="file" (change)="upload()">\n    </form>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Nome do produto</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Descrição do produto</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.descricao"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Pontos para resgate</ion-label>\n      <ion-input type="text" [(ngModel)]="produto.pontos"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n  <table>\n    <thead>\n      <th>Foto</th>\n      <th>Nome</th>\n      <th>Descrição</th>\n      <th>Pontos para resgate</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let produto of produtos">\n        <td>\n          <img [src]="produto.url">\n        </td>\n        <td>{{produto.nome}}</td>\n        <td>{{produto.descricao}}</td>\n        <td>{{produto.pontos}}</td>\n        <td>\n          <a href="#" *ngIf="produto.status==\'SUCESSO\'" (click)="delete(produto.key)">Deletar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/produtos-pontos/produtos-pontos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProdutosPontosPage);
    return ProdutosPontosPage;
}());

//# sourceMappingURL=produtos-pontos.js.map

/***/ }),

/***/ 291:
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
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
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideosPage = (function () {
    function VideosPage(nav, navParams, loadingCtrl, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.video = {};
        this.videos = [];
    }
    VideosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawRequestsPage');
        this.getAllVideos();
    };
    VideosPage.prototype.save = function () {
        var _this = this;
        this.upload();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('videos/').push().update(this.video).then(function (data) {
            _this.displayToast("Upado com sucesso");
        });
    };
    VideosPage.prototype.chooseFile = function () { document.getElementById('miniatura').click(); };
    VideosPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('miniatura').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/videos/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.video.miniatura = snapshot.downloadURL;
                _this.video.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
                _this.video.status = 'SUCESSO';
                _this.uploadVideo();
            });
        }
    };
    VideosPage.prototype.uploadVideo = function () {
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('video').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/videosMiniaturas/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
            });
        }
    };
    VideosPage.prototype.getAllVideos = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('videos').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.videos = tmp;
        });
    };
    VideosPage.prototype.displayToast = function (message) {
        this.toastCtrl.create({ duration: 2000, message: message }).present();
    };
    VideosPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('videos/' + id).remove();
    };
    VideosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-videos',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/videos/videos.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Vídeos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="text-align: center;">\n    <h1>Escolher miniatura do vídeo</h1>\n    <img *ngIf="video.miniatura" src="{{ video.miniatura }}" style="width:100px;height:100px;" (click)="chooseFile()">\n    <form ngNoForm>\n      <input id="miniatura" name="file" type="file" (change)="upload()">\n    </form>\n    <h1>Escolher arquivo do vídeo</h1>\n    <form ngNoForm>\n      <input id="video" name="file" type="file" (change)="uploadVideo()">\n    </form>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Título do video</ion-label>\n      <ion-input type="text" [(ngModel)]="video.titulo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n  <table>\n    <thead>\n      <th>Miniatura</th>\n      <th>Título</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let video of videos">\n        <td>\n          <img [src]="video.miniatura">\n        </td>\n        <td>{{video.titulo}}</td>\n        <td>\n          <a href="#" *ngIf="video.status==\'SUCESSO\'" (click)="delete(video.key)">Deletar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/videos/videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], VideosPage);
    return VideosPage;
}());

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(316);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_incluir_curso_incluir_curso__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_torcedores_torcedores__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_enquetes_enquetes__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_jogadores_jogadores__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_jogos_jogos__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_produtos_loja_produtos_loja__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_produtos_pontos_produtos_pontos__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sorteios_sorteios__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_videos_videos__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_torcedores_info_torcedores_info__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_incluir_aula_incluir_aula__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modulos_modulos__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_aulas_aulas__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_curso_complementar_curso_complementar__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_aulas_curso_complementar_aulas_curso_complementar__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_incluir_aula_curso_complementar_incluir_aula_curso_complementar__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_aulas_aulas__["a" /* AulasPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_aulas_curso_complementar_aulas_curso_complementar__["a" /* AulasCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_incluir_aula_curso_complementar_incluir_aula_curso_complementar__["a" /* IncluirAulaCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_curso_complementar_curso_complementar__["a" /* CursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_torcedores_info_torcedores_info__["a" /* TorcedoresInfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_incluir_curso_incluir_curso__["a" /* IncluirCursoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_torcedores_torcedores__["a" /* TorcedoresPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_incluir_aula_incluir_aula__["a" /* IncluirAulaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sorteios_sorteios__["a" /* SorteiosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_videos_videos__["a" /* VideosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_enquetes_enquetes__["a" /* EnquetesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_jogadores_jogadores__["a" /* JogadoresPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_jogos_jogos__["a" /* JogosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_produtos_loja_produtos_loja__["a" /* ProdutosLojaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_produtos_pontos_produtos_pontos__["a" /* ProdutosPontosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aulas-curso-complementar/aulas-curso-complementar.module#AulasCursoComplementarPageModule', name: 'AulasCursoComplementarPage', segment: 'aulas-curso-complementar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aulas/aulas.module#AulasPageModule', name: 'AulasPage', segment: 'aulas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/curso-complementar/curso-complementar.module#CursoComplementarPageModule', name: 'CursoComplementarPage', segment: 'curso-complementar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enquetes/enquetes.module#EnquetesPageModule', name: 'EnquetesPage', segment: 'enquetes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar.module#IncluirAulaCursoComplementarPageModule', name: 'IncluirAulaCursoComplementarPage', segment: 'incluir-aula-curso-complementar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incluir-aula/incluir-aula.module#IncluirAulaPageModule', name: 'IncluirAulaPage', segment: 'incluir-aula', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incluir-curso/incluir-curso.module#IncluirCursoPageModule', name: 'IncluirCursoPage', segment: 'incluir-curso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jogadores/jogadores.module#JogadoresPageModule', name: 'JogadoresPage', segment: 'jogadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jogos/jogos.module#JogosPageModule', name: 'JogosPage', segment: 'jogos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modulos/modulos.module#ModulosPageModule', name: 'ModulosPage', segment: 'modulos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produtos-loja/produtos-loja.module#ProdutosLojaPageModule', name: 'ProdutosLojaPage', segment: 'produtos-loja', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produtos-pontos/produtos-pontos.module#ProdutosPontosPageModule', name: 'ProdutosPontosPage', segment: 'produtos-pontos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sorteios/sorteios.module#SorteiosPageModule', name: 'SorteiosPage', segment: 'sorteios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/torcedores-info/torcedores-info.module#TorcedoresInfoPageModule', name: 'TorcedoresInfoPage', segment: 'torcedores-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/torcedores/torcedores.module#TorcedoresPageModule', name: 'TorcedoresPage', segment: 'torcedores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/videos/videos.module#VideosPageModule', name: 'VideosPage', segment: 'videos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_aulas_aulas__["a" /* AulasPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_aulas_curso_complementar_aulas_curso_complementar__["a" /* AulasCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_incluir_aula_curso_complementar_incluir_aula_curso_complementar__["a" /* IncluirAulaCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_curso_complementar_curso_complementar__["a" /* CursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_torcedores_info_torcedores_info__["a" /* TorcedoresInfoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_torcedores_torcedores__["a" /* TorcedoresPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_incluir_curso_incluir_curso__["a" /* IncluirCursoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_incluir_aula_incluir_aula__["a" /* IncluirAulaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sorteios_sorteios__["a" /* SorteiosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_videos_videos__["a" /* VideosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_enquetes_enquetes__["a" /* EnquetesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_jogadores_jogadores__["a" /* JogadoresPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_jogos_jogos__["a" /* JogosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_produtos_loja_produtos_loja__["a" /* ProdutosLojaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_produtos_pontos_produtos_pontos__["a" /* ProdutosPontosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_torcedores_torcedores__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modulos_modulos__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_aulas_aulas__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_curso_complementar_curso_complementar__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_aulas_curso_complementar_aulas_curso_complementar__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__["a" /* NoticiasPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Usuários', component: __WEBPACK_IMPORTED_MODULE_5__pages_torcedores_torcedores__["a" /* TorcedoresPage */] },
            { title: 'Curso principal', component: __WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__["a" /* NoticiasPage */] },
            { title: 'Módulos curso principal', component: __WEBPACK_IMPORTED_MODULE_7__pages_modulos_modulos__["a" /* ModulosPage */] },
            { title: 'Aulas curso principal', component: __WEBPACK_IMPORTED_MODULE_8__pages_aulas_aulas__["a" /* AulasPage */] },
            { title: 'Curso complementar', component: __WEBPACK_IMPORTED_MODULE_9__pages_curso_complementar_curso_complementar__["a" /* CursoComplementarPage */] },
            { title: 'Aula curso complementar', component: __WEBPACK_IMPORTED_MODULE_10__pages_aulas_curso_complementar_aulas_curso_complementar__["a" /* AulasCursoComplementarPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"]({
            apiKey: "AIzaSyBrtAgU0fHKzwi99jFC0ETM_GRgnTwxoY4",
            authDomain: "dbfp-da58f.firebaseapp.com",
            databaseURL: "https://dbfp-da58f.firebaseio.com",
            projectId: "dbfp-da58f",
            storageBucket: "dbfp-da58f.appspot.com",
            messagingSenderId: "347251983378"
        });
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/app/app.html"*/'<ion-split-pane>\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="dark">\n      <ion-title>API</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" main #content></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[293]);
//# sourceMappingURL=main.js.map