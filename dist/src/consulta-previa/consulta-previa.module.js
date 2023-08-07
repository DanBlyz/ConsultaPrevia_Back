"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaPreviaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dominio_1 = require("./dominio");
const infraestructura_1 = require("./infraestructura");
const aplicacion_1 = require("./aplicacion");
let ConsultaPreviaModule = exports.ConsultaPreviaModule = class ConsultaPreviaModule {
};
exports.ConsultaPreviaModule = ConsultaPreviaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            dominio_1.DominioModule,
            infraestructura_1.InfraestructuraModule,
            aplicacion_1.AplicacionModule,
        ],
        providers: [],
    })
], ConsultaPreviaModule);
//# sourceMappingURL=consulta-previa.module.js.map