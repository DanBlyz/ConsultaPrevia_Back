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
var PersonaRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERSONA_REPOSITORIO_PROVIDER = exports.PersonaRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_1 = require("@automapper/nestjs");
const modelos_1 = require("../../../../../comun/modelos");
const orm_1 = require("../orm");
const entidades_1 = require("../../../../dominio/entidades");
const __1 = require("../..");
let PersonaRepository = exports.PersonaRepository = PersonaRepository_1 = class PersonaRepository {
    constructor(conexion, mapper) {
        this.conexion = conexion;
        this.mapper = mapper;
        this.repositorio = this.conexion.getRepository(orm_1.PersonaEntity);
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
        if (filtro.codigo && filtro.codigo !== '') {
            consulta = consulta.andWhere('persona.codigo = :codigo', {
                codigo: filtro.codigo,
            });
            criterioUtilizado = true;
        }
        if (filtro.primApellido && filtro.primApellido !== '') {
            consulta = consulta.andWhere('persona.primApellido ILIKE :primApellido', {
                primApellido: `%${filtro.primApellido}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.segApellido && filtro.segApellido !== '') {
            consulta = consulta.andWhere('persona.segApellido ILIKE :segApellido', {
                segApellido: `%${filtro.segApellido}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.nombre && filtro.nombre !== '') {
            consulta = consulta.andWhere('persona.nombre ILIKE :nombre', {
                nombre: `%${filtro.nombre}%`,
            });
            criterioUtilizado = true;
        }
        if (filtro.numDocumento && filtro.numDocumento !== '') {
            consulta = consulta.andWhere('persona.numDocumento = :numDocumento', {
                numDocumento: filtro.numDocumento,
            });
            criterioUtilizado = true;
        }
        if (filtro.expedicion && filtro.expedicion !== '') {
            consulta = consulta.andWhere('persona.expedicion = :expedicion', {
                expedicion: filtro.expedicion,
            });
            criterioUtilizado = true;
        }
        if (filtro.estadoLaboral && filtro.estadoLaboral !== '') {
            consulta = consulta.andWhere('infoLaboral.estado = :estadoLaboral', {
                estadoLaboral: filtro.estadoLaboral,
            });
            criterioUtilizado = true;
        }
        if (filtro.uniOrganizacionalId && filtro.uniOrganizacionalId > 0) {
            consulta = consulta.andWhere('infoLaboral.uniOrganizacionalId = :uniOrganizacionalId', {
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
            .createQueryBuilder('persona')
            .leftJoinAndSelect('persona.fotografia', 'fotografia')
            .leftJoinAndSelect('persona.infoLaboral', 'infoLaboral')
            .leftJoinAndSelect('infoLaboral.uniOrganizacional', 'uniOrganizacional')
            .leftJoinAndSelect('infoLaboral.puesto', 'puesto')
            .leftJoinAndSelect('persona.listaPuestoPersona', 'puestoPersona')
            .leftJoinAndSelect('puestoPersona.puesto', 'puestoPersonaPuesto')
            .leftJoinAndSelect('puestoPersona.uniOrganizacional', 'puestoPersonaUniOrganizacional')
            .andWhere('persona.id = :id', { id });
        consulta = consulta.orderBy('persona.id', 'DESC');
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.PersonaEntity, entidades_1.Persona)
            : null;
    }
    async obtenerObjetoPor(filtro, ordenarPor = 'id', orden = 'DESC') {
        if (!filtro) {
            return null;
        }
        let consulta = this.repositorio
            .createQueryBuilder('persona')
            .leftJoinAndSelect('persona.fotografia', 'fotografia')
            .leftJoinAndSelect('persona.infoLaboral', 'infoLaboral')
            .leftJoinAndSelect('infoLaboral.uniOrganizacional', 'uniOrganizacional')
            .leftJoinAndSelect('infoLaboral.puesto', 'puesto')
            .leftJoinAndSelect('persona.listaPuestoPersona', 'puestoPersona')
            .leftJoinAndSelect('puestoPersona.puesto', 'puestoPersonaPuesto')
            .leftJoinAndSelect('puestoPersona.uniOrganizacional', 'puestoPersonaUniOrganizacional');
        consulta = this.evaluarCriterios(consulta, filtro, false, true);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`persona.${ordenarPor}`, orden);
        const respuesta = await consulta.getOne();
        return respuesta
            ? this.mapper.map(respuesta, orm_1.PersonaEntity, entidades_1.Persona)
            : null;
    }
    async obtenerPor(filtro, pagina, cantidad, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio
            .createQueryBuilder('persona')
            .leftJoinAndSelect('persona.fotografia', 'fotografia')
            .leftJoinAndSelect('persona.infoLaboral', 'infoLaboral')
            .leftJoinAndSelect('infoLaboral.uniOrganizacional', 'uniOrganizacional')
            .leftJoinAndSelect('infoLaboral.puesto', 'puesto')
            .leftJoinAndSelect('persona.listaPuestoPersona', 'puestoPersona')
            .leftJoinAndSelect('puestoPersona.puesto', 'puestoPersonaPuesto')
            .leftJoinAndSelect('puestoPersona.uniOrganizacional', 'puestoPersonaUniOrganizacional');
        consulta = this.evaluarCriterios(consulta, filtro, true, false);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`persona.${ordenarPor}`, orden);
        consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
        const respuesta = await consulta.getManyAndCount();
        return new modelos_1.ListaPaginada(this.mapper.mapArray(respuesta[0], orm_1.PersonaEntity, entidades_1.Persona), respuesta[1]);
    }
    async guardar(objeto, transaccion) {
        const objetoEntity = await this.repositorio.create(objeto);
        return await transaccion.manager
            .save(objetoEntity, { transaction: false })
            .then((objeto) => objeto.id)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(PersonaRepository_1.name, error);
            return 0;
        });
    }
    async modificar(id, objeto, transaccion) {
        const objetoEntity = await transaccion.manager.preload(orm_1.PersonaEntity, Object.assign({ id }, objeto));
        return await transaccion.manager
            .update(orm_1.PersonaEntity, { id }, objetoEntity)
            .then(() => true)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(PersonaRepository_1.name, error);
            return false;
        });
    }
    async eliminar(id, transaccion, borradoFisico = false) {
        if (borradoFisico) {
            return await transaccion.manager
                .delete(orm_1.PersonaEntity, { id })
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(PersonaRepository_1.name, error);
                return false;
            });
        }
        else {
            const objetoEntity = await transaccion.manager.preload(orm_1.PersonaEntity, {
                id,
            });
            transaccion.data = { action: 'soft-remove' };
            return await transaccion.manager
                .update(orm_1.PersonaEntity, { id }, objetoEntity)
                .then(() => true)
                .catch((error) => {
                __1.RepositorioFactory.registrarError(PersonaRepository_1.name, error);
                return false;
            });
        }
    }
};
exports.PersonaRepository = PersonaRepository = PersonaRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_2.EntityRepository)(orm_1.PersonaEntity),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Connection, Object])
], PersonaRepository);
exports.PERSONA_REPOSITORIO_PROVIDER = {
    provide: (0, typeorm_1.getRepositoryToken)(entidades_1.Persona),
    useClass: PersonaRepository,
};
//# sourceMappingURL=persona.repository.js.map