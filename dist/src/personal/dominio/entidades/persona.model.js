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
exports.Persona = void 0;
const classes_1 = require("@automapper/classes");
const _1 = require(".");
class Persona {
}
exports.Persona = Persona;
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], Persona.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Persona.prototype, "codigo", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Persona.prototype, "primApellido", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Persona.prototype, "segApellido", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Persona.prototype, "nombre", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Persona.prototype, "numDocumento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Persona.prototype, "expedicion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], Persona.prototype, "fecNacimiento", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Persona.prototype, "correoPersonal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], Persona.prototype, "celularPersonal", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", _1.InfoLaboral)
], Persona.prototype, "infoLaboral", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", _1.PuestoPersona)
], Persona.prototype, "interinato", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], Persona.prototype, "tieneFotografia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], Persona.prototype, "sePuedeModificar", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], Persona.prototype, "sePuedeEliminar", void 0);
//# sourceMappingURL=persona.model.js.map