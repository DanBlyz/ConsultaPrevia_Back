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
  CodificadorDto,
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
import {
  PuestoFiltroDto,
  UniOrganizacionalFiltroDto,
} from '../../../dominio/transferencia/filtros';
import {
  UniOrganizacionalCreacionDto,
  UniOrganizacionalDto,
  UniOrganizacionalModificacionDto,
} from '../../../dominio/transferencia';

@UseGuards(JwtAuthGuard)
@Controller('uni-organizacionales')
export class UniOrganizacionalController {
  constructor(
    @Inject(SERVICIO_FACTORY)
    private servicioFactory: IServicioFactory,
  ) {}

  @Get('codificador')
  async obtenerCodificador() {
    const { lista, totalRegistros } =
      await this.servicioFactory.uniOrganizacionalServicio.buscar(
        {},
        1,
        0,
        'codigo',
        'ASC',
      );
    return new RespuestaListaDto<CodificadorDto>(
      TipoRespuesta.Exito,
      '',
      lista.map((item) => new CodificadorDto(item.id, item.nombre)),
      new PaginadoDto(totalRegistros, totalRegistros, 1),
    );
  }

  @Post('buscar')
  async buscar(@Body() filtroDto: UniOrganizacionalFiltroDto) {
    const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
    const registrosPorPagina = filtroDto.paginado
      ? Number(filtroDto.paginado.registrosPorPagina)
      : 10;
    const { lista, totalRegistros } =
      await this.servicioFactory.uniOrganizacionalServicio.buscar(
        filtroDto,
        pagina,
        registrosPorPagina,
        'codigo',
        'ASC',
      );
    return new RespuestaListaDto<UniOrganizacionalDto>(
      TipoRespuesta.Exito,
      '',
      lista,
      new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
    );
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    const objetoDto =
      await this.servicioFactory.uniOrganizacionalServicio.obtenerPorId(id);
    return new RespuestaObjetoDto<UniOrganizacionalDto>(
      TipoRespuesta.Exito,
      '',
      objetoDto,
    );
  }

  @Post()
  async guardar(@Body() objetoDto: UniOrganizacionalCreacionDto) {
    return await this.servicioFactory.uniOrganizacionalServicio.guardar(
      objetoDto,
    );
  }

  @Patch(':id')
  async modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: UniOrganizacionalModificacionDto,
  ) {
    return await this.servicioFactory.uniOrganizacionalServicio.modificar(
      id,
      objetoDto,
    );
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.uniOrganizacionalServicio.eliminar(id);
  }

  @Get(':id/puestos/codificador')
  async obtenerPuestosCodificador(@Param('id', ParseIntPipe) id: number) {
    const filtro = new PuestoFiltroDto();
    filtro.uniOrganizacionalId = id;
    const { lista, totalRegistros } =
      await this.servicioFactory.puestoServicio.buscar(
        filtro,
        1,
        0,
        'nivelJerarquico',
        'ASC',
      );
    return new RespuestaListaDto<CodificadorDto>(
      TipoRespuesta.Exito,
      '',
      lista.map((item) => new CodificadorDto(item.id, item.nombre)),
      new PaginadoDto(totalRegistros, totalRegistros, 1),
    );
  }
}
