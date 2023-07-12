import { forwardRef, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { ComunModule } from '../../../comun';

import { DominioModule } from '../../dominio';
import { AplicacionModule } from '../../aplicacion';
import { ApiKeyStrategy } from '../../../comun/sesion/api-key';
import { JwtStrategy } from '../../../comun/sesion/jwt';
import {
  ApiController,
  AutenticacionController,
  CuentaController,
  GrupoController,
  LdapController,
  RolController,
  UsuarioController,
} from './controladores';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'control-accesos',
        module: ApiModule,
      },
    ]),
    ComunModule,
    DominioModule,
    forwardRef(() => AplicacionModule),
  ],
  providers: [JwtStrategy, ApiKeyStrategy],
  controllers: [
    ApiController,
    AutenticacionController,
    CuentaController,
    GrupoController,
    LdapController,
    RolController,
    UsuarioController,
  ],
})
export class ApiModule {}
