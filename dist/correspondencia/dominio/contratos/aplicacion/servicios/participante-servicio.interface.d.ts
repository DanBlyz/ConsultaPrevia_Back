import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { ParticipanteCreacionDto, ParticipanteDto, ParticipanteModificacionDto } from '../../../transferencia';
import { ParticipanteFiltroDto } from '../../../transferencia/filtros';
export declare const PARTICIPANTE_SERVICIO = "PARTICIPANTE_SERVICIO";
export interface IParticipanteServicio {
    buscar(filtroDto: ParticipanteFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ParticipanteDto>>;
    obtenerPorId(id: number): Promise<ParticipanteDto>;
    guardar(objetoDto: ParticipanteCreacionDto): Promise<RespuestaObjetoDto<ParticipanteDto>>;
    modificar(id: number, objetoDto: ParticipanteModificacionDto): Promise<RespuestaObjetoDto<ParticipanteDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
