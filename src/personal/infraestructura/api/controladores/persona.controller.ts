import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';

import { FuncionesHelper } from '../../../../comun/auxiliares';
import {
  PaginadoDto,
  RespuestaListaDto,
  RespuestaObjetoDto,
  TipoRespuesta,
} from '../../../../comun/transferencia';
import { JwtAuthGuard } from '../../../../comun/sesion/jwt';
import { Public } from '../../../../comun/sesion';

import {
  IServicioFactory,
  SERVICIO_FACTORY,
} from '../../../dominio/contratos/aplicacion';
import {
  FotografiaCreacionDto,
  InfoLaboralModificacionDto,
  PersonaCreacionDto,
  PersonaDto,
  PersonaModificacionDto,
  PuestoPersonaCreacionDto,
  PuestoPersonaDto,
  PuestoPersonaModificacionDto,
} from '../../../dominio/transferencia';
import {
  PersonaFiltroDto,
  PuestoPersonaFiltroDto,
} from '../../../dominio/transferencia/filtros';

@UseGuards(JwtAuthGuard)
@Controller('personas')
export class PersonaController {
  constructor(
    @Inject(SERVICIO_FACTORY)
    private servicioFactory: IServicioFactory,
  ) {}

  @Post('directorio')
  async directorio(@Body() filtro: Partial<PersonaFiltroDto>) {
    const pagina = filtro.paginado ? Number(filtro.paginado.pagina) : 1;
    const registrosPorPagina = filtro.paginado
      ? Number(filtro.paginado.registrosPorPagina)
      : 10;
    filtro.estadoLaboral = 'ACTIVO';
    const { lista, totalRegistros } =
      await this.servicioFactory.personaServicio.buscar(
        filtro,
        pagina,
        registrosPorPagina,
      );
    return new RespuestaListaDto<PersonaDto>(
      TipoRespuesta.Exito,
      '',
      lista,
      new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
    );
  }

  @Post('buscar')
  async buscar(@Body() filtroDto: PersonaFiltroDto) {
    const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
    const registrosPorPagina = filtroDto.paginado
      ? Number(filtroDto.paginado.registrosPorPagina)
      : 10;
    const { lista, totalRegistros } =
      await this.servicioFactory.personaServicio.buscar(
        filtroDto,
        pagina,
        registrosPorPagina,
      );
    return new RespuestaListaDto<PersonaDto>(
      TipoRespuesta.Exito,
      '',
      lista,
      new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
    );
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    const objetoDto = await this.servicioFactory.personaServicio.obtenerPorId(
      id,
    );
    return new RespuestaObjetoDto<PersonaDto>(
      TipoRespuesta.Exito,
      '',
      objetoDto,
    );
  }

  @Post()
  async guardar(@Body() objetoDto: PersonaCreacionDto) {
    return await this.servicioFactory.personaServicio.guardar(objetoDto);
  }

  @Patch(':id')
  async modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: PersonaModificacionDto,
  ) {
    return await this.servicioFactory.personaServicio.modificar(id, objetoDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.personaServicio.eliminar(id);
  }

  // Fotografias
  @Public()
  @Get('-/fotografias/:personaCodigo')
  async obtenerFotografiaPorCodigo(
    @Param('personaCodigo') personaCodigo: string,
    @Res() response,
  ) {
    const objetoDto =
      await this.servicioFactory.fotografiaServicio.obtenerPorCodigo(
        personaCodigo,
      );
    if (objetoDto) {
      const stream = FuncionesHelper.obtenerStream(objetoDto.archivo);
      return stream.pipe(response);
    } else {
      throw new NotFoundException('Recurso no encontrado');
    }
  }

  @Post(':personaId/fotografias')
  async guardarFotografia(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Body() objetoDto: FotografiaCreacionDto,
  ) {
    objetoDto.id = personaId;
    return await this.servicioFactory.fotografiaServicio.guardar(objetoDto);
  }

  @Delete(':personaId/fotografias/:id')
  async eliminarFotografia(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.servicioFactory.fotografiaServicio.eliminar(id);
  }

  // InfoLaboral
  @Patch(':personaId/info-laboral')
  async modificarInfoLaboral(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Body() objetoDto: InfoLaboralModificacionDto,
  ) {
    return await this.servicioFactory.infoLaboralServicio.modificar(
      personaId,
      objetoDto,
    );
  }

  // Puestos por persona
  @Get(':personaId/puestos/')
  async obtenerPuestoPersonaPorPersonaId(
    @Param('personaId', ParseIntPipe) personaId: number,
  ) {
    const filtro = new PuestoPersonaFiltroDto();
    filtro.personaId = personaId;
    const { lista, totalRegistros } =
      await this.servicioFactory.puestoPersonaServicio.buscar(filtro, 1, 0);
    return new RespuestaListaDto<PuestoPersonaDto>(
      TipoRespuesta.Exito,
      '',
      lista,
      new PaginadoDto(totalRegistros, totalRegistros, 1),
    );
  }

  @Get(':personaId/puestos/:id')
  async obtenerPuestoPersonaPorId(@Param('id', ParseIntPipe) id: number) {
    const objetoDto =
      await this.servicioFactory.puestoPersonaServicio.obtenerPorId(id);
    return new RespuestaObjetoDto<PuestoPersonaDto>(
      TipoRespuesta.Exito,
      '',
      objetoDto,
    );
  }

  /*@Post(':personaId/puestos')
  async guardarPuestoPersona(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Body() objeto: PuestoPersona,
  ) {
    objeto.personaId = personaId;
    const respuesta = await this.servicioFactory.puestoPersonaServicio.guardar(
      objeto,
    );
    return respuesta;
  }*/

  @Patch(':personaId/puestos/:id')
  async modificarPuestoPersona(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: PuestoPersonaModificacionDto,
  ) {
    return await this.servicioFactory.puestoPersonaServicio.modificar(
      id,
      objetoDto,
    );
  }

  @Post(':personaId/puestos/incorporar')
  async guardarIncorporacion(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Body() objetoDto: PuestoPersonaCreacionDto,
  ) {
    objetoDto.personaId = personaId;
    return await this.servicioFactory.puestoPersonaServicio.guardarIncorporacion(
      objetoDto,
    );
  }

  @Post(':personaId/puestos/reasignar')
  async guardarReasignacion(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Body() objetoDto: PuestoPersonaCreacionDto,
  ) {
    objetoDto.personaId = personaId;
    return await this.servicioFactory.puestoPersonaServicio.guardarReasignacion(
      objetoDto,
    );
  }

  @Patch(':personaId/puestos/:id/desvincular')
  async registrarDesvinculacion(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: any,
  ) {
    return await this.servicioFactory.puestoPersonaServicio.registrarDesvinculacion(
      id,
      objetoDto.fecConclusion,
    );
  }

  @Patch(':personaId/puestos/:id/dar-baja')
  async darBaja(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.servicioFactory.puestoPersonaServicio.darBaja(id);
  }

  @Patch(':personaId/puestos/:id/anular')
  async anularMovilidad(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.servicioFactory.puestoPersonaServicio.anular(id);
  }

  @Post(':personaId/puestos/interinato')
  async guardarInterinato(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Body() objetoDto: PuestoPersonaCreacionDto,
  ) {
    objetoDto.personaId = personaId;
    return await this.servicioFactory.puestoPersonaServicio.guardarInterinato(
      objetoDto,
    );
  }

  @Patch(':prsonaId/puestos/:id/interinato')
  async modificarInterinato(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: PuestoPersonaModificacionDto,
  ) {
    return await this.servicioFactory.puestoPersonaServicio.modificarInterinato(
      id,
      objetoDto,
    );
  }

  @Delete(':personaId/puestos/:id/interinato')
  async eliminarInterinato(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.servicioFactory.puestoPersonaServicio.eliminarInterinato(
      id,
    );
  }

  @Patch(':personaId/puestos/:id/interinato/dar-baja')
  async darBajaInterinato(
    @Param('personaId', ParseIntPipe) personaId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.servicioFactory.puestoPersonaServicio.darBajaInterinato(
      id,
    );
  }
}
