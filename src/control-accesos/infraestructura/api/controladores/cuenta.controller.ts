import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import {
  PaginadoDto,
  RespuestaListaDto,
  RespuestaObjetoDto,
  TipoRespuesta,
} from '../../../../comun/transferencia';
import { JwtAuthGuard } from '../../../../comun/sesion/jwt';

import {
  IServicioFactory,
  SERVICIO_FACTORY,
} from '../../../dominio/contratos/aplicacion';
import { CuentaFiltroDto } from '../../../dominio/transferencia/filtros';
import {
  CuentaDto,
  RolCuentaCreacionDto,
  RolCuentaDto,
  RolCuentaModificacionDto,
} from '../../../dominio/transferencia';

@UseGuards(JwtAuthGuard)
@Controller('cuentas')
export class CuentaController {
  constructor(
    @Inject(SERVICIO_FACTORY)
    private servicioFactory: IServicioFactory,
  ) {}

  @Post('buscar')
  async buscar(@Body() filtroDto: CuentaFiltroDto) {
    const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
    const registrosPorPagina = filtroDto.paginado
      ? Number(filtroDto.paginado.registrosPorPagina)
      : 10;
    const { lista, totalRegistros } =
      await this.servicioFactory.cuentaServicio.buscar(
        filtroDto,
        pagina,
        registrosPorPagina,
      );

    return new RespuestaListaDto<CuentaDto>(
      TipoRespuesta.Exito,
      '',
      lista,
      new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
    );
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    const objetoDto = await this.servicioFactory.cuentaServicio.obtenerPorId(
      id,
    );
    return new RespuestaObjetoDto<CuentaDto>(
      TipoRespuesta.Exito,
      '',
      objetoDto,
    );
  }

  @Post()
  async guardar(@Body() objetoDto: any) {
    const cuentaDto = objetoDto.cuenta;
    const usuarioDto = objetoDto.usuario;
    return await this.servicioFactory.cuentaServicio.guardar(
      cuentaDto,
      usuarioDto,
    );
  }

  @Patch(':id')
  async modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: any,
  ) {
    const cuentaDto = objetoDto.cuenta;
    const usuarioDto = objetoDto.usuario;
    return await this.servicioFactory.cuentaServicio.modificar(
      id,
      cuentaDto,
      usuarioDto,
    );
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.cuentaServicio.eliminar(id);
  }

  @Get(':id/desbloquear')
  async desbloquear(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.cuentaServicio.desbloquear(id);
  }

  @Get(':id/autorizar')
  async autorizar(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.cuentaServicio.autorizar(id);
  }

  @Get(':id/desautorizar')
  async desautorizar(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.cuentaServicio.desautorizar(id);
  }

  @Post(':id/restablecer')
  async restablcerContrasenia(
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: any,
  ) {
    return await this.servicioFactory.cuentaServicio.restablecerContrasenia(
      id,
      objetoDto.contrasenia,
    );
  }

  /* Roles */
  @Get(':cuentaId/roles')
  async obtenerRoles(@Param('cuentaId', ParseIntPipe) cuentaId: number) {
    const listaDto =
      await this.servicioFactory.rolCuentaServicio.obtenerporCuentaId(cuentaId);
    return new RespuestaListaDto<RolCuentaDto>(
      TipoRespuesta.Exito,
      '',
      listaDto,
      new PaginadoDto(listaDto.length, listaDto.length, 1),
    );
  }

  @Get(':cuentaId/roles/:id')
  async obtenerRolPorId(
    @Param('cuentaId', ParseIntPipe) cuentaId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const objetoDto = await this.servicioFactory.rolCuentaServicio.obtenerPorId(
      id,
    );
    return new RespuestaObjetoDto<RolCuentaDto>(
      TipoRespuesta.Exito,
      '',
      objetoDto,
    );
  }

  @Post(':cuentaId/roles')
  async guardarRol(
    @Param('cuentaId', ParseIntPipe) cuentaId: number,
    @Body() objetoDto: RolCuentaCreacionDto,
  ) {
    return await this.servicioFactory.rolCuentaServicio.guardar(objetoDto);
  }

  @Patch(':cuentaId/roles/:id')
  async modificarRol(
    @Param('cuentaId', ParseIntPipe) cuentaId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: RolCuentaModificacionDto,
  ) {
    return await this.servicioFactory.rolCuentaServicio.modificar(
      id,
      objetoDto,
    );
  }

  @Delete(':cuentaId/roles/:id')
  async eliminarRol(
    @Param('cuentaId', ParseIntPipe) cuentaId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.servicioFactory.rolCuentaServicio.eliminar(id);
  }
}
