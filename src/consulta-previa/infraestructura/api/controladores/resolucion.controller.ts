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
  import {
    ResolucionFiltroDto,
  } from '../../../dominio/transferencia/filtros';
  import {
    ResolucionCreacionDto,
    ResolucionDto,
    ResolucionModificacionDto,
  } from '../../../dominio/transferencia';
  
  //@UseGuards(JwtAuthGuard)
  @Controller('resoluciones')
  export class ResolucionController {
    constructor(
      @Inject(SERVICIO_FACTORY)
      private servicioFactory: IServicioFactory,
    ) {}
  
    @Post('buscar')
    async buscar(@Body() filtroDto: ResolucionFiltroDto) {
      const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
      const registrosPorPagina = filtroDto.paginado
        ? Number(filtroDto.paginado.registrosPorPagina)
        : 10;
      const { lista, totalRegistros } =
        await this.servicioFactory.resolucionServicio.buscar(
          filtroDto,
          pagina,
          registrosPorPagina,
        );
      return new RespuestaListaDto<ResolucionDto>(
        TipoRespuesta.Exito,
        '',
        lista,
        new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
      );
    }
  
    @Get(':id')
    async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
      const objetoDto = await this.servicioFactory.resolucionServicio.obtenerPorId(
        id,
      );
      return new RespuestaObjetoDto<ResolucionDto>(
        TipoRespuesta.Exito,
        '',
        objetoDto,
      );
    }
  
    @Post()
    async guardar(@Body() objetoDto: ResolucionCreacionDto) {
      return await this.servicioFactory.resolucionServicio.guardar(objetoDto);
    }
  
    @Patch(':id')
    async modificar(
      @Param('id', ParseIntPipe) id: number,
      @Body() objetoDto: ResolucionModificacionDto,
    ) {
      return await this.servicioFactory.resolucionServicio.modificar(
        id,
        objetoDto,
      );
    }
  
    @Delete(':id')
    async eliminar(@Param('id', ParseIntPipe) id: number) {
      return await this.servicioFactory.resolucionServicio.eliminar(id);
    }
  
  }
  