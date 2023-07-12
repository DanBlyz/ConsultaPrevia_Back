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
    NotificacionFiltroDto,
  } from '../../../dominio/transferencia/filtros';
  import {
    NotificacionCreacionDto,
    NotificacionDto,
    NotificacionModificacionDto,
  } from '../../../dominio/transferencia';
  
  //@UseGuards(JwtAuthGuard)
  @Controller('notificaciones')
  export class NotificacionController {
    constructor(
      @Inject(SERVICIO_FACTORY)
      private servicioFactory: IServicioFactory,
    ) {}
  
    @Post('buscar')
    async buscar(@Body() filtroDto: NotificacionFiltroDto) {
      const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
      const registrosPorPagina = filtroDto.paginado
        ? Number(filtroDto.paginado.registrosPorPagina)
        : 10;
      const { lista, totalRegistros } =
        await this.servicioFactory.notificacionServicio.buscar(
          filtroDto,
          pagina,
          registrosPorPagina,
        );
      return new RespuestaListaDto<NotificacionDto>(
        TipoRespuesta.Exito,
        '',
        lista,
        new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
      );
    }
  
    @Get(':id')
    async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
      const objetoDto = await this.servicioFactory.notificacionServicio.obtenerPorId(
        id,
      );
      return new RespuestaObjetoDto<NotificacionDto>(
        TipoRespuesta.Exito,
        '',
        objetoDto,
      );
    }
  
    @Post()
    async guardar(@Body() objetoDto: NotificacionCreacionDto) {
      return await this.servicioFactory.notificacionServicio.guardar(objetoDto);
    }
  
    @Patch(':id')
    async modificar(
      @Param('id', ParseIntPipe) id: number,
      @Body() objetoDto: NotificacionModificacionDto,
    ) {
      return await this.servicioFactory.notificacionServicio.modificar(
        id,
        objetoDto,
      );
    }
  
    @Delete(':id')
    async eliminar(@Param('id', ParseIntPipe) id: number) {
      return await this.servicioFactory.notificacionServicio.eliminar(id);
    }
  
  }
  