/// <reference types="multer" />
import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { ViajeFiltroDto } from '../../../dominio/transferencia/filtros';
import { ViajeCreacionDto, ViajeDto, ViajeModificacionDto } from '../../../dominio/transferencia';
import { Response } from 'express';
export declare class ViajeController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: ViajeFiltroDto): Promise<RespuestaListaDto<ViajeDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<ViajeDto>>;
    guardar(objetoDto: ViajeCreacionDto): Promise<RespuestaObjetoDto<ViajeDto>>;
    modificar(id: number, objetoDto: ViajeModificacionDto): Promise<RespuestaObjetoDto<ViajeDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
    }>;
    downloadFile(filename: string, res: Response): Promise<void>;
}
