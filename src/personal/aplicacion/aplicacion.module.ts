import { forwardRef, Module } from '@nestjs/common';

import { ComunModule } from '../../comun';

import { DominioModule } from '../dominio';
import { InfraestructuraModule } from '../infraestructura';
import {
  SERVICIO_FACTORY_PROVIDER,
  FOTOGRAFIA_SERVICIO_PROVIDER,
  INFO_LABORAL_SERVICIO_PROVIDER,
  PARAMETRO_SERVICIO_PROVIDER,
  PERSONA_SERVICIO_PROVIDER,
  PUESTO_PERSONA_SERVICIO_PROVIDER,
  PUESTO_SERVICIO_PROVIDER,
  UNI_ORGANIZACIONAL_SERVICIO_PROVIDER,
} from './servicios';

@Module({
  imports: [
    ComunModule,
    DominioModule,
    forwardRef(() => InfraestructuraModule),
  ],
  exports: [SERVICIO_FACTORY_PROVIDER],
  providers: [
    FOTOGRAFIA_SERVICIO_PROVIDER,
    INFO_LABORAL_SERVICIO_PROVIDER,
    PARAMETRO_SERVICIO_PROVIDER,
    PERSONA_SERVICIO_PROVIDER,
    PUESTO_SERVICIO_PROVIDER,
    PUESTO_PERSONA_SERVICIO_PROVIDER,
    UNI_ORGANIZACIONAL_SERVICIO_PROVIDER,
    SERVICIO_FACTORY_PROVIDER,
  ],
})
export class AplicacionModule {}
