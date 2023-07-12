import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

import { ControlAccesosModule } from './control-accesos';
import { PersonalModule } from './personal';
import { ConsultaPreviaModule } from './consulta-previa';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    ControlAccesosModule,
    PersonalModule,
    ConsultaPreviaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
