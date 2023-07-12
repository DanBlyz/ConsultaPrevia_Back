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
    InformeFiltroDto,
  } from '../../../dominio/transferencia/filtros';
  import {
    InformeCreacionDto,
    InformeDto,
    InformeModificacionDto,
  } from '../../../dominio/transferencia';
  
  //@UseGuards(JwtAuthGuard)
  @Controller('informes')
  export class InformeController {
    constructor(
      @Inject(SERVICIO_FACTORY)
      private servicioFactory: IServicioFactory,
    ) {}
  
    @Post('buscar')
    async buscar(@Body() filtroDto: InformeFiltroDto) {
      const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
      const registrosPorPagina = filtroDto.paginado
        ? Number(filtroDto.paginado.registrosPorPagina)
        : 10;
      const { lista, totalRegistros } =
        await this.servicioFactory.informeServicio.buscar(
          filtroDto,
          pagina,
          registrosPorPagina,
        );
      return new RespuestaListaDto<InformeDto>(
        TipoRespuesta.Exito,
        '',
        lista,
        new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
      );
    }
  
    @Get(':id')
    async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
      const objetoDto = await this.servicioFactory.informeServicio.obtenerPorId(
        id,
      );
      return new RespuestaObjetoDto<InformeDto>(
        TipoRespuesta.Exito,
        '',
        objetoDto,
      );
    }
  
    @Post()
    async guardar(@Body() objetoDto: InformeCreacionDto) {
      return await this.servicioFactory.informeServicio.guardar(objetoDto);
    }
  
    @Patch(':id')
    async modificar(
      @Param('id', ParseIntPipe) id: number,
      @Body() objetoDto: InformeModificacionDto,
    ) {
      return await this.servicioFactory.informeServicio.modificar(
        id,
        objetoDto,
      );
    }
  
    @Delete(':id')
    async eliminar(@Param('id', ParseIntPipe) id: number) {
      return await this.servicioFactory.informeServicio.eliminar(id);
    }
  
  }
  