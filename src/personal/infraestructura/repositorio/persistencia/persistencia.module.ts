import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComunModule } from '../../../../comun';

import { DominioModule } from '../../../dominio';
import {
  FotografiaEntity,
  InfoLaboralEntity,
  ParametroEntity,
  PersonaEntity,
  PuestoEntity,
  PuestoPersonaEntity,
  UniOrganizacionalEntity,
} from './orm';
import { AuditoriaSubscriber } from './orm/base/auditoria.subscriber';
import {
  INFO_LABORAL_REPOSITORIO_PROVIDER,
  PARAMETRO_REPOSITORIO_PROVIDER,
  PERSONA_REPOSITORIO_PROVIDER,
  PUESTO_PERSONA_REPOSITORIO_PROVIDER,
  PUESTO_REPOSITORIO_PROVIDER,
  UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER,
} from './repositorios';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FotografiaEntity,
      InfoLaboralEntity,
      ParametroEntity,
      PersonaEntity,
      PuestoPersonaEntity,
      PuestoEntity,
      UniOrganizacionalEntity,
    ]),
    ComunModule,
    DominioModule,
  ],
  providers: [
    AuditoriaSubscriber,
    INFO_LABORAL_REPOSITORIO_PROVIDER,
    PARAMETRO_REPOSITORIO_PROVIDER,
    PERSONA_REPOSITORIO_PROVIDER,
    PUESTO_REPOSITORIO_PROVIDER,
    PUESTO_PERSONA_REPOSITORIO_PROVIDER,
    UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER,
  ],
})
export class PersistenciaModule {}
