import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { IPuestoPersonaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { PuestoPersonaCreacionDto, PuestoPersonaDto, PuestoPersonaModificacionDto } from '../../dominio/transferencia';
import { PuestoPersonaFiltroDto } from '../../dominio/transferencia/filtros';
export declare class PuestoPersonaService implements IPuestoPersonaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: PuestoPersonaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PuestoPersonaDto>>;
    obtenerPorId(id: number): Promise<PuestoPersonaDto>;
    modificar(id: number, objetoDto: PuestoPersonaModificacionDto): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    guardarIncorporacion(objetoDto: PuestoPersonaCreacionDto): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    guardarReasignacion(objetoDto: PuestoPersonaCreacionDto): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    registrarDesvinculacion(id: number, fecConclusion: Date): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    darBaja(id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    anular(id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    guardarInterinato(objetoDto: PuestoPersonaCreacionDto): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    modificarInterinato(id: number, objetoDto: PuestoPersonaModificacionDto): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    eliminarInterinato(id: number): Promise<RespuestaDto>;
    darBajaInterinato(id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
}
export declare const PUESTO_PERSONA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof PuestoPersonaService;
};
