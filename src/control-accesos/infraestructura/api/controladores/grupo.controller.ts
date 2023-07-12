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
import { GrupoFiltroDto } from '../../../dominio/transferencia/filtros';
import {
  GrupoCreacionDto,
  GrupoDto,
  GrupoModificacionDto,
} from '../../../dominio/transferencia';

@UseGuards(JwtAuthGuard)
@Controller('grupos')
export class GrupoController {
  constructor(
    @Inject(SERVICIO_FACTORY)
    private servicioFactory: IServicioFactory,
  ) {}

  @Post('buscar')
  async buscar(@Body() filtroDto: GrupoFiltroDto) {
    const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
    const registrosPorPagina = filtroDto.paginado
      ? Number(filtroDto.paginado.registrosPorPagina)
      : 10;
    const { lista, totalRegistros } =
      await this.servicioFactory.grupoServicio.buscar(
        filtroDto,
        pagina,
        registrosPorPagina,
      );
    return new RespuestaListaDto<GrupoDto>(
      TipoRespuesta.Exito,
      '',
      lista,
      new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
    );
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    const objetoDto = await this.servicioFactory.grupoServicio.obtenerPorId(id);
    return new RespuestaObjetoDto<GrupoDto>(TipoRespuesta.Exito, '', objetoDto);
  }

  @Post()
  async guardar(@Body() objetoDto: GrupoCreacionDto) {
    return await this.servicioFactory.grupoServicio.guardar(objetoDto);
  }

  @Patch(':id')
  async modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: GrupoModificacionDto,
  ) {
    return await this.servicioFactory.grupoServicio.modificar(id, objetoDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.grupoServicio.eliminar(id);
  }
}
