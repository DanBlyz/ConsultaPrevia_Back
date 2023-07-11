"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ApiModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const comun_1 = require("../../../comun");
const dominio_1 = require("../../dominio");
const aplicacion_1 = require("../../aplicacion");
const jwt_1 = require("../../../comun/sesion/jwt");
const controladores_1 = require("./controladores");
let ApiModule = ApiModule_1 = class ApiModule {
};
ApiModule = ApiModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            core_1.RouterModule.register([
                {
                    path: '',
                    module: ApiModule_1,
                },
            ]),
            comun_1.ComunModule,
            dominio_1.DominioModule,
            (0, common_1.forwardRef)(() => aplicacion_1.AplicacionModule),
        ],
        providers: [jwt_1.JwtStrategy],
        controllers: [
            controladores_1.ApiController,
            controladores_1.BuzonController,
            controladores_1.ClasificacionController,
            controladores_1.ContactoController,
            controladores_1.DocumentoController,
            controladores_1.PlantillaController,
            controladores_1.TipoDocumentoController,
            controladores_1.UniOrganizacionalController,
            controladores_1.GrupoController,
            controladores_1.RolController,
            controladores_1.CuentaController,
            controladores_1.UsuarioController,
            controladores_1.PruebaController,
        ],
    })
], ApiModule);
exports.ApiModule = ApiModule;
//# sourceMappingURL=api.module.js.map