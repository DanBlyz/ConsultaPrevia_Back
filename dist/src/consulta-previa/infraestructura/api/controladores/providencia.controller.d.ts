/// <reference types="multer" />
import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { ProvidenciaFiltroDto } from '../../../dominio/transferencia/filtros';
import { ProvidenciaCreacionDto, ProvidenciaDto, ProvidenciaModificacionDto } from '../../../dominio/transferencia';
import { Response } from 'express';
export declare class ProvidenciaController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: ProvidenciaFiltroDto): Promise<RespuestaListaDto<ProvidenciaDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<ProvidenciaDto>>;
    guardar(objetoDto: ProvidenciaCreacionDto): Promise<RespuestaObjetoDto<ProvidenciaDto>>;
    modificar(id: number, objetoDto: ProvidenciaModificacionDto): Promise<RespuestaObjetoDto<ProvidenciaDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
    }>;
    downloadFile(filename: string, res: Response): Promise<void>;
}
