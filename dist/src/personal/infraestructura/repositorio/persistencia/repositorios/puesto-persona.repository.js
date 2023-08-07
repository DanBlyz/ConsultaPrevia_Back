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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PuestoPersonaRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUESTO_PERSONA_REPOSITORIO_PROVIDER = exports.PuestoPersonaRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_1 = require("@automapper/nestjs");
const modelos_1 = require("../../../../../comun/modelos");
const orm_1 = require("../orm");
const entidades_1 = require("../../../../dominio/entidades");
const __1 = require("../..");
let PuestoPersonaRepository = exports.PuestoPersonaRepository = PuestoPersonaRepository_1 = class PuestoPersonaRepository {
    constructor(conexion, mapper) {
        this.conexion = conexion;
        this.mapper = mapper;
        this.repositorio = this.conexion.getRepository(orm_1.PuestoPersonaEntity);
    }
    evaluarCriterios(consulta, filtro, nulo, obligatorio) {
        if (!filtro) {
            if (nulo) {
                return consulta;
            }
            else {
                return null;
            }
        }
        let criterioUtilizado = false;
        if (filtro.tipoMovilidad && filtro.tipoMovilidad !== '') {
            consulta = consulta.andWhere('puestoPersona.tipoMovilidad = :tipoMovilidad', {
                tipoMovilidad: filtro.tipoMovilidad,
            });
            criterioUtilizado = true;
        }
        if (filtro.tipoLaboral && filtro.tipoLaboral !== '') {
            consulta = consulta.andWhere('puestoPersona.tipoLaboral = :tipoLaboral', {
                tipoLaboral: filtro.tipoLaboral,
            });
            criterioUtilizado = true;
        }
        if (filtro.esInterinato !== null && filtro.esInterinato !== undefined) {
            consulta = consulta.andWhere('puestoPersona.esInterinato = :esInterinato', {
                esInterinato: filtro.esInterinato,
            });
            criterioUtilizado = true;
        }
        if (filtro.estado && filtro.estado !== '') {
            consulta = consulta.andWhere('puestoPersona.estado = :estado', {
                estado: filtro.estado,
            });
            criterioUtilizado = true;
        }
        if (filtro.puestoId && filtro.puestoId > 0) {
            consulta = consulta.andWhere('puestoPersona.puestoId = :puestoId', {
                puestoId: filtro.puestoId,
            });
            criterioUtilizado = true;
        }
        if (filtro.personaId && filtro.personaId > 0) {
            consulta = consulta.andWhere('puestoPersona.personaId = :personaId', {
                personaId: filtro.personaId,
            });
            criterioUtilizado = true;
        }
        if (filtro.uniOrganizacionalId && filtro.uniOrganizacionalId > 0) {
            consulta = consulta.andWhere('puestoPersona.uniOrganizacionalId = :uniOrganizacionalId', {
                uniOrganizacionalId: filtro.uniOrganizacionalId,
            });
            criterioUtilizado = true;
        }
        if (obligatorio) {
            return criterioUtilizado ? consulta : null;
        }
        else {
            return consulta;
        }
    }
    async obtenerPorId(id) {
        let consulta = this.repositorio
            .createQueryBuilder('puestoPersona')
            .leftJoinAndSelect('puestoPersona.puesto', 'puesto')
            .leftJoinAndSelect('puestoPersona.uniOrganizacional', 'uniOrganizacional')
            .andWhere('puestoPersona.id = :id', { id });
        consulta = consulta.orderBy('puestoPersona.id', 'DESC');
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.PuestoPersonaEntity, entidades_1.PuestoPersona)
            : null;
    }
    async obtenerObjetoPor(filtro, ordenarPor = 'id', orden = 'DESC') {
        if (!filtro) {
            return null;
        }
        let consulta = this.repositorio
            .createQueryBuilder('puestoPersona')
            .leftJoinAndSelect('puestoPersona.puesto', 'puesto')
            .leftJoinAndSelect('puestoPersona.uniOrganizacional', 'uniOrganizacional');
        consulta = this.evaluarCriterios(consulta, filtro, false, true);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`puestoPersona.${ordenarPor}`, orden);
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.PuestoPersonaEntity, entidades_1.PuestoPersona)
            : null;
    }
    async obtenerPor(filtro, pagina, cantidad, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio
            .createQueryBuilder('puestoPersona')
            .leftJoinAndSelect('puestoPersona.puesto', 'puesto')
            .leftJoinAndSelect('puestoPersona.uniOrganizacional', 'uniOrganizacional');
        consulta = this.evaluarCriterios(consulta, filtro, true, false);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`puestoPersona.${ordenarPor}`, orden);
        consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
        const respuesta = await consulta.getManyAndCount();
        return new modelos_1.ListaPaginada(this.mapper.mapArray(respuesta[0], orm_1.PuestoPersonaEntity, entidades_1.PuestoPersona), respuesta[1]);
    }
    async guardar(objeto, transaccion) {
        const objetoEntity = await this.repositorio.create(objeto);
        return await transaccion.manager
            .save(objetoEntity, { transaction: false })
            .then((objeto) => objeto.id)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(PuestoPersonaRepository_1.name, error);
            return 0;
        });
    }
    async modificar(id, objeto, transaccion) {
        const objetoEntity = await transaccion.manager.preload(orm_1.PuestoPersonaEntity, Object.assign({ id }, objeto));
        return await transaccion.manager
            .update(orm_1.PuestoPersonaEntity, { id }, objetoEntity)
            .then(() => true)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(PuestoPersonaRepository_1.name, error);
            return false;
        });
    }
    async eliminar(id, transaccion, borradoFisico = false) {
        if (borradoFisico) {
            return await transaccion.manager
                .delete(orm_1.PuestoPersonaEntity, { id })
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(PuestoPersonaRepository_1.name, error);
                return false;
            });
        }
        else {
            const objetoEntity = await transaccion.manager.preload(orm_1.PuestoPersonaEntity, {
                id,
            });
            transaccion.data = { action: 'soft-remove' };
            return await transaccion.manager
                .update(orm_1.PuestoPersonaEntity, { id }, objetoEntity)
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(PuestoPersonaRepository_1.name, error);
                return false;
            });
        }
    }
};
exports.PuestoPersonaRepository = PuestoPersonaRepository = PuestoPersonaRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_2.EntityRepository)(orm_1.PuestoPersonaEntity),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Connection, Object])
], PuestoPersonaRepository);
exports.PUESTO_PERSONA_REPOSITORIO_PROVIDER = {
    provide: (0, typeorm_1.getRepositoryToken)(entidades_1.PuestoPersona),
    useClass: PuestoPersonaRepository,
};
//# sourceMappingURL=puesto-persona.repository.js.map