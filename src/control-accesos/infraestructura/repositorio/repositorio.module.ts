import { Module } from '@nestjs/common';

import { ComunModule } from '../../../comun';

import { DominioModule } from '../../dominio';
import { PersistenciaModule } from './persistencia';
import { REPOSITORIO_FACTORY_PROVIDER } from '.';

@Module({
  imports: [ComunModule, DominioModule, PersistenciaModule],
  exports: [REPOSITORIO_FACTORY_PROVIDER],
  providers: [REPOSITORIO_FACTORY_PROVIDER],
})
export class RepositorioModule {}
