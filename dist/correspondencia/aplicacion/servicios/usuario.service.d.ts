import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IUsuarioServicio } from '../../dominio/contratos/aplicacion/servicios';
import { Usuario } from '../../dominio/entidades';
import { UsuarioCreacionDto, UsuarioDto, UsuarioModificacionDto } from '../../dominio/transferencia';
import { UsuarioFiltroDto } from '../../dominio/transferencia/filtros';
export declare class UsuarioService implements IUsuarioServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    buscar(filtroDto: UsuarioFiltroDto, pagina: number, cantidad: number): Promise<ListaPaginadaDto<Usuario>>;
    obtenerPorId(id: number): Promise<UsuarioDto>;
    guardar(objetoDto: UsuarioCreacionDto): Promise<RespuestaObjetoDto<UsuarioDto>>;
    modificar(id: number, objetoDto: UsuarioModificacionDto): Promise<RespuestaObjetoDto<Usuario>>;
    eliminar(id: number): Promise<RespuestaDto>;
    obtenerPorCodCuenta(codCuenta: string): Promise<UsuarioDto>;
    modificarPorCodCuenta(codCuenta: string, objetoDto: UsuarioModificacionDto): Promise<RespuestaObjetoDto<Usuario>>;
}
export declare const USUARIO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof UsuarioService;
};
