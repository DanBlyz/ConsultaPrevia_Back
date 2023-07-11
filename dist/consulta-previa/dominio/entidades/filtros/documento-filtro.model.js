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
exports.DocumentoFiltro = void 0;
const classes_1 = require("@automapper/classes");
class DocumentoFiltro {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], DocumentoFiltro.prototype, "numero", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], DocumentoFiltro.prototype, "gestion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], DocumentoFiltro.prototype, "cite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], DocumentoFiltro.prototype, "citeExterno", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], DocumentoFiltro.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], DocumentoFiltro.prototype, "prioridad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], DocumentoFiltro.prototype, "observacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], DocumentoFiltro.prototype, "esBorrador", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], DocumentoFiltro.prototype, "estaImpreso", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], DocumentoFiltro.prototype, "tipoDocumentoId", void 0);
exports.DocumentoFiltro = DocumentoFiltro;
//# sourceMappingURL=documento-filtro.model.js.map