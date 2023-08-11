import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComunModule } from '../../../../comun';

import { DominioModule } from '../../../dominio';
import { AuditoriaSubscriber } from './orm/base/auditoria.subscriber';

import {
  InformeEntity,
  SujetoIdentificadoEntity,
  TramiteEntity,
  NotificacionEntity,
  ReunionEntity,
  ResolucionEntity,
  PagoCptEntity,
  ViajeEntity,
  DocumentoEntity
} from './orm';
import {
  TRAMITE_REPOSITORIO_PROVIDER,
  INFORME_REPOSITORIO_PROVIDER,
  SUJETO_IDENTIFICADO_REPOSITORIO_PROVIDER,
  NOTIFICACION_REPOSITORIO_PROVIDER,
  REUNION_REPOSITORIO_PROVIDER,
  RESOLUCION_REPOSITORIO_PROVIDER,
  PAGO_CPT_REPOSITORIO_PROVIDER,
  VIAJE_REPOSITORIO_PROVIDER,
  DOCUMENTO_REPOSITORIO_PROVIDER
} from './repositorios';
import {
  PUESTO_REPOSITORIO_PROVIDER,
  UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER,
} from '../cliente/personal';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      TramiteEntity,
      InformeEntity,
      SujetoIdentificadoEntity,
      NotificacionEntity,
      ReunionEntity,
      ResolucionEntity,
      PagoCptEntity,
      ViajeEntity,
      DocumentoEntity
      
    ]),
    ComunModule,
    DominioModule,
  ],
  providers: [
    AuditoriaSubscriber,
    TRAMITE_REPOSITORIO_PROVIDER,
    INFORME_REPOSITORIO_PROVIDER,
    SUJETO_IDENTIFICADO_REPOSITORIO_PROVIDER,
    NOTIFICACION_REPOSITORIO_PROVIDER,
    REUNION_REPOSITORIO_PROVIDER,
    RESOLUCION_REPOSITORIO_PROVIDER,
    PAGO_CPT_REPOSITORIO_PROVIDER,
    VIAJE_REPOSITORIO_PROVIDER,
    DOCUMENTO_REPOSITORIO_PROVIDER,

    PUESTO_REPOSITORIO_PROVIDER,
    UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER,
  ],
})
export class PersistenciaModule {}
