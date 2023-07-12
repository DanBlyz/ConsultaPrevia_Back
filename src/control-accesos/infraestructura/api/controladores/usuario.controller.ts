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
import { UsuarioFiltroDto } from '../../../dominio/transferencia/filtros';
import {
  CuentaCreacionDto,
  CuentaDto,
  CuentaModificacionDto,
  UsuarioCreacionDto,
  UsuarioDto,
  UsuarioModificacionDto,
} from '../../../dominio/transferencia';

@UseGuards(JwtAuthGuard)
@Controller('usuarios')
export class UsuarioController {
  constructor(
    @Inject(SERVICIO_FACTORY)
    private servicioFactory: IServicioFactory,
  ) {}

  @Post('buscar')
  async buscar(@Body() filtroDto: UsuarioFiltroDto) {
    const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
    const registrosPorPagina = filtroDto.paginado
      ? Number(filtroDto.paginado.registrosPorPagina)
      : 10;
    const { lista, totalRegistros } =
      await this.servicioFactory.usuarioServicio.buscar(
        filtroDto,
        pagina,
        registrosPorPagina,
      );
    return new RespuestaListaDto<UsuarioDto>(
      TipoRespuesta.Exito,
      '',
      lista,
      new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
    );
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    const objetoDto = await this.servicioFactory.usuarioServicio.obtenerPorId(
      id,
    );
    return new RespuestaObjetoDto<UsuarioDto>(
      TipoRespuesta.Exito,
      '',
      objetoDto,
    );
  }

  @Post()
  async guardar(@Body() objetoDto: UsuarioCreacionDto) {
    return await this.servicioFactory.usuarioServicio.guardar(objetoDto);
  }

  @Patch(':id')
  async modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: UsuarioModificacionDto,
  ) {
    return await this.servicioFactory.usuarioServicio.modificar(id, objetoDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.usuarioServicio.eliminar(id);
  }

  /* Cuentas */
  @Get(':usuarioId/cuentas/:id')
  async obtenerCuentaPorId(
    @Param('usuarioId', ParseIntPipe) usuarioId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const objetoDto = await this.servicioFactory.cuentaServicio.obtenerPorId(
      id,
    );
    return new RespuestaObjetoDto<CuentaDto>(
      TipoRespuesta.Exito,
      '',
      objetoDto,
    );
  }

  @Post(':usuarioId/cuentas')
  async guardarCuenta(
    @Param('usuarioId', ParseIntPipe) usuarioId: number,
    @Body() objetoDto: CuentaCreacionDto,
  ) {
    return await this.servicioFactory.cuentaServicio.guardar(objetoDto);
  }

  @Patch(':usuarioId/cuentas/:id')
  async modificarCuenta(
    @Param('usuarioId', ParseIntPipe) usuarioId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: CuentaModificacionDto,
  ) {
    return await this.servicioFactory.cuentaServicio.modificar(id, objetoDto);
  }

  @Delete(':usuarioId/cuentas/:id')
  async eliminarCuenta(
    @Param('usuarioId', ParseIntPipe) usuarioId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.servicioFactory.cuentaServicio.eliminar(id);
  }
}
