webpackJsonp([17],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the AjudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjudaPage = (function () {
    function AjudaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AjudaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjudaPage');
    };
    AjudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajuda',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/ajuda/ajuda.html"*/'<!--\n  Generated template for the AjudaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Ajuda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/ajuda/ajuda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AjudaPage);
    return AjudaPage;
}());

//# sourceMappingURL=ajuda.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulasCursoComplementarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
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
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulaCursoComplementarApi').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    AulasCursoComplementarPage.prototype.delete = function (id, titulo) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulaCursoComplementarApi' + id + '/' + titulo);
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulasCursoComplementar/' + id).remove();
    };
    AulasCursoComplementarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aulas-curso-complementar',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/aulas-curso-complementar/aulas-curso-complementar.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Aulas curso complementar</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <table>\n      <thead>\n        <th>Título</th>\n        <th>Descrição</th>\n        <th>Ações</th>\n      </thead>\n      <tbody>\n        <tr *ngFor="let torcedor of torcedores">\n          <td>{{torcedor.titulo}}</td>\n          <td>{{torcedor.descricao}}</td>\n          <td>\n            <a href="#" (click)="delete(torcedor.key,torcedor.titulo)">Deletar</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </ion-content>\n  '/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/aulas-curso-complementar/aulas-curso-complementar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AulasCursoComplementarPage);
    return AulasCursoComplementarPage;
}());

//# sourceMappingURL=aulas-curso-complementar.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
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
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulas_curso_principal_premium_api').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    AulasPage.prototype.delete = function (id) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulas_curso_principal/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulas_curso_principal_premium_api/' + id).remove();
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

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoComplementarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incluir_aula_curso_complementar_incluir_aula_curso_complementar__ = __webpack_require__(147);
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
        this.upload2();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_complementar/' + this.noticia.nome).update(this.noticia).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('search_cursos/' + _this.noticia.nome).update(_this.noticia).then(function (data) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('tudo_para_search/' + _this.noticia.nome).update(_this.noticia).then(function (data) {
                    _this.displayToast("Upado com sucesso");
                });
            });
        });
    };
    CursoComplementarPage.prototype.chooseFile2 = function () { document.getElementById('imgNoticia2').click(); };
    CursoComplementarPage.prototype.upload2 = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgNoticia2').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/aulaCursoComplementar/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url2 = snapshot.downloadURL;
            });
        }
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
                _this.noticia.qual_papel = 'curso_complementar';
            });
        }
    };
    CursoComplementarPage.prototype.getAllNoticias = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_complementar').on('value', function (requests) {
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
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_complementar/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('search_cursos/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('tudo_para_search/' + id).remove();
    };
    CursoComplementarPage.prototype.incluir = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__incluir_aula_curso_complementar_incluir_aula_curso_complementar__["a" /* IncluirAulaCursoComplementarPage */], { key: key }).present();
    };
    CursoComplementarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-curso-complementar',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/curso-complementar/curso-complementar.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Curso complementar</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <div style="text-align: center;">\n      <h1>Escolher imagem</h1>\n      <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:100px;height:100px;" (click)="chooseFile()">\n      <form ngNoForm>\n        <input id="imgNoticia" name="file" type="file" (change)="upload()">\n      </form>\n    </div>\n    <div style="text-align: center;">\n      <h1>Escolher imagem com play</h1>\n      <img *ngIf="noticia.url2" src="{{ noticia.url2 }}" style="width:100px;height:100px;" (click)="chooseFile2()">\n      <form ngNoForm>\n        <input id="imgNoticia2" name="file" type="file" (change)="upload2()">\n      </form>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Titulo do curso</ion-label>\n        <ion-input type="text" [(ngModel)]="noticia.nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Descrição do curso</ion-label>\n        <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <button ion-button block (click)="save()">Salvar</button>\n      </ion-item>\n    </ion-list>\n    <table>\n      <thead>\n        <th>Foto</th>\n        <th>Título</th>\n        <th>Descrição</th>\n        <th>Ações</th>\n      </thead>\n      <tbody>\n        <tr *ngFor="let noticia of noticias">\n          <td>\n            <img [src]="noticia.url">\n          </td>\n          <td>{{noticia.nome}}</td>\n          <td>{{noticia.descricao}}</td>\n          <td>\n              <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="incluir(noticia.key)">Incluir aula complementar</a>\n          <br>\n            <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="delete(noticia.key)">Deletar</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/curso-complementar/curso-complementar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], CursoComplementarPage);
    return CursoComplementarPage;
}());

//# sourceMappingURL=curso-complementar.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncluirAulaCursoComplementarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
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
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_complementar/' + this.torcedorKey).on('value', function (snapshot) {
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
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aula_curso_complementar_api/' + this.noticia.titulo).update(this.noticia).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aula_curso_complementar/' + _this.torcedorKey + '/' + _this.noticia.titulo).update(_this.noticia).then(function (data) {
                _this.displayToast("Upado com sucesso");
            });
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
            selector: 'page-incluir-aula-curso-complementar',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar.html"*/'<ion-header>\n    <ion-navbar color="dark">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{torcedor.nome}}</ion-title>\n      <ion-buttons end>\n        <button ion-button clear (click)="close()">Fechar</button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n\n  <div style="text-align: center;">\n      <h1>Escolher imagem</h1>\n      <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:50px;height:50px;" (click)="chooseFile()">\n      <form ngNoForm>\n        <input id="imgAula" name="file" type="file" (change)="upload()">\n      </form>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Url da aula</ion-label>\n        <ion-input type="text" [(ngModel)]="noticia.urlDaAula"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Título da aula</ion-label>\n        <ion-input type="text" [(ngModel)]="noticia.titulo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Descrição da aula</ion-label>\n        <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Qual aula?</ion-label>\n        <ion-textarea [(ngModel)]="noticia.aula"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <button ion-button block (click)="save()">Salvar</button>\n      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], IncluirAulaCursoComplementarPage);
    return IncluirAulaCursoComplementarPage;
}());

//# sourceMappingURL=incluir-aula-curso-complementar.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichaFinanceiraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the FichaFinanceiraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FichaFinanceiraPage = (function () {
    function FichaFinanceiraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FichaFinanceiraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FichaFinanceiraPage');
    };
    FichaFinanceiraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ficha-financeira',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/ficha-financeira/ficha-financeira.html"*/'<!--\n  Generated template for the FichaFinanceiraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Ficha Financeira</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/ficha-financeira/ficha-financeira.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FichaFinanceiraPage);
    return FichaFinanceiraPage;
}());

//# sourceMappingURL=ficha-financeira.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GruposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the GruposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GruposPage = (function () {
    function GruposPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GruposPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GruposPage');
    };
    GruposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grupos',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/grupos/grupos.html"*/'<!--\n  Generated template for the GruposPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Grupos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/grupos/grupos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], GruposPage);
    return GruposPage;
}());

//# sourceMappingURL=grupos.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncluirAulaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
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
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal_view_api/' + this.torcedorKey).on('value', function (snapshot) {
            _this.torcedor = snapshot.val();
        });
    };
    IncluirAulaPage.prototype.chooseFile = function () { document.getElementById('imgAula').click(); };
    IncluirAulaPage.prototype.upload = function () {
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
    IncluirAulaPage.prototype.save = function () {
        var _this = this;
        this.upload();
        this.noticia.status = 'SUCESSO';
        this.noticia.timestamp = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
        this.noticia.id_do_modulo = this.torcedorKey;
        this.noticia.etapa = this.torcedor.etapa;
        this.noticia.id = this.noticia.aula;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulas_curso_principal/' + this.torcedor.etapa + '/' + this.noticia.aula).update(this.noticia).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('aulas_curso_principal_premium_api/' + _this.noticia.aula).update(_this.noticia).then(function (data) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('notificacoes/' + _this.noticia.aula).update(_this.noticia).then(function (data) {
                    _this.displayToast("Upado com sucesso");
                });
            });
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
            selector: 'page-incluir-aula',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/incluir-aula/incluir-aula.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{torcedor.titulo}}</ion-title>\n    <ion-buttons end>\n      <button ion-button clear (click)="close()">Fechar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style="text-align: center;">\n    <h1>Escolher imagem</h1>\n    <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:50px;height:50px;" (click)="chooseFile()">\n    <form ngNoForm>\n      <input id="imgAula" name="file" type="file" (change)="upload()">\n    </form>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Url do conteúdo da aula</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.urlDoConteudo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Código da aula</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.codigo_da_aula"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Url da aula</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.urlDaAula"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Título da aula</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.titulo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Subtitulo da aula</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.subtitulo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Qual a aula ?</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.aula"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Descrição da aula</ion-label>\n      <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/incluir-aula/incluir-aula.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _g || Object])
    ], IncluirAulaPage);
    return IncluirAulaPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=incluir-aula.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncluirCursoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
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
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_principal/' + this.torcedorKey).on('value', function (snapshot) {
            _this.torcedor = snapshot.val();
        });
    };
    IncluirCursoPage.prototype.save = function () {
        var _this = this;
        this.upload();
        this.noticia.id = this.noticia.etapa;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal/' + this.torcedorKey + '/' + this.noticia.etapa).update(this.noticia).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal_view_api/' + _this.noticia.etapa).update(_this.noticia).then(function (data) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('notificacoes/' + _this.noticia.etapa).update(_this.noticia).then(function (data) {
                    _this.displayToast("Upado com sucesso");
                });
            });
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _g || Object])
    ], IncluirCursoPage);
    return IncluirCursoPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=incluir-curso.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserirUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
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
 * Generated class for the InserirUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InserirUsuarioPage = (function () {
    function InserirUsuarioPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
    }
    InserirUsuarioPage.prototype.chooseFile = function () { document.getElementById('imgUser').click(); };
    InserirUsuarioPage.prototype.upload = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgUser').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/fotoDoAluno/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.user.foto = snapshot.downloadURL;
            });
        }
    };
    InserirUsuarioPage.prototype.registro = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(_this.user.email, _this.user.senha).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.updateProfile({
                    displayName: _this.user.displayName,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                }).then(function () {
                    _this.upload();
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('usuarios/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid).set({
                        uid: __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid,
                        url: _this.user.foto,
                        email: _this.user.email,
                        password: _this.user.senha,
                        nome: _this.user.nome,
                        professor_ou_aluno: _this.user.professor_ou_aluno,
                        tipo_de_usuario: _this.user.tipo_de_usuario,
                        qual_papel: 'usuarios'
                    });
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('tudo_para_search/' + __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid).set({
                        uid: __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid,
                        url: _this.user.foto,
                        email: _this.user.email,
                        password: _this.user.senha,
                        nome: _this.user.nome,
                        professor_ou_aluno: _this.user.professor_ou_aluno,
                        tipo_de_usuario: _this.user.tipo_de_usuario,
                        qual_papel: 'usuarios'
                    }).then(function () {
                        resolve({ success: true });
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    InserirUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inserir-usuario',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/inserir-usuario/inserir-usuario.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inserir usuário</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="text-align: center;">\n    <h1>Escolher imagem do usuário</h1>\n    <img *ngIf="user.foto" src="{{ user.foto }}" style="width:100px;height:100px;" (click)="chooseFile()">\n    <form ngNoForm>\n      <input id="imgUser" name="file" type="file" (change)="upload()">\n    </form>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Email do usuário</ion-label>\n      <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Senha do usuário</ion-label>\n      <ion-input type="password" [(ngModel)]="user.senha"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Nome do usuário</ion-label>\n      <ion-input type="text" [(ngModel)]="user.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Professor(1) ou aluno(0)</ion-label>\n      <ion-input type="text" [(ngModel)]="user.professor_ou_aluno"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Qual tipo de usuário: Premium ou Free</ion-label>\n      <ion-input type="text" [(ngModel)]="user.tipo_de_usuario"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="registro()">Salvar</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/inserir-usuario/inserir-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], InserirUsuarioPage);
    return InserirUsuarioPage;
}());

//# sourceMappingURL=inserir-usuario.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incluir_aula_incluir_aula__ = __webpack_require__(150);
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
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal_view_api').on('value', function (requests) {
            var tmp = [];
            requests.forEach(function (request) {
                tmp.push(__assign({ key: request.key }, request.val()));
                return false;
            });
            _this.torcedores = tmp;
        });
    };
    ModulosPage.prototype.delete = function (id, curso) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal/' + curso + '/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('modulos_curso_principal_view_api/' + id).remove();
    };
    ModulosPage.prototype.incluir = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__incluir_aula_incluir_aula__["a" /* IncluirAulaPage */], { key: key }).present();
    };
    ModulosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modulos',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/modulos/modulos.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Módulos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <table>\n    <thead>\n      <th>Foto</th>\n      <th>Título</th>\n      <th>Etapa</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let torcedor of torcedores">\n        <td>\n          <img [src]="torcedor.url">\n        </td>\n        <td>{{torcedor.titulo}}</td>\n        <td>{{torcedor.etapa}}</td>\n        <td>\n          <a href="#" (click)="incluir(torcedor.key)">Incluir aula</a>\n          <br>\n          <a href="#" (click)="delete(torcedor.key, torcedor.id_do_curso)">Deletar modulo</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/modulos/modulos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ModulosPage);
    return ModulosPage;
}());

//# sourceMappingURL=modulos.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotasPage = (function () {
    function NotasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotasPage');
    };
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notas',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/notas/notas.html"*/'<!--\n  Generated template for the NotasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Notas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/notas/notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__incluir_curso_incluir_curso__ = __webpack_require__(151);
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
        this.upload2();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_principal/' + this.noticia.id).update(this.noticia).then(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('search_cursos/' + _this.noticia.id).update(_this.noticia).then(function (data) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('tudo_para_search/' + _this.noticia.id).update(_this.noticia).then(function (data) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('notificacoes/' + _this.noticia.id).update(_this.noticia).then(function (data) {
                        _this.displayToast("Upado com sucesso");
                    });
                });
            });
        });
    };
    NoticiasPage.prototype.chooseFile = function () { document.getElementById('imgNoticia').click(); };
    NoticiasPage.prototype.chooseFile2 = function () { document.getElementById('imgNoticia2').click(); };
    NoticiasPage.prototype.upload2 = function () {
        var _this = this;
        // Create a root reference
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var loading = this.loadingCtrl.create({ content: 'Por favor aguarde...' });
        loading.present();
        for (var _i = 0, _a = [document.getElementById('imgNoticia2').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            var path = '/cursoPrincipal/' + Date.now() + ("" + selectedFile.name);
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                loading.dismiss();
                _this.noticia.url2 = snapshot.downloadURL;
            });
        }
    };
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
                _this.noticia.qual_papel = 'curso_principal';
            });
        }
    };
    NoticiasPage.prototype.getAllNoticias = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_principal').on('value', function (requests) {
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
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('curso_principal/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('search_cursos/' + id).remove();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('tudo_para_search/' + id).remove();
    };
    NoticiasPage.prototype.incluir = function (key) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__incluir_curso_incluir_curso__["a" /* IncluirCursoPage */], { key: key }).present();
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/noticias/noticias.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Curso principal</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="text-align: center;">\n    <h1>Escolher imagem</h1>\n    <img *ngIf="noticia.url" src="{{ noticia.url }}" style="width:100px;height:100px;" (click)="chooseFile()">\n    <form ngNoForm>\n      <input id="imgNoticia" name="file" type="file" (change)="upload()">\n    </form>\n  </div>\n\n  <div style="text-align: center;">\n    <h1>Escolher imagem com o play</h1>\n    <img *ngIf="noticia.url2" src="{{ noticia.url2 }}" style="width:100px;height:100px;" (click)="chooseFile2()">\n    <form ngNoForm>\n      <input id="imgNoticia2" name="file" type="file" (change)="upload2()">\n    </form>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Id do curso</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.id"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Nome do curso</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Destinado á qual tipo de usuário</ion-label>\n      <ion-input type="text" [(ngModel)]="noticia.tipoDeUsuario"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Descrição do curso</ion-label>\n      <ion-textarea [(ngModel)]="noticia.descricao"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <button ion-button block (click)="save()">Salvar</button>\n    </ion-item>\n  </ion-list>\n  <table>\n    <thead>\n      <th>Foto</th>\n      <th>Foto2</th>\n      <th>Nome</th>\n      <th>Descrição</th>\n      <th>Destinado</th>\n      <th>Ações</th>\n    </thead>\n    <tbody>\n      <tr *ngFor="let noticia of noticias">\n        <td>\n          <img [src]="noticia.url">\n        </td>\n        <td>\n          <img [src]="noticia.url2">\n        </td>\n        <td>{{noticia.nome}}</td>\n        <td>{{noticia.descricao}}</td>\n        <td>{{noticia.tipoDeUsuario}}</td>\n        <td>\n          <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="incluir(noticia.key)">Incluir Módulo</a>\n          <br>\n          <a href="#" *ngIf="noticia.status==\'SUCESSO\'" (click)="delete(noticia.key)">Deletar</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ion-content>'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/noticias/noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the NotificacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacoesPage = (function () {
    function NotificacoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificacoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacoesPage');
    };
    NotificacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notificacoes',template:/*ion-inline-start:"/home/guilherme/workspace/apiFP/src/pages/notificacoes/notificacoes.html"*/'<!--\n  Generated template for the NotificacoesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Notificacoes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/apiFP/src/pages/notificacoes/notificacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NotificacoesPage);
    return NotificacoesPage;
}());

//# sourceMappingURL=notificacoes.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorcedoresInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TorcedoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__torcedores_info_torcedores_info__ = __webpack_require__(157);
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

/***/ 166:
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
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajuda/ajuda.module": [
		455,
		16
	],
	"../pages/aulas-curso-complementar/aulas-curso-complementar.module": [
		456,
		15
	],
	"../pages/aulas/aulas.module": [
		457,
		14
	],
	"../pages/curso-complementar/curso-complementar.module": [
		458,
		13
	],
	"../pages/ficha-financeira/ficha-financeira.module": [
		459,
		12
	],
	"../pages/grupos/grupos.module": [
		460,
		11
	],
	"../pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar.module": [
		461,
		10
	],
	"../pages/incluir-aula/incluir-aula.module": [
		462,
		9
	],
	"../pages/incluir-curso/incluir-curso.module": [
		463,
		8
	],
	"../pages/inserir-usuario/inserir-usuario.module": [
		464,
		7
	],
	"../pages/minha-conta/minha-conta.module": [
		465,
		0
	],
	"../pages/modulos/modulos.module": [
		466,
		6
	],
	"../pages/notas/notas.module": [
		467,
		5
	],
	"../pages/noticias/noticias.module": [
		468,
		4
	],
	"../pages/notificacoes/notificacoes.module": [
		469,
		3
	],
	"../pages/torcedores-info/torcedores-info.module": [
		470,
		2
	],
	"../pages/torcedores/torcedores.module": [
		471,
		1
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
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(315);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_incluir_curso_incluir_curso__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_torcedores_torcedores__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_torcedores_info_torcedores_info__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_incluir_aula_incluir_aula__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modulos_modulos__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aulas_aulas__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_curso_complementar_curso_complementar__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aulas_curso_complementar_aulas_curso_complementar__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_incluir_aula_curso_complementar_incluir_aula_curso_complementar__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_inserir_usuario_inserir_usuario__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_grupos_grupos__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notificacoes_notificacoes__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_ficha_financeira_ficha_financeira__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ajuda_ajuda__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_notas_notas__ = __webpack_require__(154);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_aulas_aulas__["a" /* AulasPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ajuda_ajuda__["a" /* AjudaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_grupos_grupos__["a" /* GruposPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_ficha_financeira_ficha_financeira__["a" /* FichaFinanceiraPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_inserir_usuario_inserir_usuario__["a" /* InserirUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aulas_curso_complementar_aulas_curso_complementar__["a" /* AulasCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_incluir_aula_curso_complementar_incluir_aula_curso_complementar__["a" /* IncluirAulaCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_curso_complementar_curso_complementar__["a" /* CursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_torcedores_info_torcedores_info__["a" /* TorcedoresInfoPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_incluir_curso_incluir_curso__["a" /* IncluirCursoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_torcedores_torcedores__["a" /* TorcedoresPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_incluir_aula_incluir_aula__["a" /* IncluirAulaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__["a" /* NoticiasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajuda/ajuda.module#AjudaPageModule', name: 'AjudaPage', segment: 'ajuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aulas-curso-complementar/aulas-curso-complementar.module#AulasCursoComplementarPageModule', name: 'AulasCursoComplementarPage', segment: 'aulas-curso-complementar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aulas/aulas.module#AulasPageModule', name: 'AulasPage', segment: 'aulas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/curso-complementar/curso-complementar.module#CursoComplementarPageModule', name: 'CursoComplementarPage', segment: 'curso-complementar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ficha-financeira/ficha-financeira.module#FichaFinanceiraPageModule', name: 'FichaFinanceiraPage', segment: 'ficha-financeira', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grupos/grupos.module#GruposPageModule', name: 'GruposPage', segment: 'grupos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incluir-aula-curso-complementar/incluir-aula-curso-complementar.module#IncluirAulaCursoComplementarPageModule', name: 'IncluirAulaCursoComplementarPage', segment: 'incluir-aula-curso-complementar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incluir-aula/incluir-aula.module#IncluirAulaPageModule', name: 'IncluirAulaPage', segment: 'incluir-aula', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incluir-curso/incluir-curso.module#IncluirCursoPageModule', name: 'IncluirCursoPage', segment: 'incluir-curso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inserir-usuario/inserir-usuario.module#InserirUsuarioPageModule', name: 'InserirUsuarioPage', segment: 'inserir-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/minha-conta/minha-conta.module#MinhaContaPageModule', name: 'MinhaContaPage', segment: 'minha-conta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modulos/modulos.module#ModulosPageModule', name: 'ModulosPage', segment: 'modulos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas/notas.module#NotasPageModule', name: 'NotasPage', segment: 'notas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificacoes/notificacoes.module#NotificacoesPageModule', name: 'NotificacoesPage', segment: 'notificacoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/torcedores-info/torcedores-info.module#TorcedoresInfoPageModule', name: 'TorcedoresInfoPage', segment: 'torcedores-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/torcedores/torcedores.module#TorcedoresPageModule', name: 'TorcedoresPage', segment: 'torcedores', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_inserir_usuario_inserir_usuario__["a" /* InserirUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aulas_aulas__["a" /* AulasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aulas_curso_complementar_aulas_curso_complementar__["a" /* AulasCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_incluir_aula_curso_complementar_incluir_aula_curso_complementar__["a" /* IncluirAulaCursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_curso_complementar_curso_complementar__["a" /* CursoComplementarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_torcedores_info_torcedores_info__["a" /* TorcedoresInfoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_torcedores_torcedores__["a" /* TorcedoresPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_incluir_curso_incluir_curso__["a" /* IncluirCursoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_incluir_aula_incluir_aula__["a" /* IncluirAulaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ajuda_ajuda__["a" /* AjudaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_ficha_financeira_ficha_financeira__["a" /* FichaFinanceiraPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_grupos_grupos__["a" /* GruposPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modulos_modulos__["a" /* ModulosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__["a" /* NoticiasPage */]
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

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_noticias_noticias__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_torcedores_torcedores__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modulos_modulos__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_aulas_aulas__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_curso_complementar_curso_complementar__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_aulas_curso_complementar_aulas_curso_complementar__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_inserir_usuario_inserir_usuario__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_grupos_grupos__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_notificacoes_notificacoes__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ficha_financeira_ficha_financeira__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ajuda_ajuda__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notas_notas__ = __webpack_require__(154);
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
            { title: 'Aula curso complementar', component: __WEBPACK_IMPORTED_MODULE_10__pages_aulas_curso_complementar_aulas_curso_complementar__["a" /* AulasCursoComplementarPage */] },
            { title: 'Inserir usuário', component: __WEBPACK_IMPORTED_MODULE_11__pages_inserir_usuario_inserir_usuario__["a" /* InserirUsuarioPage */] },
            { title: 'Grupos', component: __WEBPACK_IMPORTED_MODULE_12__pages_grupos_grupos__["a" /* GruposPage */] },
            { title: 'Notificações', component: __WEBPACK_IMPORTED_MODULE_13__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */] },
            { title: 'Ficha financeira', component: __WEBPACK_IMPORTED_MODULE_14__pages_ficha_financeira_ficha_financeira__["a" /* FichaFinanceiraPage */] },
            { title: 'Ajuda', component: __WEBPACK_IMPORTED_MODULE_15__pages_ajuda_ajuda__["a" /* AjudaPage */] },
            { title: 'Notas', component: __WEBPACK_IMPORTED_MODULE_16__pages_notas_notas__["a" /* NotasPage */] }
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

},[292]);
//# sourceMappingURL=main.js.map