import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DominioModule } from './dominio';
import { InfraestructuraModule } from './infraestructura';
import { AplicacionModule } from './aplicacion';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    DominioModule,
    InfraestructuraModule,
    AplicacionModule,
  ],
  providers: [],
})
export class ControlAccesosModule {}
