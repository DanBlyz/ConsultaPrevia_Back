import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { IPuestoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { Puesto } from '../../dominio/entidades';
import { PuestoCreacionDto, PuestoDto, PuestoModificacionDto } from '../../dominio/transferencia';
import { PuestoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class PuestoService implements IPuestoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: PuestoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PuestoDto>>;
    obtenerPorId(id: number): Promise<PuestoDto>;
    guardar(objetoDto: PuestoCreacionDto): Promise<RespuestaObjetoDto<PuestoDto>>;
    modificar(id: number, objetoDto: PuestoModificacionDto): Promise<RespuestaObjetoDto<Puesto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const PUESTO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof PuestoService;
};
