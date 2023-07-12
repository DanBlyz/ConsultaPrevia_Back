import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComunModule } from '../../../../comun';

import { DominioModule } from '../../../dominio';
import {
  CuentaEntity,
  GrupoEntity,
  RolCuentaEntity,
  RolEntity,
  UsuarioEntity,
} from './orm';
import { AuditoriaSubscriber } from './orm/base/auditoria.subscriber';
import {
  CUENTA_REPOSITORIO_PROVIDER,
  GRUPO_REPOSITORIO_PROVIDER,
  ROL_CUENTA_REPOSITORIO_PROVIDER,
  ROL_REPOSITORIO_PROVIDER,
  USUARIO_REPOSITORIO_PROVIDER,
} from './repositorios';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CuentaEntity,
      GrupoEntity,
      RolCuentaEntity,
      RolEntity,
      UsuarioEntity,
    ]),
    ComunModule,
    DominioModule,
  ],
  providers: [
    AuditoriaSubscriber,
    CUENTA_REPOSITORIO_PROVIDER,
    GRUPO_REPOSITORIO_PROVIDER,
    ROL_CUENTA_REPOSITORIO_PROVIDER,
    ROL_REPOSITORIO_PROVIDER,
    USUARIO_REPOSITORIO_PROVIDER,
  ],
})
export class PersistenciaModule {}
