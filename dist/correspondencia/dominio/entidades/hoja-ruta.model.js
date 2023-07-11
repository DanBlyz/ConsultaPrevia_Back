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
exports.HojaRuta = void 0;
const classes_1 = require("@automapper/classes");
class HojaRuta {
}
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], HojaRuta.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], HojaRuta.prototype, "numero", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Number)
], HojaRuta.prototype, "gestion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Date)
], HojaRuta.prototype, "fecha", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", String)
], HojaRuta.prototype, "estado", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], HojaRuta.prototype, "sePuedeModificar", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    __metadata("design:type", Boolean)
], HojaRuta.prototype, "sePuedeEliminar", void 0);
exports.HojaRuta = HojaRuta;
//# sourceMappingURL=hoja-ruta.model.js.map