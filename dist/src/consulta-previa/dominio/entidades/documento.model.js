"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
const classes_1 = require("@automapper/classes");
const tramite_model_1 = require("./tramite.model");
const sujeto_identificado_model_1 = require("./sujeto-identificado.model");
class Documento {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], Documento.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], Documento.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Documento.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Documento.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Documento.prototype, "documentoPdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Documento.prototype, "tipoDocumento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Documento.prototype, "flujo", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [tramite_model_1.Tramite]),
    __metadata("design:type", tramite_model_1.Tramite)
], Documento.prototype, "tramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [sujeto_identificado_model_1.SujetoIdentificado]),
    __metadata("design:type", Array)
], Documento.prototype, "listaSujetoIdentificado", void 0);
exports.Documento = Documento;
//# sourceMappingURL=documento.model.js.map