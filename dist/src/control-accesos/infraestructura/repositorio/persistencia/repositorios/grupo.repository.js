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
var GrupoRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRUPO_REPOSITORIO_PROVIDER = exports.GrupoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_1 = require("@automapper/nestjs");
const modelos_1 = require("../../../../../comun/modelos");
const orm_1 = require("../orm");
const entidades_1 = require("../../../../dominio/entidades");
const __1 = require("../..");
let GrupoRepository = exports.GrupoRepository = GrupoRepository_1 = class GrupoRepository {
    constructor(conexion, mapper) {
        this.conexion = conexion;
        this.mapper = mapper;
        this.repositorio = this.conexion.getRepository(orm_1.GrupoEntity);
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
        if (filtro.codigo && filtro.codigo !== null) {
            consulta = consulta.andWhere('grupo.codigo = :codigo', {
                codigo: filtro.codigo,
            });
            criterioUtilizado = true;
        }
        if (filtro.nombre && filtro.nombre !== null && filtro.nombre !== '') {
            consulta = consulta.andWhere('grupo.nombre ILIKE :nombre', {
                nombre: filtro.nombre,
            });
            criterioUtilizado = true;
        }
        if (filtro.descripcion && filtro.descripcion !== null) {
            consulta = consulta.andWhere('grupo.descripcion ILIKE :descripcion', {
                descripcion: filtro.descripcion,
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
            .createQueryBuilder('grupo')
            .leftJoinAndSelect('grupo.listaRol', 'rol')
            .where('grupo.id = :id', { id });
        consulta = consulta.orderBy('grupo.id', 'DESC');
        const respuesta = await consulta.getOne();
        return respuesta ? this.mapper.map(respuesta, orm_1.GrupoEntity, entidades_1.Grupo) : null;
    }
    async obtenerObjetoPor(objeto, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio
            .createQueryBuilder('grupo')
            .leftJoinAndSelect('grupo.listaRol', 'rol');
        consulta = this.evaluarCriterios(consulta, objeto, false, true);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`grupo.${ordenarPor}`, orden);
        const respuesta = await consulta.getOne();
        return respuesta ? this.mapper.map(respuesta, orm_1.GrupoEntity, entidades_1.Grupo) : null;
    }
    async obtenerPor(objeto, pagina, cantidad, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio
            .createQueryBuilder('grupo')
            .leftJoinAndSelect('grupo.listaRol', 'rol');
        consulta = this.evaluarCriterios(consulta, objeto, true, false);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`grupo.${ordenarPor}`, orden);
        consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
        const respuesta = await consulta.getManyAndCount();
        return new modelos_1.ListaPaginada(this.mapper.mapArray(respuesta[0], orm_1.GrupoEntity, entidades_1.Grupo), respuesta[1]);
    }
    async guardar(objeto, transaccion) {
        const objetoEntity = await this.repositorio.create(objeto);
        return await transaccion.manager
            .save(objetoEntity, { transaction: false })
            .then((objeto) => objeto.id)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(GrupoRepository_1.name, error);
            return 0;
        });
    }
    async modificar(id, objeto, transaccion) {
        const objetoEntity = await transaccion.manager.preload(orm_1.GrupoEntity, Object.assign({ id }, objeto));
        return await transaccion.manager
            .update(orm_1.GrupoEntity, { id }, objetoEntity)
            .then(() => true)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(GrupoRepository_1.name, error);
            return false;
        });
    }
    async eliminar(id, transaccion) {
        return await transaccion.manager
            .delete(orm_1.GrupoEntity, { id })
            .then(() => true)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(GrupoRepository_1.name, error);
            return false;
        });
    }
};
exports.GrupoRepository = GrupoRepository = GrupoRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_2.EntityRepository)(orm_1.GrupoEntity),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Connection, Object])
], GrupoRepository);
exports.GRUPO_REPOSITORIO_PROVIDER = {
    provide: (0, typeorm_1.getRepositoryToken)(entidades_1.Grupo),
    useClass: GrupoRepository,
};
//# sourceMappingURL=grupo.repository.js.map