import { RouterModule } from '@nestjs/core';
import { forwardRef, Module } from '@nestjs/common';

import { ComunModule } from '../../../comun';

import { DominioModule } from '../../dominio';
import { AplicacionModule } from '../../aplicacion';
import { JwtStrategy } from '../../../comun/sesion/jwt';
import {
  ApiController,
  TramiteController,
  InformeController,
  SujetoIdentificadoController,
  NotificacionController,
  ReunionController,
  ResolucionController,
  ActoAdministrativoController,
  PagoCptController,
  ViajeController,
  ProvidenciaController,
  FilesController
} from './controladores';

@Module({
  imports: [
    RouterModule.register([
      {
        path: '',
        module: ApiModule,
      },
    ]),
    ComunModule,
    DominioModule,
    forwardRef(() => AplicacionModule)
  ],
  providers: [JwtStrategy],
  controllers: [
    ApiController,
    TramiteController,
    InformeController,
    SujetoIdentificadoController,
    NotificacionController,
    ReunionController,
    ResolucionController,
    ActoAdministrativoController,
    PagoCptController,
    ViajeController,
    ProvidenciaController,
    FilesController
  ],
})
export class ApiModule {}
