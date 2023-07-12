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
import { ParametroFiltroDto } from '../../../dominio/transferencia/filtros';
import {
  ParametroCreacionDto,
  ParametroDto,
  ParametroModificacionDto,
} from '../../../dominio/transferencia';

@UseGuards(JwtAuthGuard)
@Controller('parametros')
export class ParametroController {
  constructor(
    @Inject(SERVICIO_FACTORY)
    private servicioFactory: IServicioFactory,
  ) {}

  @Get('codificador/:tipo')
  async obtenerCodificador(@Param('tipo') tipo: string) {
    const filtro = new ParametroFiltroDto();
    filtro.tipo = tipo.replace('-', ' ').toUpperCase();
    const { lista, totalRegistros } =
      await this.servicioFactory.parametroServicio.buscar(
        filtro,
        1,
        0,
        'orden',
        'ASC',
      );
    return new RespuestaListaDto<CodificadorDto>(
      TipoRespuesta.Exito,
      '',
      lista.map((item) => new CodificadorDto(item.valor, item.texto)),
      new PaginadoDto(totalRegistros, totalRegistros, 1),
    );
  }

  @Post('buscar')
  async buscar(@Body() filtroDto: ParametroFiltroDto) {
    const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
    const registrosPorPagina = filtroDto.paginado
      ? Number(filtroDto.paginado.registrosPorPagina)
      : 10;
    const { lista, totalRegistros } =
      await this.servicioFactory.parametroServicio.buscar(
        filtroDto,
        pagina,
        registrosPorPagina,
      );
    return new RespuestaListaDto<ParametroDto>(
      TipoRespuesta.Exito,
      '',
      lista,
      new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
    );
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    const objetoDto = await this.servicioFactory.parametroServicio.obtenerPorId(
      id,
    );
    return new RespuestaObjetoDto<ParametroDto>(
      TipoRespuesta.Exito,
      '',
      objetoDto,
    );
  }

  @Post()
  async guardar(@Body() objetoDto: ParametroCreacionDto) {
    return await this.servicioFactory.parametroServicio.guardar(objetoDto);
  }

  @Patch(':id')
  async modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: ParametroModificacionDto,
  ) {
    return await this.servicioFactory.parametroServicio.modificar(
      id,
      objetoDto,
    );
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.parametroServicio.eliminar(id);
  }
}
