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
exports.DocumentoEntity = void 0;
const typeorm_1 = require("typeorm");
const classes_1 = require("@automapper/classes");
const auditoria_entity_1 = require("./base/auditoria.entity");
const _1 = require(".");
let DocumentoEntity = class DocumentoEntity extends auditoria_entity_1.AuditoriaEntity {
};
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", Number)
], DocumentoEntity.prototype, "id", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NUMERO' }),
    __metadata("design:type", Number)
], DocumentoEntity.prototype, "numero", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'GESTION' }),
    __metadata("design:type", Number)
], DocumentoEntity.prototype, "gestion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CITE' }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "cite", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CITE_EXTERNO' }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "citeExterno", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'INST_REGISTRO' }),
    __metadata("design:type", Date)
], DocumentoEntity.prototype, "instRegistro", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'FECHA' }),
    __metadata("design:type", Date)
], DocumentoEntity.prototype, "fecha", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'REFERENCIA' }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "referencia", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'NUM_HOJAS' }),
    __metadata("design:type", Number)
], DocumentoEntity.prototype, "numHojas", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'PRIORIDAD' }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "prioridad", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'OBSERVACION' }),
    __metadata("design:type", String)
], DocumentoEntity.prototype, "observacion", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ES_BORRADOR' }),
    __metadata("design:type", Boolean)
], DocumentoEntity.prototype, "esBorrador", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'ESTA_IMPRESO' }),
    __metadata("design:type", Boolean)
], DocumentoEntity.prototype, "estaImpreso", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'HOJA_RUTA_ID' }),
    __metadata("design:type", Number)
], DocumentoEntity.prototype, "hojaRutaId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'TIPO_DOC_ID' }),
    __metadata("design:type", Number)
], DocumentoEntity.prototype, "tipoDocumentoId", void 0);
__decorate([
    (0, classes_1.AutoMap)(),
    (0, typeorm_1.Column)({ name: 'CLASIF_ID' }),
    __metadata("design:type", Number)
], DocumentoEntity.prototype, "clasificacionId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => _1.ContenidoEntity, (contenido) => contenido.documento),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", _1.ContenidoEntity)
], DocumentoEntity.prototype, "contenido", void 0);
__decorate([
    (0, classes_1.AutoMap)(() => [_1.ParticipanteEntity]),
    (0, typeorm_1.OneToMany)(() => _1.ParticipanteEntity, (participante) => participante.documento),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", Array)
], DocumentoEntity.prototype, "listaParticipante", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.NotaEntity, (nota) => nota.documento),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", Array)
], DocumentoEntity.prototype, "listaNota", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.EtiquetaEntity, (etiqueta) => etiqueta.documento),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", Array)
], DocumentoEntity.prototype, "listaEtiqueta", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.DocumentoSeguimientoEntity, (documentoSeguimiento) => documentoSeguimiento.documento),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", Array)
], DocumentoEntity.prototype, "listaDocumentoSeguimiento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.DocumentoDetalleEntity, (documentoDetalle) => documentoDetalle.documento),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", Array)
], DocumentoEntity.prototype, "listaDocumentoDetalle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.AdjuntoEntity, (adjunto) => adjunto.documento),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", Array)
], DocumentoEntity.prototype, "listaAdjunto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.HojaRutaEntity, (hojaRuta) => hojaRuta.listaDocumento),
    (0, typeorm_1.JoinColumn)({ name: 'HOJA_RUTA_ID' }),
    __metadata("design:type", _1.HojaRutaEntity)
], DocumentoEntity.prototype, "hojaRuta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.TipoDocumentoEntity, (tipoDocumento) => tipoDocumento.listaDocumento),
    (0, typeorm_1.JoinColumn)({ name: 'TIPO_DOC_ID' }),
    __metadata("design:type", _1.TipoDocumentoEntity)
], DocumentoEntity.prototype, "tipoDocumento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.ClasificacionEntity, (clasificacion) => clasificacion.listaDocumento),
    (0, typeorm_1.JoinColumn)({ name: 'CLASIF_ID' }),
    __metadata("design:type", _1.ClasificacionEntity)
], DocumentoEntity.prototype, "clasificacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.SeguimientoEntity, (seguimiento) => seguimiento.documento),
    (0, typeorm_1.JoinColumn)({ name: 'DOC_ID' }),
    __metadata("design:type", Array)
], DocumentoEntity.prototype, "listaSeguimiento", void 0);
DocumentoEntity = __decorate([
    (0, typeorm_1.Entity)('DOCUMENTO', { schema: 'correspondencia' })
], DocumentoEntity);
exports.DocumentoEntity = DocumentoEntity;
//# sourceMappingURL=documento.entity.js.map