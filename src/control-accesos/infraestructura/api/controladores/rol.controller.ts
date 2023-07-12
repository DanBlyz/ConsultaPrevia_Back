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
  RolCreacionDto,
  RolDto,
  RolModificacionDto,
} from '../../../dominio/transferencia';

//@UseGuards(JwtAuthGuard)
@Controller('roles')
export class RolController {
  constructor(
    @Inject(SERVICIO_FACTORY)
    private servicioFactory: IServicioFactory,
  ) {}

  @Get('codificador')
  async obtenerCodificador() {
    const listaDto = await this.servicioFactory.rolServicio.obtenerTodo();
    return new RespuestaListaDto<CodificadorDto>(
      TipoRespuesta.Exito,
      '',
      listaDto.map((objeto) => {
        return {
          id: objeto.id,
          nombre: objeto.grupoCodigo + ' - ' + objeto.nombre,
        } as CodificadorDto;
      }),
      new PaginadoDto(listaDto.length, listaDto.length, 1),
    );
  }

  @Get(':id')
  async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    const objetoDto = await this.servicioFactory.rolServicio.obtenerPorId(id);
    return new RespuestaObjetoDto<RolDto>(TipoRespuesta.Exito, '', objetoDto);
  }

  @Post()
  async guardar(@Body() objetoDto: RolCreacionDto) {
    return await this.servicioFactory.rolServicio.guardar(objetoDto);
  }

  @Patch(':id')
  async modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() objetoDto: RolModificacionDto,
  ) {
    return await this.servicioFactory.rolServicio.modificar(id, objetoDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return await this.servicioFactory.rolServicio.eliminar(id);
  }
}
