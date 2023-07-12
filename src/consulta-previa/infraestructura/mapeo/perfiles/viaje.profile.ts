import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Viaje } from '../../../dominio/entidades';
import {
  ViajeCreacionDto,
  ViajeDto,
  ViajeModificacionDto,
} from '../../../dominio/transferencia';
import { ViajeEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class ViajeProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Viaje, ViajeDto);
      createMap(mapper, ViajeCreacionDto, Viaje);
      createMap(mapper, ViajeModificacionDto, Viaje);

      createMap(mapper, Viaje, ViajeEntity);
      createMap(
        mapper,
        ViajeEntity,
        Viaje,
      );
    };
  }
}
