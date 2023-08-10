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
exports.InformeFiltro = void 0;
const classes_1 = require("@automapper/classes");
class InformeFiltro {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], InformeFiltro.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], InformeFiltro.prototype, "fk_idTramite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InformeFiltro.prototype, "correlativo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InformeFiltro.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InformeFiltro.prototype, "informePdf", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InformeFiltro.prototype, "tipoDocumento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], InformeFiltro.prototype, "flujo", void 0);
exports.InformeFiltro = InformeFiltro;
//# sourceMappingURL=informe-filtro.model.js.map