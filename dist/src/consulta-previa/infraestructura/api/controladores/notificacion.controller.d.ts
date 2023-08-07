/// <reference types="multer" />
import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { NotificacionFiltroDto } from '../../../dominio/transferencia/filtros';
import { NotificacionCreacionDto, NotificacionDto, NotificacionModificacionDto } from '../../../dominio/transferencia';
import { Response } from 'express';
export declare class NotificacionController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: NotificacionFiltroDto): Promise<RespuestaListaDto<NotificacionDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<NotificacionDto>>;
    guardar(objetoDto: NotificacionCreacionDto): Promise<RespuestaObjetoDto<NotificacionDto>>;
    modificar(id: number, objetoDto: NotificacionModificacionDto): Promise<RespuestaObjetoDto<NotificacionDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
    }>;
    downloadFile(filename: string, res: Response): Promise<void>;
}
