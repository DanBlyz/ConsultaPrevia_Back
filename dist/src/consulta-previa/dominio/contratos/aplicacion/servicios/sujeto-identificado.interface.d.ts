import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { SujetoIdentificadoCreacionDto, SujetoIdentificadoDto, SujetoIdentificadoModificacionDto } from '../../../../dominio/transferencia';
import { SujetoIdentificadoFiltroDto } from '../../../transferencia/filtros';
export declare const SUJETO_IDENTIFICADO_SERVICIO = "SUJETO_IDENTIFICADO_SERVICIO";
export interface ISujetoIdentificadoServicio {
    buscar(filtroDto: SujetoIdentificadoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<SujetoIdentificadoDto>>;
    obtenerPorId(id: number): Promise<SujetoIdentificadoDto>;
    guardar(objetoDto: SujetoIdentificadoCreacionDto): Promise<RespuestaObjetoDto<SujetoIdentificadoDto>>;
    modificar(id: number, objetoDto: SujetoIdentificadoModificacionDto): Promise<RespuestaObjetoDto<SujetoIdentificadoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
