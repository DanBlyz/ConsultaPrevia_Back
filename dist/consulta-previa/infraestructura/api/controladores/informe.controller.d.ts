/// <reference types="multer" />
import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { InformeFiltroDto } from '../../../dominio/transferencia/filtros';
import { InformeCreacionDto, InformeDto, InformeModificacionDto } from '../../../dominio/transferencia';
import { Response } from 'express';
export declare class InformeController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: InformeFiltroDto): Promise<RespuestaListaDto<InformeDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<InformeDto>>;
    guardar(objetoDto: InformeCreacionDto | any): Promise<RespuestaObjetoDto<InformeDto>>;
    modificar(id: number, objetoDto: InformeModificacionDto): Promise<RespuestaObjetoDto<InformeDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    uploadFile(file: Express.Multer.File): Promise<{
        message: string;
    }>;
    downloadFile(filename: string, res: Response): Promise<void>;
}
