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
    PagoCptFiltroDto,
  } from '../../../dominio/transferencia/filtros';
  import {
    PagoCptCreacionDto,
    PagoCptDto,
    PagoCptModificacionDto,
  } from '../../../dominio/transferencia';
  
  //@UseGuards(JwtAuthGuard)
  @Controller('pagos')
  export class PagoCptController {
    constructor(
      @Inject(SERVICIO_FACTORY)
      private servicioFactory: IServicioFactory,
    ) {}
  
    @Post('buscar')
    async buscar(@Body() filtroDto: PagoCptFiltroDto) {
      const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
      const registrosPorPagina = filtroDto.paginado
        ? Number(filtroDto.paginado.registrosPorPagina)
        : 10;
      const { lista, totalRegistros } =
        await this.servicioFactory.pagoCptServicio.buscar(
          filtroDto,
          pagina,
          registrosPorPagina,
        );
      return new RespuestaListaDto<PagoCptDto>(
        TipoRespuesta.Exito,
        '',
        lista,
        new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
      );
    }
  
    @Get(':id')
    async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
      const objetoDto = await this.servicioFactory.pagoCptServicio.obtenerPorId(
        id,
      );
      return new RespuestaObjetoDto<PagoCptDto>(
        TipoRespuesta.Exito,
        '',
        objetoDto,
      );
    }
  
    @Post()
    async guardar(@Body() objetoDto: PagoCptCreacionDto) {
      return await this.servicioFactory.pagoCptServicio.guardar(objetoDto);
    }
  
    @Patch(':id')
    async modificar(
      @Param('id', ParseIntPipe) id: number,
      @Body() objetoDto: PagoCptModificacionDto,
    ) {
      return await this.servicioFactory.pagoCptServicio.modificar(
        id,
        objetoDto,
      );
    }
  
    @Delete(':id')
    async eliminar(@Param('id', ParseIntPipe) id: number) {
      return await this.servicioFactory.pagoCptServicio.eliminar(id);
    }
  
  }
  