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
<<<<<<< HEAD
  import { UploadedFile, UseInterceptors } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  
  import { Res } from '@nestjs/common';
  import { join } from 'path';
  import { Response } from 'express';
  
=======
  import { Res, UploadedFile, UseInterceptors } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  import { join } from 'path';
  import { Response } from 'express';
>>>>>>> yery
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
    @Post('subir-archivo')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './consulta-previa/notificacion', // Directorio donde se guardarán los archivos
        filename: (req, file, cb) => {
          cb(null, ("notificacion-"+file.originalname));
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
      const path = join('..', 'ConsultaPrevia_Back/consulta-previa/notificacion', filename);
      return res.download(path);
    }
  
    
    @Post('subir-archivo')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './consulta-previa/notificacion', // Directorio donde se guardarán los archivos
        filename: (req, file, cb) => {
          
          cb(null, ("notificacion-"+file.originalname));
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
      const path = join('..', 'ConsultaPrevia_Back/consulta-previa/notificacion', filename);
      return res.download(path);
    }

  }
  