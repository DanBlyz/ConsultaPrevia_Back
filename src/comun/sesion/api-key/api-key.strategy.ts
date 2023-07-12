import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-headerapikey';
import { Identidad } from '../../sesion/identidad';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
  constructor(private configService: ConfigService) {
    super(
      { header: 'Authorization', prefix: 'Api-Key ' },
      true,
      async (apiKey, done) => {
        if (
          this.configService.get('API_KEY_APLICACION') &&
          this.configService.get('API_KEY')
        ) {
          const listaApiKeyAplicacion = this.configService
            .get('API_KEY_APLICACION')
            .split('|');
          const listaApiKey = this.configService.get('API_KEY').split('|');
          if (listaApiKey.indexOf(apiKey) >= 0) {
            const identidad = Identidad.getInstance();
            identidad.usuarioId = 0;
            identidad.cuenta =
              listaApiKeyAplicacion[listaApiKey.indexOf(apiKey)] || 'ANONIMO';
            identidad.roles = null;
            done(null, true);
          }
        }
        done(new UnauthorizedException(), null);
      },
    );
  }
}
