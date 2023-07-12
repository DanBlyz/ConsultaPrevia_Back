import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import {
  RespuestaObjetoDto,
  TipoRespuesta,
} from '../../../../comun/transferencia';
import { Identidad } from '../../../../comun/sesion';
import { ApiKeyAuthGuard } from '../../../../comun/sesion/api-key';
import { JwtAuthGuard } from '../../../../comun/sesion/jwt';

import {
  IServicioFactory,
  SERVICIO_FACTORY,
} from '../../../dominio/contratos/aplicacion';
import {
  AutenticacionDto,
  CuentaCreacionDto,
  UsuarioCreacionDto,
  UsuarioDto,
  UsuarioModificacionDto,
} from '../../../dominio/transferencia';

@Controller('autenticacion')
export class AutenticacionController {
  constructor(
    @Inject(SERVICIO_FACTORY)
    private servicioFactory: IServicioFactory,
  ) {}

  @Post('usuarios')
  @UseGuards(ApiKeyAuthGuard)
  async registrarCuenta(@Body() objetoDto: any): Promise<any> {
    const cuentaDto: CuentaCreacionDto = {
      nombre: objetoDto.cuenta,
      contrasenia: objetoDto.contrasenia,
    } as CuentaCreacionDto;
    const usuarioDto: UsuarioCreacionDto = {
      nombre: objetoDto.nombre,
      apellido: objetoDto.apellido,
      nomPublico: objetoDto.nomPublico,
      correoElectronico: objetoDto.correoElectronico,
    } as UsuarioCreacionDto;
    const roles: string[] = objetoDto.roles;
    return await this.servicioFactory.cuentaServicio.registrarse(
      cuentaDto,
      usuarioDto,
      roles,
    );
  }

  @Patch('usuarios/:codCuenta')
  @UseGuards(ApiKeyAuthGuard)
  async actualizarUsuario(
    @Param('codCuenta') codCuenta: string,
    @Body() objetoDto: UsuarioModificacionDto,
  ): Promise<any> {
    return await this.servicioFactory.usuarioServicio.modificarPorCodCuenta(
      codCuenta,
      objetoDto,
    );
  }

  @Patch('usuarios/:codCuenta/cambiar-contrasenia')
  @UseGuards(ApiKeyAuthGuard)
  async cambiarContrasenia(
    @Param('codCuenta') codCuenta: string,
    @Body() objetoDto: any,
  ): Promise<any> {
    return await this.servicioFactory.cuentaServicio.cambiarContrasenia(
      codCuenta,
      objetoDto.contrasenia,
      objetoDto.nuevaContrasenia,
    );
  }

  @Get('usuarios/:codigo')
  @UseGuards(JwtAuthGuard)
  async obtenerPorCodigo(@Param('codigo') codigo: string): Promise<any> {
    const objetoDto =
      await this.servicioFactory.usuarioServicio.obtenerPorCodCuenta(codigo);
    if (objetoDto) {
      delete objetoDto.id;
    }
    return await new RespuestaObjetoDto<UsuarioDto>(
      TipoRespuesta.Exito,
      '',
      objetoDto,
    );
  }

  @Post('token')
  async obtenerToken(@Body() objetoDto: AutenticacionDto): Promise<any> {
    // TODO: Obtener información de identidad desde un apikey o similar
    const identidad = Identidad.getInstance();
    identidad.usuarioId = 0;
    identidad.cuenta = 'AUTENTICACION';
    identidad.roles = null;
    return await this.servicioFactory.cuentaServicio.obtenerToken(objetoDto);
  }

  // LDAP
  @Post('ldap/token')
  async obtenerTokenLdap(@Body() objetoDto: AutenticacionDto): Promise<any> {
    return await this.servicioFactory.ldapServicio.obtenerToken(objetoDto);
  }
}
