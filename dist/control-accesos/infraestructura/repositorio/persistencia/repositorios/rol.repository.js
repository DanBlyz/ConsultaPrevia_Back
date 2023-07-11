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
var RolRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROL_REPOSITORIO_PROVIDER = exports.RolRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_1 = require("@automapper/nestjs");
const modelos_1 = require("../../../../../comun/modelos");
const orm_1 = require("../orm");
const entidades_1 = require("../../../../dominio/entidades");
const __1 = require("../..");
let RolRepository = RolRepository_1 = class RolRepository {
    constructor(conexion, mapper) {
        this.conexion = conexion;
        this.mapper = mapper;
        this.repositorio = this.conexion.getRepository(orm_1.RolEntity);
    }
    evaluarCriterios(consulta, objeto, nulo, obligatorio) {
        if (!objeto) {
            if (nulo) {
                return consulta;
            }
            else {
                return null;
            }
        }
        let criterioUtilizado = false;
        if (objeto.codigo && objeto.codigo !== null) {
            consulta = consulta.andWhere('rol.codigo = :codigo', {
                codigo: objeto.codigo,
            });
            criterioUtilizado = true;
        }
        if (objeto.nombre && objeto.nombre !== null) {
            consulta = consulta.andWhere('rol.nombre ILIKE :nombre', {
                nombre: objeto.nombre,
            });
            criterioUtilizado = true;
        }
        if (objeto.grupoId && objeto.grupoId > 0) {
            consulta = consulta.andWhere('rol.grupoId = :grupoId', {
                grupoId: objeto.grupoId,
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
            .createQueryBuilder('rol')
            .leftJoinAndSelect('rol.grupo', 'grupo')
            .where('rol.id = :id', { id });
        consulta = consulta.orderBy('rol.id', 'DESC');
        const respuesta = await consulta.getOne();
        return respuesta ? this.mapper.map(respuesta, orm_1.RolEntity, entidades_1.Rol) : null;
    }
    async obtenerObjetoPor(objeto, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio
            .createQueryBuilder('rol')
            .leftJoinAndSelect('rol.grupo', 'grupo');
        consulta = this.evaluarCriterios(consulta, objeto, false, true);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`rol.${ordenarPor}`, orden);
        const respuesta = await consulta.getOne();
        return respuesta ? this.mapper.map(respuesta, orm_1.RolEntity, entidades_1.Rol) : null;
    }
    async obtenerPor(objeto, pagina, cantidad, ordenarPor = 'id', orden = 'DESC') {
        let consulta = this.repositorio
            .createQueryBuilder('rol')
            .leftJoinAndSelect('rol.grupo', 'grupo');
        consulta = this.evaluarCriterios(consulta, objeto, true, false);
        if (!consulta) {
            return null;
        }
        consulta = consulta.orderBy(`rol.${ordenarPor}`, orden);
        consulta = consulta.skip((pagina - 1) * cantidad).take(cantidad);
        const respuesta = await consulta.getManyAndCount();
        return new modelos_1.ListaPaginada(this.mapper.mapArray(respuesta[0], orm_1.RolEntity, entidades_1.Rol), respuesta[1]);
    }
    async guardar(objeto, transaccion) {
        const objetoEntity = await this.repositorio.create(objeto);
        return await transaccion.manager
            .save(objetoEntity, { transaction: false })
            .then((objeto) => objeto.id)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(RolRepository_1.name, error);
            return 0;
        });
    }
    async modificar(id, objeto, transaccion) {
        const objetoEntity = await transaccion.manager.preload(orm_1.RolEntity, Object.assign({ id }, objeto));
        return await transaccion.manager
            .update(orm_1.RolEntity, { id }, objetoEntity)
            .then(() => true)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(RolRepository_1.name, error);
            return false;
        });
    }
    async eliminar(id, transaccion) {
        return await transaccion.manager
            .delete(orm_1.RolEntity, { id })
            .then(() => true)
            .catch((error) => {
            __1.RepositorioFactory.registrarError(RolRepository_1.name, error);
            return false;
        });
    }
};
RolRepository = RolRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_2.EntityRepository)(orm_1.RolEntity),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Connection, Object])
], RolRepository);
exports.RolRepository = RolRepository;
exports.ROL_REPOSITORIO_PROVIDER = {
    provide: (0, typeorm_1.getRepositoryToken)(entidades_1.Rol),
    useClass: RolRepository,
};
//# sourceMappingURL=rol.repository.js.map