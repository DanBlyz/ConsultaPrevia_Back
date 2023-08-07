import { Mapper } from '@automapper/core';
import { JwtService } from '@nestjs/jwt';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { ICuentaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { Cuenta } from '../../dominio/entidades';
import { AutenticacionDto, CuentaCreacionDto, CuentaDto, CuentaModificacionDto, UsuarioCreacionDto, UsuarioModificacionDto } from '../../dominio/transferencia';
import { CuentaFiltroDto } from '../../dominio/transferencia/filtros';
export declare class CuentaService implements ICuentaServicio {
    private repositorioFactory;
    private readonly mapper;
    private jwtService;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper, jwtService: JwtService);
    buscar(filtroDto: CuentaFiltroDto, pagina: number, cantidad: number): Promise<ListaPaginadaDto<CuentaDto>>;
    obtenerPorId(id: number): Promise<CuentaDto>;
    guardar(objetoDto: CuentaCreacionDto, usuarioDto?: UsuarioCreacionDto): Promise<RespuestaObjetoDto<CuentaDto>>;
    modificar(id: number, objetoDto: CuentaModificacionDto, usuarioDto?: UsuarioModificacionDto): Promise<RespuestaObjetoDto<CuentaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
    validar(cuenta: string, contrasenia: string): Promise<Cuenta>;
    establecerIntentoFallido(cuenta: string): Promise<void>;
    cambiarContrasenia(codCuenta: string, contraseniaActual: string, contraseniaNueva: string): Promise<RespuestaObjetoDto<CuentaDto>>;
    restablecerContrasenia(id: number, contrasenia: string): Promise<RespuestaObjetoDto<CuentaDto>>;
    desbloquear(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    autorizar(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    desautorizar(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
    obtenerToken(objetoDto: AutenticacionDto): Promise<any>;
    registrarse(objetoDto: CuentaCreacionDto, usuarioDto: UsuarioCreacionDto, roles: string[]): Promise<RespuestaObjetoDto<CuentaDto>>;
}
export declare const CUENTA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof CuentaService;
};
