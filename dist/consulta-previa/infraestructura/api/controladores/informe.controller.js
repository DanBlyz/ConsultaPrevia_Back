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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformeController = void 0;
const common_1 = require("@nestjs/common");
const transferencia_1 = require("../../../../comun/transferencia");
const aplicacion_1 = require("../../../dominio/contratos/aplicacion");
const filtros_1 = require("../../../dominio/transferencia/filtros");
const transferencia_2 = require("../../../dominio/transferencia");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let InformeController = class InformeController {
    constructor(servicioFactory) {
        this.servicioFactory = servicioFactory;
    }
    async buscar(filtroDto) {
        const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
        const registrosPorPagina = filtroDto.paginado
            ? Number(filtroDto.paginado.registrosPorPagina)
            : 10;
        const { lista, totalRegistros } = await this.servicioFactory.informeServicio.buscar(filtroDto, pagina, registrosPorPagina);
        return new transferencia_1.RespuestaListaDto(transferencia_1.TipoRespuesta.Exito, '', lista, new transferencia_1.PaginadoDto(totalRegistros, registrosPorPagina, pagina));
    }
    async obtenerPorId(id) {
        const objetoDto = await this.servicioFactory.informeServicio.obtenerPorId(id);
        return new transferencia_1.RespuestaObjetoDto(transferencia_1.TipoRespuesta.Exito, '', objetoDto);
    }
    async guardar(objetoDto) {
        return await this.servicioFactory.informeServicio.guardar(objetoDto);
    }
    async modificar(id, objetoDto) {
        return await this.servicioFactory.informeServicio.modificar(id, objetoDto);
    }
    async eliminar(id) {
        return await this.servicioFactory.informeServicio.eliminar(id);
    }
    async uploadFile(file) {
        console.log(file);
        console.log(file.destination);
        return { message: 'Archivo subido correctamente' };
    }
    async downloadFile(filename, res) {
        const path = (0, path_1.join)('..', 'ConsultaPrevia_Back/consulta-previa/informe', filename);
        return res.download(path);
    }
};
__decorate([
    (0, common_1.Post)('buscar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtros_1.InformeFiltroDto]),
    __metadata("design:returntype", Promise)
], InformeController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InformeController.prototype, "obtenerPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InformeController.prototype, "guardar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, transferencia_2.InformeModificacionDto]),
    __metadata("design:returntype", Promise)
], InformeController.prototype, "modificar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InformeController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Post)('subir-archivo'),
    (0, common_2.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './consulta-previa/informe',
            filename: (req, file, cb) => {
                cb(null, ("informe-" + file.originalname));
            },
        }),
    })),
    __param(0, (0, common_2.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InformeController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('bajar-archivo/:filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_2.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InformeController.prototype, "downloadFile", null);
InformeController = __decorate([
    (0, common_1.Controller)('informes'),
    __param(0, (0, common_1.Inject)(aplicacion_1.SERVICIO_FACTORY)),
    __metadata("design:paramtypes", [Object])
], InformeController);
exports.InformeController = InformeController;
//# sourceMappingURL=informe.controller.js.map