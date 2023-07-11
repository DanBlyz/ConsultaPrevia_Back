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
exports.PERSONA_REPOSITORIO_PROVIDER = exports.PersonaRepositorio = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const identidad_1 = require("../../../../../comun/sesion/identidad");
const modelos_1 = require("../../../../../comun/modelos");
let PersonaRepositorio = class PersonaRepositorio {
    constructor(httpService) {
        this.httpService = httpService;
        this.identidad = identidad_1.Identidad.getInstance();
        this.urlBase = 'http://localhost:3000/personal';
        this.controlador = 'personas';
    }
    async obtenerPorId(id) {
        return new Promise((resolve) => {
            this.httpService
                .get(`${this.urlBase}/${this.controlador}/${id}`, {
                headers: {
                    Authorization: `bearer ${this.identidad.accessToken}`,
                },
            })
                .subscribe((respuesta) => {
                resolve(respuesta.data['objeto']);
            });
        });
    }
    async obtenerObjetoPor(objeto, ordenarPor = 'id', orden = 'DESC') {
        objeto.paginado = {
            pagina: 1,
            registrosPorPagina: 1,
            ordenadoPor: ordenarPor,
            orden: orden,
        };
        return new Promise((resolve) => {
            this.httpService
                .post(`${this.urlBase}/${this.controlador}/buscar?p=1&c=1`, objeto, {
                headers: {
                    Authorization: `bearer ${this.identidad.accessToken}`,
                },
            })
                .subscribe((respuesta) => {
                resolve(respuesta.data['lista'][0]);
            });
        });
    }
    async obtenerPor(objeto, pagina, registrosPorPagina, ordenarPor = 'id', orden = 'DESC') {
        objeto.paginado = {
            pagina: pagina,
            registrosPorPagina: registrosPorPagina,
            ordenadoPor: ordenarPor,
            orden: orden,
        };
        return new Promise((resolve) => {
            this.httpService
                .post(`${this.urlBase}/${this.controlador}/buscar`, objeto, {
                headers: {
                    Authorization: `bearer ${this.identidad.accessToken}`,
                },
            })
                .subscribe((respuesta) => {
                resolve(new modelos_1.ListaPaginada(respuesta.data['lista'], respuesta.data['paginado'].totalRegistros));
            });
        });
    }
};
PersonaRepositorio = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], PersonaRepositorio);
exports.PersonaRepositorio = PersonaRepositorio;
exports.PERSONA_REPOSITORIO_PROVIDER = {
    provide: 'PERSONA_REPOSITORIO',
    useClass: PersonaRepositorio,
};
//# sourceMappingURL=persona.repository.js.map