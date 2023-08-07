import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { IInfoLaboralServicio } from '../../dominio/contratos/aplicacion/servicios';
import { InfoLaboral } from '../../dominio/entidades';
import { InfoLaboralCreacionDto, InfoLaboralDto, InfoLaboralModificacionDto } from '../../dominio/transferencia';
export declare class InfoLaboralService implements IInfoLaboralServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: Partial<InfoLaboral>, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<InfoLaboralDto>>;
    obtenerPorId(id: number): Promise<InfoLaboralDto>;
    guardar(objetoDto: InfoLaboralCreacionDto): Promise<RespuestaObjetoDto<InfoLaboralDto>>;
    modificar(id: number, objetoDto: InfoLaboralModificacionDto): Promise<RespuestaObjetoDto<InfoLaboral>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const INFO_LABORAL_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof InfoLaboralService;
};
