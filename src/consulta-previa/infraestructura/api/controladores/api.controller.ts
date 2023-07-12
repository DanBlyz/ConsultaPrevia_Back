import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class ApiController {
  constructor(private configService: ConfigService) {}

  @Get('version')
  async obtenerVersion(): Promise<any> {
    const version = this.configService.get('npm_package_version');
    return 'API CORRESPONDENCIA - Versión: ' + version;
  }
}
