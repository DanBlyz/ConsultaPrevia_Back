import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import {  Get, Param, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller('files')
export class FilesController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads', // Directorio donde se guardarán los archivos
      filename: (req, file, cb) => {
        cb(null, ("providencia-"+file.originalname));
      },
    }),
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file); // Puedes hacer lo que necesites con el archivo aquí
    console.log(file.destination);
    return { message: 'Archivo subido correctamente' };
  }

  @Get('download/:filename')
  async downloadFile(@Param('filename') filename: string, @Res() res: Response) {
<<<<<<< HEAD
    const path = join(__dirname, '..', 'uploads', filename);
=======
    const path = join('..', 'ConsultaPrevia_Back/uploads', filename);
>>>>>>> 59e45bad2e953fc0131b406fcc7367326f7168df
    return res.download(path);
  }
}