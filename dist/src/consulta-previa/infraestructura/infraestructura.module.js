"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfraestructuraModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const comun_1 = require("../../comun");
const dominio_1 = require("../dominio");
const api_1 = require("./api");
const mapeo_1 = require("./mapeo");
const repositorio_1 = require("./repositorio");
let InfraestructuraModule = class InfraestructuraModule {
};
InfraestructuraModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            comun_1.ComunModule,
            dominio_1.DominioModule,
            api_1.ApiModule,
            repositorio_1.RepositorioModule,
            mapeo_1.MapeoModule,
        ],
        exports: [repositorio_1.RepositorioModule],
    })
], InfraestructuraModule);
exports.InfraestructuraModule = InfraestructuraModule;
//# sourceMappingURL=infraestructura.module.js.map