import { RouterModule } from '@nestjs/core';
import { forwardRef, Module } from '@nestjs/common';

import { ComunModule } from '../../../comun';

import { DominioModule } from '../../dominio';
import { AplicacionModule } from '../../aplicacion';
import { JwtStrategy } from '../../../comun/sesion/jwt';
import {
  ApiController,
  ParametroController,
  PersonaController,
  PuestoController,
  UniOrganizacionalController,
} from './controladores';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'personal',
        module: ApiModule,
      },
    ]),
    ComunModule,
    DominioModule,
    forwardRef(() => AplicacionModule),
  ],
  providers: [JwtStrategy],
  controllers: [
    ApiController,
    ParametroController,
    UniOrganizacionalController,
    PuestoController,
    PersonaController,
  ],
})
export class ApiModule {}
