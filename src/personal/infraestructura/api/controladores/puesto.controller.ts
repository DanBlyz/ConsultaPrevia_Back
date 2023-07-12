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
import { PuestoFiltroDto } from '../../../dominio/transferencia/filtros';
import {
  PuestoCreacionDto,
  PuestoDto,
  PuestoModificacionDto,
} from '../../../dominio/transferencia';

@UseGuards(JwtAuthGuard)
@Controller('puestos')
export class PuestoController {
  constructor(
    @Inject(SERVICIO_FACTORY)
    private servicioFactory: IServicioFactory,
  ) {}

  @Post('buscar')
  async buscar(@Body() filtroDto: PuestoFiltroDto) {
    const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
    const registrosPorPagina = filtroDto.paginado
      ? Number(filtroDto.paginado.registrosPorPagina)
      : 10;
    const ordenadoPor = filtroDto.paginado.ordenadoPor;
    const orden = filtroDto.paginado.orden;
    const { lista, totalRegistros } =
      await this.servicioFactory.puestoServicio.buscar(
        filtroDto,
        pagina,
        registrosPorPagina,
        ordenadoPor,
        orden,
      );
    return new RespuestaListaDto<PuestoDto>(
      TipoRespuesta.Exito,
      '',
      lista,
      new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
    );
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    const objetoDto = await this.servicioFactory.puestoServicio.obtenerPorId(
      id,
    );
    return new RespuestaObjetoDto<PuestoDto>(
      TipoRespuesta.Exito,
      '',
      objetoDto,
    );
  }

  @Post()
  async guardar(@Body() objetoDto: PuestoCreacionDto) {
    return await this.servicioFactory.puestoServicio.guardar(objetoDto);
  }

  @Patch(':id')
  async modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: PuestoModificacionDto,
  ) {
    return await this.servicioFactory.puestoServicio.modificar(id, objetoDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.puestoServicio.eliminar(id);
  }
}
