import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ComunModule } from '../../../comun';

import { DominioModule } from '../../dominio';
import { ClienteModule } from './cliente';
import { PersistenciaModule } from './persistencia';
import { REPOSITORIO_FACTORY_PROVIDER } from '.';

@Module({
  imports: [
    HttpModule,
    ComunModule,
    DominioModule,
    PersistenciaModule,
    ClienteModule,
  ],
  exports: [REPOSITORIO_FACTORY_PROVIDER],
  providers: [REPOSITORIO_FACTORY_PROVIDER],
})
export class RepositorioModule {}
