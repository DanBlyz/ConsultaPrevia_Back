import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { ComunModule } from '../../comun';

import { DominioModule } from '../dominio';
import { InfraestructuraModule } from '../infraestructura';
import {
  SERVICIO_FACTORY_PROVIDER,
  CUENTA_SERVICIO_PROVIDER,
  GRUPO_SERVICIO_PROVIDER,
  LDAP_SERVICIO_PROVIDER,
  ROL_CUENTA_SERVICIO_PROVIDER,
  ROL_SERVICIO_PROVIDER,
  USUARIO_SERVICIO_PROVIDER,
} from './servicios';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_CLAVE'),
        signOptions: {
          algorithm: configService.get('JWT_ALGORITMO'),
          expiresIn: configService.get('JWT_EXPIRACION'),
          subject: configService.get('JWT_EMISOR'),
          issuer: configService.get('JWT_PROVEEDOR'),
          audience: configService.get('JWT_AUDIENCIA'),
        },
      }),
      inject: [ConfigService],
    }),
    ComunModule,
    DominioModule,
    forwardRef(() => InfraestructuraModule),
  ],
  exports: [SERVICIO_FACTORY_PROVIDER],
  providers: [
    CUENTA_SERVICIO_PROVIDER,
    GRUPO_SERVICIO_PROVIDER,
    LDAP_SERVICIO_PROVIDER,
    ROL_CUENTA_SERVICIO_PROVIDER,
    ROL_SERVICIO_PROVIDER,
    USUARIO_SERVICIO_PROVIDER,
    SERVICIO_FACTORY_PROVIDER,
  ],
})
export class AplicacionModule {}
