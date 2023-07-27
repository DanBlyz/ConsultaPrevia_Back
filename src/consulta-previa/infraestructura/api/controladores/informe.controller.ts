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
  import { UploadedFile, UseInterceptors } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  
  import { Res } from '@nestjs/common';
  import { join } from 'path';
  import { Response } from 'express';
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
    async guardar(@Body() objetoDto: InformeCreacionDto | any) {
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

    @Post('subir-archivo')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './consulta-previa/informe', // Directorio donde se guardarán los archivos
        filename: (req, file, cb) => {
          
          cb(null, ("informe-"+file.originalname));
        },
      }),
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file); // Puedes hacer lo que necesites con el archivo aquí
      console.log(file.destination);
      return { message: 'Archivo subido correctamente' };
    }
    
    @Get('bajar-archivo/:filename')
    async downloadFile(@Param('filename') filename: string, @Res() res: Response) {
      const path = join('..', 'ConsultaPrevia_Back/consulta-previa/informe', filename);
      return res.download(path);
    }
  
  }
  