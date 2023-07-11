import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IRolServicio } from '../../dominio/contratos/aplicacion/servicios';
import { RolCreacionDto, RolDto, RolModificacionDto } from '../../dominio/transferencia';
import { RolFiltroDto } from '../../dominio/transferencia/filtros';
export declare class RolService implements IRolServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: RolFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<RolDto>>;
    obtenerPorId(id: number): Promise<RolDto>;
    guardar(objetoDto: RolCreacionDto): Promise<RespuestaObjetoDto<RolDto>>;
    modificar(id: number, objetoDto: RolModificacionDto): Promise<RespuestaObjetoDto<RolDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const ROL_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof RolService;
};
