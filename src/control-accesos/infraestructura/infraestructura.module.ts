import { Module } from '@nestjs/common';

import { ComunModule } from '../../comun';

import { DominioModule } from '../dominio';
import { ApiModule } from './api';
import { MapeoModule } from './mapeo';
import { RepositorioModule } from './repositorio';

@Module({
  imports: [
    ComunModule,
    DominioModule,
    ApiModule,
    RepositorioModule,
    MapeoModule,
  ],
  exports: [RepositorioModule],
})
export class InfraestructuraModule {}
