/// <reference types="multer" />
import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { ReunionFiltroDto } from '../../../dominio/transferencia/filtros';
import { ReunionCreacionDto, ReunionDto, ReunionModificacionDto } from '../../../dominio/transferencia';
import { Response } from 'express';
export declare class ReunionController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: ReunionFiltroDto): Promise<RespuestaListaDto<ReunionDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<ReunionDto>>;
    guardar(objetoDto: ReunionCreacionDto): Promise<RespuestaObjetoDto<ReunionDto>>;
    modificar(id: number, objetoDto: ReunionModificacionDto): Promise<RespuestaObjetoDto<ReunionDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
    }>;
    downloadFile(filename: string, res: Response): Promise<void>;
}
