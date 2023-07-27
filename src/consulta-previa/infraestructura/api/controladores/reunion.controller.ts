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
    ReunionFiltroDto,
  } from '../../../dominio/transferencia/filtros';
  import {
    ReunionCreacionDto,
    ReunionDto,
    ReunionModificacionDto,
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
  @Controller('reuniones')
  export class ReunionController {
    constructor(
      @Inject(SERVICIO_FACTORY)
      private servicioFactory: IServicioFactory,
    ) {}
  
    @Post('buscar')
    async buscar(@Body() filtroDto: ReunionFiltroDto) {
      const pagina = filtroDto.paginado ? Number(filtroDto.paginado.pagina) : 1;
      const registrosPorPagina = filtroDto.paginado
        ? Number(filtroDto.paginado.registrosPorPagina)
        : 10;
      const { lista, totalRegistros } =
        await this.servicioFactory.reunionServicio.buscar(
          filtroDto,
          pagina,
          registrosPorPagina,
        );
      return new RespuestaListaDto<ReunionDto>(
        TipoRespuesta.Exito,
        '',
        lista,
        new PaginadoDto(totalRegistros, registrosPorPagina, pagina),
      );
    }
  
    @Get(':id')
    async obtenerPorId(@Param('id', ParseIntPipe) id: number) {
      const objetoDto = await this.servicioFactory.reunionServicio.obtenerPorId(
        id,
      );
      return new RespuestaObjetoDto<ReunionDto>(
        TipoRespuesta.Exito,
        '',
        objetoDto,
      );
    }
  
    @Post()
    async guardar(@Body() objetoDto: ReunionCreacionDto) {
      return await this.servicioFactory.reunionServicio.guardar(objetoDto);
    }
  
    @Patch(':id')
    async modificar(
      @Param('id', ParseIntPipe) id: number,
      @Body() objetoDto: ReunionModificacionDto,
    ) {
      return await this.servicioFactory.reunionServicio.modificar(
        id,
        objetoDto,
      );
    }
  
    @Delete(':id')
    async eliminar(@Param('id', ParseIntPipe) id: number) {
      return await this.servicioFactory.reunionServicio.eliminar(id);
    }

    @Post('subir-archivo')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './consulta-previa/reunion', // Directorio donde se guardarán los archivos
        filename: (req, file, cb) => {
<<<<<<< HEAD
          
          cb(null, ("reunion-"+file.originalname));
=======
          cb(null, (file.originalname));
>>>>>>> yery
        },
      }),
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file); // Puedes hacer lo que necesites con el archivo aquí
      console.log(file.destination);
      return { message: 'Archivo subido correctamente' };
    }
<<<<<<< HEAD
    
=======

>>>>>>> yery
    @Get('bajar-archivo/:filename')
    async downloadFile(@Param('filename') filename: string, @Res() res: Response) {
      const path = join('..', 'ConsultaPrevia_Back/consulta-previa/reunion', filename);
      return res.download(path);
    }
  
  }
  