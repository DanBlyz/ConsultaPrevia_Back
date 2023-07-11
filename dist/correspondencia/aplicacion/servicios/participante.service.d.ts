import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IParticipanteServicio } from '../../dominio/contratos/aplicacion/servicios';
import { ParticipanteCreacionDto, ParticipanteDto, ParticipanteModificacionDto } from '../../dominio/transferencia';
import { ParticipanteFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ParticipanteService implements IParticipanteServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: Partial<ParticipanteFiltroDto>, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ParticipanteDto>>;
    obtenerPorId(id: number): Promise<ParticipanteDto>;
    guardar(objetoDto: ParticipanteCreacionDto): Promise<RespuestaObjetoDto<ParticipanteDto>>;
    modificar(id: number, objetoDto: ParticipanteModificacionDto): Promise<RespuestaObjetoDto<ParticipanteDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const PARTICIPANTE_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ParticipanteService;
};
