import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IActoAdministrativoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { ActoAdministrativoCreacionDto, ActoAdministrativoDto, ActoAdministrativoModificacionDto } from '../../dominio/transferencia';
import { ActoAdministrativoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ActoAdministrativoService implements IActoAdministrativoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: ActoAdministrativoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ActoAdministrativoDto>>;
    obtenerPorId(id: number): Promise<ActoAdministrativoDto>;
    guardar(objetoDto: ActoAdministrativoCreacionDto): Promise<RespuestaObjetoDto<ActoAdministrativoDto>>;
    modificar(id: number, objetoDto: ActoAdministrativoModificacionDto): Promise<RespuestaObjetoDto<ActoAdministrativoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const ACTOS_ADMINISTRATIVOS_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ActoAdministrativoService;
};
