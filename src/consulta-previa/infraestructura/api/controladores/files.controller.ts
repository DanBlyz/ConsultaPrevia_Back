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
        const randomName = +Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        cb(null, `${randomName}${extname(file.originalname)}`);
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
    const path = join(__dirname, '..', 'uploads', filename);
    return res.download(path);
  }
}