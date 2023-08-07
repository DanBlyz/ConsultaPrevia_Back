"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const dominio_1 = require("../../../dominio");
const personal_1 = require("./personal");
let ClienteModule = exports.ClienteModule = class ClienteModule {
};
exports.ClienteModule = ClienteModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, dominio_1.DominioModule],
        providers: [
            personal_1.PERSONA_REPOSITORIO_PROVIDER,
            personal_1.PUESTO_REPOSITORIO_PROVIDER,
            personal_1.UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER,
        ],
    })
], ClienteModule);
//# sourceMappingURL=cliente.module.js.map