import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IBuzonUsuarioServicio } from '../../dominio/contratos/aplicacion/servicios';
import { BuzonUsuarioCreacionDto, BuzonUsuarioDto, BuzonUsuarioModificacionDto } from '../../dominio/transferencia';
import { BuzonUsuarioFiltroDto } from '../../dominio/transferencia/filtros';
export declare class BuzonUsuarioService implements IBuzonUsuarioServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: BuzonUsuarioFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<BuzonUsuarioDto>>;
    obtenerPorId(id: number): Promise<BuzonUsuarioDto>;
    guardar(objetoDto: BuzonUsuarioCreacionDto): Promise<RespuestaObjetoDto<BuzonUsuarioDto>>;
    modificar(id: number, objetoDto: BuzonUsuarioModificacionDto): Promise<RespuestaObjetoDto<BuzonUsuarioDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const BUZON_USUARIO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof BuzonUsuarioService;
};
