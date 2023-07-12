import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Resolucion } from '../../../dominio/entidades';
import {
  ResolucionCreacionDto,
  ResolucionDto,
  ResolucionModificacionDto,
} from '../../../dominio/transferencia';
import { ResolucionEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class ResolucionProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Resolucion, ResolucionDto);
      createMap(mapper, ResolucionCreacionDto, Resolucion);
      createMap(mapper, ResolucionModificacionDto, Resolucion);

      createMap(mapper, Resolucion, ResolucionEntity);
      createMap(
        mapper,
        ResolucionEntity,
        Resolucion,
      );
    };
  }
}
