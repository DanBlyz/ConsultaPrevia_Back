import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class ApiController {
  constructor(private configService: ConfigService) {}

  @Get('version')
  async obtenerVersion(): Promise<any> {
    // TODO: cargar información de archivo package del propio módulo
    const version = this.configService.get('npm_package_version');
    return 'API PERSONAL - Versión: ' + version + '(*)';
  }
}
