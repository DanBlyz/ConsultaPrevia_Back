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
exports.AuditoriaSubscriber = void 0;
const typeorm_1 = require("typeorm");
const sesion_1 = require("../../../../../../comun/sesion");
const auditoria_entity_1 = require("./auditoria.entity");
let AuditoriaSubscriber = class AuditoriaSubscriber {
    constructor(connection) {
        this.identidad = sesion_1.Identidad.getInstance();
        connection.subscribers.push(this);
    }
    listenTo() {
        return auditoria_entity_1.AuditoriaEntity;
    }
    beforeInsert(event) {
        const { entity } = event;
        entity._usuCreador = this.identidad.cuenta;
        entity._instCreacion = new Date();
    }
    beforeUpdate(event) {
        const { entity, queryRunner: { data: { action }, }, } = event;
        if (action === 'soft-remove') {
            entity._usuEliminacion = this.identidad.cuenta;
            entity._instEliminacion = new Date();
        }
        else {
            entity._usuModificacion = this.identidad.cuenta;
            entity._instModificacion = new Date();
        }
        delete entity.id;
    }
    afterUpdate(event) {
        const { queryRunner } = event;
        queryRunner.data = {};
    }
};
AuditoriaSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], AuditoriaSubscriber);
exports.AuditoriaSubscriber = AuditoriaSubscriber;
//# sourceMappingURL=auditoria.subscriber.js.map