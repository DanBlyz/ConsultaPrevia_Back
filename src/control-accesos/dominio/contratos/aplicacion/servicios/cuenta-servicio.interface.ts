import {
  ListaPaginadaDto,
  RespuestaDto,
  RespuestaObjetoDto,
} from '../../../../../comun/transferencia';

import {
  AutenticacionDto,
  CuentaCreacionDto,
  CuentaDto,
  CuentaModificacionDto,
  UsuarioCreacionDto,
  UsuarioDto,
} from '../../../transferencia';
import { CuentaFiltroDto } from '../../../transferencia/filtros';
import { Cuenta } from '../../../entidades';

export const CUENTA_SERVICIO = 'CUENTA_SERVICIO';

export interface ICuentaServicio {
  buscar(
    filtroDto: CuentaFiltroDto,
    pagina: number,
    cantidad: number,
  ): Promise<ListaPaginadaDto<CuentaDto>>;
  obtenerPorId(id: number): Promise<CuentaDto>;
  guardar(
    objetoDto: CuentaCreacionDto,
    usuario?: UsuarioCreacionDto,
  ): Promise<RespuestaObjetoDto<CuentaDto>>;
  modificar(
    id: number,
    objetoDto: CuentaModificacionDto,
    usuarioDto?: UsuarioDto,
  ): Promise<RespuestaObjetoDto<CuentaDto>>;
  eliminar(id: number): Promise<RespuestaDto>;
  validar(cuenta: string, contrasenia: string): Promise<Cuenta>;
  establecerIntentoFallido(cuenta: string): Promise<void>;
  cambiarContrasenia(
    codCuenta: string,
    contraseniaActual: string,
    contraseniaNueva: string,
  ): Promise<RespuestaObjetoDto<CuentaDto>>;
  restablecerContrasenia(
    id: number,
    contrasenia: string,
  ): Promise<RespuestaObjetoDto<CuentaDto>>;
  desbloquear(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
  autorizar(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
  desautorizar(id: number): Promise<RespuestaObjetoDto<CuentaDto>>;
  obtenerToken(objetoDto: AutenticacionDto): Promise<any>;
  registrarse(
    objetoDto: CuentaCreacionDto,
    usuarioDto: UsuarioCreacionDto,
    roles: string[],
  ): Promise<RespuestaObjetoDto<CuentaDto>>;
}
