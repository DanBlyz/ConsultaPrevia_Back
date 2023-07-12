import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { DominioModule } from '../../../dominio';
import {
  PERSONA_REPOSITORIO_PROVIDER,
  PUESTO_REPOSITORIO_PROVIDER,
  UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER,
} from './personal';

@Module({
  imports: [HttpModule, DominioModule],
  providers: [
    PERSONA_REPOSITORIO_PROVIDER,
    PUESTO_REPOSITORIO_PROVIDER,
    UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER,
  ],
})
export class ClienteModule {}
