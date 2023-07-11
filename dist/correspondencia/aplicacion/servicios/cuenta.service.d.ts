import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { ICuentaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { Cuenta } from '../../dominio/entidades';
import { CuentaCreacionDto, CuentaDto, CuentaModificacionDto, UsuarioCreacionDto } from '../../dominio/transferencia';
import { CuentaFiltroDto } from '../../dominio/transferencia/filtros';
export declare class CuentaService implements ICuentaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    buscar(filtroDto: CuentaFiltroDto, pagina: number, cantidad: number): Promise<ListaPaginadaDto<CuentaDto>>;
    obtenerPorId(id: number): Promise<CuentaDto>;
    guardar(objetoDto: CuentaCreacionDto): Promise<RespuestaObjetoDto<CuentaDto>>;
    modificar(id: number, objetoDto: CuentaModificacionDto): Promise<RespuestaObjetoDto<CuentaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
    validar(cuenta: string, contrasenia: string): Promise<Cuenta>;
    establecerIntentoFallido(cuenta: string): Promise<void>;
    cambiarContrasenia(codCuenta: string, contraseniaActual: string, contraseniaNueva: string): Promise<RespuestaObjetoDto<CuentaDto>>;
    restablecerContrasenia(id: number, contrasenia: string): Promise<RespuestaObjetoDto<CuentaDto>>;
    desbloquear(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    autorizar(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    desautorizar(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    registrarse(objetoDto: CuentaCreacionDto, usuarioDto: UsuarioCreacionDto, roles: string[]): Promise<RespuestaObjetoDto<CuentaDto>>;
}
export declare const CUENTA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof CuentaService;
};
