import { RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { FotografiaCreacionDto, FotografiaDto } from '../../../transferencia';
export declare const FOTOGRAFIA_SERVICIO = "FOTOGRAFIA_SERVICIO";
export interface IFotografiaServicio {
    obtenerPorId(id: number): Promise<FotografiaDto>;
    guardar(objetoDto: FotografiaCreacionDto): Promise<RespuestaObjetoDto<FotografiaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
    obtenerPorCodigo(codigo: string): Promise<FotografiaDto>;
}
